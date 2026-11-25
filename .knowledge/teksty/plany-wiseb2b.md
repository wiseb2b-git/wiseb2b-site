---
strona: plany-wiseb2b
url: /plany-wiseb2b/
figma: "125:2482"
title: Plany i ceny WiseB2B Cloud, bez opłat od obrotu
description: Trzy plany WiseB2B Cloud: Start od 1 990 zł, Professional od 3 490 zł, Enterprise od 6 990 zł netto miesięcznie. Limity i moduły w pakietach, bez prowizji.
diagnoza: "B. Opisy planów, karty WiseB2B Cloud i FAQ to teksty CEO z maja (= Figma 125:2482 = live), z charakterystycznym „aby osiągnąć nawet 90% sprzedaży za pomocą eCommerce”. Fakty (nazwy, Development Studio, eNova, „gwarantowana dostępność”) wymagają korekty z katalogu i zasad CEO."
rola_w_mapie: "Przejrzystość, brak GMV. Elementy stałe: ceny, limity produktów i klientów, co w którym pakiecie. VP 4."
---

# plany-wiseb2b: tekst do wdrożenia

## S1. Hero
- **Badge:** Plany WiseB2B
- **H1:** Funkcjonalność platformy [[dostosowana]] do Twoich potrzeb
- **Lead:** W zależności od sytuacji Twojej firmy możesz wybrać jeden z trzech planów WiseB2B. Płacisz stały abonament z ceną znaną z góry, bez opłat od obrotu.
- **CTA:** Zamów demo → /zamow-demo/
> Źródło: maj (H1, pierwsze zdanie leadu), live (akcent na „dostosowana”), nowy (drugie zdanie). Zmiany: lead z Figmy to kopia leadu strony głównej; zdanie CEO z maja wraca dosłownie (poprawione tylko „jednen” → „jeden” i zbędny przecinek; redakcja cofnęła zmianę „możesz wybrać” → „wybierasz”), a drugie zdanie niesie komunikat, którego właścicielem w mapie jest ta strona (brak GMV). Kropka na końcu H1 z maja usunięta.

## S2. Trzy plany
- **Karty planów:**
  1. **Start**
     - **Opis:** Jeśli posiadasz stosunkowo niewielki asortyment, ograniczoną bazę klientów i chciałbyś zacząć sprzedawać w internecie, wybierz wersję Start, która dostarczy Ci podstawowych mechanizmów cyfryzacji sprzedaży i pozwoli wyeliminować analogowe procesy.
     - **Produkty:** do 1 000 · **Klienci:** do 2 000
     - **Najważniejsze funkcje:** Wyszukiwarka produktów z synonimami · Indywidualne cenniki i promocje · Proces zakupowy B2B (wielokoszyki, listy, import) · Wsparcie handlowca w zakupach klienta · CMS, baza wiedzy i aktualności · Hosting w WiseB2B Cloud
     - **Cena:** Cena od **1 990 zł** netto / miesiąc
     - **CTA:** Porównaj możliwości → #porownanie
  2. **Professional**
     - **Opis:** Jeśli masz już doświadczenie w sprzedaży internetowej B2B i potrzebujesz precyzyjnie odwzorować swoją ofertę dla poszczególnych klientów, aby osiągnąć nawet 90% sprzedaży za pomocą eCommerce, wersja Professional to rozwiązanie dla Ciebie.
     - **Produkty:** do 30 000 · **Klienci:** do 10 000
     - **Najważniejsze funkcje (wszystko z planu Start, a do tego):** Dokumenty handlowe (faktury, dostawy, rozrachunki) · Zwroty i reklamacje · Płatności elektroniczne i integracje kurierskie · Feedy produktowe (Shopify, Ceneo, IAI) · Admin API i Client API · Środowisko testowe, n8n, wtyczki własne
     - **Opcje:** Panel Handlowca, Agent Klienta, kod źródłowy
     - **Cena:** Cena od **3 490 zł** netto / miesiąc
     - **CTA:** Porównaj możliwości → #porownanie
  3. **Enterprise**
     - **Opis:** Jeśli prowadzisz dużą firmę, posiadającą dziesiątki tysięcy produktów, sprzedaż zagraniczną, kilkanaście tysięcy klientów, będziesz potrzebować zaawansowanego, ale i otwartego środowiska do indywidualnych zmian budujących Twoją przewagę.
     - **Produkty:** bez ograniczeń · **Klienci:** bez ograniczeń
     - **Najważniejsze funkcje (wszystko z planu Professional, a do tego):** Sprzedaż zagraniczna i cenniki wielowalutowe · Panel Handlowca + Agent Klienta · MultiStore (wiele sklepów, jeden backend) · Oferty dedykowane dla klientów · Dynamiczny ranking produktów · Dostęp do kodu źródłowego
     - **Cena:** Cena od **6 990 zł** netto / miesiąc
     - **CTA:** Porównaj możliwości → #porownanie
- **Linijka pod kartami:** We wszystkich planach: hosting w WiseB2B Cloud, aktualizacje, monitoring 24/7, kopie zapasowe i brak opłat od obrotu.
> Źródło: maj = Figma = live (opisy, limity, funkcje), Figma (6 funkcji Enterprise ze scalonym „Panel handlowca + Agent AI klienta”). Zmiany: (1) „PLN” → „zł” (brief, kontekst §1); limity z separatorem tysięcy. (2) Professional: myślnik przed „wersja Professional” → przecinek, „i” zamiast przecinka przed „potrzebujesz” (zdanie warunkowe było niegramatyczne); 90% zostaje (liczba CEO). (3) Dopisane „wszystko z planu Start/Professional, a do tego”: w katalogu `produkt/` każdy moduł w pakiecie niższego planu jest w pakiecie wyższego, więc to prawda, a czytelnik nie musi zgadywać, czy Enterprise ma dokumenty handlowe. (4) Professional: linijka „Opcje” z katalogu (Panel Handlowca, Agent Klienta i kod źródłowy to opcje w Professional) [P47, P50]. (5) „Panel handlowca”, „Agent AI klienta” → Panel Handlowca, Agent Klienta (słownik). (6) Linijka „we wszystkich planach” z kontekstu §1 (odpowiedź na pytanie CFO o ukryte koszty). Opis Start i Enterprise bez zmian.

## S3. Co zawiera usługa WiseB2B Cloud?
- **Tytuł sekcji:** Co zawiera usługa WiseB2B Cloud?
- **Lead:** Każdy plan WiseB2B Cloud to kompletne środowisko do prowadzenia handlu B2B online, bez konieczności zarządzania infrastrukturą IT.
- **Karty (etykieta dostępności · tytuł · tekst):**
  1. **Wszystkie plany · Środowisko produkcyjne**: Hosting platformy w chmurze z automatyczną instalacją aktualizacji do nowych wersji. Skalowalna infrastruktura, backup danych i monitoring dostępności prowadzimy bez angażowania Twojego IT.
  2. **Professional i Enterprise · Środowisko testowe**: Osobna instancja platformy z danymi z produkcji, synchronizowanymi co noc. Bezpieczne testowanie nowych funkcji, konfiguracji i integracji bez ryzyka dla środowiska produkcyjnego.
  3. **Professional i Enterprise, w Start jako opcja · n8n: automatyzacja procesów**: Wizualne środowisko do automatyzacji i synchronizacji platformy z systemami zewnętrznymi (ERP, CRM, e-mail, SMS), bez konieczności programowania.
  4. **Wszystkie plany · Aktualizacje i nowe wersje**: Regularne aktualizacje platformy z nowymi funkcjami i poprawkami bezpieczeństwa. Dzięki architekturze pluginowej aktualizacja nie narusza Twoich indywidualnych modyfikacji.
  5. **Wszystkie plany · Bezpieczeństwo i SLA**: Profesjonalne zarządzanie infrastrukturą, backup danych i monitoring 24/7. Parametry dostępności i czasy reakcji określa umowa. Brak opłat GMV: płacisz tylko za plan, niezależnie od obrotów.
  6. **Professional i Enterprise · Cloud lub OnPremise**: Sam wybierasz model korzystania z systemu. Możliwość instalacji lokalnej (OnPremise) dla firm z restrykcyjnymi wymaganiami bezpieczeństwa lub compliance.
> Źródło: maj = Figma. Zmiany: myślniki ozdobne zamienione na przecinek lub dwukropek (lead, tytuł i tekst karty 3, karta 5); w karcie 1 myślnik → „prowadzimy”. Karta 3: etykieta uzupełniona o opcję w Start (katalog); „email” → „e-mail”; „Setki gotowych integracji” z maja nie wraca (nie ma jej w Figmie ani w materiałach). Karta 5: „gwarantowana dostępność” → „parametry określa umowa” (zasada CEO 3). Redakcja przywróciła zdania CEO, które autor przepisał bez powodu faktycznego: lead („…online, bez konieczności zarządzania infrastrukturą IT”), karta 2 („Bezpieczne testowanie…”), karta 3 („bez konieczności programowania”), karta 5 („Brak opłat GMV: płacisz tylko za plan…”).

## S4. Szczegółowe porównanie planów (tabela z kolekcji `obszary`)
- **Kotwica:** #porownanie
- **Tytuł sekcji:** Szczegółowe porównanie planów
- **Lead:** Każdy moduł w 13 obszarach i plan, w którym go dostaniesz. Opcję dodatkową dokupujesz do swojego planu bez zmiany pakietu.
- **Legenda:** W pakiecie · Opcja dodatkowa · Niedostępny
- **Nagłówki kolumn:** Moduł · Start · Professional · Enterprise
- **Przyciski:** Rozwiń wszystkie · Zwiń wszystkie
- **Wiersze:** z kolekcji, bez zmian.
> Źródło: Figma, maj. Zmiany: „Starter” → Start w nagłówku kolumny (słownik; w Figmie i na live jest „Starter”). Lead nowy (w Figmie brak): mówi, jak czytać tabelę. Liczba modułów celowo nie pada w leadzie, bo tabela ma więcej pozycji niż „37 modułów” [P46].

## S5. Potrzebujesz szczegółowych informacji?
- **Tytuł:** Potrzebujesz szczegółowych informacji?
- **Osoba:** Jakub Czyżkowski, CEO
- **Tekst:** Porozmawiaj z nami. Wycenę dla Twojej liczby produktów, klientów i integracji przygotujemy po pokazie.
- **CTA:** Porozmawiaj → /zamow-demo/
> Źródło: Figma (tytuł, „Porozmawiaj z nami”, przycisk), v4 (osoba). Zmiany: dopisane jedno zdanie, co się stanie po rozmowie (risk reversal przy CTA na stronie cen).

## FAQ
- **Tytuł sekcji:** Najczęściej zadawane pytania o plany WiseB2B
1. **Czym jest WiseB2B i do czego służy?**
   WiseB2B to polska platforma Commerce B2B w modelu Cloud, zaprojektowana dla dystrybutorów, producentów i hurtowni. Umożliwia cyfryzację sprzedaży hurtowej: od katalogu produktów, przez cenniki indywidualne i proces zakupowy, po integracje z systemami ERP (Teneum, Comarch XL, Comarch Optima, enova365, Subiekt). Platforma jest dostępna w trzech planach: Start, Professional i Enterprise, dopasowanych do skali działalności.
2. **Ile kosztuje platforma B2B WiseB2B?**
   WiseB2B oferuje trzy plany abonamentowe: Start od 1 990 zł netto miesięcznie (do 1 000 produktów i 2 000 klientów), Professional od 3 490 zł netto miesięcznie (do 30 000 produktów i 10 000 klientów) oraz Enterprise od 6 990 zł netto miesięcznie (bez ograniczeń). W każdym planie cena obejmuje hosting w WiseB2B Cloud, aktualizacje, monitoring 24/7 i kopie zapasowe. Nie ma opłat od wartości transakcji (GMV). Koszt wdrożenia możesz rozłożyć w subskrypcji.
3. **Czy pobieracie prowizję od obrotu?**
   Nie. To nasza dożywotnia obietnica. Płacisz stały abonament za plan i wybrane moduły, bez prowizji od wartości zamówień i od liczby transakcji. Gdy sprzedaż przez platformę rośnie, opłata zostaje ta sama.
4. **Który plan WiseB2B wybrać, jeśli nie mogę przewidzieć rozwoju biznesu?**
   Taki wybór najlepiej omówić z konsultantem WiseB2B. Wspólnie przeanalizujecie obecną sytuację Twojej firmy, liczbę produktów, klientów i plany rozwojowe. Generalnie: Start sprawdzi się na początek cyfryzacji sprzedaży, Professional, gdy potrzebujesz zaawansowanych cenników, dokumentów handlowych i integracji, a Enterprise przy sprzedaży międzynarodowej, wielu sklepach lub dużej skali operacji.
5. **Czy mogę zmienić plan WiseB2B w trakcie użytkowania?**
   Tak, zmiana planu jest bardzo prosta: dopełniasz formalności i natychmiast otrzymujesz dostęp do dodatkowych modułów i funkcji. Konsultant wprowadzi Cię w nowe możliwości i pokaże, jak je wykorzystać w Twoim biznesie. Dzięki modułowej architekturze platformy zmiana planu nie wymaga migracji danych ani przerwy w działaniu sklepu.
6. **W którym planie są Panel Handlowca i Agent AI?**
   W planie Enterprise Panel Handlowca z ofertowaniem i zadaniami oraz Agent Klienta są w pakiecie. W Professional każdy z nich możesz dodać jako opcję. Plan Start ich nie obejmuje, ale handlowiec może zalogować się na konto klienta i złożyć zamówienie w jego imieniu. Agenta Administratora i automatyczne generowanie treści przez AI dodajesz jako opcje w Professional i Enterprise.
7. **Czym różni się moduł „w pakiecie” od „opcji dodatkowej”?**
   Moduły oznaczone jako „w pakiecie” są wliczone w cenę danego planu i nie ponosisz za nie dodatkowych opłat. „Opcja dodatkowa” oznacza, że moduł jest dostępny w Twoim planie, ale jego koszt nie jest uwzględniony w cenie bazowej, więc możesz go dokupić w zależności od potrzeb. Moduły oznaczone jako „niedostępne” wymagają przejścia na wyższy plan.
8. **Z jakimi systemami ERP integruje się WiseB2B?**
   WiseB2B oferuje gotowe integracje z popularnymi systemami ERP: Teneum, Comarch Optima, Comarch XL, enova365 i Subiekt. Integracja odwzorowuje reguły handlowe występujące w danym ERP: cenniki, stany magazynowe, zamówienia, faktury i rozrachunki. Integracja z ERP to osobny moduł, który dodajesz do każdego planu. Dodatkowo platforma udostępnia Admin API i Client API, środowisko n8n oraz platformę integracyjną Apilo do budowania własnych automatyzacji i integracji z dowolnymi systemami zewnętrznymi.
9. **Czy WiseB2B obsługuje sprzedaż zagraniczną i wielojęzyczność?**
   Tak. Plan Enterprise zawiera moduły sprzedaży zagranicznej (automatyczna weryfikacja VIES, VAT 0%, wielowalutowe koszyki), cenniki wielowalutowe oraz wielojęzyczność (opisy produktów, kategorie, artykuły CMS w wielu językach). W planie Professional moduły te są dostępne jako opcje dodatkowe. To sprawia, że WiseB2B sprawdza się zarówno na rynku krajowym, jak i przy ekspansji na rynki CEE i UE. VMP sprzedaje na WiseB2B do 13 krajów w 13 wersjach językowych.
10. **Czym są pluginy i rozszerzenia w WiseB2B?**
    Pluginy to dodatkowe moduły rozszerzające funkcjonalność platformy, tworzone na potrzeby konkretnych klientów. W planach Professional i Enterprise możesz budować własne wtyczki i instalować je w środowisku Cloud. W planie Enterprise dostajesz dostęp do kodu źródłowego (w Professional możesz go dokupić) i możesz dodać Customization Studio, środowisko do generowania pluginów wspierane przez AI. Pluginy możesz projektować samodzielnie lub zlecić ich budowę partnerowi wdrożeniowemu albo zespołowi WiseB2B.
11. **Czy WiseB2B można zainstalować na własnym serwerze (OnPremise)?**
    Tak. Plany Professional i Enterprise oferują możliwość instalacji lokalnej (OnPremise) oprócz standardowego modelu WiseB2B Cloud. To rozwiązanie dla firm z restrykcyjnymi wymaganiami bezpieczeństwa, compliance lub potrzebą pełnej kontroli nad infrastrukturą. Niezależnie od modelu wdrożenia platforma działa identycznie i otrzymuje te same aktualizacje.
12. **Jak wygląda wdrożenie platformy WiseB2B i ile kosztuje?**
    Wdrożenie WiseB2B obejmuje analizę potrzeb, konfigurację platformy, integrację z ERP, migrację danych i szkolenia użytkowników. Zaczyna się od sprintu analitycznego (1–4 tygodnie), po którym znasz zakres, czas i budżet wdrożenia, a całość trwa zwykle od 2 do 6 miesięcy. Dzięki gotowym modułom i integracjom czas wdrożenia jest znacznie krótszy niż przy dedykowanych rozwiązaniach. Każdy klient otrzymuje środowisko produkcyjne, a w planach Professional i Enterprise także testowe, co pozwala bezpiecznie weryfikować konfigurację przed uruchomieniem. Koszt wdrożenia możesz rozłożyć w subskrypcji: abonament z wdrożeniem to zwykle 50–100% miesięcznej pensji jednego handlowca.
> Źródło: maj (1, 2, 4, 5, 7–12), v4 (3, 6). Zmiany: „Starter” → Start, „eNova” → enova365, „e-Commerce” → Commerce B2B (słownik); lista ERP uzupełniona o Comarch Optima i Subiekt (lista potwierdzona przez CEO) i Apilo [P43]. Pyt. 2: „aktualizacje i wsparcie” → „aktualizacje, monitoring 24/7 i kopie zapasowe” (kontekst §1; zakres wsparcia określa umowa) + rozłożenie wdrożenia w subskrypcji. Pyt. 3 i 6 z v4 (sprawdzone z katalogiem), bo mapa wymaga na tej stronie odpowiedzi „bez GMV” i „co w którym pakiecie”; w pyt. 6 dopisane opcje Agenta Administratora i generowania AI z katalogu. Pyt. 5: „upgrade” → „zmiana planu”. Pyt. 8: dopisane, że integracja ERP to osobny moduł (katalog: opcja w każdym planie). Pyt. 9: dowód VMP [P44]. Pyt. 10: „Development Studio” → Customization Studio (słownik), i jako opcja, nie w pakiecie (katalog); „W planie Professional” → „Professional i Enterprise” (wtyczki własne są w obu); kod w Professional jako opcja [P50]. Pyt. 12: dopisany sprint 1–4 tyg., czas 2–6 mies. [P49] i koszt w relacji do pensji handlowca (kontekst §1, §8; kotwica 50–60 tys. zł zostaje w sprzedaży). Myślniki ozdobne w odpowiedziach usunięte. Redakcja przywróciła sformułowania CEO zmienione bez powodu: pyt. 8 „do budowania własnych automatyzacji i integracji”, pyt. 9 „To sprawia, że”, pyt. 10 „lub zlecić ich budowę”, pyt. 12 pierwsze zdanie („Wdrożenie WiseB2B obejmuje analizę potrzeb…”) i zdanie o środowisku produkcyjnym i testowym.

## Newsletter
- **Tytuł:** Bądź na bieżąco z nowościami eCommerce i WiseB2B
- **Pole:** E-mail...
- **Przycisk:** Zapisz się

## Otwarte kwestie
- [P47] Panel Handlowca: w pakiecie Enterprise, opcja w Professional (karty planów, FAQ 6). Zgodne z katalogiem.
- [P50] Kod źródłowy: Enterprise, opcja w Professional (karty, FAQ 10).
- [P46] W tabeli jest więcej pozycji niż „37 modułów”; w lead tabeli liczba nie pada.
- [P43] Apilo (FAQ 8).
- [P44] VMP 13 krajów (FAQ 9).
- [P49] Wdrożenie 2–6 miesięcy (FAQ 12).
- [NEED] Ceny modułów (np. Panel Handlowca 300 zł, Agent Klienta 600 zł w katalogu `produkt/`) celowo nie trafiają na stronę: katalog ma dopisek „ceny modułów wymagają weryfikacji z aktualnym cennikiem”. Jeśli CEO chce pokazać ceny opcji w tabeli, potrzebny aktualny cennik.
- [NEED] Kolekcja `obszary` używa pola `starter`; w nagłówku tabeli ma być „Start” (zmiana etykiety w kodzie przy wdrożeniu).
- [NEED] FAQ 5: „natychmiast otrzymujesz dostęp” i „bez przerwy w działaniu sklepu” to tekst CEO z maja; zostaje, ale warto potwierdzić, że zmiana planu nie wymaga okna serwisowego.
- [NEED] FAQ 12: relacja „50–100% pensji handlowca” pochodzi z kontekstu (model subskrypcji z wdrożeniem). Jeśli CEO woli nie podawać jej publicznie, zdanie kończy się na „rozłożyć w subskrypcji”.
