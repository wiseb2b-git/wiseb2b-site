# Audyt migracji WP → Astro: Plan poprawek

## Kontekst

Migracja strony wiseb2b.eu z WordPressa (Elementor) na Astro SSG. Źródła prawdy: projekt Figma (wizualna), aktualna strona WP (treści, ikony), stara strona (baza treściowa). Audyt porównuje stan 21 stron Astro z Figmą (18 designów) i żywą stroną WP (17 podstron). Celem jest lista poprawek: co brakuje, co się różni, co jest zepsute.

---

## I. Problemy globalne (wszystkie strony)

### 1. Mobile: niespójne breakpointy
CSS używa trzech różnych breakpointów "mobile": 743px, 767px, 768px. Zmienne CSS (`--bp-sm: 743px`) są zdefiniowane, ale nigdy nie użyte w media queries. Między 743-767px niektóre komponenty są w trybie mobile, inne jeszcze nie.

**Fix:** Zunifikować do jednego breakpointu (767px). Użyć zmiennych CSS w media queries.

### 2. Mobile: za małe touch targety
- Linki w mobile nav: ~34px (min. 44px)
- Kropki paginacji w testimonialach: 12x12px
- Linki w footerze: brak min-height

**Fix:** Zwiększyć padding w mobile nav, dodać większy clickable area na kropkach (pseudo-element).

### 3. Mobile: brak breakpointu <480px
Tylko jedna reguła dla `max-width: 480px`. Na iPhone SE (320px) `.main-claim-heading` (3.6rem) będzie za duży, footer grid może się rozjechać.

**Fix:** Dodać `@media (max-width: 480px)` z redukcją fontów hero, uproszczeniem grida footera.

### 4. FAQ niedziałające na 2 stronach
`dla-dystrybutorow.astro` i `dla-producentow.astro` mają sekcje FAQ bez `<script>` do obsługi akordeonu. Kliknięcie nic nie robi.

**Fix:** Dodać skrypt akordeonu (taki jak na `platforma-commerce-b2b.astro` lub `plany-wiseb2b.astro`).

### 5. Literówki
| Strona | Błąd | Poprawka |
|---|---|---|
| agent-ai.astro:94 | "efekywnosci" | "efektywnosci" |
| panel-handlowca.astro | "wsopolpraca" | "wspolpraca" |
| panel-handlowca.astro | "okazcja" | "okazja" |
| dla-dystrybutorow.astro:103 | "stretegii" | "strategii" |

### 6. Scoped style w stronach zamiast global.css
`o-nas.astro` (~220 linii), `agent-ai.astro`, `panel-handlowca.astro`, `partnerzy-wdrozeniowi.astro` mają style scoped/inline. Projekt wymaga wszystkich styli w `global.css`.

**Fix:** Przenieść style do `global.css`, usunąć bloki `<style>` ze stron.

### 7. Linki do artykułów bazy wiedzy na stronach "Dla kogo"
`dla-dystrybutorow.astro`, `dla-producentow.astro`, `wdrozenia.astro` mają ręcznie wpisane linki do artykułów `/baza-wiedzy/...`. To są statyczne strony z celowo dobranymi artykułami, nie dynamiczny listing. Na `wdrozenia.astro` jest zduplikowany excerpt (ten sam tekst pod dwoma różnymi artykułami).

**Fix:** Poprawić zduplikowany excerpt na `wdrozenia.astro`. Resztę zostawić jak jest.

### 8. Duplikacja szablonu case study
Oryginalnie (commit `4686417`) istniał jeden dynamiczny szablon `src/pages/case-study/[...slug].astro`. Podczas późniejszej migracji ten plik został usunięty (jest w git status jako Deleted), a w zamian powstały dwa niezcommitowane pliki `case-study-triplex.astro` i `case-study-vmp.astro` z identycznym kodem. Plus encoding bug w VMP ("Kluczowe rozwiÄ…zania" zamiast "rozwiązania").

**Fix:** Przywrócić dynamiczny `src/pages/case-study/[...slug].astro` z kolekcji content, usunąć dwa osobne pliki. Sprawdzić redirecty w `_redirects`.

### 9. SEO: brakujące/słabe meta
- `index.astro`: tytuł "Strona glowna" (powinien: "WiseB2B - Platforma eCommerce B2B")
- `o-nas.astro`: brak `<h1>` (używa `<h2>` jako główny nagłówek)
- `funkcje.astro`: h1 wygląda jak subheader, h2 jest wizualnie główny

**Fix:** Poprawić tytuły i hierarchię nagłówków.

---

## II. Porównanie strona po stronie: Figma vs Astro vs WP

### Homepage (`/`) — Figma node `1:2`

| Sekcja (Figma) | W Astro? | W WP? | Status |
|---|---|---|---|
| Hero z badge + dashboard screenshot | ✅ | ✅ | OK, ale wizualnie różni się od Figmy |
| Dashboard screenshot pod hero | ✅ | ✅ | OK |
| "Dlaczego WiseB2B?" 5 kart | ⚠️ 6 kart | ✅ 5 kart | Astro ma 6, Figma/WP mają 5. Zweryfikować treści |
| Case study Triplex | ✅ | ✅ | OK |
| Logo marquee "Zaufali nam" | ✅ | ✅ | OK |
| Blog artykuły (4 karty) | ✅ dynamiczne | ⚠️ 2 artykuły | Astro lepsze (4 dynamiczne) |
| CTA sekcja ze zdjęciem | ✅ "partnership" | ✅ "25 lat" | Inna treść, sprawdzić z Figmą |
| Agent AI demo sekcja | ✅ 1 karta | ✅ karuzela 6 slajdów | WP ma karuzele features, Figma ma sekcję AI Agent. Astro ma uproszczoną wersję |
| Testimoniale | ✅ 1 cytat | ✅ karuzela | Figma: 1 cytat Triplex. Astro OK |

**Do zrobienia:**
- Zmniejszyć "Dlaczego WiseB2B" z 6 do 5 kart. Usunąć kartę #6 "Mądre dopasowanie do Twojego biznesu" (nie istnieje w Figmie ani WP). Tytuły kart w Astro są dłuższe niż w WP, ale bliższe Figmie. Zostawić obecne brzmienie Astro.
- Porównać wizualnie hero z Figmą (renderować node `1:2`)
- Sekcja partnership/about: sprawdzić z Figmą czy to "25 lat doświadczenia" czy obecna wersja

### Platforma Commerce B2B (`/platforma-commerce-b2b/`) — Figma `95:64`

| Sekcja (Figma) | W Astro? | Status |
|---|---|---|
| Hero | ✅ | OK |
| 4 feature rows (B2B first, AI, Panel, Kod) | ✅ | OK |
| "Co więcej w WiseB2B?" grid | ✅ | OK |
| Bezpieczeństwo (5 kart) | ✅ | OK |
| Technologia (4 karty) | ✅ | OK |
| "Jest dla Ciebie jeśli" checklist | ✅ | OK |
| FAQ | ✅ z akordeonem | OK |

**Status: Dobra.** Najbardziej dopracowana strona. Porównać wizualnie z Figmą.

### Agent AI (`/agent-ai/`) — Figma `117:384`

| Sekcja (Figma) | W Astro? | Status |
|---|---|---|
| Hero | ✅ | OK |
| 3 karty technologii | ✅ | OK |
| Use cases (scenariusze) | ✅ 2 use cases | Figma: sekcja "Przykładowe scenariusze" z większą liczbą. Sprawdzić |
| "Dlaczego AI Agent?" stats | ✅ tabela porównawcza | Inna forma: Astro ma tabelę, Figma ma stats grid |
| Demo CTA ze screenshotem | ✅ | OK |
| YouTube embed | ✅ | Brak w Figmie, jest w WP. Zachować |

**Do zrobienia:**
- Literówka "efekywnosci"
- Przenieść scoped style do global.css
- Porównać wizualnie sekcję stats z Figmą

### Panel Handlowca (`/panel-handlowca/`) — Figma `119:1488`

| Sekcja (Figma) | W Astro? | Status |
|---|---|---|
| Hero | ✅ | OK |
| 3 value props | ✅ | OK |
| 6 obszarów funkcjonalnych (dark grid) | ✅ | OK |
| 3 feature sections ze screenshots | ✅ | OK |
| "Korzyści dla firmy" checklist | ✅ 4 punkty | OK |

**Do zrobienia:**
- Literówki "wsopolpraca", "okazcja"
- Usunąć osierocone CSS `.ph-early-adopter`
- Przenieść scoped style do global.css

### Funkcje (`/funkcje/`) — Figma `141:3840`

| Sekcja (Figma) | W Astro? | Status |
|---|---|---|
| Hero | ✅ | Odwrócona hierarchia h1/h2 |
| 3 persona cards | ✅ | OK |
| "Pełne wsparcie procesu" (dark section) | ✅ | OK |
| "Większa wartość zamówień" | ✅ | OK |
| "Dział sprzedaży" (3 karty) | ✅ | OK |
| Feature grid popup (16 funkcji) | ✅ dynamicznie | OK |
| FAQ | ⚠️ Figma ma, sprawdzić Astro | Sprawdzić |

**Do zrobienia:** Poprawić hierarchię h1/h2.

### Integracje (`/integracje/`) — Figma `150:237`

| Sekcja (Figma) | W Astro? | Status |
|---|---|---|
| Hero | ✅ | OK |
| 3 benefit boxes | ✅ | OK |
| ERP logos | ✅ | Generic alt text |
| API Admin vs Client diagram | ✅ | OK |
| Płatności + headless | ✅ | OK |
| n8n automatyzacja | ✅ | OK |

**Status: Dobra.** Poprawić alt texty na logo ERP.

### Proces wdrożenia (`/proces-wdrozenia/`) — Figma `160:1295`

| Sekcja (Figma) | W Astro? | Status |
|---|---|---|
| Hero | ✅ | OK |
| 6 kroków procesu | ✅ | Kroki 5-6 brak ilustracji, niekonsekwentna numeracja ("/ 01" vs "/ 5") |
| FAQ | Figma ma | Sprawdzić czy jest w Astro |

**Do zrobienia:**
- Ujednolicić numerację: zmienić `/ 5` → `/ 05` i `/ 6` → `/ 06` (linie 138 i 156)
- Dodać ilustracje do kroków 5-6 (lub usunąć z 1-4, do ustalenia)
- Usunąć pusty `<p>` tag (linia 9)

### Bezpieczna migracja (`/bezpieczna-migracja/`) — Figma `68:1210`

**Status: OK.** Prosta strona, 4 kroki migracji. Usunąć pusty `col-lg-10` div.

### Plany WiseB2B (`/plany-wiseb2b/`) — Figma `125:2482`

**Status: Bardzo dobra.** Jedna z najlepszych stron. 3 plany, tabela porównawcza, FAQ. Brak problemów.

### Dla dystrybutorów (`/dla-dystrybutorow/`) — Figma `68:124`

| Sekcja (Figma) | W Astro? | Status |
|---|---|---|
| Hero | ✅ | OK |
| "Przenieś 95% sprzedaży" (feature + screenshot) | ✅ | OK |
| "Zbuduj lojalność" (dark feature) | ✅ | OK |
| Benefit cards | ✅ | OK |
| Case study Triplex | ✅ | OK |
| Blog artykuły | ⚠️ hardcoded | Powinno dynamicznie z kolekcji |
| FAQ | ⚠️ niedziałające | Brak skryptu akordeonu |

**Do zrobienia:** FAQ script (skopiować z `platforma-commerce-b2b.astro`), literówka "stretegii" → "strategii".

### Dla producentów (`/dla-producentow/`) — Figma `61:2815`

Jak dla dystrybutorów, plus: case study Triplex (dystrybutor pirotechniki) nie pasuje do strony o producentach. Ale WP i Figma też używają Triplexa, bo nie ma innego case study. Zostawić.

**Do zrobienia:** FAQ script (skopiować z `platforma-commerce-b2b.astro`).

### Zespół WiseB2B (`/zespol-wiseb2b/`) — Figma `51:1818`

**Status: OK.** 4-filarowa struktura (Doradztwo, Wdrożenie, Utrzymanie, Infrastruktura) zgodna z Figmą i WP.

### Partnerzy wdrożeniowi (`/partnerzy-wdrozeniowi/`) — Figma `51:875`

| Sekcja (Figma) | W Astro? | Status |
|---|---|---|
| Hero | ✅ | OK |
| Karty partnerów (Sente, Satisfly) | ✅ dynamiczne | OK |
| 6 benefit boxes "Dlaczego warto" | ✅ | OK |
| Partner CTA | ✅ | OK |

**Status: OK.** Przenieść scoped style do global.css.

### Wdrożenia (`/wdrozenia/`) — Figma `51:2`

| Sekcja (Figma) | W Astro? | Status |
|---|---|---|
| Hero | ✅ | OK |
| 2 case studies (Triplex, VMP) | ✅ | OK |
| Testimoniale | ✅ slider | OK |
| Blog artykuły | ✅ statyczne linki | Zduplikowany excerpt jednego artykułu |

**Do zrobienia:** Poprawić zduplikowany excerpt (artykuł "Korzyści z wdrożenia platformy B2B" ma excerpt z innego artykułu).

### O nas (`/o-nas/`) — Figma `35:2`

| Sekcja (Figma) | W Astro? | W WP? | Status |
|---|---|---|---|
| Hero ze zdjęciem zespołu | ✅ | ✅ | OK |
| "Ponad 20 lat" info block | ✅ | ✅ "25 lat" | WP ma nowszą treść. Astro: "20 lat", WP: "25 lat" |
| 3 wartości | ✅ | ✅ | OK |
| Stats bar | ✅ (12 osób, 12+, 8k+) | ✅ (15 osób, 12+, 20k+) | WP ma nowsze liczby! |
| Testimoniale | ✅ | ✅ | OK |
| "Dołącz do nas" + dane rejestrowe | ✅ | ✅ | OK |

**Do zrobienia:**
- Dodać `<h1>` (brak!). Treść: "Pomagamy firmom skutecznie rozwijać cyfrową sprzedaż" (z Figmy i WP)
- Zaktualizować statystyki: `12` → `15` osób, `8k+` → `20k+` użytkowników (aktualne wartości z WP)
- Realizacje zostawić `12+` (zgodne WP i Astro)
- Dodać zdanie "Od ponad 25 lat wspieramy firmy w cyfryzacji sprzedaży B2B" (jest na WP, brak w Astro)
- Przenieść scoped style (~220 linii) do global.css

### Zamów demo (`/zamow-demo/`) — Figma `160:2284`

**Status: OK.** Formularz, agenda, hero. Sprawdzić czy endpoint `/api/contact/` działa na Netlify.

### Case study Triplex/VMP

**Do zrobienia:**
- Połączyć w jeden `[slug].astro`
- Naprawić encoding bug w VMP ("Kluczowe rozwiązania")

### Baza wiedzy (`/baza-wiedzy/`) — Figma `160:3209`

| Sekcja (Figma) | W Astro? | Status |
|---|---|---|
| Hero (niższy, 340px) | ✅ | OK |
| Filtry kategorii | ✅ | OK |
| Grid artykułów | ✅ dynamiczne | OK |
| Paginacja | ⚠️ pusty div | Brak implementacji |

**Do zrobienia:** Zaimplementować paginację lub usunąć pusty div.

### Baza wiedzy entry (`/baza-wiedzy/[slug]/`) — Figma `160:4116`

**Status: OK.** Dynamiczny routing, structured data, powiązane artykuły.

---

## III. Treści: Astro vs WP

User poprosił o ocenę, które treści są lepsze. Moja analiza:

| Strona | Lepsze w: | Dlaczego |
|---|---|---|
| Homepage | **Astro** | Więcej artykułów (4 vs 2), dynamiczne z kolekcji |
| O nas | **WP** | Nowsze statystyki (15 osób vs 12, 20k+ vs 8k+), "25 lat" vs "20 lat" |
| Dla dystrybutorów | **Astro** | WP ma "Lorem ipsum" w podtytule bloga! |
| Dla producentów | **Astro** | WP ma "Lorem ipsum" w podtytule bloga! |
| Plany WiseB2B | **Równe** | Identyczna struktura i treść |
| Platforma Commerce B2B | **Równe** | Astro ma FAQ, WP nie |
| Reszta stron | **Równe** | Treści zbieżne, drobne różnice słowne |

**Wniosek:** Nie kopiować treści 1:1 z WP. Zaktualizować konkretne rzeczy:
- `/o-nas/`: statystyki `12` → `15` osób, `8k+` → `20k+` użytkowników
- `/o-nas/`: dodać zdanie "Od ponad 25 lat wspieramy firmy w cyfryzacji sprzedaży B2B"
- `/index.astro`: usunąć 6. kartę "Dlaczego WiseB2B" ("Mądre dopasowanie"), zostawić 5
- `/index.astro`: tytuł strony "Strona glowna" → "WiseB2B - Platforma eCommerce B2B"
- `/wdrozenia.astro`: poprawić zduplikowany excerpt artykułu

---

## IV. Ikony i assety

WP używa ikon Remix Icon (MIT, SVG) z `wp-content/uploads/`. Astro ma własne SVG w `public/svg/`. Trzeba porównać zestaw ikon.

**Do zrobienia:** Zrobić przegląd ikon na stronach WP vs Astro. Szczególnie:
- Ikony w "Dlaczego WiseB2B?" (homepage)
- Ikony w "Co zawiera Cloud?" (plany)
- Ikony w "Obszary funkcjonalne" (panel-handlowca)
- SVG dekoracyjne w hero sekcjach

---

## V. Wizualne porównanie z Figmą (wymaga renderowania)

Najważniejsze strony do renderowania z Figmy i porównania pixel-by-pixel:

1. **Homepage hero** (node `1:2`) — user zgłosił że "wygląda zupełnie inaczej"
2. **Platforma Commerce B2B** (node `95:64`) — referencyjna "dobra" strona
3. **O nas** (node `35:2`) — sprawdzić układ wartości
4. **Plany WiseB2B** (node `125:2482`) — tabela porównawcza

---

## VI. Priorytetyzacja

### Faza 1: Szybkie fixy (global)
1. Literówki (4 strony)
2. FAQ script na `dla-dystrybutorow` i `dla-producentow`
3. Tytuł homepage "Strona glowna" → "WiseB2B - Platforma eCommerce B2B"
4. `<h1>` na `o-nas.astro`
5. Statystyki na `o-nas.astro` (15 osób, 20k+)
6. Pusty `<p>` w `proces-wdrozenia`, pusty div w `bezpieczna-migracja`

### Faza 2: Mobile (global)
1. Zunifikować breakpointy (767px)
2. Touch targety w mobile nav i testimonial dots
3. Breakpoint 480px dla małych ekranów
4. Redukcja `.main-claim-heading` na mobile

### Faza 3: Porządki kodowe (global)
1. Przenieść scoped styles do global.css (4 strony: o-nas, agent-ai, panel-handlowca, partnerzy-wdrozeniowi)
2. Przywrócić dynamiczny `case-study/[...slug].astro`, usunąć 2 osobne pliki
3. Poprawić zduplikowany excerpt na wdrozenia.astro
4. Usunąć osierocone CSS `.ph-early-adopter` w panel-handlowca
5. Pusty div w bezpieczna-migracja, pusty `<p>` w proces-wdrozenia

### Faza 4: Wizualne dopasowanie do Figmy (strona po stronie)
1. Homepage hero — renderować Figmę, porównać, dopasować
2. Każda kolejna strona: render → porównanie → poprawki CSS

### Faza 5: Ikony i assety
1. Przegląd brakujących ikon z WP
2. Aktualizacja SVG na nowe wersje z WP

---

## VII. Weryfikacja

Po każdej fazie:
- `npm run build` — czy buduje się bez błędów
- `npm run preview` — przejść wszystkie strony wizualnie
- Sprawdzić na mobile (DevTools, 375px i 320px)
- Porównać kluczowe strony z renderowaną Figmą
