# Plan migracji www.wiseb2b.eu → Astro

## Źródło
- URL: https://www.wiseb2b.eu
- Technologia oryginalna: WordPress (custom theme `wiseb2b`)
- Cel: statyczna strona w Astro (SSG)

---

## Etap 1 — Scaffolding projektu [DONE]
- [x] Inicjalizacja Astro (minimal template)
- [x] Konfiguracja `astro.config.mjs` (site, trailingSlash)
- [x] Struktura katalogów: layouts, components, pages, styles, public

## Etap 2 — Layout bazowy + komponenty wspólne [DONE]
- [x] `BaseLayout.astro` — meta tagi, font Sora (Google Fonts), globalne style
- [x] `Header.astro` — logo, nawigacja z dropdown submenu, hamburger mobile, CTA
- [x] `Footer.astro` — linki, social media, EU funding banner
- [x] `CookieBar.astro` — cookie consent z localStorage
- [x] `global.css` — zmienne CSS, reset, utility classes, breakpointy

## Etap 3 — Strona główna [DONE - szkielet]
- [x] Hero section z background image
- [x] Sekcja wartości (5 kart z ikonami)
- [x] Sekcja "Zaufali nam" (loga klientów)
- [x] Animacje scroll (IntersectionObserver → `.lm-observer`)
- [ ] **TODO**: Pobrać dokładną treść z oryginału i dopasować

## Etap 4 — Pobranie assetów
- [ ] Pobrać obrazy z wiseb2b.eu do `public/images/`:
  - `bg-desktop-main-head.jpg`
  - `bg-mobile-main-head.jpg`
  - `np_ecommerce_4557208_000000-1.png`
  - `np_price_4514256_000000-1.png`
  - `np_function_1286758_000000-1.png`
  - `np_update_2970152_000000-1.png`
  - `np_gears_9428_000000-1.png`
  - `candelluxLogo.jpg`
  - `logo_lobos.png`
  - `raw_pol_logo.jpg`
- [ ] Pobrać SVG do `public/svg/`:
  - `logo-wiseb2b.svg`
  - `logo-wiseb2b_black.svg`
  - `FEDDS-kolor-poziom.svg`
  - `ways-company.svg`
  - `arrow-money.svg`
  - `evolution.svg`
  - `net.svg`

## Etap 5 — Treść podstron
Dla każdej podstrony: pobrać treść z oryginału (WebFetch), odtworzyć layout i treść.

| Strona | Route | Status |
|--------|-------|--------|
| Platforma B2B | `/platforma-b2b/` | placeholder |
| Wersje | `/platforma-b2b/wersje/` | placeholder |
| Funkcje | `/platforma-b2b/funkcje/` | placeholder |
| Proces wdrożenia | `/platforma-b2b/proces-wdrozenia/` | placeholder |
| Integracje | `/platforma-b2b/integracje/` | placeholder |
| Bezpieczna migracja | `/platforma-b2b/bezpieczna-migracja/` | placeholder |
| Dla kogo | `/dla-kogo/` | placeholder |
| Dla dystrybutorów | `/dla-kogo/dla-dystrybutorow/` | placeholder |
| Dla producentów | `/dla-kogo/dla-producentow/` | placeholder |
| Wsparcie | `/wsparcie/` | placeholder |
| Wdrożenia | `/wdrozenia/` | placeholder |
| O nas | `/o-nas/` | placeholder |
| Baza wiedzy | `/baza-wiedzy/` | placeholder |
| Prezentacja produktowa | `/prezentacja-produktowa/` | placeholder |
| Fundusze europejskie | `/fundusze-europejskie/` | placeholder |

## Etap 6 — Pixel-perfect dopasowanie
- [ ] Porównanie wizualne z oryginałem (screenshot comparison)
- [ ] Dopasowanie fontów, kolorów, spacingów
- [ ] Sprawdzenie responsywności na breakpointach: 743px, 991px, 1279px, 1599px

## Etap 7 — Interaktywność i detale
- [ ] Mobilne menu (hamburger toggle) — gotowe w komponencie
- [ ] Submenu dropdown hover/click — gotowe w komponencie
- [ ] Cookie consent logic — gotowe w komponencie
- [ ] Formularze kontaktowe (jeśli występują na podstronach)

## Etap 8 — SEO i analytics
- [ ] Meta tagi (title, description, OG) per strona
- [ ] Favicon
- [ ] Google Tag Manager snippet
- [ ] Google Analytics snippet
- [ ] Sitemap (astro integration: `@astrojs/sitemap`)

## Etap 9 — Deploy
- [ ] Wybór hostingu (Netlify / Vercel / CloudFlare Pages)
- [ ] Konfiguracja domeny
- [ ] SSL
- [ ] Testy wydajności (Lighthouse)

---

## Parametry designu

### Kolory
| Nazwa | Wartość | Użycie |
|-------|---------|--------|
| Background | `#f3f6fa` | Tło strony |
| Text | `#312b3f` | Tekst podstawowy |
| Accent | `#d9b062` | CTA, akcenty, nagłówki footera |
| White | `#ffffff` | Karty, header |
| Dark | `#1a1a2e` | Footer, cookie bar |

### Font
- **Sora** (Google Fonts): 300, 400, 600, 700

### Breakpointy
| Nazwa | Wartość |
|-------|---------|
| Mobile | ≤ 743px |
| Tablet | ≤ 991px |
| Desktop | ≤ 1279px |
| Wide | ≤ 1599px |
| Ultra | > 1600px |

### Wysokość headera
- Desktop: 108px
- Mobile: 85px

---

## Źródła obrazów (URL-e oryginału)
```
https://wiseb2b.eu/wp-content/themes/wiseb2b/assets/svg/FEDDS-kolor-poziom.svg
https://wiseb2b.eu/wp-content/themes/wiseb2b/assets/svg/logo-wiseb2b.svg
https://wiseb2b.eu/wp-content/uploads/2022/03/np_ecommerce_4557208_000000-1.png
https://wiseb2b.eu/wp-content/uploads/2022/03/np_price_4514256_000000-1.png
https://wiseb2b.eu/wp-content/uploads/2022/03/np_function_1286758_000000-1.png
https://wiseb2b.eu/wp-content/uploads/2022/03/np_update_2970152_000000-1.png
https://wiseb2b.eu/wp-content/uploads/2022/03/np_gears_9428_000000-1.png
https://wiseb2b.eu/wp-content/uploads/2023/03/logo-wiseb2b_black.svg
https://wiseb2b.eu/wp-content/uploads/2023/03/ways-company.svg
https://wiseb2b.eu/wp-content/uploads/2023/03/arrow-money.svg
https://wiseb2b.eu/wp-content/uploads/2023/03/evolution.svg
https://wiseb2b.eu/wp-content/uploads/2023/03/net.svg
https://wiseb2b.eu/wp-content/uploads/2023/03/candelluxLogo.jpg
https://wiseb2b.eu/wp-content/uploads/2023/03/logo_lobos.png
https://wiseb2b.eu/wp-content/uploads/2023/03/raw_pol_logo.jpg
https://wiseb2b.eu/wp-content/themes/wiseb2b/otree/img/bg-desktop-main-head.jpg
https://wiseb2b.eu/wp-content/themes/wiseb2b/otree/img/bg-mobile-main-head.jpg
```
