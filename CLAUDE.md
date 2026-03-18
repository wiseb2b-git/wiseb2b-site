# WiseB2B Site — migracja WordPress → Astro

## Co to jest
Strona marketingowa firmy WiseB2B (platforma e-Commerce B2B) migrowana z WordPressa (wiseb2b.eu) do Astro SSG. Cel: wierna kopia wizualna oryginału, łatwiejsze utrzymanie, możliwość edycji treści przez marketing via GitHub.

## Lokalizacja
- Projekt: `C:\projects\wiseb2_site`
- GitHub: `https://github.com/wiseb2b-git/wiseb2b-site.git` (publiczne)
- Netlify: auto-deploy z GitHub
- Oryginalna strona: `https://wiseb2b.eu`

## Wiedza biznesowa
Katalog `.knowledge/` zawiera materiały z NotebookLM — wiedzę biznesową o produkcie WiseB2B (opisy funkcji, wartości, USP, grupy docelowe, messaging). Przy tworzeniu i edycji treści na stronach należy czerpać z tych materiałów, aby zapewnić spójność komunikacji marketingowej.

## Stos technologiczny
- **Astro 6** (SSG, `trailingSlash: 'always'`)
- **Astro Content Collections** — blog w `src/content/baza-wiedzy/*.md`
- **Brak frameworka JS** — czysty HTML/CSS, skrypty inline
- Font: **Sora** (Google Fonts, wagi 300, 400, 600, 700)
- Node.js >= 22.12.0

## Architektura CSS — KLUCZOWE
Strona używa **4 oryginalnych plików CSS z WordPressa** + 1 własny override. Kolejność ładowania ma znaczenie!

1. `public/css/bootstrap-grid.min.css` — grid, kontener (max-width: 1220px na >=1280px)
2. `public/css/swiper-bundle.min.css` — karuzele
3. `public/css/slick.min.css` — slidery
4. `public/css/theme-inline.css` (90KB) — wyekstrahowany z inline `<style>` WordPressa. Zawiera: header, submenu, single-post layout, knowledge-bases-top, footer, single-author-bottom
5. `public/css/otree.css` (134KB) — motyw WiseB2B: animacje, keyframes, specyficzne style stron
6. `public/css/styles.min.css` (203KB) — dodatkowe style: box-posts, page-entry-content (h1-h5, p, ul, ol, a, table), single-content-white, articles-filter, knowledge-bases
7. `src/styles/global.css` — **nasz plik z overrides** (reset, zmienne, z-index fix, ścieżki do assetów, lm-observer animacje, zmniejszone menu/pasek EU)

**WAŻNE**: `global.css` importowany przez Astro jako `import` pojawia się w `<head>` PO linkach do CSS. Dlatego może nadpisywać style z plików 1-6. Nie definiujemy tu `.container` — to robi bootstrap-grid.

### Ścieżki assetów — overrides w global.css
WordPress CSS odwołuje się do `/wp-content/themes/wiseb2b/assets/...`. Zamiast modyfikować oryginalne CSS, dodajemy overrides:
- `.support-cta__data` → `url("/images/cta-support.png")`
- `.header .nav-menu li.submenu a:before` → `url("/svg/arrow-menu.svg")`

## Animacje — dwa systemy
1. **WOW.js** (`public/js/wow.min.js`) — klasa `.wow` na elementach, triggeruje animacje przy scrollu. Na hero strony głównej użyto klasy `animated` (bez `wow`) żeby animacja grała od razu.
2. **IntersectionObserver** — klasa `.lm-observer` (opacity 0→1). Skrypt w `BaseLayout.astro`. Używane na wielu podstronach (Wsparcie, Wdrożenia, Baza wiedzy).

## Struktura plików

### Layouty i komponenty
- `src/layouts/BaseLayout.astro` — główny layout, ładuje CSS, JS, IntersectionObserver
- `src/components/Header.astro` — menu z submenu popupami (hover), sticky header, mobile hamburger
- `src/components/Footer.astro` — stopka (bez scoped CSS, korzysta z globalnych)
- `src/components/CookieBar.astro` — pasek cookies
- `src/components/ArticleCards.astro` — reużywalny komponent listy artykułów z kolekcji

### Strony
- `src/pages/index.astro` — strona główna z hero, animacjami WOW.js
- `src/pages/wsparcie.astro` — wsparcie
- `src/pages/wdrozenia.astro` — wdrożenia
- `src/pages/o-nas.astro` — o nas
- `src/pages/prezentacja-produktowa.astro` — formularz demo
- `src/pages/fundusze-europejskie.astro` — fundusze EU
- `src/pages/platforma-b2b/` — index, funkcje, wersje, integracje, proces-wdrozenia, bezpieczna-migracja
- `src/pages/dla-kogo/` — index, dla-dystrybutorow, dla-producentow
- `src/pages/baza-wiedzy/index.astro` — listing artykułów (z Content Collection)
- `src/pages/baza-wiedzy/[...slug].astro` — strona pojedynczego artykułu

### Blog (Content Collections)
- `src/content.config.ts` — schemat kolekcji `baza-wiedzy`
- `src/content/baza-wiedzy/*.md` — artykuły w markdown z frontmatter:
  ```yaml
  title, description, category, image, date, author, authorJob, authorImage, authorBio (opcjonalne)
  ```
- Aby dodać artykuł: stworzyć plik `.md` w `src/content/baza-wiedzy/`, push na GitHub → Netlify przebuduje
- Aby wyświetlić artykuły na podstronie: `<ArticleCards slugs={['slug1','slug2']} />`

### Style artykułu
- Strona listingu (`/baza-wiedzy/`) — fioletowe hero (`.knowledge-bases-top`), lista z filtrowaniem kategorii
- Strona artykułu (`/baza-wiedzy/[slug]/`) — BEZ fioletowego hero, jasne tło, meta (kategoria, autor, data), tytuł, obrazek (`.single-image`), treść w `.single-content`, sekcja autora (`.single-author-bottom`)

## Skąd brać oryginalne treści i grafiki
1. **Teksty stron**: skopiowane z `https://wiseb2b.eu/[podstrona]/` — pobierano HTML przez curl, wycinano treść
2. **CSS**: pobrane z oryginalnej strony:
   - `otree.css` z `/wp-content/themes/wiseb2b/otree/styles/style.css`
   - `styles.min.css` z `/wp-content/themes/wiseb2b/assets/css/styles.min.css`
   - `theme-inline.css` wyekstrahowany z inline `<style>` w `<head>` strony głównej
   - `bootstrap-grid.min.css` z `/wp-content/themes/wiseb2b/assets/css/bootstrap-grid.min.css`
3. **Grafiki**: `public/images/` — pobrane z `wiseb2b.eu/wp-content/uploads/...`
4. **SVG**: `public/svg/` — logo, ikony, strzałka menu
5. **JS**: `public/js/` — wow.min.js, swiper-bundle.min.js, custom.js (showText, animacje hero)
6. **Artykuły bloga**: wyekstrahowane skryptem `extract_final2.cjs` z pobranych HTML-i artykułów (`tmp_article_*.html`)

## Pliki tymczasowe do usunięcia
W katalogu głównym projektu: `tmp_*.html`, `tmp_*.json`, `extract*.cjs`, `debug_article.cjs` — skrypty ekstrakcji, już niepotrzebne.

## Znane problemy / pułapki
- **Nie definiować `.container`** w global.css — bootstrap-grid to robi, a Astro import nadpisuje
- **Scoped CSS w komponentach** psuje style — Header i Footer MUSZĄ używać globalnych klas bez `<style>`
- **Hero animacje** na stronie głównej: klasa `animated` (nie `wow`) żeby grały bez scrollu
- **Z-index**: header=150, top-header-bar=151 (feature boxy mają z-index:100)
- **Sticky header**: osobne CSS overrides dla `.header--sticky` (77px) vs normalny (97px)
- **WordPress asset paths**: CSS odwołuje się do `/wp-content/...` — naprawiamy overrides w global.css, nie modyfikujemy oryginalnych CSS

## Polecenia
```bash
npm run dev      # dev server
npm run build    # produkcyjny build do dist/
npm run preview  # podgląd buildu
```

## Zasady pracy
- **Nie pushować automatycznie na git** — zawsze najpierw testować lokalnie
- Przy nowych podstronach: kopiować HTML z oryginału, używać oryginalnych klas CSS
- Przy problemach z CSS: szukać w theme-inline.css, otree.css i styles.min.css (w tej kolejności)
- Nowe overrides dodawać do `src/styles/global.css`, nie modyfikować oryginalnych plików CSS
- staraj się używać techpage zamiast playwright jeśli to wystarcza, bo jest znacznie szybsze. 
