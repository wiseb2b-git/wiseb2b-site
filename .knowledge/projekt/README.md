# .knowledge: spis katalogu (wiedza o WiseB2B dla strony i skilli)

> W głównym katalogu `.knowledge/` leży **tylko księga marketingowa**: `WiseB2B - kontekst marketingowy.md` (MASTER) i `WiseB2B - mapa komunikacji.md`. Wszystko inne to materiały wspierające w podkatalogach.

Stan: 2026-11-24. Katalog jest wewnętrzny. Dopóki repo GitHub jest publiczne, nowe i przeniesione pliki nie są commitowane.

## Hierarchia (kto jest źródłem prawdy czego)

| Poziom | Plik / folder | Rola | Kto edytuje |
|---|---|---|---|
| 0 | `projekt/ustalenia-projektu.md` | decyzje CEO z sesji, zasady treści, stan prac; **czytać na starcie każdej sesji** | Claude po każdej decyzji (z datą) |
| 1 | `WiseB2B - kontekst marketingowy.md` | **MASTER dla skilli marketingowych i strony www**: produkt, ICP, persony, konkurencja (skrót), wyróżniki, obiekcje, język klienta, głos marki, słownik, dowody, ceny. Jedyny plik, który czytają skille (`.agents/product-marketing.md` to symlink do niego) | Claude wg skilla `product-marketing`; zmiany faktów tylko z poziomów 0, 2, 3 |
| 2 | `marketing/00–07` | **MASTER wiedzy sprzedażowej** CEO (lipiec 2026): pełne persony, talk tracki konkurencji, przegrane deale, proces zakupu, scoring, lista klientów | **tylko do odczytu**: to kopia z innego repo CEO; poprawki wnosić tam |
| 3 | `zrodla/*.pdf` | materiały CEO: szkolenia gid360, opis rozwiązania, przykłady wdrożeń, case VMP, prezentacja, dystrybucja odzieży, zaproszenie do Panelu Handlowca | nie edytujemy |
| widok | `WiseB2B - mapa komunikacji.md` | stała warstwa komunikacji strony: rdzeń marki, pozycjonowanie, filary, warstwa bezpieczeństwa, mapa stron. **Nie ma własnych faktów**: liczby i słownik bierze z kontekstu | Claude |
| katalog | `produkt/` | opisy 37 modułów (szablon: metryczka, opis biznesowy, technika), cennik modułów, kalkulacja CSV. Źródło dla stron Funkcje i Plany | Claude (punktowo, bez usuwania liczb) |
| teksty | `teksty/<strona>.md` | **copy deck**: gotowy tekst każdej strony, sekcja po sekcji w kolejności z Figmy (skill `copywriting`, metoda B: głos CEO + fakty z kontekstu). Źródło dla implementacji w `src/` | agenci copywritingu; zmiany tekstu najpierw tutaj, potem w kodzie |
| — | `projekt/decyzje-do-podjecia.md` | wszystkie otwarte sprzeczności faktów do decyzji CEO | Claude; po decyzji: przenieść do `.knowledge/projekt/ustalenia-projektu.md` |
| archiwum | `archiwum/` | `informacje podstawowe` (NotebookLM, marzec 2026: **próbka głosu CEO**, fakty częściowo nieaktualne); audyt z 2026-11-24 | nie edytujemy |
| media | `screenshots/` | zrzuty ekranów platformy | |

## Zasada przy sprzecznościach

Decyzje CEO z sesji (poziom 0) > dokumenty `marketing/` (2) > PDF-y (3) > strona z maja > `produkt/` i `archiwum/`.
Sprzeczność, której nie rozstrzyga ta kolejność, trafia do `.knowledge/projekt/decyzje-do-podjecia.md`. Liczb nie usuwamy bez zgody CEO.

## Jak używają tego skille

| Skill | Czyta | Po co |
|---|---|---|
| `product-marketing` | kontekst (przez `.agents/product-marketing.md`) | aktualizacja kontekstu |
| `copywriting`, `copy-editing` | kontekst; przy stronach: mapa | teksty strony; **głos CEO = sytuacja B** (poprawiać, nie pisać od nowa); próbka głosu w `archiwum/` i na stronie z maja |
| `storybrand-messaging`, `obviously-awesome` | kontekst + mapa | narracja i pozycjonowanie |
| `wiseb2b-marketer` (konto) | swoją treść (częściowo nieaktualną) | posty i maile; przed użyciem porównać z kontekstem |

Opis skilli: `../.claude/README.md`.
