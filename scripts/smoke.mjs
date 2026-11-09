// Smoke test całej strony: node scripts/smoke.mjs [baseUrl] [outDir]
// Sprawdza każdą stronę z dist/ na desktopie (1440) i mobile (390):
// status HTTP, title/description/H1, błędy JS, nieudane żądania, zepsute obrazy,
// poziomy scroll, zakazane frazy, linki wewnętrzne, menu mobilne, cookie bar, rotator.
import { chromium } from 'playwright';
import { readdirSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BASE = (process.argv[2] || 'http://127.0.0.1:4321').replace(/\/$/, '');
const OUT = process.argv[3] || '';
if (OUT) mkdirSync(OUT, { recursive: true });

function pages(dir, prefix = '/') {
  const res = [];
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) res.push(...pages(p, prefix + f + '/'));
    else if (f === 'index.html') res.push(prefix);
  }
  return res;
}
const URLS = pages('dist').sort();

const FORBIDDEN = [
  [/lorem ipsum/i, 'Lorem ipsum'],
  [/\s[—–-]\s|—/, 'myślnik jako ozdobnik (— / – / - ze spacjami)'],
  [/e-Commerce|e‑Commerce|\be-commerce\b/, 'e-Commerce zamiast eCommerce'],
  [/\bStarter\b/, 'Starter zamiast Start'],
  [/\bAplio\b/, 'Aplio zamiast Apilo'],
  [/\bundefined\b|\bNaN\b|\[object Object\]/, 'artefakt JS'],
  [/NEED:/, 'widoczny znacznik NEED'],
  [/TODO|FIXME/, 'TODO/FIXME'],
  [/żaden inny system/i, 'niepoparte twierdzenie'],
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844, isMobile: true, hasTouch: true },
];

const problems = [];
const add = (url, vp, msg) => problems.push(`${vp.padEnd(7)} ${url}  ${msg}`);
const links = new Set();
const titles = new Map();
const descs = new Map();

const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: vp.isMobile, hasTouch: vp.hasTouch });
  for (const url of URLS) {
    const page = await ctx.newPage();
    const errs = [];
    page.on('pageerror', (e) => errs.push('JS: ' + e.message));
    page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text().slice(0, 160)); });
    page.on('response', (r) => {
      if (r.status() >= 400 && r.url().startsWith(BASE)) errs.push(`HTTP ${r.status()} ${r.url().replace(BASE, '')}`);
    });
    page.on('requestfailed', (r) => {
      if (r.url().startsWith(BASE)) errs.push(`request failed ${r.url().replace(BASE, '')}`);
    });
    let resp;
    try {
      resp = await page.goto(BASE + url, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      add(url, vp.name, 'timeout/load error: ' + e.message.split('\n')[0]);
      await page.close();
      continue;
    }
    if (!resp || resp.status() !== 200) add(url, vp.name, `status ${resp?.status()}`);

    // Przewiń całą stronę, żeby załadować lazy obrazy i odpalić observery.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);

    const info = await page.evaluate(() => {
      const meta = document.querySelector('meta[name="description"]')?.content || '';
      const h1 = [...document.querySelectorAll('h1')].filter((h) => h.offsetParent !== null || getComputedStyle(h).position === 'fixed');
      const broken = [...document.images]
        .filter((i) => i.complete && i.naturalWidth === 0 && i.getAttribute('src') && !i.src.startsWith('data:'))
        .map((i) => i.getAttribute('src'));
      const noAlt = [...document.images].filter((i) => !i.hasAttribute('alt')).length;
      const vw = document.documentElement.clientWidth;
      const overflow = [];
      if (document.documentElement.scrollWidth > vw + 1) {
        for (const el of document.querySelectorAll('body *')) {
          const r = el.getBoundingClientRect();
          if (r.right > vw + 1 && r.width > 0 && getComputedStyle(el).position !== 'fixed') {
            let p = el.parentElement, clipped = false;
            while (p && p !== document.body) { const o = getComputedStyle(p).overflowX; if (o === 'hidden' || o === 'auto' || o === 'scroll' || o === 'clip') { clipped = true; break; } p = p.parentElement; }
            if (!clipped) overflow.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} right=${Math.round(r.right)}`);
          }
          if (overflow.length > 4) break;
        }
      }
      const hrefs = [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href'));
      const emptyLinks = [...document.querySelectorAll('a[href]')].filter((a) => !a.textContent.trim() && !a.querySelector('img,svg') && !a.getAttribute('aria-label')).length;
      return {
        title: document.title, meta, h1: h1.length, broken, noAlt,
        scrollW: document.documentElement.scrollWidth, vw, overflow, hrefs, emptyLinks,
        // Cytaty klientów zostają dosłowne, więc nie sprawdzamy w nich stylu.
        text: (() => {
          const quotes = [...document.querySelectorAll('.hp-testimonials__card, .case-study-quote, .about-us-opinion, blockquote, q')];
          quotes.forEach((q) => q.setAttribute('data-smoke-hide', q.style.display || ''));
          quotes.forEach((q) => (q.style.display = 'none'));
          const t = document.body.innerText;
          quotes.forEach((q) => (q.style.display = q.getAttribute('data-smoke-hide')));
          quotes.forEach((q) => q.removeAttribute('data-smoke-hide'));
          return t;
        })(),
      };
    });

    if (/<!--[^>]*NEED/.test(await page.content())) add(url, vp.name, 'znacznik NEED w kodzie HTML');
    if (!info.title || info.title.length < 10) add(url, vp.name, `zły title "${info.title}"`);
    if (vp.name === 'desktop') {
      titles.set(info.title, [...(titles.get(info.title) || []), url]);
      descs.set(info.meta, [...(descs.get(info.meta) || []), url]);
      if (info.title.length > 70) add(url, vp.name, `title za długi (${info.title.length}): ${info.title}`);
      if (!info.meta) add(url, vp.name, 'brak meta description');
      else if (info.meta.length > 170) add(url, vp.name, `description za długi (${info.meta.length})`);
    }
    if (info.h1 !== 1) add(url, vp.name, `widocznych H1: ${info.h1}`);
    for (const b of info.broken) add(url, vp.name, `zepsuty obraz ${b}`);
    if (info.noAlt) add(url, vp.name, `obrazy bez alt: ${info.noAlt}`);
    if (info.scrollW > info.vw + 1) add(url, vp.name, `poziomy scroll ${info.scrollW}>${info.vw}: ${info.overflow.join(', ')}`);
    if (info.emptyLinks) add(url, vp.name, `linki bez tekstu: ${info.emptyLinks}`);
    for (const [re, label] of FORBIDDEN) {
      const m = info.text.match(re);
      if (m) {
        const i = info.text.search(re);
        add(url, vp.name, `${label}: "…${info.text.slice(Math.max(0, i - 40), i + 40).replace(/\s+/g, ' ')}…"`);
      }
    }
    for (const e of [...new Set(errs)]) add(url, vp.name, e);
    for (const h of info.hrefs) {
      if (h && h.startsWith('/') && !h.startsWith('//')) links.add(h.split('#')[0]);
    }

    if (OUT) await page.screenshot({ path: join(OUT, `${vp.name}${url.replace(/\//g, '_') || '_'}.png`), fullPage: true });
    await page.close();
  }

  // Interakcje
  const page = await ctx.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  const cookieVisible = await page.locator('#cookieBar').isVisible();
  if (!cookieVisible) add('/', vp.name, 'cookie bar niewidoczny przy pierwszej wizycie');
  else {
    await page.click('#cookieClose');
    await page.waitForTimeout(200);
    if (await page.locator('#cookieBar').isVisible()) add('/', vp.name, 'cookie bar nie zamyka się');
    await page.reload({ waitUntil: 'networkidle' });
    if (await page.locator('#cookieBar').isVisible()) add('/', vp.name, 'cookie bar wraca po zamknięciu');
  }
  const r0 = await page.$eval('.hp-rotator__item.is-active', (e) => e.textContent);
  await page.waitForTimeout(4400);
  const r1 = await page.$eval('.hp-rotator__item.is-active', (e) => e.textContent);
  if (r0 === r1) add('/', vp.name, 'rotator haseł nie zmienia hasła');

  if (vp.name === 'mobile') {
    const btn = page.locator('.js-mobile-menu-hamburger');
    if (!(await btn.isVisible())) add('/', vp.name, 'brak przycisku menu');
    else {
      await btn.click();
      await page.waitForTimeout(400);
      const open = await page.evaluate(() => document.querySelector('.header')?.classList.contains('menu-mobile-open'));
      const navLinks = await page.locator('.header a[href="/agent-ai/"]').evaluateAll((els) => els.some((e) => e.getBoundingClientRect().height > 0));
      if (!open) add('/', vp.name, 'menu mobilne się nie otwiera');
      if (OUT) await page.screenshot({ path: join(OUT, 'mobile_menu-open.png') });
      const dd = page.locator('.has-dropdown').first();
      if (await dd.isVisible()) {
        await dd.locator('> a, > span, > button').first().click().catch(() => {});
        await page.waitForTimeout(300);
        const reach = await page.locator('.header a[href="/agent-ai/"]').evaluateAll((els) => els.some((e) => { const r = e.getBoundingClientRect(); return r.height > 0 && r.top < window.innerHeight; }));
        if (!reach && !navLinks) add('/', vp.name, 'menu mobilne: nie widać linku Agent AI po rozwinięciu');
        if (OUT) await page.screenshot({ path: join(OUT, 'mobile_menu-dropdown.png') });
      }
    }
  } else {
    const dd = page.locator('.has-dropdown').first();
    await dd.hover();
    await page.waitForTimeout(400);
    const vis = await page.locator('.header a[href="/agent-ai/"]').first().isVisible();
    if (!vis) add('/', vp.name, 'submenu po hover niewidoczne');
  }
  // Formularz demo: popup otwiera się, pola są widoczne, zamyka się
  await page.goto(BASE + '/zamow-demo/', { waitUntil: 'networkidle' });
  const trigger = page.locator('.js-presentation-form-call').first();
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();
  await page.waitForTimeout(300);
  for (const f of ['name', 'email', 'phone']) {
    if (!(await page.locator(`#presentation-form__popup input[name="${f}"]`).isVisible())) add('/zamow-demo/', vp.name, `popup demo: pole ${f} niewidoczne`);
  }
  const submitVisible = await page.locator('#presentation-form__popup button[type="submit"]').isVisible();
  if (!submitVisible) add('/zamow-demo/', vp.name, 'popup demo: przycisk wyślij niewidoczny');
  else {
    const box = await page.locator('#presentation-form__popup button[type="submit"]').boundingBox();
    if (box && box.y + box.height > vp.height + 1) add('/zamow-demo/', vp.name, 'popup demo: przycisk wyślij poza ekranem');
  }
  if (OUT) await page.screenshot({ path: join(OUT, `${vp.name}_demo-popup.png`) });
  await page.locator('.presentation-form__close').click();
  await page.waitForTimeout(200);
  if (await page.locator('.presentation-form__popup').isVisible()) add('/zamow-demo/', vp.name, 'popup demo nie zamyka się');
  // Newsletter: pole e-mail widoczne
  const nl = page.locator('.cta-newsletter__form input[type="email"]');
  if (!(await nl.count()) || !(await nl.first().isVisible())) add('/zamow-demo/', vp.name, 'newsletter: brak pola e-mail');

  await page.close();
  await ctx.close();
}

for (const [t, u] of titles) if (u.length > 1) problems.push(`seo     zduplikowany title "${t}": ${u.join(', ')}`);
for (const [t, u] of descs) if (u.length > 1) problems.push(`seo     zduplikowany description: ${u.join(', ')}`);

// Linki wewnętrzne
const ignore = new Set();
for (const l of [...links].sort()) {
  if (ignore.has(l)) continue;
  const r = await fetch(BASE + l, { redirect: 'manual' });
  if (r.status >= 400) problems.push(`link    ${l}  HTTP ${r.status}`);
  else if (r.status >= 300) problems.push(`link    ${l}  przekierowanie ${r.status} -> ${r.headers.get('location')}`);
}

await browser.close();
const report = `Strony: ${URLS.length} x ${VIEWPORTS.length} widoki, linki wewnętrzne: ${links.size}\nProblemy: ${problems.length}\n` + problems.join('\n');
console.log(report);
if (OUT) writeFileSync(join(OUT, 'raport.txt'), report);
process.exit(problems.length ? 1 : 0);
