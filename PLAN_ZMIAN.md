# Plan zmian na stronie WiseB2B na podstawie prezentacji PDF

## Kontekst
Prezentacja PDF zawiera aktualną ofertę WiseB2B z nowymi elementami (AI, Panel Handlowca, technologie), których brakuje na stronie. Strona wymaga aktualizacji treści i struktury, aby odzwierciedlać obecne pozycjonowanie firmy.

---

## FAZA 1 — Szybkie zmiany tekstowe (bez nowych assetów)

### 1.1 Tytuł Jakuba Czyżkowskiego: "LIDER PROJEKTU" → "CEO"
- `src/pages/index.astro` — sekcja project leader
- `src/pages/wsparcie.astro` — sekcja CTA kontakt
- Sprawdzić inne wystąpienia w pozostałych plikach

### 1.2 Aktualizacja lat doświadczenia: "20 lat" → "25 lat"
- `src/pages/index.astro` — opis przy project leader
- `src/pages/platforma-b2b/index.astro` — sekcja konsultantów
- `src/pages/prezentacja-produktowa.astro` — "Od 21 lat" → "Od 25 lat"
- `src/pages/dla-kogo/dla-dystrybutorow.astro` — jeśli jest "20 lat"
- `src/pages/dla-kogo/dla-producentow.astro` — jeśli jest "20 lat"

### 1.3 Hero — trzeci rotating text
- `src/pages/index.astro` — zmienić "Otwieraj *nowe* kanały i modele sprzedaży" na "Skaluj *swój* biznes"

---

## FAZA 2 — Przebudowa sekcji strony głównej

### 2.1 Cztery karty feature (homepage)
**Plik:** `src/pages/index.astro`

Obecne 4 karty → zmieniają się 2 z 4:
| # | BYŁO | JEST (z PDF) |
|---|------|-------------|
| 1 | Portfolio funkcjonalności B2B | Platforma eCommerce B2B (lekka zmiana opisu) |
| 2 | **Wsparcie ekspertów i rozwój** | **Praktyczne wykorzystanie AI** |
| 3 | Mądre dopasowanie | Mądre dopasowanie (lekka zmiana opisu) |
| 4 | **Integracje** | **Panel Handlowca - sales CRM** |

Nowe opisy z PDF:
- **AI:** "Technologie AI stanowią dzisiaj podstawę wzrostu efektywności. WiseB2B wykorzystuje te możliwości, zarówno przy obsłudze klienta, jak i szybkim procesie wdrożenia nowy poziom efektywności"
- **Panel Handlowca:** "Spraw, aby obsługa Twojego klienta była zintegrowana, aby off-line i on-line mogły ze sobą płynnie współistnieć i współpracować."

**Ikony:** stworzyć proste SVG inline w kodzie, pasujące stylem do istniejących

### 2.2 Sekcja "Wierzymy" → nowe wyróżniki
**Plik:** `src/pages/index.astro`

Obecne 5 punktów → zamiana na 5 wyróżników z PDF (slajd 4):
| # | BYŁO | JEST |
|---|------|------|
| 1 | Spójne reguły handlowe to wyzwanie | **AI działający w praktyce** — Agenci AI, obsługa koszyków, mniej maili w BOK |
| 2 | Doświadczenie klienta jest priorytetem | **Spójna obsługa klienta online i offline** — moduły dla handlowców, CRM w jednym miejscu |
| 3 | Niezależność to fundament biznesu | **Niezależność to podstawa bezpieczeństwa** — SaaS lub własne serwery, open code |
| 4 | Sukces wymaga wyróżnienia i perfekcji | **Sukces wymaga wyróżnienia i perfekcji** — rozszerzenia, indywidualna rozbudowa |
| 5 | Edukacja daje przewagę | **Platforma projektowana dla B2B** — natywne B2B, nie ewoluowała z B2C |

**Ikony:** stworzyć proste SVG inline dla punktów 1, 2, 5

---

## FAZA 3 — Nowe sekcje na podstronach platformy

### 3.1 Sekcja "Dlaczego WiseB2B?" (slajd 6)
**Plik:** `src/pages/platforma-b2b/index.astro` — dodać nową sekcję

8 punktów:
1. Najnowsze technologie budowania aplikacji eCommerce
2. Zaprojektowane dla modyfikacji i rozwoju — AI wspiera tworzenie pluginów
3. Gwarancja poprawnego funkcjonowania i zgodności z prawem (vs OpenSource)
4. Metodyka wdrożeniowa — opracowana i zweryfikowana
5. Brak opłat GMV — nie płacisz prowizji od obrotu
6. WiseB2B Cloud — środowisko z n8n do integracji i automatyzacji
7. OnPremise — opcja instalacji u siebie
8. Zespół ze wsparciem Sente — 25 lat, ~100 projektów

CSS: użyć istniejących wzorców (`functions-box-white-bg` lub `about-us-rules__items`)

### ~~3.2 Sekcja technologii — POMINIĘTA (na razie nie przenosimy treści technologicznych)~~

### ~~3.3 Aktualizacja listy integracji — POMINIĘTA (brak gotowych logotypów, wrócimy później)~~

### 3.4 Dodatkowe cechy platformy (slajd 5)
**Plik:** `src/pages/platforma-b2b/index.astro` lub `funkcje.astro`

- Ekspansja zagraniczna — wielojęzyczność, wielokrajowość, VIES, VAT
- Wersja mobilna w standardzie
- SEO-friendly — zdobywanie nowych klientów

---

## FAZA 4 — Dopracowanie i nawigacja

### 4.1 Nawigacja
**Plik:** `src/components/Header.astro`
- Ewentualnie dodać "Dlaczego WiseB2B?" do submenu (jeśli sekcja 3.1 będzie osobną stroną)

### 4.2 Strona "O nas" — weryfikacja statystyk
**Plik:** `src/pages/o-nas.astro`
- Sprawdzić aktualność: 12 osób, 12+ realizacji, 8k+ klientów
- PDF mówi o "~100 projektach" (Sente) — uzgodnić czy to dotyczy WiseB2B

### 4.3 Loga "Zaufali nam" — rozszerzenie z 4 do 10 firm
**Plik:** `src/pages/index.astro`

Obecne (4): Triplex, Candellux, Raw-Pol, Łobos

Docelowe (10, dwa wiersze):
| Wiersz | Firmy |
|--------|-------|
| 1 | Triplex, Candellux, Raw-Pol, Mastermedia, Łobos |
| 2 | VMP, Momenti, TedMark, Agrotex, Intermal |

Nowe loga do pobrania/stworzenia (6 firm):
- **Mastermedia** — pobrać logo
- **VMP** — pobrać logo
- **Momenti** — pobrać logo
- **TedMark** — pobrać logo
- **Agrotex** — pobrać logo
- **Intermal** — pobrać logo ze strony https://intermal.pl/pl/

Pliki logotypów zapisać w `public/images/` (PNG/SVG, białe/przeźroczyste tło, spójna wysokość).
Dostosować grid CSS do wyświetlania 5 logotypów w wierszu (2 wiersze).

---

## Assety
Wszystkie nowe ikony SVG zostaną stworzone inline w kodzie HTML — nie potrzeba zewnętrznych plików.

---

## Pliki do modyfikacji (podsumowanie)
- `src/pages/index.astro` — hero text, feature cards, beliefs section, CEO title, years
- `src/pages/platforma-b2b/index.astro` — nowa sekcja "Dlaczego WiseB2B?", dodatkowe cechy, years
- `src/pages/wsparcie.astro` — CEO title
- `src/pages/prezentacja-produktowa.astro` — years update
- `src/components/Header.astro` — nawigacja (jeśli nowe strony)
- `src/styles/global.css` — ewentualne nowe style CSS

## Weryfikacja
1. `npm run dev` — sprawdzić wizualnie każdą zmienioną stronę
2. `npm run build` — upewnić się, że build przechodzi bez błędów
3. Porównać treść strony z PDF slajd po slajdzie
4. Sprawdzić responsywność nowych sekcji (mobile/desktop)
