---
strona: case-study-vmp
url: /case-study/vmp/
figma: brak ramki (układ case study z kodu, src/pages/case-study/[...slug].astro)
title: Case study VMP: obsługa zamówienia krótsza o 60%
description: VMP Group sprzedaje bieliznę premium do sklepów w 13 krajach. Z WiseB2B obsługa zamówienia trwa o 60% krócej, a BOK dostaje o 45% mniej zapytań.
diagnoza: B. Tytuł, cele, opis firmy, sześć rozwiązań, liczby i cytat to tekst CEO ze strony z maja (`wiseb2b_site_old/src/content/case-study/vmp.md`); poprawiam słownik i fakty, oddzielam cel od wyniku (zwroty), dokładam migrację równoległą i 100% automatyzacji ERP z kontekstu §12.
rola_w_mapie: Wdrożenia / case study. Dowód: AI i BOK, Bezpieczna Migracja (z systemu autorskiego), ekspansja, fashion (VP 5 i 6).
---

# case-study-vmp: tekst do wdrożenia

## S1. Nagłówek case study
- **Eyebrow:** Case study
- **H1:** Platforma B2B dla lidera dystrybucji bielizny w Europie
- **Logo:** VMP
- **Data:** 15.01.2025
> Źródło: maj (tytuł), Figma strony Wdrożenia (ten sam tytuł karty). v4 miał „VMP: obsługa zamówienia krótsza o 60% w hurtowni bielizny”; liczba przechodzi do title SEO, H1 wraca do CEO.

## S2. Metryczka (kolumna boczna)
- **Branża:** Dystrybucja bielizny i odzieży premium
- **Plan i usługi:**
  - Plan Professional
  - Pełna integracja z ERP
  - Wielojęzyczność i wielowalutowość
- **Najważniejsze dla klienta:**
  - Zastąpienie przestarzałego systemu B2B nowoczesną platformą eCommerce.
  - Automatyzacja procesów zamówień, zwrotów i synchronizacji z ERP.
  - Obsługa klientów w 13 krajach z wielojęzycznym interfejsem.
  - Redukcja obciążenia działu obsługi klienta i IT.
> Źródło: maj. Zmiany: „Wersja” → „Plan” (słownik), „e-Commerce” → „eCommerce” (słownik), „13 rynków zagranicznych” → „klientów w 13 krajach” (13 to wszystkie kraje sprzedaży, nie tylko zagraniczne) [P44]. Redakcja przywróciła tekst CEO w pozostałych punktach („nowoczesną platformą”, „Automatyzacja procesów”, „Redukcja obciążenia…”): autor zmienił je tylko dlatego, że „nowoczesny” jest na liście słów do unikania, a to zdanie CEO. Wariant celu IT z PDF („odciążenie BOK oraz działu IT ze wsparcia, poprawiania błędów i utrzymania hostingu panelu B2B”) do użycia, jeśli CEO woli dokładniejszy.

## S3. O firmie i wyzwanie
- **Tytuł:** O firmie
- **Tekst:** VMP Group to lider dystrybucji bielizny i odzieży nocnej premium, oferujący marki Momenti Per Me oraz VMP. Firma zarządza katalogiem ponad 86 000 aktywnych indeksów produktowych i obsługuje klientów w 13 krajach europejskich. Ponad 90% zamówień realizowanych jest w modelu dropshipping. VMP współpracuje z wieloma magazynami (własnymi, partnerskimi i producenckimi), co wymaga zaawansowanej logistyki i precyzyjnej synchronizacji danych.
- **Tytuł 2:** Wyzwanie
- **Tekst 2:** Poprzedni, autorski system B2B nie nadążał za rozwojem firmy. Generował błędy, nie liczył rabatów automatycznie i podnosił koszty obsługi. Na czas przejścia oba systemy działały równolegle, więc sprzedaż w 13 krajach szła dalej. Po miesiącu VMP wyłączyło stary system.
> Źródło: maj (tekst 1, bez zmian po redakcji: przywrócone „indeksów produktowych”, „realizowanych jest”, „zaawansowanej logistyki”, które autor zmienił tylko stylistycznie), cytat klienta i kontekst §12 (tekst 2: migracja z systemu autorskiego, równoległe działanie, wyłączenie po miesiącu). Tekst 2 nowy, bo brief każe pokazać wyzwanie, a VMP to główny dowód Bezpiecznej Migracji (mapa §6).

## S4. Rozwiązania w platformie
- **Tytuł sekcji:** Rozwiązania w platformie
- **Karty:**
  1. **Wielojęzyczna platforma B2B**: Nowoczesny, w pełni responsywny interfejs dostosowany do klientów hurtowych i detalicznych. Obsługa 13 wersji językowych z możliwością dalszej rozbudowy. Design inspirowany najlepszymi rozwiązaniami B2C, który buduje doświadczenie premium i wzmacnia ekspozycję marek.
  2. **Wielocennikowość i reguły rabatowe**: Obsługa wielu cenników i walut (PLN, EUR, GBP i inne). Centralne zarządzanie rabatem, walutą i warunkami handlowymi po stronie B2B. Konfigurowanie reguł rabatowych według grup klientów, wartości zamówień i marek. Rabaty liczą się automatycznie.
  3. **Integracja z ERP i API**: Dwukierunkowa synchronizacja danych: produkty, ceny, stany magazynowe, zamówienia i faktury. Admin API umożliwia pełną integrację z systemem ERP, a aktualizacje danych między ERP i platformą są w 100% zautomatyzowane. Client API pozwala klientom B2B na składanie zamówień bezpośrednio z własnych systemów zakupowych.
  4. **Hurtowy koszyk i dropshipping**: Koszyk stworzony do obsługi dużych zamówień hurtowych z importem z CSV/XLS. Pełne wsparcie logistyki dropshippingowej: dane odbiorcy końcowego, wybór przewoźnika (DPD, GLS, InPost, Poczta Polska lub własny przewoźnik klienta), metody płatności oraz indywidualne reguły pakowania i dokumentów.
  5. **Multimagazynowość**: Zaawansowana obsługa wielu magazynów: dystrybutora, partnera i producenta. Na karcie produktu klient widzi przejrzyste stany, ceny i dostępność w różnych lokalizacjach. System prezentuje warianty rozmiarowe z podziałem na źródła magazynowe.
  6. **Automatyzacja zwrotów**: Moduł automatyzacji zwrotów: zgłoszenia, faktury korygujące, walidacja terminów. Celem VMP było ograniczenie czasu przetwarzania zwrotów nawet o połowę, co w branży odzieżowej z wysokim odsetkiem zwrotów ma duże znaczenie: to od pół do całego etatu.
> Źródło: maj (teksty CEO), PDF case study VMP s. 5, 7 i 9 przez raport `0_baza_wiedzy.md`. Po redakcji karty są tekstem CEO z dopiskami faktów: karta 2 „Rabaty liczą się automatycznie” (główna bolączka starego systemu, cytat klienta); karta 3 100% automatyzacji (PDF s. 9, kontekst §12); karta 4 Poczta Polska i przewoźnik klienta (PDF s. 7); karta 6 „celem VMP było” zamiast efektu (w PDF to cel projektu, s. 5; nie podajemy celu jako wyniku) i skala etatu z PDF. Redakcja przywróciła zdania CEO zmienione tylko stylistycznie: „Nowoczesny”, „Design inspirowany…”, „Konfigurowanie reguł”, „umożliwia”, „pozwala na składanie”, „Pełne wsparcie logistyki dropshippingowej”, „Zaawansowana”, „przejrzyste”, osobne zdanie o wariantach rozmiarowych.

## S5. Wyniki
- **Liczby (5):**
  1. **86 000+** · aktywnych indeksów produktowych w katalogu
  2. **60%** · skrócenie czasu obsługi zamówienia
  3. **45%** · redukcja zapytań do Biura Obsługi Klienta
  4. **13** · obsługiwanych wersji językowych
  5. **100%** · automatyzacji aktualizacji danych między ERP i platformą B2B
> Źródło: maj (4 liczby i etykiety CEO, kolejność CEO), kontekst §12 i PDF s. 9 (100% automatyzacji jako piąta liczba). Redakcja przywróciła kolejność i etykiety z maja: autor przestawił liczby i skrócił etykiety bez powodu merytorycznego. „Ponad 90% w dropshippingu” zostaje w „O firmie”; jeśli układ ma 6 gniazd, może wrócić jako szósta liczba.

## S6. Opinia klienta
- **Cytat:** Potrzebowaliśmy solidnej platformy, która automatyzuje i ułatwia współpracę z partnerami handlowymi w całej Europie. Poprzedni system nie nadążał za naszym rozwojem: błędy, brak automatyzacji rabatów i wysokie koszty obsługi. WiseB2B dało nam nowoczesne narzędzie, które odciąża zespół, a naszym klientom zapewnia doświadczenia zakupowe na najwyższym poziomie.
- **Podpis:** VMP Group, dystrybutor bielizny i odzieży premium
> Źródło: maj, marketing/04 („cytat dostępny”). Bez zmian, bo to wypowiedź klienta. v4 usunął cytat z powodu braku autora; przywracam tekst CEO z [NEED] poniżej.

## S7. CTA
- **Tytuł:** Dowiedz się więcej o WiseB2B
- **Tekst:** Sprzedajesz w wielu krajach albo masz system B2B, który nie nadąża? Pokażemy Ci platformę na żywo, na scenariuszach z Twojej firmy. Demo trwa około 60 minut.
- **CTA:** Zamów demo → /zamow-demo/
> Źródło: maj (tytuł, przycisk). Tekst nowy: dwie sytuacje wejścia, które VMP dowodzi (ekspansja, migracja), i czas demo wg zasady CEO.

## Otwarte kwestie
- [P44] Kraje: „13 krajów” i „13 wersji językowych” (case study na stronie, marketing/02 i 04). PDF przykładów wdrożeń podaje 17 krajów UE. Do potwierdzenia u VMP.
- [P45] Liczb skali z PDF-u przykładów wdrożeń (4 mln, 1,4 tys. zamówień, 350 tys., 840 klientów) nie używam.
- [NEED] Cytat: imię, nazwisko i rola osoby z VMP oraz zgoda na publikację. Bez autoryzacji podpis zostaje „VMP Group” albo cytat wypada (decyzja CEO).
- [NEED] PDF-ów w `.knowledge/zrodla/` nie dało się otworzyć w tej sesji (brak narzędzia do PDF). Fakty z PDF case study VMP (cele s. 5, przewoźnicy s. 7, wyniki s. 9) wziąłem z raportu `.analiza-tmp/raporty/0_baza_wiedzy.md`, który cytuje PDF ze stronami. Warto raz sprawdzić w oryginale.
- [NEED] „Lider dystrybucji bielizny w Europie”: to określenie z materiałów CEO i samego VMP. Zostaje, ale nie ma liczby, która by je mierzyła.
