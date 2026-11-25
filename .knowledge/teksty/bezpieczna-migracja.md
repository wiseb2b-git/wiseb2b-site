---
strona: bezpieczna-migracja
url: /bezpieczna-migracja/
figma: 68:1210
title: Bezpieczna migracja na platformę B2B
description: Zmień platformę B2B bez przestoju sprzedaży. Stary system działa do pełnego przejścia, klienci przechodzą w czterech etapach. VMP wyłączyło stary system po miesiącu.
diagnoza: B. Cztery etapy to tekst CEO z maja, identyczny w Figmie 68:1210 i u PM (live ma w hero omyłkowo lead strony dystrybutorów); v4 przepisał go od zera, więc wracamy do maja i dokładamy dowody z księgi.
rola_w_mapie: warstwa bezpieczeństwa: 4 etapy migracji, równoległe działanie starego i nowego systemu, VMP (z systemu autorskiego) i dystrybutor części rolniczych (z SaaS pod ERP) jako dowody
---

# bezpieczna-migracja: tekst do wdrożenia

## S1. Hero
- **Badge:** Bezpieczna migracja
- **H1:** [[Bezpieczna migracja]] na platformę B2B
- **Lead:** Przed uruchomieniem WiseB2B przygotujemy dla Ciebie bezpieczny proces migracji Twoich klientów z dotychczas wykorzystywanego narzędzia do obsługi sprzedaży cyfrowej. Stary system działa do chwili, w której przeniesiesz ostatniego klienta.
- **CTA:** Zamów demo → /zamow-demo/
> Źródło: maj = Figma = PM (H1 z maja, w Figmie niewidoczny). Zmiany: dopisane drugie zdanie. Powód: równoległe działanie systemów to sedno obietnicy (mapa §5, kontekst §6 „Bezpieczna Migracja”), a w hero go brakowało; czytelnik boi się dnia przełączenia, więc dostaje odpowiedź od razu. Lead live („Twoja sprzedaż jest skomplikowana…”) to błąd kopiowania ze strony dystrybutorów, nie używamy.

## S2. 01 · Testy
- **Numer:** 01
- **Tytuł etapu:** Testy
- **Tytuł karty:** Uruchomienie i monitorowanie integracji
- **Tekst:** Pierwszym krokiem w przygotowaniu procesu migracji klientów jest uruchomienie integracji z systemem ERP. To moment, w którym upewniamy się, że opracowane mechanizmy wymiany danych działają poprawnie i wszelkie elementy związane z ofertą handlową zdefiniowane w systemie ERP są wiernie odwzorowane na platformie B2B. W planach Professional i Enterprise sprawdzasz to w osobnym środowisku testowym, a Twoi klienci w tym czasie zamawiają tak jak dotąd.
> Źródło: maj. Zmiany: „Pierwszych krokiem” → „Pierwszym krokiem” (literówka); dopisane ostatnie zdanie. Powód: środowisko testowe w Professional i Enterprise to fakt z kontekstu §1; zdanie pokazuje, gdzie odbywają się testy i że klienci ich nie odczuwają. Kolejność etapów wg [P51] a.

## S3. 02 · Migracja kluczowych klientów
- **Numer:** 02
- **Tytuł etapu:** Migracja kluczowych klientów
- **Tytuł karty:** Zacznij w zaufanym gronie
- **Tekst:** Na początek warto oddać nową platformę w ręce wąskiej grupy klientów. Takich, do których masz zaufanie i pewność, że transparentnie przekażą Ci opinie o nowym rozwiązaniu. Migracja mniejszej liczby kontrahentów jest również bezpieczniejsza: jeśli jakiekolwiek elementy wymagałyby poprawy, to nie odczują tego faktu wszyscy Twoi klienci, a wyłącznie ich część. Na tym etapie dotychczasowe rozwiązanie eCommerce B2B nadal jest włączone i korzystają z niego pozostali klienci.
> Źródło: maj. Zmiany: myślnik → dwukropek; „e-Commerce” → „eCommerce” (słownik §10). Reszta bez zmian.

## S4. 03 · Dostęp dla nowych klientów
- **Numer:** 03
- **Tytuł etapu:** Dostęp dla nowych klientów
- **Tytuł karty:** Rejestrowanie nowych klientów wyłącznie na nowej platformie
- **Tekst:** Kluczowi klienci korzystają już z nowej platformy i wiesz, że zamówienia, ceny i integracja z ERP działają poprawnie. Aby rozszerzyć testy WiseB2B i powoli przygotowywać się do wyłączenia poprzedniego narzędzia, warto umożliwić rejestrację nowych klientów wyłącznie na nowej platformie. Dzięki temu zwiększy się grupa użytkowników, którzy zweryfikują działanie platformy, a Ty sprawdzisz, jak rozwiązanie radzi sobie z większą liczbą danych i transakcji.
> Źródło: maj (tytuł karty pełny z maja; Figma skraca do „Rejestrowanie nowych klientów”, ale bez „wyłącznie na nowej platformie” tytuł nie mówi, na czym polega etap). Zmiany: „i wiesz już, że” → „i wiesz, że” (podwójne „już” w zdaniu; tak jest też na live); „oraz sprawdzisz” → „, a Ty sprawdzisz” (zdanie zmieniało podmiot bez sygnału); „wszystkie kluczowe procesy” → „zamówienia, ceny i integracja z ERP” (drugie „kluczowe” w jednym zdaniu, ogólnik zamieniony na to, co sprawdzono w etapach 01 i 02). „Kluczowi klienci” i tytuł „Migracja kluczowych klientów” zostają: to dosłowne określenie grupy, tytuł z Figmy.

## S5. 04 · Migracja właściwa
- **Numer:** 04
- **Tytuł etapu:** Migracja właściwa
- **Tytuł karty:** Przeniesienie pozostałych klientów i wyłączenie dotychczasowej platformy
- **Tekst:** Na tym etapie możesz być już w pełni spokojny o działanie nowej platformy, poprawność funkcjonowania mechanizmu integracji i możliwość swobodnego składania zamówień za pośrednictwem nowego rozwiązania. Najwyższa pora, aby do nowej platformy zmigrować pozostałych klientów i wyłączyć dotychczas wykorzystywane rozwiązanie.
> Źródło: maj = Figma. Zmiany: brak (test „leave it alone”). Dowód, że to działa, jest w S6.

## S6. Migracja w praktyce · NOWA SEKCJA (poza Figmą)
- **Tytuł sekcji:** Migracja w praktyce
- **Lead:** Tak przeszli na WiseB2B klienci, którzy mieli już działający kanał B2B.
- **Karty:**
  1. **VMP Group: z systemu autorskiego, stary wyłączony po miesiącu**: VMP sprzedaje bieliznę premium do sklepów w 13 krajach, z katalogu ponad 86 000 indeksów. Poprzedni, autorski system B2B nie nadążał za rozwojem firmy: generował błędy, nie liczył rabatów automatycznie i podnosił koszty obsługi. Przez okres przejścia oba systemy działały równolegle. Po miesiącu VMP wyłączyło stary system, bez utraty funkcji, z których korzystali klienci.
     - −60% · czasu obsługi zamówienia
     - −45% · zapytań do BOK
     - 100% · automatyzacji wymiany danych między ERP a platformą B2B
     - **CTA:** Zobacz case study VMP → /case-study/vmp/
  2. **Dystrybutor części do maszyn rolniczych: z platformy SaaS pod ERP Wa-PRO**: Firma (120 mln zł, 840 klientów, 50 tys. produktów) przeniosła sprzedaż B2B z platformy SaaS działającej pod ERP Wa-PRO. Platforma łączy się z ERP przez n8n, z wymianą przyrostową i nocną synchronizacją. Koszt dostawy gabarytów, szkła i opon wylicza się automatycznie, więc dział handlowy nie musi sprawdzać każdego zamówienia.
     - 42% · zamówień bez weryfikacji handlowca
     - 2,5 tys. · zamówień miesięcznie
     - +22% · dostępności dzięki sprzedaży z wielu sklepów
> NOWA SEKCJA. Uzasadnienie: mapa §6 przypisuje tej stronie oba dowody (VMP i dystrybutor części rolniczych), a mapa §9 wymaga VMP; Figma 68:1210 ma tylko 4 etapy, kontakt i newsletter, więc dowodów nie ma gdzie postawić. Miejsce: po etapie 04, przed kontaktem. Fakty: kontekst §12 i `src/content/case-study/vmp.md`. Link /case-study/vmp/ (faktyczna strona). Liczby VMP jak na stronie case study i w innych copy deckach (13 krajów, ponad 86 000 indeksów, −60%, −45%). Dystrybutor anonimowo, bez logo przy liczbach (zasada CEO: Agrotex tylko jako logo); skala 120 mln zł i 840 klientów zostaje. Brak CTA przy karcie 2, bo case jest anonimowy i nie ma podstrony.

## S7. Potrzebujesz szczegółowych informacji?
- **Tytuł sekcji:** Potrzebujesz szczegółowych informacji?
- **Lead:** Porozmawiaj z nami. Powiedz, z jakiego systemu dziś korzystasz, a pokażemy, jak może wyglądać przejście w Twojej firmie.
- **Osoba:** Jakub Czyżkowski, CEO
- **CTA:** Zamów rozmowę z ekspertem → /zamow-demo/
> Źródło: Figma (tytuł, „Porozmawiaj z nami”) = maj (tytuł, osoba, CTA). Lead rozwinięty o temat rozmowy (punkt wyjścia: obecny system). CTA z maja zamiast Figmowego „Porozmawiaj”, bo mówi, co się stanie po kliknięciu.

## Newsletter (komponent wspólny)
- **Tytuł:** Bądź na bieżąco z nowościami eCommerce i WiseB2B
- **Pole:** E-mail...
- **CTA:** Zapisz się
> Źródło: Figma. Bez zmian.

## Otwarte kwestie
- [P51] Cztery etapy wg wersji a (testy integracji ERP → zaufani klienci → nowi tylko na nowej → pełna migracja), zgodnie z marketing/01 i stroną z maja. Wersja b z marketing/06 (sprint/mapowanie → równoległe uruchomienie → migracja danych → przełączenie) nieużyta.
- [P44] VMP: „13 krajów” wg case study na stronie; PDF przykładów wdrożeń podaje 17 krajów UE.
- [P45] Liczby skali VMP z PDF (4 mln, 840 klientów) nieużyte.
- [NEED] Zakres migrowanych danych (konta i loginy klientów, historia zamówień, listy zakupowe, przekierowania SEO): brak w materiałach, dlatego strona tego nie obiecuje. Jeśli CEO potwierdzi, warto dodać zdanie do etapu 04 albo FAQ.
- [NEED] Typowy czas od startu do wyłączenia starego systemu: jedyny dowód to VMP (miesiąc). Do potwierdzenia, czy podać widełki.
- [NEED] Dystrybutor części rolniczych: potwierdzić, czy przejście szło według czterech etapów i równolegle ze starym systemem; tekst S6 tego nie twierdzi.
- [NEED] Opinia klienta o migracji: case VMP nie ma autoryzowanego cytatu (komentarz w `vmp.md`). Gdy będzie, pasuje pod kartę VMP w S6.
