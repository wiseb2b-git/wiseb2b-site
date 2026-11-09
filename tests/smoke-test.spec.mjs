import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:4322';

const PAGES = [
  { url: '/', title: 'WiseB2B', h1: true },
  { url: '/platforma-commerce-b2b/', title: 'Platforma' },
  { url: '/agent-ai/', title: 'Agent AI' },
  { url: '/panel-handlowca/', title: 'Panel Handlowca' },
  { url: '/funkcje/', title: 'Funkcje' },
  { url: '/integracje/', title: 'integracja' },
  { url: '/proces-wdrozenia/', title: 'Proces' },
  { url: '/bezpieczna-migracja/', title: 'Bezpieczna' },
  { url: '/plany-wiseb2b/', title: 'Plany' },
  { url: '/dla-dystrybutorow/', title: 'dystrybutor' },
  { url: '/dla-producentow/', title: 'producent' },
  { url: '/zespol-wiseb2b/', title: 'Wsparcie' },
  { url: '/partnerzy-wdrozeniowi/', title: 'Partnerzy' },
  { url: '/wdrozenia/', title: 'Wdrożenia' },
  { url: '/o-nas/', title: 'O nas' },
  { url: '/zamow-demo/', title: 'demo' },
  { url: '/baza-wiedzy/', title: 'Baza wiedzy' },
  { url: '/case-study/triplex/', title: 'dystrybutor' },
  { url: '/case-study/vmp/', title: 'bielizny' },
  { url: '/fundusze-europejskie/', title: 'Fundusze' },
];

for (const page of PAGES) {
  test(`${page.url} loads with 200 and correct title`, async ({ page: p }) => {
    const resp = await p.goto(BASE + page.url, { waitUntil: 'domcontentloaded' });
    expect(resp.status()).toBe(200);
    const title = await p.title();
    expect(title.toLowerCase()).toContain(page.title.toLowerCase());
  });
}

test('Homepage has header, footer, main content', async ({ page }) => {
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('main')).toBeVisible();
});

test('Homepage "Dlaczego WiseB2B?" has 5 cards with Remix Icons', async ({ page }) => {
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  const cards = page.locator('.hp-why__card');
  await expect(cards).toHaveCount(5);
  const icons = page.locator('.hp-why__icon svg');
  await expect(icons).toHaveCount(5);
  // Verify they use viewBox 0 0 30 30 or 0 0 52 52 (Remix Icons), not 0 0 24 24 (Material)
  for (let i = 0; i < 5; i++) {
    const vb = await icons.nth(i).getAttribute('viewBox');
    expect(vb).not.toBe('0 0 24 24');
  }
});

test('Homepage case study link works', async ({ page }) => {
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  const link = page.locator('a[href*="case-study/triplex"]').first();
  await expect(link).toBeVisible();
});

test('Navigation has correct menu items', async ({ page }) => {
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('header')).toContainText('Platforma B2B');
  await expect(page.locator('header')).toContainText('Dla kogo');
  await expect(page.locator('header')).toContainText('Wdrożenia');
  await expect(page.locator('header')).toContainText('O nas');
  await expect(page.locator('header')).toContainText('Baza wiedzy');
});

test('Footer has company info', async ({ page }) => {
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('footer')).toContainText('WiseB2B');
  await expect(page.locator('footer')).toContainText('kontakt@wiseb2b.eu');
});

test('Plany WiseB2B has 6 cloud items with Remix Icons', async ({ page }) => {
  await page.goto(BASE + '/plany-wiseb2b/', { waitUntil: 'domcontentloaded' });
  const items = page.locator('.cloud-includes__item');
  await expect(items).toHaveCount(6);
  const icons = page.locator('.cloud-includes__icon svg');
  for (let i = 0; i < 6; i++) {
    const vb = await icons.nth(i).getAttribute('viewBox');
    expect(vb).toBe('0 0 30 30');
  }
});

test('Panel Handlowca has 6 area cards with Remix Icons', async ({ page }) => {
  await page.goto(BASE + '/panel-handlowca/', { waitUntil: 'domcontentloaded' });
  const cards = page.locator('.ph-area-card');
  await expect(cards).toHaveCount(6);
  const icons = page.locator('.ph-area-card__icon svg');
  for (let i = 0; i < 6; i++) {
    const vb = await icons.nth(i).getAttribute('viewBox');
    expect(vb).toBe('0 0 30 30');
  }
});

test('FAQ accordion works on dla-dystrybutorow', async ({ page }) => {
  await page.goto(BASE + '/dla-dystrybutorow/', { waitUntil: 'load' });
  const faqItem = page.locator('.questions__items .item').first();
  const wasHidden = !(await faqItem.evaluate(el => el.classList.contains('show')));
  expect(wasHidden).toBe(true);
  await faqItem.locator('h2').click();
  const isShown = await faqItem.evaluate(el => el.classList.contains('show'));
  expect(isShown).toBe(true);
});

test('FAQ accordion works on dla-producentow', async ({ page }) => {
  await page.goto(BASE + '/dla-producentow/', { waitUntil: 'load' });
  const faqItem = page.locator('.questions__items .item').first();
  await faqItem.locator('h2').click();
  const isShown = await faqItem.evaluate(el => el.classList.contains('show'));
  expect(isShown).toBe(true);
});

test('O nas has h1 and correct stats', async ({ page }) => {
  await page.goto(BASE + '/o-nas/', { waitUntil: 'domcontentloaded' });
  const h1 = page.locator('h1');
  await expect(h1).toBeVisible();
  // Check updated stats
  await expect(page.locator('.about-us-numbers')).toContainText('15');
  await expect(page.locator('.about-us-numbers')).toContainText('20k+');
});

test('Case study dynamic route works for Triplex', async ({ page }) => {
  const resp = await page.goto(BASE + '/case-study/triplex/', { waitUntil: 'domcontentloaded' });
  expect(resp.status()).toBe(200);
  await expect(page.locator('main')).toContainText('Triplex');
});

test('Case study dynamic route works for VMP', async ({ page }) => {
  const resp = await page.goto(BASE + '/case-study/vmp/', { waitUntil: 'domcontentloaded' });
  expect(resp.status()).toBe(200);
  await expect(page.locator('main')).toContainText('VMP');
});

test('Old case study URLs redirect to new ones', async ({ page }) => {
  const resp = await page.goto(BASE + '/case-study-triplex/', { waitUntil: 'domcontentloaded' });
  expect(page.url()).toContain('/case-study/triplex/');
});

test('No typos remain on agent-ai page', async ({ page }) => {
  await page.goto(BASE + '/agent-ai/', { waitUntil: 'domcontentloaded' });
  const text = await page.locator('main').textContent();
  expect(text).not.toContain('efekywności');
});

test('No typos remain on panel-handlowca page', async ({ page }) => {
  await page.goto(BASE + '/panel-handlowca/', { waitUntil: 'domcontentloaded' });
  const text = await page.locator('main').textContent();
  expect(text).not.toContain('wsopłpraca');
  expect(text).not.toContain('okazcja');
});

test('Mobile viewport renders correctly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('main')).toBeVisible();
  // Check no horizontal scroll
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  const viewWidth = await page.evaluate(() => window.innerWidth);
  expect(bodyWidth).toBeLessThanOrEqual(viewWidth + 5);
});

test('Tablet viewport renders correctly', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  const viewWidth = await page.evaluate(() => window.innerWidth);
  expect(bodyWidth).toBeLessThanOrEqual(viewWidth + 5);
});

test('Structured data JSON-LD exists on homepage', async ({ page }) => {
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  const data = JSON.parse(jsonLd);
  expect(data['@context']).toBe('https://schema.org');
  expect(data['@graph']).toBeDefined();
});

test('All images on homepage have alt attributes', async ({ page }) => {
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  const images = page.locator('main img');
  const count = await images.count();
  for (let i = 0; i < count; i++) {
    const alt = await images.nth(i).getAttribute('alt');
    expect(alt, `Image ${i} missing alt`).not.toBeNull();
  }
});

test('No console errors on homepage', async ({ page }) => {
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  await page.goto(BASE + '/', { waitUntil: 'load' });
  // Filter out known third-party errors (GTM, Snitcher, etc.)
  const siteErrors = errors.filter(e => !e.includes('googletagmanager') && !e.includes('snitcher') && !e.includes('radar') && !e.includes('net::ERR') && !e.includes('Content Security Policy') && !e.includes('font-src'));
  expect(siteErrors).toHaveLength(0);
});
