# WiseB2B Site — migracja WordPress → Astro

## Co to jest
Strona marketingowa firmy WiseB2B (platforma e-Commerce B2B). Źródłem prawdy wizualnej jest plik Figma (`WiseB2B.eu.fig`) oraz aktualny WordPress (`wiseb2b.eu`). Cel: odwzorowanie nowego Key Visual z Figma/WP w Astro SSG.

## Stan projektu
Migracja jest w trakcie. Struktura stron, routing, redirecty, design tokens, header, footer i komponenty są gotowe. Strony mają treść i layout, ale **wizualnie nie odpowiadają Figma/WP**. Główne zadanie: przejść stronę po stronie i doprowadzić wygląd do zgodności z nowym KV z Figmy.

Co zrobione:
- Nowy design system (tokeny w `src/styles/tokens.css`, font Inter, paleta fioletowa `#512da8`)
- Wszystkie strony istnieją pod nowymi flat URL-ami (21 stron .astro)
- Redirecty 301 w `public/_redirects` (stare nested URL-e → nowe flat)
- Header, Footer, CtaBlock, CookieBar, ArticleCards jako komponenty
- Content Collections: baza-wiedzy (4), funkcjonalnosci (16), obszary (13), case-study (2), partnerzy (2)
- CSS: `global.css` (4533 linii) zawiera wszystkie style. Stare WP CSS (otree, theme-inline, styles.min) usunięte
- Animacje: IntersectionObserver (`.lm-observer`) i Swiper.js zachowane, WOW.js usunięty

Co wymaga pracy:
- Homepage hero i sekcje nie odpowiadają Figma (user zgłosił: "wygląda zupełnie inaczej niż na projekcie Figma")
- Każda strona wymaga audytu wizualnego i porównania z Figma/WP
- Responsive (mobile, tablet) do przetestowania
- Formularze, Lighthouse, structured data do weryfikacji

## Lokalizacja
- Projekt: `C:\projects\wiseb2_site`
- GitHub: `https://github.com/wiseb2b-git/wiseb2b-site.git` (publiczne)
- Netlify: auto-deploy z GitHub
- Aktualna strona WP: `https://wiseb2b.eu`

## Zasoby do pracy (LOKALNE, nie używaj MCP)

### Plik Figma (źródło prawdy wizualnej)
- Plik: `WiseB2B.eu.fig` (13MB, w katalogu głównym projektu)
- Format: ZIP z `canvas.fig` (binary fig-kiwi v106), `thumbnail.png`, `meta.json`, `images/`
- Konwersja do JSON: `npx @grida/refig convert "C:\projects\wiseb2_site\WiseB2B.eu.fig" -o OUTPUT.grida1 --preserve-figma-ids`
- Wynik: plik `.grida1` (17MB, 25909 nodów, 1 strona). Hierarchia: `document.links['scene-1']` zawiera 25 top-level frame'ów, `document.links['NODE_ID']` zawiera dzieci danego noda, `document.nodes['NODE_ID']` zawiera właściwości (kolory, fonty, wymiary, tekst)
- Renderowanie node'a do PNG: `npx @grida/refig "WiseB2B.eu.fig" --node "NODE_ID" --format png -o output.png`
- Figma file key (do MCP, gdyby lokalnie nie wystarczyło): `qlBg9CuuhhtG6zaaSLf8Qv`

**Mapa stron w Figma (node ID):**

| Node ID | Nazwa | URL |
|---|---|---|
| `1:2` | [Desktop] Home | `/` |
| `35:2` | [Desktop] About | `/o-nas/` |
| `51:2` | [Desktop] Implementations | `/wdrozenia/` |
| `51:875` | [Desktop] Support > Partners | `/partnerzy-wdrozeniowi/` |
| `51:1818` | [Desktop] Support > Team | `/zespol-wiseb2b/` |
| `61:2815` | [Desktop] For whom > For producers | `/dla-producentow/` |
| `68:124` | [Desktop] For whom > For distributors | `/dla-dystrybutorow/` |
| `68:1210` | [Desktop] For whom > Safe migration | `/bezpieczna-migracja/` |
| `95:64` | [Desktop] B2B Platform > Commerce B2B | `/platforma-commerce-b2b/` |
| `117:384` | [Desktop] B2B Platform > AI Agent | `/agent-ai/` |
| `119:1488` | [Desktop] B2B Platform > Merchant panel | `/panel-handlowca/` |
| `125:2482` | [Desktop] B2B Platform > Plans | `/plany-wiseb2b/` |
| `141:3840` | [Desktop] B2B Platform > Features | `/funkcje/` |
| `150:237` | [Desktop] B2B Platform > Integration | `/integracje/` |
| `160:1295` | [Desktop] B2B Platform > Implementation process | `/proces-wdrozenia/` |
| `160:2284` | [Desktop] Request Demo | `/zamow-demo/` |
| `160:3209` | [Desktop] Knowledge base | `/baza-wiedzy/` |
| `160:4116` | [Desktop] Knowledge base > Entry | `/baza-wiedzy/[slug]/` |

### Lokalny WordPress (offline kopia)
- Katalog: `wp/` (pełna kopia WP, Elementor theme `hello-elementor`)
- Uwaga: Elementor trzyma treść w bazie, nie w plikach. Do treści używaj `curl` na `wiseb2b.eu` (strona jest live)
- Assety WP: `wp/wp-content/uploads/2026/05/` (608 plików) i `06/` (105 plików). Screenshoty aplikacji, loga, SVG ikony (Remix Icon, MIT), tła, dekoracje, zdjęcia stockowe
- GIF-y demo: `wp/lp/gifs/` i `wp/lp/funkcjonalnosc/gifs/`
- Przykład pobrania HTML strony: `curl -s -L "https://wiseb2b.eu/podstrona/"`

### Wiedza biznesowa
Katalog `.knowledge/` zawiera materiały z NotebookLM (opisy funkcji, wartości, USP, grupy docelowe, messaging). Przy tworzeniu treści czerpać z tych materiałów. `.knowledge/screenshots` zawiera printscreeny z platformy WiseB2B.

## Stos technologiczny
- **Astro 6** z SSR (`output: 'server'`), strony mają `export const prerender = true`
- **Astro Content Collections** (5 kolekcji, patrz niżej)
- Czysty HTML/CSS, skrypty inline, brak frameworka JS
- Font: **Inter** (Google Fonts, wagi 400, 500, 600, 700)
- Node.js >= 22.12.0

## Architektura CSS
Stare pliki WP CSS zostały usunięte. Zostały tylko:

1. `public/css/bootstrap-grid.min.css` — grid, `.container` (max-width via `--container-max-width: 1140px`)
2. `public/css/swiper-bundle.min.css` — karuzele Swiper.js
3. `src/styles/tokens.css` — design tokens (kolory, fonty, spacing, radius, shadows, z-index)
4. `src/styles/global.css` (4533 linii) — wszystkie style strony: reset, typografia, header, footer, sekcje stron, komponenty, responsive

`global.css` importowany przez Astro pojawia się w `<head>` PO linkach do CSS. Nie definiować `.container` (robi to bootstrap-grid).

## Animacje
- **IntersectionObserver** — klasa `.lm-observer` (opacity 0→1), skrypt w `BaseLayout.astro`
- **Swiper.js** — karuzele testimoniali, bloga (`public/js/swiper-bundle.min.js`)
- `public/js/custom.js` — showText, animacje hero

## Struktura plików

### Layouty i komponenty
- `src/layouts/BaseLayout.astro` — główny layout, CSS, JS, IntersectionObserver, structured data
- `src/components/Header.astro` — nawigacja z submenu (hover), sticky, mobile hamburger
- `src/components/Footer.astro` — stopka (bez scoped CSS, globalne klasy)
- `src/components/CtaBlock.astro` — blok CTA z formularzami (na każdej stronie przed footerem)
- `src/components/CookieBar.astro` — pasek cookies
- `src/components/ArticleCards.astro` — lista artykułów z kolekcji

### Strony (21 plików .astro)
```
src/pages/index.astro                 /
src/pages/platforma-commerce-b2b.astro /platforma-commerce-b2b/
src/pages/agent-ai.astro              /agent-ai/
src/pages/panel-handlowca.astro       /panel-handlowca/
src/pages/funkcje.astro               /funkcje/
src/pages/integracje.astro            /integracje/
src/pages/proces-wdrozenia.astro      /proces-wdrozenia/
src/pages/bezpieczna-migracja.astro   /bezpieczna-migracja/
src/pages/plany-wiseb2b.astro         /plany-wiseb2b/
src/pages/dla-dystrybutorow.astro     /dla-dystrybutorow/
src/pages/dla-producentow.astro       /dla-producentow/
src/pages/zespol-wiseb2b.astro        /zespol-wiseb2b/
src/pages/partnerzy-wdrozeniowi.astro /partnerzy-wdrozeniowi/
src/pages/wdrozenia.astro             /wdrozenia/
src/pages/o-nas.astro                 /o-nas/
src/pages/zamow-demo.astro            /zamow-demo/
src/pages/case-study-triplex.astro    /case-study-triplex/
src/pages/case-study-vmp.astro        /case-study-vmp/
src/pages/fundusze-europejskie.astro  /fundusze-europejskie/
src/pages/baza-wiedzy/index.astro     /baza-wiedzy/
src/pages/baza-wiedzy/[...slug].astro /baza-wiedzy/[slug]/
```

### Content Collections
- `src/content/baza-wiedzy/` (4 artykuły .md)
- `src/content/funkcjonalnosci/` (16 wpisów, popup grid na `/funkcje/`)
- `src/content/obszary/` (13 wpisów, tabela porównawcza na `/plany-wiseb2b/`)
- `src/content/case-study/` (2: triplex, vmp)
- `src/content/partnerzy/` (2: satisfly, sente)

## Nawigacja (z WP, zaimplementowana w Header.astro)
```
Platforma B2B ▾
  Platforma Commerce B2B    → /platforma-commerce-b2b/
  Agent AI                  → /agent-ai/
  Panel Handlowca           → /panel-handlowca/
  Funkcje                   → /funkcje/
  Integracje                → /integracje/
  Proces wdrożenia          → /proces-wdrozenia/
  Bezpieczna migracja       → /bezpieczna-migracja/

Dla kogo? ▾
  Dla dystrybutorów         → /dla-dystrybutorow/
  Dla producentów           → /dla-producentow/

Plany WiseB2B Cloud         → /plany-wiseb2b/

Wsparcie ▾
  Zespół WiseB2B            → /zespol-wiseb2b/
  Partnerzy wdrożeniowi     → /partnerzy-wdrozeniowi/

Wdrożenia                   → /wdrozenia/
O nas                       → /o-nas/
Baza wiedzy                 → /baza-wiedzy/
[CTA] Zamów demo            → /zamow-demo/
```

## Wzorce wizualne z Figma (nowy KV)
- Header: biały, logo wise + B2B (wersja kolorowa `logo-wiseb2b.svg`), nawigacja ciemna (`#20262e`), CTA "Zamów demo" w `#512da8`
- Hero sekcje: ciemne tło z dekoracyjnym SVG (siatka linii), biały tekst, fioletowy CTA pill, badge "Commerce B2B Platform" z ikoną błyskawicy, screenshot dashboardu na dole
- Font: Inter (Manrope w Figma, ale Inter w tokenach. W WP: Roboto/Manrope mieszanka)
- Karty: biały bg, border `#cccfd5`, border-radius, lekki cień
- Sekcje na ciemnym tle: `#20262e`, border-radius 20px
- Newsletter/CTA bar: gradient fioletowy
- Footer: ciemny, 4 kolumny, ikony LinkedIn+Facebook
- Pasek funduszy EU na górze strony: zachowany

## Polecenia
```bash
npm run dev      # dev server (SSR mode, prerendered pages mogą zwracać 404)
npm run build    # produkcyjny build do dist/
npm run preview  # podgląd buildu (TUTAJ testować, wszystkie strony działają)
```

## Znane problemy / pułapki
- **Dev server vs preview**: W trybie SSR (`npm run dev`) strony z `prerender = true` mogą zwracać 404. Do testowania używać `npm run build && npm run preview`
- **Nie definiować `.container`** w global.css (robi to bootstrap-grid)
- **Scoped CSS w komponentach** psuje style. Header i Footer używają globalnych klas
- **Z-index**: header=150, top-header-bar=151, mobile-menu=200, cookie=250, modal=300
- **Sticky header**: osobne overrides dla `.header--sticky`

## Zasady pracy
- **Nie pushować automatycznie na git** — zawsze najpierw testować lokalnie
- Nowe style dodawać do `src/styles/global.css`, nie tworzyć nowych plików CSS
- Przy pracy nad stroną: porównywać z Figma (konwertować node do JSON/PNG) i z WP (curl HTML)
- Zawsze najpierw szukać zasobów lokalnie (wp/wp-content/uploads, WiseB2B.eu.fig), potem dopiero sięgać do MCP/sieci
- Używać techpage zamiast playwright jeśli wystarcza (szybsze)

## Styl pisania
- Pisz naturalnym, bezpośrednim językiem, jak programista do kolegi z zespołu
- **Zakaz myślników** (`—`, `–`) jako elementu stylistycznego
- Nie używaj bullet pointów tam, gdzie wystarczy zdanie lub dwa
- Unikaj słów typowych dla AI: "oczywiście", "z pewnością", "warto zauważyć", "należy podkreślić", "kompleksowy", "kluczowy", "istotny", "w kontekście", "co więcej", "podsumowując"
- Nie zaczynaj odpowiedzi od potwierdzenia pytania
- Preferuj krótkie zdania nad wielokrotnie złożone
