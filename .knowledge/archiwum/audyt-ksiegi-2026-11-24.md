# Audyt „księgi marketingowej” względem `.knowledge/marketing/`

**Data:** 2026-11-24 · **Wzorzec:** dokumenty `marketing/` `marketing/00–07` (lipiec 2026) + decyzje CEO z listopada
**Skille:** `product-marketing` (struktura kontekstu), `obviously-awesome` (pozycjonowanie, ocena 0–10), `storybrand-messaging` (narracja, ocena 0–10), `copy-editing` (słownik i spójność)

## 1. Wynik w skrócie

| Dokument | Autor | Przed audytem | Po audycie |
|---|---|---|---|
| Kontekst marketingowy | Claude | v2: zgodny co do produktu, cen i dowodów; brak konkurencji, 2 person, triggera 10–15%; błędna anty-persona | v3: przepisany na bazie dokumentów marketing/ |
| Mapa komunikacji | Claude | v1: zgodna co do rdzenia i filarów; za wąskie ICP, brak Agenta Handlowca, ścieżki partnerskiej, zasad referencji | v2: przepisana na bazie dokumentów marketing/ |
| Informacje podstawowe | NotebookLM | zgodne z dokumentami marketing/ co do sensu; stary claim, „około 100 projektów” | nagłówek statusu, adnotacje |
| Obszary i moduły | NotebookLM | **nieaktualne ceny** 2 090 / 3 690 / 7 290, „Starter”, „eNova” | aktualne ceny i limity dopisane (stare zostawione z oznaczeniem), Start, enova365 |
| Opis modułów | NotebookLM | „Starter” (69×), „eNova”; opis Panelu Handlowca ubogi wobec 8 obszarów z marketing/ | Start, enova365; treść bez zmian |

## 2. Ocena wg metodyk

| | Pozycjonowanie (Dunford, 0–10) | Narracja (StoryBrand, 0–10) |
|---|---|---|
| Mapa v1 | **6/10**: rdzeń i filary jasne; alternatywy klienta i kategoria tylko szkicowo, ICP zbyt ogólne, brak konkurencji | **7/10**: bohater, przewodnik, plan i stawka są; problem wewnętrzny szefa sprzedaży (strach przed porażką) nienazwany |
| Dokumenty `marketing/` | **8/10**: ICP, alternatywy, konkurencja i dowody bardzo dobre; brak jednego zdania pozycjonującego i jasnej kategorii | n/d (to materiał sprzedażowy, nie narracja) |
| Mapa v2 | **9/10**: pełny canvas, kategoria „pośrodku między SaaS a open source”, statement, sytuacje wejścia; do 10 brakuje wywiadów z klientami (dlaczego nas wybrali) | **8/10**: dodany problem wewnętrzny i lęki komitetu; do 10 brakuje sprawdzenia na stronie i one-linera przetestowanego na klientach |

## 3. Najważniejsze rozbieżności (dotychczasowe opracowania Claude vs dokumenty `marketing/`)

| # | Było (mapa/kontekst) | Dokumenty `marketing/` | Status |
|---|---|---|---|
| 1 | ICP: „ERP z listy” jako warunek; SAP/Oracle/Dynamics w anty-personie | SAP itd. **nie są** anty-personą; problemem jest brak ERP | poprawione |
| 2 | brak | główny trigger: e-commerce robi 10–15% sprzedaży („wejdź na WYŻSZY poziom”) | dodane jako sytuacja wejścia 1 |
| 3 | „od 20 mln zł” | dystrybutor 20–600 mln, producent 20–300 mln, decyzja właścicielska, korporacje odpadają | dodane |
| 4 | 4 persony | 5 ról + producent; szef sprzedaży = inicjator, boi się porażki; relacja właściciel–właściciel | dodane |
| 5 | „[NEED: analiza konkurencji]” | 15 konkurentów z argumentami; Comarch e-Sklep jako źródło leadów | dodane |
| 6 | brak | lekcje z przegranych deali (vendor lock nie dotarł, „za mali”, wizual, koszt) | dodane |
| 7 | Agent Klienta i Administratora | + **Agent Handlowca**; Panel Handlowca: 8 obszarów | dodane |
| 8 | brak | model dostarczania: ścieżka partnerska („dwie umowy”) i bezpośrednia | dodane |
| 9 | 3 filary | 8 propozycji wartości (+ ekspansja, fashion, producenci, SEO) | VP#1–8 w mapie stron |
| 10 | logotypy jako klienci | potwierdzeni tylko VMP i Triplex; reszta może być klientami Sente | zasada referencji + pytanie do CEO |
| 11 | brak | limity pakietów, kotwica wdrożenia 50–60 tys. zł, subskrypcja 5–10 tys. zł/mies. | dodane (kotwica: tylko sprzedaż) |
| 12 | brak | hasła z warsztatów i „propozycja współpracy” zamiast „oferta” | dodane |

## 4. Sprzeczności do decyzji CEO

| # | Temat | Wersja A | Wersja B | Rekomendacja |
|---|---|---|---|---|
| P39 | Zespół WiseB2B | 5 osób dedykowanych + Sente ~150 (marketing/) | 15 osób (strona z maja i PM, przywrócone na stronie v4) | a) marketing/: „5 osób + zaplecze Sente” |
| P40 | Sente | około 100 projektów (NotebookLM, strona) | ponad 120 projektów (marketing/, partnerzy) | a) ponad 120 wszędzie |
| P41 | Logotypy „Zaufali nam” | wszystkie obecne | tylko potwierdzeni klienci WiseB2B | lista do zatwierdzenia |
| P42 | Client API | „tego nie daje żadne inne narzędzie” | bez twierdzenia o unikalności (strona v4) | wg decyzji CEO |
| P43 | Integrator | Apilo (nazwa produktu) | „Aplio” (marketing/) | Apilo, jeśli to ten produkt |

## 5. Co z tego wynika dla strony (do zrobienia po decyzjach)

1. Teksty: wrócić do głosu CEO (sytuacja B), zamiast tekstów pisanych od nowa.
2. Dla producentów: konfigurator, zlecenia produkcyjne i limity kontraktowe opisać jako funkcje, bez zastrzeżenia „rozszerzenie” (zasada „nie podważamy funkcji”).
3. Agent AI i Panel Handlowca: dodać Agenta Handlowca i komplet 8 obszarów Panelu.
4. Dla dystrybutorów: trigger 10–15% jako pierwsza sytuacja wejścia.
5. Partnerzy: ścieżka „dwie umowy” i wybór partnera.
6. Vendor lock: mówić wcześnie (lekcja z inTradus).
7. Spójność liczb po decyzjach P39–P40.
