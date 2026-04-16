# Plan implementacji uwag z audytu SEO

## Context

Audyt SEO (`seo-raport.md`, 2026-04-15) dał stronie wynik 58/100. Raport wskazał 27 konkretnych problemów z dokładnymi ścieżkami plików. Eksploracja potwierdziła stan:

- `BaseLayout.astro:73` ma `user-scalable=no` (łamie WCAG)
- Hero w `index.astro` bez `fetchpriority`, bez preload, bez WebP
- Schema ograniczony do WebSite/WebPage/BreadcrumbList (brak Organization, SoftwareApplication, Article)
- 4 artykuły w `baza-wiedzy/` mają 857-1025 słów (poniżej progu 1500), wszystkie z datą `2024-01-15`
- `e-commerce-w-modelu-b2b.md` linie 48-66 zawierają artefakty ekstrakcji
- `pakiety_obszary_moduly.astro` istnieje z podkreśleniami
- `netlify.toml` to 4 linie, brak headers i redirects
- 86 obrazów JPG/PNG, 0 WebP
- Brak `public/llms.txt`
- `prezentacja-produktowa` i `fundusze-europejskie` bez `noindex`
- `dla-kogo/index.astro` ma tylko 191 słów (gateway)
- Breadcrumby inline w `BaseLayout.astro:26-34`, capitalizacja przez `replace(/\b\w/g, c => c.toUpperCase())` co daje `"E Commerce W Modelu B2b"`

Cel: podnieść wynik z 58 do ~75+, odblokować rich results i cytowalność w AI, nie psując wyglądu (strona to wierna kopia WordPressa). Plan podzielony na fazy wg priorytetów raportu, żeby można było zatrzymać się na dowolnym etapie.

## Faza 1 — CRITICAL (szybkie wygrane, duży impact)

### 1.1 Viewport — WCAG fix
**Plik:** `src/layouts/BaseLayout.astro:73`
Zmienić viewport na: `content="width=device-width, initial-scale=1.0"`. Usunąć `maximum-scale`, `minimum-scale`, `user-scalable=no`.

### 1.2 Hero LCP optimization
**Plik:** `src/pages/index.astro` (okolice linii 11-14)
Na pierwszym `<img>` hero (ten nad foldem) dodać: `fetchpriority="high" loading="eager" decoding="async"`. Upewnić się, że `width`/`height` są ustawione (są już na SVG, dodać na raster).

**Plik:** `src/layouts/BaseLayout.astro` (w `<head>`, tylko dla homepage, warunkowo przez `Astro.url.pathname === '/'`)
Dodać `<link rel="preload" as="image" href="/images/bg-desktop-main-head.webp" fetchpriority="high">`.

### 1.3 WebP dla hero i kluczowych grafik
**Katalog:** `public/images/`
Konwersja `bg-desktop-main-head.jpg` (275KB) oraz pozostałych hero-ów do WebP (`.jpg → .webp`). Minimum zestaw dla fazy 1: hero homepage + hero każdej podstrony z sekcji `platforma-b2b/` i `dla-kogo/`. Reszta w fazie 3.

W `index.astro` hero zamienić `<img>` na `<picture><source srcset="...webp" type="image/webp"><img src="...jpg" ...></picture>`.

### 1.4 URL — podkreślenia na myślniki
**Plik do renamingu:** `src/pages/platforma-b2b/pakiety_obszary_moduly.astro` → `pakiety-obszary-moduly.astro`
**Plik do utworzenia:** `public/_redirects` z linią `/platforma-b2b/pakiety_obszary_moduly/ /platforma-b2b/pakiety-obszary-moduly/ 301`
Sprawdzić linki wewnętrzne (Header, Footer, inne strony) i zaktualizować.

### 1.5 Czyszczenie i rozbudowa artykułów bloga
**Pliki:** `src/content/baza-wiedzy/*.md` (4 pliki)

1. `e-commerce-w-modelu-b2b.md` — usunąć artefakty z linii 48-66 (orphaned headings, powtórzenia, cross-reference do innego artykułu).
2. Wszystkie 4 artykuły — rozbudować do 1500+ słów. Treść czerpać z `.knowledge/` (wiedza biznesowa z NotebookLM).
3. Daty — ustawić realne daty publikacji (nie 2024-01-15 wszystkie). Dodać pole `dateModified` w `content.config.ts` + użyć we frontmatterach.
4. Uzupełnić `authorBio` dla Julii Wlazło (pole już jest w schemacie, nieużywane).

**Plik:** `src/content.config.ts` — dodać opcjonalne pole `dateModified: z.string().optional()`.

## Faza 2 — HIGH (tydzień)

### 2.1 Schema.org — Organization + SoftwareApplication + Article
**Plik:** `src/layouts/BaseLayout.astro` (blok JSON-LD w okolicach linii 36-66)

Rozbudować istniejący `@graph`:
- **Organization** (zawsze): name, url, logo, sameAs (LinkedIn, YouTube), contactPoint (email, telefon — dane od użytkownika, na razie bez contactPoint).
- **SoftwareApplication** (tylko dla `/platforma-b2b/` i jego podstron): name "WiseB2B", applicationCategory "BusinessApplication", operatingSystem "Web", offers, aggregateRating (jeśli są realne dane).
- **Article** (tylko dla `baza-wiedzy/[...slug]`): mapować z frontmatter — headline, image, datePublished, dateModified, author (Person), publisher (Organization ref).

**Plik:** `src/pages/baza-wiedzy/[...slug].astro` — propsować schemat Article do BaseLayout przez nową prop `schema={...}` albo dedykowany slot.

### 2.2 Nagłówki bezpieczeństwa
**Plik:** `netlify.toml` — dodać blok:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), camera=(), microphone=()"

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=86400"

[[headers]]
  for = "/_astro/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 2.3 Noindex na stronach konwersyjnych
**Pliki:** `src/pages/prezentacja-produktowa.astro`, `src/pages/fundusze-europejskie.astro`
Przekazać `noindex={true}` do BaseLayout. Jeśli BaseLayout nie ma tej propsy, dodać ją i warunkowo renderować `<meta name="robots" content="noindex, follow">`.

### 2.4 Rozbudowa `/dla-kogo/` gateway
**Plik:** `src/pages/dla-kogo/index.astro` (obecnie 191 słów)
Rozbudować do 500+ słów: opis grup docelowych, kryteria segmentacji, linki do `dla-dystrybutorow` i `dla-producentow`. Materiały z `.knowledge/`.

### 2.5 Render-blocking CSS
**Plik:** `src/layouts/BaseLayout.astro:129-134`
`slick.min.css` i `swiper-bundle.min.css` (używane tylko pod foldem) załadować non-blocking:
```html
<link rel="stylesheet" href="/css/slick.min.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="/css/slick.min.css"></noscript>
```

### 2.6 Cookie bar + hero CTA na mobile
**Plik:** `src/components/CookieBar.astro` + `src/styles/global.css`
Zmniejszyć wysokość CookieBar na mobile, albo podnieść CTA "Zamów demo" w hero (mobile-only media query), tak żeby było above-the-fold na iPhonie SE.

## Faza 3 — MEDIUM (miesiąc, backlog)

### 3.1 Sitemap lastmod
**Plik:** `astro.config.mjs`
Dodać do `sitemap()` opcję `serialize` który dla każdego URL czyta datę ostatniego commita z git (`git log -1 --format=%cI -- <file>`), wypełnia `lastmod`.

### 3.2 WebP dla wszystkich obrazów
Batch konwersja pozostałych 85 JPG/PNG w `public/images/`. Zastąpić `<img>` na `<picture>` w miejscach, gdzie pojawiają się te obrazy, albo rozważyć Netlify Image CDN.

### 3.3 Definitional lede na homepage
**Plik:** `src/pages/index.astro`
Pierwsze 50 słów przepisać na cytowalny definicyjny akapit odpowiadający "Co to WiseB2B?". Materiały z `.knowledge/`.

### 3.4 llms.txt
**Plik do utworzenia:** `public/llms.txt`
Wykaz 5-6 kanonicznych stron (homepage, `/platforma-b2b/`, `/dla-kogo/`, `/baza-wiedzy/`, `/o-nas/`, `/wsparcie/`) z jednozdaniowymi opisami.

### 3.5 GTM/Snitcher przenieść
**Plik:** `src/layouts/BaseLayout.astro`
Snitcher (linie 116-123) przenieść na koniec `<body>`. GTM zostawić w `<head>` (trade-off pomiarowy).

### 3.6 Duplikat testimoniala Triplex
Zrobić grep `"Triplex"`, zostawić pełną wersję na jednej stronie, na pozostałych dać krótszą wariację lub inny klient.

### 3.7 Rozbudowa `/platforma-b2b/bezpieczna-migracja/`
**Plik:** `src/pages/platforma-b2b/bezpieczna-migracja.astro` (obecnie 380 słów)
Dodać sekcje: downtime, rollback, integralność danych, przykładowy timeline migracji.

### 3.8 Email/telefon poza demo funnelem
**Pliki:** `src/pages/wsparcie.astro`, `src/components/Footer.astro`
Dodać widoczny email i telefon (dane od użytkownika).

## Faza 4 — LOW (backlog)

### 4.1 Fix capitalizacji breadcrumbów
**Plik:** `src/layouts/BaseLayout.astro:32`
Obecna logika daje `"E Commerce W Modelu B2b"`. Rozwiązanie: mapa z nadpisanymi etykietami dla znanych slugów (`b2b` → `B2B`, `e-commerce` → `e-Commerce`), plus normalna title-case dla nieznanych.

### 4.2 Selfhost Sora
Pobrać pliki Sora (300/400/600/700) do `public/fonts/`, podmienić `<link>` na `@font-face` w global.css, dodać `font-display: swap`.

### 4.3 Pozostałe
- IndexNow hook post-deploy do Bing (`public/_redirects` albo Netlify function).
- Decyzja biznesowa — AI crawlery w `public/robots.txt`.
- Nowy artykuł mid-funnel "Integracja platformy B2B z ERP" (1800+ słów).

## Pliki krytyczne (do modyfikacji w tej iteracji: Faza 1 + 2)

- `src/layouts/BaseLayout.astro` — viewport, preload, schema graph, noindex prop, CSS non-blocking
- `src/pages/index.astro` — hero picture/fetchpriority
- `src/content/baza-wiedzy/*.md` — 4 artykuły: czyszczenie, rozbudowa, daty, authorBio
- `src/content.config.ts` — pole `dateModified`
- `netlify.toml` — headers, cache
- `public/_redirects` — 301 dla starego URL z underscore
- `src/pages/platforma-b2b/pakiety_obszary_moduly.astro` — rename
- `src/pages/dla-kogo/index.astro` — rozbudowa treści
- `src/pages/prezentacja-produktowa.astro`, `src/pages/fundusze-europejskie.astro` — noindex
- `src/components/CookieBar.astro` — mobile fix
- `src/pages/baza-wiedzy/[...slug].astro` — Article schema prop
- `public/images/*` — WebP dla hero-ów (wybrane pliki)

## Weryfikacja

Po każdej fazie:

1. `npm run build` bez błędów, wszystkie 27 URL w sitemap.
2. `npm run preview`, otworzyć homepage, `/platforma-b2b/`, `/baza-wiedzy/` i jeden artykuł. Sprawdzić DevTools Network (fetchpriority, preload, nagłówki cache w preview).
3. Mobile test w Chrome DevTools iPhone SE, sprawdzić CTA above-the-fold i czy pinch-zoom działa (fix viewport).
4. Schema: wkleić render HTML kluczowych stron do `validator.schema.org` i `search.google.com/test/rich-results`.
5. Lighthouse mobile na homepage przed i po fazie 1: LCP, CLS, performance score.
6. Po merge na main: GSC Coverage, pagespeed.web.dev na field data za ~2 tygodnie.

## Decyzje użytkownika

- **Zakres iteracji:** Faza 1 (CRITICAL) + Faza 2 (HIGH) razem. Faza 3 i 4 zostają w backlog.
- **Artykuły bloga:** rozbudować teraz do 1500+ słów z materiałów `.knowledge/`, poprawić daty, uzupełnić `authorBio`, wyczyścić artefakty.
- **Kontakt (email/telefon):** użytkownik dostarczy w osobnej wiadomości przed implementacją sekcji schema Organization i fix stopki. Dopóki nie przyjdą dane, Organization schema wstawiam bez `contactPoint`, stopkę kontaktu pomijam.

## Otwarte (do potwierdzenia w trakcie)

- Sociale do `sameAs` w Organization: LinkedIn + YouTube + inne? (mogę znaleźć w Footerze lub zapytać).
- Daty publikacji 4 starych artykułów: czy są w WordPress exporcie / oryginalnym repo? Jeśli nie, ustawię realistyczne rozłożone daty 2023-2024.
