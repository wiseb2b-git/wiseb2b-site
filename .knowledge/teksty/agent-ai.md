---
strona: agent-ai
url: /agent-ai/
figma: 117:384
title: Agent AI w eCommerce B2B: Email-2-Cart i trzech agentów
description: Agent Klienta składa koszyk z maila, PDF-a lub Excela. Agent Handlowca przygotowuje oferty, a Agent Administratora wykonuje operacje masowe. Zobacz na demo.
diagnoza: B. Strona z maja (= marzec = Figma w kartach) to tekst CEO z wyraźnym argumentem („Przestań traktować sztuczną inteligencję jako ciekawostkę”, scenariusze Email-2-Cart i kompletacji, „Wszystko to, co klient może zrobić w sklepie, Agent też potrafi”); brakuje w nim tylko Agenta Handlowca, Agenta Administratora, generowania AI i pluginów.
rola_w_mapie: Filar 1 (Agenci AI, AI-Native). Elementy stałe: Email-2-Cart, Agent Handlowca, Agent Administratora, VMP. VP#3.
---

# agent-ai: tekst do wdrożenia

## S1. Hero
- **Badge:** Agent AI
- **H1:** Nowy poziom efektywności eCommerce B2B dzięki [[Agentom AI]]
- **Lead:** Przestań traktować sztuczną inteligencję jako ciekawostkę. Wdrażamy narzędzia, które wykonują realną pracę: automatyzują procesy, odciążają handlowców i personalizują doświadczenia zakupowe Twoich klientów.
- **CTA:** Zamów demo i sprawdź AI w akcji → /zamow-demo/
> Źródło: maj (H1, lead, CTA). Zmiany: „e‑Commerce” → „eCommerce” (słownik). Powód: tylko pisownia. Lead CEO zostaje słowo w słowo. Figma ma w tym miejscu ten sam lead.

## S2. AI, które rozumie Twój biznes
- **Tytuł sekcji:** AI, które rozumie Twój biznes
- **Lead:** Agenci AI w WiseB2B pracują wewnątrz platformy, na Twoich danych i z uprawnieniami użytkownika, w którego imieniu działają.
- **Karty:**
  1. **Zintegrowany, nie doklejony**: Agent AI to natywny moduł WiseB2B, który operuje na rzeczywistych danych: Twoich cennikach, stanach magazynowych i indywidualnych warunkach handlowych.
  2. **Nowy interfejs pracy dla użytkownika**: Narzędzie nie tylko odpowiada na pytania, ale realizuje faktyczne procesy biznesowe, zdejmując ciężar operacyjny z Twojego zespołu.
  3. **Wsparcie BOK i handlowców**: Redukcja liczby zapytań o dostępność i proste ofertowanie pozwalają Twoim ludziom skupić się na budowaniu relacji, a nie na obsłudze transakcji.
> Źródło: maj (tytuł i karty), Figma (układ: tytuł + lead + 3 karty). Zmiany: tytuł Figmy „Technologia, która daje przewagę” zastąpiony tytułem CEO z maja (konkretniejszy, przechodzi test zamiany). Lead Figmy („WiseB2B to nie tylko technologia — to partner…”) zastąpiony nowym zdaniem: miał kontrast „nie tylko X, to Y”, myślnik i mówił o zgodności prawnej, a nie o AI. Karta 2: zdanie CEO „Narzędzie nie tylko odpowiada na pytania, ale realizuje…” przywrócone przy redakcji w brzmieniu z maja i Figmy (zakaz „nie tylko… ale” dotyczy zdań nowych). Karta 3: „Handlowców” małą literą (słownik), „pozwala” → „pozwalają” (dwa podmioty). Karta 1 bez zmian.

## S3. Przykładowe scenariusze efektywności
- **Tytuł sekcji:** Przykładowe scenariusze efektywności
- **Karty:**
  1. **Kompletacja zamówienia z doradztwem**: Zaawansowane wyszukiwanie kontekstowe i doradztwo techniczne. Klient precyzuje wymagania (np. „tylko akumulatorowe”, „zestaw od jednego producenta”), a Agent błyskawicznie generuje zestawienia w czytelnej formie tabelarycznej. Wybrane pozycje dodaje do koszyka na prośbę klienta.
  2. **Email-2-Cart**: Przetwarzanie niestrukturyzowanych zapytań i zamówień przesyłanych drogą mailową. Agent analizuje treść maila lub załącznika (PDF, Excel), identyfikuje indeksy (nawet przy błędnych nazwach) i automatycznie tworzy gotowy koszyk zakupowy na warunkach tego klienta. Eliminacja ręcznego wprowadzania zamówień.
> Źródło: maj = Figma. Zmiany: literówka w tytule „efekywności” → „efektywności”; cudzysłowy polskie. Karta 1: dopisane ostatnie zdanie (Agent dodaje do koszyka, `marketing/02` VP#3: Agent Klienta „dodawanie do koszyka”). Karta 2: dopisane załączniki PDF i Excel (VP#3: „treść maila lub załącznika (PDF, Excel)”) i „na warunkach tego klienta” (Agent operuje na cennikach i warunkach klienta). Powód: Email-2-Cart to flagowy scenariusz, a mail z załącznikiem w Excelu to najczęstsza forma zamówienia u klientów B2B. Fragment „Eliminacja ręcznego wprowadzania zamówień.” CEO zostaje.

## S4. Agent dla klienta, handlowca i administratora (NOWA SEKCJA, poza Figmą)
- **Tytuł sekcji:** Agent dla klienta, handlowca i administratora
- **Lead:** Każdy agent ma uprawnienia swojej roli i wykonuje operacje w platformie. Klient zamawia szybciej, handlowiec ma przygotowaną ofertę, a administrator nie zmienia rekordów po kolei.
- **Karty (rząd 1, agenci):**
  1. **Agent Klienta**: Wyszukuje i porównuje produkty, składa koszyk z maila, PDF-a lub Excela i sprawdza status zamówienia. Klient pisze tak, jak napisałby do handlowca, np. „dodaj 50 sztuk pozycji z mojego ostatniego zamówienia plus 20 paczek z tej oferty”.
  2. **Agent Handlowca**: Przygotowuje ofertę na podstawie zapytania, które klient przysłał mailem lub wiadomością. Rano podpowiada handlowcowi, czym się dziś zająć, a w trakcie sprawy proponuje kolejne kroki i treść odpowiedzi do klienta. Pracuje na tych samych cenach i warunkach co sklep i Panel Handlowca.
  3. **Agent Administratora**: Pomaga konfigurować system i wykonuje operacje masowe: zmianę cennika dla grupy produktów, nową promocję, porządki w kategoriach. Administrator opisuje zadanie jednym zdaniem, a Agent wykonuje je w panelu administracyjnym.
- **Karty (rząd 2, AI w platformie):**
  4. **Automatyzacja generowania AI**: Dla każdego pola dowolnego elementu systemu ustawiasz schemat, według którego AI generuje wartość: opis produktu, tytuł, meta opis SEO, tłumaczenie. Przy katalogu z tysiącami indeksów dział produktu sprawdza gotowe teksty, zamiast pisać je od zera.
  5. **AI w tworzeniu pluginów**: Architektura WiseB2B jest projektowana pod wsparcie AI w rozwoju rozszerzeń. Nowe pluginy powstają w WiseB2B DevStudio, w odseparowanym kodzie, więc kolejne aktualizacje platformy instalujesz bez przeszkód. Koszty rozwoju i adaptacji jeszcze nigdy nie były tak niskie.
- **Link:** Zobacz Panel Handlowca → /panel-handlowca/
> Źródło: nowy, z `marketing/01` („AI w produkcie”), `marketing/02` VP#3, kontekst §6, `produkt/opis modułów` (Agent administratora: cenniki, promocje, kategorie). Ostatnie zdanie karty 5 to zdanie CEO z `archiwum/informacje podstawowe`. Powód sekcji: mapa §9 wymaga na tej stronie Agenta Handlowca i Agenta Administratora, a brief: także generowania AI i pluginów. Figma ma tylko dwa scenariusze Agenta Klienta, więc nie ma gniazda na pozostałe role. Sekcja stoi zaraz po scenariuszach, bo je rozszerza. Funkcje opisane bez zastrzeżeń i bez informacji o pakietach (zasada CEO „nie podważamy funkcji”; dostępność w planach jest na stronie Plany). Przykład zdania klienta w karcie 1 pochodzi z VP#3.

## S5. Dlaczego Agent AI od WiseB2B?
- **Tytuł sekcji:** Dlaczego Agent AI od WiseB2B?
- **Karty:**
  1. **Bezpieczeństwo danych**: Agent korzysta z tych samych metod co interfejs aplikacji. Ma dostęp tylko do tych danych i operacji, które może wykonać dany użytkownik, i realizuje je, symulując jego działanie.
  2. **Agent wbudowany w UI**: To nie jest dodatkowy skrypt osadzany na stronie, lecz mechanizm wbudowany w interfejs sklepu. Klient otwiera go przyciskiem „Zapytaj AI” obok wyszukiwarki i pracuje z nim w oknie, w panelu bocznym albo na pełnym ekranie. To daje zupełnie nowe doświadczenie użytkownikowi.
  3. **Nie tylko wyszukiwanie, ale również działanie**: Agent to nie jest tylko wyszukiwarka czy porównywarka produktów. Wszystko to, co klient może zrobić w sklepie, Agent też potrafi: dodać produkty do koszyka, porównać produkty, wykorzystać listy zakupowe, sfinalizować zamówienie, sprawdzić stan realizacji zamówienia.
> Źródło: maj = Figma. Zmiany: tytuł „Dlaczego WiseB2B AI Agent?” → „Dlaczego Agent AI od WiseB2B?” (słownik: Agent AI). Karta 1: „operator” → „dany użytkownik” (czytelnik nie zna słowa „operator” w tym znaczeniu), przecinek przed „co” usunięty. Karta 2: oba zdania CEO przywrócone przy redakcji; między nimi zostaje konkret ze zrzutów platformy (przycisk „Zapytaj AI”, tryby okna; `.analiza-tmp/raporty/0_baza_wiedzy.md`, SS2/SS3). Karta 3: tytuł CEO „Nie tylko wyszukiwanie, ale również działanie” i zdanie „Agent to nie jest tylko wyszukiwarka…” przywrócone; jedyna zmiana to dwukropek przed listą operacji (składnia). Kontrasty w kartach 2 i 3 to autentyczne zdania CEO, nie wzorzec AI.

## S6. Potwierdzona skuteczność
- **Tytuł sekcji:** Potwierdzona skuteczność
- **Liczba:** 80% obrotu
- **Tekst:** Nasze wdrożenia pokazują, że cyfryzacja kanałów sprzedaży to nie tylko wygoda, ale realne wzrosty. Średnio 80% obrotu u naszych klientów generowane jest przez platformę B2B, a Agent AI jest kolejnym krokiem w optymalizacji tych wyników poprzez uwalnianie czasu pracy handlowców.
- **Dowód dodatkowy:** VMP Group, dystrybutor bielizny i odzieży premium z katalogiem ponad 86 000 indeksów: −60% czasu obsługi zamówienia i −45% zapytań do BOK po przejściu na WiseB2B.
- **Link:** Zobacz case study VMP → /case-study/vmp/
> Źródło: maj i live (sekcja jest w obu; w zrzucie tekstów Figmy jej nie ma, prawdopodobnie jest grafiką: do sprawdzenia w ramce 117:384). Zmiany: zdanie CEO „to nie tylko wygoda, ale realne wzrosty” przywrócone przy redakcji. 80% bez zmian. Dodany dowód VMP (mapa §6: VMP pracuje na tezę „AI i BOK”). Opis VMP ujednolicony przy redakcji z Wdrożeniami i case study („dystrybutor bielizny i odzieży premium”, „ponad 86 000 indeksów”; wcześniej „hurtownia bielizny z 86 000 indeksów”). Liczby VMP dotyczą całej platformy, dlatego zdanie nie przypisuje ich samemu Agentowi.

## S7. Zobacz Agenta AI w działaniu
- **Tytuł sekcji:** Zobacz Agenta AI w działaniu
- **Tekst:** Przekonaj się sam, jak Agent AI wspiera codzienną pracę w platformie B2B. Na naszym środowisku demo możesz przetestować jego możliwości bez zobowiązań. Wklej listę produktów z maila i zobacz, jak powstaje koszyk.
- **CTA:** Przejdź do demo → https://demo.wiseb2b.eu
> Źródło: maj = Figma. Zmiany: dopisane ostatnie zdanie (konkretna rzecz do zrobienia na demo, scenariusz Email-2-Cart). Reszta bez zmian.

## S8. Potrzebujesz szczegółowych informacji?
- **Tytuł sekcji:** Potrzebujesz szczegółowych informacji?
- **Osoba:** Jakub Czyżkowski, CEO
- **Tekst:** Porozmawiaj z nami
- **CTA:** Zamów rozmowę z ekspertem → /zamow-demo/
> Źródło: Figma (tytuł, tekst), maj (osoba). Zmiany: „Lider projektu” → „CEO”, jak w pilocie stron „Dla kogo”. Przycisk jak w pilocie (Figma: „Porozmawiaj”).

## S9. Newsletter
- **Tytuł:** Bądź na bieżąco z nowościami eCommerce i WiseB2B
- **Pole:** E-mail...
- **CTA:** Zapisz się
> Źródło: Figma. Komponent wspólny, bez zmian.

## Otwarte kwestie
- [P53] Claim AI-Native nie pojawia się na tej stronie (na podstronach najwyżej raz, nie w H1). Jeśli CEO chce go tu mieć, miejsce: lead S2.
- [NEED] Pomiar samego Agenta AI (np. odsetek zamówień z Email-2-Cart, zapytania BOK rozwiązane bez człowieka). Dziś liczby VMP dotyczą całej platformy.
- [NEED] S6: potwierdzić w ramce Figmy, czy sekcja 80% jest w projekcie jako grafika.
- [NEED] Agent Handlowca: opis z `marketing/01` jest roboczy („szykowanie ofert z komunikatów otrzymanych, czym dzisiaj się zająć, wsparcie w kolejnych krokach”). Karta 2 w S4 rozwija go do konkretnych czynności; prośba o potwierdzenie, że tak to działa na demo.
- Alternatywy H1 (gdyby CEO chciał mocniej): a) „Zamówienie z maila trafia do koszyka bez przepisywania” (wersja v4, zawęża stronę do Email-2-Cart); b) „Agenci AI, którzy składają koszyk, ofertę i cennik za Twój zespół”. Rekomendacja: H1 CEO.
