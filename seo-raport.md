# Audyt SEO — wiseb2b.eu

**Data:** 2026-04-15
**Typ biznesu:** SaaS / B2B e-commerce vendor (Polska)
**Stack:** Astro SSG (Netlify), migracja z WordPress
**Subagenci:** 7 (technical, content, schema, sitemap, performance, visual, geo)

## SEO Health Score: **58 / 100**

| Kategoria | Waga | Wynik | Ważony |
|---|---|---|---|
| Technical SEO | 22% | 66 | 14.5 |
| Content Quality | 23% | 54 | 12.4 |
| On-Page SEO | 20% | 60 | 12.0 |
| Schema | 10% | 35 | 3.5 |
| Performance (CWV) | 10% | 55 | 5.5 |
| AI Search (GEO) | 10% | 43 | 4.3 |
| Images | 5% | 40 | 2.0 |
| **Razem** | | | **~58** |

Ocena: **"Needs Improvement"**. Podstawy są solidne (TTFB 95ms, HTTPS, sitemap działa, `trailingSlash` konsekwentny), ale kumulują się problemy w trzech obszarach: LCP/CWV przez nieoptymalizowany hero i render-blocking CSS, schema ograniczona do WebSite/WebPage/Breadcrumb (brak Organization, SoftwareApplication, Article), oraz cienka treść bloga i słaba cytowalność w AI.

---

## Plan działania wg priorytetu

### CRITICAL — fix teraz (blokery / duży impact)

1. **LCP hero obrazki** — `src/pages/index.astro:11,14` — dodać `fetchpriority="high" loading="eager" width height` do `<img>` hero oraz `<link rel="preload" as="image">` w `BaseLayout.astro`. Konwersja `bg-desktop-main-head.jpg` (275KB → WebP ~60KB).
2. **`user-scalable=no` w viewport** — `BaseLayout.astro:73` — usunąć `maximum-scale=1, minimum-scale=1, user-scalable=no`. Łamie WCAG 1.4.4 i mobile-friendliness.
3. **URL z podkreśleniami** — `src/pages/platforma-b2b/pakiety_obszary_moduly.astro` — rename na `pakiety-obszary-moduly.astro`, zaktualizować `_redirects` (301 ze starej ścieżki, nie odwrotnie).
4. **Cienkie artykuły bloga** — wszystkie 4 posty w `src/content/baza-wiedzy/` mają 650-850 słów (minimum 1500). `e-commerce-w-modelu-b2b.md` zawiera artefakt ekstrakcji (fragmenty listy artykułów jako prose, linie 50-66) — usunąć i przepisać.

### HIGH — tydzień

5. **Brak schema Organization** — dodać do `BaseLayout.astro` `@graph` (name, url, logo, sameAs dla LinkedIn/YouTube, contactPoint). Zasila Knowledge Panel.
6. **Brak schema SoftwareApplication** na `/platforma-b2b/` i `Article` na `/baza-wiedzy/[slug]/` — dla Article mapować bezpośrednio z frontmatter Content Collection.
7. **Nagłówki bezpieczeństwa** — `netlify.toml` nie ma `[[headers]]`. Dodać HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
8. **`/prezentacja-produktowa/` indeksowana** — dodać `noindex={true}` (konwersyjna, cienka treść).
9. **`/dla-kogo/` gateway (120 słów)** — rozbudować do 500+ lub zrobić `301` na podstrony segmentowe.
10. **Render-blocking CSS** — 8 plików CSS blokuje paint. `slick.min.css` i `swiper-bundle.min.css` są potrzebne tylko pod foldem → `media="print" onload="this.media='all'"`. Cache headers na `public/css/*` dają `max-age=0` — dodać `max-age=31536000, immutable` dla hashowanych plików Astro i `max-age=86400` dla `public/css/`.
11. **Cookie bar zasłania hero CTA na mobile** — CTA "Zamów demo" nie jest widoczne above-the-fold na mobile homepage i `/platforma-b2b/`. Zmniejszyć cookie bar + podnieść CTA w układzie mobile.
12. **Daty artykułów** — wszystkie 4 posty mają `date: 2024-01-15` (data migracji). Ustawić rzeczywiste daty publikacji, dodać `dateModified`.

### MEDIUM — miesiąc

13. **Brak `lastmod` w sitemap** — dodać serialize hook w `@astrojs/sitemap` (data z git commit per plik).
14. **Brak bio autora** — Julia Wlazło na każdym poście bez bio/LinkedIn. Dodać `authorBio` (już jest w schemacie kolekcji, ale nieużywany).
15. **85 JPG/PNG, 0 WebP** w `public/images/` — batch konwersja, `<picture>` z fallbackiem lub Netlify Image CDN.
16. **Definitional lede na homepage** (GEO) — pierwsze 50 słów powinno odpowiadać "Co to WiseB2B?" w cytowalnej formie. Obecny tekst to marketing slogan.
17. **`llms.txt`** — stworzyć w `public/llms.txt` z wykazem 5-6 kanonicznych stron z opisami.
18. **GTM/Snitcher w `<head>`** — przenieść Snitcher na koniec `<body>`, GTM zostawić (trade-off pomiarowy).
19. **Duplikat testimoniala Triplex** pojawia się na `/o-nas/`, `/wdrożenia/`, homepage — pozostawić raz, na pozostałych dać krótszą wariację lub inny klient.
20. **`/platforma-b2b/bezpieczna-migracja/`** — 380 słów, rozbudować o obiekcje (downtime, rollback, integralność danych) i przykład timeline.
21. **Brak kontaktu poza demo** — dodać email/telefon na `/wsparcie/` i w stopce. Single-path demo funnel to trust gap dla B2B.

### LOW — backlog

22. **Nazwy breadcrumbów** — `"E Commerce W Modelu B2b"` (dziwny title case) — poprawić capitalizację w Astro komponencie breadcrumbów.
23. **`/fundusze-europejskie/`** — `noindex`.
24. **IndexNow** — post-deploy hook do Bing/Yandex.
25. **AI crawler tokeny w robots.txt** — decyzja biznesowa (allow/deny dla GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Bytespider); obecnie wszyscy dozwoleni przez wildcard.
26. **Selfhost Google Fonts Sora** — eliminuje third-party DNS i FOUT-CLS.
27. **Artykuł mid-funnel** np. "Integracja platformy B2B z ERP" — 1800+ słów z danymi do cytowalności przez AI.

---

## Najważniejsze wnioski

**Co działa dobrze:** TTFB z Netlify Edge (95ms), `@astrojs/sitemap` generuje poprawne 27 URLs, wszystkie zwracają 200, `trailingSlash:'always'` konsekwentny, HTML jest pre-renderowany (Astro SSG) więc AI crawlery mają pełen dostęp bez JS, HTTPS + HSTS, brak JS render-blocking.

**Największe dźwignie:** (1) LCP hero + WebP + preload razem mogą podbić Performance z ~55 do 75+; (2) dodanie Organization + SoftwareApplication + Article schema podniesie Schema z 35 do 75 i odblokuje rich results + AI citation; (3) przepisanie 4 artykułów do 1500+ słów z bio autora podniesie Content i GEO jednocześnie.

**Paradoks:** infrastruktura techniczna jest lepsza niż średnia (Astro SSG, edge cache, clean URLs), ale treść i schema są poniżej średniej. To typowy obraz migracji "skopiuj WordPress 1:1" — nowy stack, stara treść. Największa wartość będzie z inwestycji w content/schema, nie w kolejne optymalizacje techniczne.
