# Ustalenia projektu strony WiseB2B (dla każdej sesji)

Plik wewnętrzny. Tu zapisujemy decyzje, zasady i stan prac, które muszą przetrwać między sesjami. **Nie używamy pamięci Claude** (decyzja CEO 2026-11-24). Przy każdej istotnej decyzji: dopisz ją tutaj z datą.

Ostatnia aktualizacja: 2026-11-24.

---

## 1. Kto i co

- Użytkownik: **Jakub Czyżkowski, CEO WiseB2B**. Autor strony z maja (`/home/ubuntu/wiseb2b_site_old`). Oczekuje krytycznej analizy merytorycznej, nie tylko wizualnej. Myśli kategoriami produktu i pozycjonowania.
- Wersje strony (nazywamy je opisowo, nie literami):
  - **strona z maja**: `/home/ubuntu/wiseb2b_site_old`, CEO, wspólna historia git do `a23bad8`;
  - **wersja z marca** (sprzed rebrandingu): commit `5787b87`, zrzut tekstów w `.analiza-tmp/D_marzec/`;
  - **wersja PM**: commit `5073440`, tymczasowy kierownik projektu z agencją, bez akceptacji CEO;
  - **live**: https://wiseb2b.eu (WordPress), częściowo Lorem ipsum;
  - **v4**: obecny `main` (strona główna od `5f4f0a0`, podstrony od `5d3c7b5`). Punkt powrotu sprzed v4: tag `2.0.1`.

## 2. Źródła i terminologia

- **Spis i hierarchia `.knowledge`: `.knowledge/projekt/README.md`** (decyzja CEO 2026-11-24: „uporządkuj wg uznania i potrzeb skilli”).
- **Księga marketingowa** = pliki `.knowledge/*.md` w głównym katalogu. **MASTER dla skilli i strony: `WiseB2B - kontekst marketingowy.md`**; mapa komunikacji to widok bez własnych faktów.
- **Dokumenty marketingowe CEO** = `.knowledge/marketing/00–07` (lipiec 2026): master wiedzy sprzedażowej, tylko do odczytu (kopia z innego repo CEO).
- Materiały źródłowe: `zrodla/` (PDF), katalog produktu: `produkt/`, archiwum (próbka głosu CEO, audyt): `archiwum/`.
- Hierarchia przy sprzecznościach: decyzje CEO z sesji > `marketing/` > `zrodla/` > strona z maja > `produkt/`, `archiwum/`. Otwarte sprzeczności: `.knowledge/projekt/decyzje-do-podjecia.md`.
- Plik Figmy: `/home/ubuntu/wiseb2b_site/WiseB2B.eu.fig` (gitignore). Rendery w `figma-renders/`, konwersja `.analiza-tmp/figma.grida1`. Polecenie: `npx -y @grida/refig WiseB2B.eu.fig --node "ID" --out plik.png`.
- Skille: opis w `.claude/README.md`.

## 3. Zasady treści (decyzje CEO)

1. **Nie usuwamy liczb** z treści bez wyraźnej zgody CEO (dotyczy też agentów i briefów). Rozbieżność zgłaszamy jako pytanie. (2026-11-10)
2. **Nie podważamy funkcji** opisanych i zdefiniowanych w materiałach („jeśli brakuje dziś, jutro będzie, dzięki AI”). Nie oznaczamy jako planowane, nie wycinamy. Dotyczy zdolności systemu, nie wyników klientów. (2026-11-10)
3. **SLA**, czasy reakcji, wsparcie: „kwestia umowy”. (2026-11-10)
4. **Agrotex**: tylko jako logo. Wyniki anonimowo („dystrybutor części do maszyn rolniczych”), bez nazwy i bez logo przy liczbach. Skala (120 mln zł, 840 klientów) zostaje. (2026-11-10)
5. **Głos CEO**: teksty CEO (strona z maja, materiały, dokumenty) to „prawdziwy głos” (skill copywriting, sytuacja B). Poprawiamy fakty, słownik i strukturę, nie piszemy od nowa. CEO ocenił teksty v4 pisane od zera jako „średnio się podobają”. (2026-11-24)
6. Claim: „Jedyna platforma Commerce B2B AI-Native z Panelem Handlowca i otwartym kodem”. Hero: 3 rotujące hasła. Opinia Triplex: Aneta Siwarga. Triplex: 34,43% (zgodnie z case study). Demo: około 60 minut. Lista ERP potwierdzona. (2026-11-09…10)
7. Stała warstwa komunikacji to nie hasło kampanii. (2026-11-09)
8. Sente: nie eksponować, ale w drugiej linii tak.

## 4. Cele marketingowe (wywiad z CEO 2026-11-09)

- Cel: w ogóle uruchomić marketing i zdobyć pierwsze leady. Projekt marketingowy był zawieszony. Ekspansja zagraniczna: „dużo za wcześnie”.
- Klient: kupuje szybko, bez wielomiesięcznej decyzji, gotowy na „eksperyment”. Kąt: firmy 100–200 mln zł, dla których B2B nie jest głównym kanałem; główny strach dystrybutora to utrata klientów i rynku.
- Wyróżniki do testowania: Panel Handlowca, Agent AI, otwarty kod. Claimy „jedyna/pierwsza” CEO uważa za obronione.

## 5. Zasady pracy

- **Repo GitHub jest publiczne.** Nie commitujemy danych wewnętrznych (`.knowledge/` z nowymi plikami, cenniki, materiały szkoleniowe, analizy). CEO ma przełączyć repo na prywatne; wtedy dopiero commit `.knowledge/`.
- Push na `main` dozwolony (strona nie jest podpięta do produkcji). Tożsamość: `git -c user.name=qubeczek -c user.email=qubeczek1@gmail.com`, push przez SSH: `git push git@github.com:wiseb2b-git/wiseb2b-site.git main`.
- Podgląd: `npm run build`, potem `npx -y serve@14.2.4 dist -l tcp://0.0.0.0:4321 --no-clipboard`, adres http://213.32.66.251:4321/.
- **Smoke test przed oddaniem CEO zawsze:** `node scripts/smoke.mjs http://127.0.0.1:4321 [katalog-na-zrzuty]` (24 strony × desktop i mobile, linki, błędy JS, obrazy, przewijanie, słownik, NEED, formularz demo). Do tego przegląd wizualny zrzutów.
- Otwarte fakty w kodzie: komentarze `{/* NEED: ... */}` w `src/pages/`.
- Robocze analizy: `.analiza-tmp/` (gitignore): raporty, zrzuty trzech wersji, brief dla agentów.

## 6. Stan prac (2026-11-24)

- **Teksty serwisu (decyzja CEO 2026-11-24):** najpierw copy deck w `.knowledge/teksty/<strona>.md` (agenci ze skillem copywriting, brief `.analiza-tmp/brief-teksty.md`, struktura z Figmy `.analiza-tmp/figma-teksty/`), dopiero potem implementacja w `src/` zgodnie z Figmą. CEO zaakceptował copy decki z góry (2026-11-24: „przyjmij akceptację, chcę zobaczyć, co nam wychodzi”); po redakcji (`.knowledge/teksty/_redakcja.md`) wdrażamy wszystkie strony. Wdrożone 2026-11-24 (`c66d6b0` + poprawki wizualne). Otwarte: ujednolicenie 3 stylów kart artykułów do `.bw-card`; nowe kafle Funkcje (Panel Handlowca, Agenci AI) do akceptacji CEO; cytat VMP bez autora. Następny krok: uwagi CEO → przypisanie do skilla / księgi / briefu (dziennik w `.claude/README.md`).

- **Teksty strony (decyzja CEO 2026-11-24):** bazą są teksty CEO ze strony z maja (= Figma = live), poprawiane o fakty, słownik i nowe elementy z księgi. Drobne pytania (P39–P54) poprawiamy później. Pilot: „Dla dystrybutorów” i „Dla producentów” (`3a5187b`), porównanie w `.analiza-tmp/pilot-dla-kogo-porownanie.md`; czeka na ocenę CEO przed resztą stron. Strona główna przerobiona tą samą metodą (CEO: „następna strona główna”): szkielet Figmy 1:2, teksty z maja, claim AI-Native + 4 karty „Commerce B2B Platform” z maja, rotacja haseł; wypadły sekcje v4 (stawka, ścieżki, plan, finałowe CTA). Kopia v4: `.analiza-tmp/index.v4.astro`. Resztę stron pisze jedna sesja (bez równoległych agentów), agenci tylko do kontroli faktów.

- Cała strona v4 na `main`. Ostatnie commity: KV z Figmy (Manrope, hero jako karta, karty KV), strony „Dla kogo” wg ramek Figmy (`076a776`).
- Księga zaudytowana względem `marketing/` i uporządkowana: kontekst v3.1 (master), mapa v2.1 (widok), raport w `archiwum/audyt-ksiegi-2026-11-24.md`.
- Otwarte pytania do CEO: P38 (jak poprawiamy teksty strony), P39–P54 w `.knowledge/projekt/decyzje-do-podjecia.md`.

## 2026-11-25: błąd poprawiamy po całości
- Gdy znajdziemy typ błędu (np. zła typografia w jednej karcie), od razu sprawdzamy i poprawiamy go na wszystkich stronach, desktop i mobile, nie tylko w zgłoszonym miejscu. Dotyczy też tekstów i skilli: poprawka wzorca, nie pojedynczego wystąpienia.

## 2026-11-25: system typografii KV (P59: a)
- Typografia treści tylko przez klasy `.kv-*` i tokeny `--kv-*` (opis w `CLAUDE.md`, sekcja „System typografii KV”). Stan przed refaktorem: tag git `przed-refaktorem-kv`.
