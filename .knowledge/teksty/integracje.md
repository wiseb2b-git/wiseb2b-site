---
strona: integracje
url: /integracje/
figma: 150:237
title: Integracje WiseB2B z ERP, API, n8n, płatnościami
description: Gotowe integracje z Teneum, Comarch XL i Optima, enova365 i Subiekt. Do tego Apilo, n8n, Admin API i Client API, płatności, kurierzy i headless.
diagnoza: B. Strona z maja (= marzec = Figma) to tekst CEO z konkretnymi obietnicami („Integracje pozwalają WiseB2B pracować tam, gdzie Ty”, „będą w 100% odwzorowane w WiseB2B”, Admin API / Client API, n8n); brakuje w nim listy ERP w treści, ścieżki dla ERP spoza listy, kurierów, BIG/KRD i technologii, a hero w Figmie ma ogólny lead powtarzany na kilku stronach.
rola_w_mapie: Filar 3 (otwarty kod) + ERP. Elementy stałe: lista ERP, Apilo, n8n, Client API, technologia, ścieżka dla ERP spoza listy. VP#4.
---

# integracje: tekst do wdrożenia

## S1. Hero
- **Badge:** Integracje
- **H1:** Integracja WiseB2B z [[Twoim ERP]] i resztą systemów firmy
- **Lead:** Gotowe integracje z Teneum, Comarch XL, Comarch Optima, enova365 i Subiekt. Pozostałe systemy łączymy przez Apilo, n8n i API.
- **CTA:** Zamów demo → /zamow-demo/
> Źródło: nowy (H1 i lead), na bazie live („Integracje platformy WiseB2B”) i maja. Zmiany: lead Figmy („Platforma eCommerce B2B dla firm handlowych i produkcyjnych, łącząca sklep B2B, Panel Handlowca i Agenta AI…”) jest ogólny i powtarza się na kilku stronach; tu zastępuje go potwierdzona lista ERP (decyzja CEO 2026-11-10). Powód: CTO i COO wchodzą na tę stronę z jednym pytaniem: „czy macie mój ERP?”. Odpowiedź jest w pierwszym zdaniu.

## S2. Integracja platformy B2B z systemem ERP
- **Tytuł sekcji:** Integracja platformy B2B z systemem ERP
- **Lead:** Integracje pozwalają WiseB2B pracować tam, gdzie Ty.
- **Karty:**
  1. **Reguły handlowe będą spójne**: Informacje o cenach, promocjach czy rabatach: wszystkie elementy, które zdefiniujesz w swoim ERP, będą w 100% odwzorowane w WiseB2B. Dotyczy to też cenników indywidualnych i kredytu kupieckiego.
  2. **Dane zachowają integralność**: Dzięki integracji z ERP informacje o kontrahentach, zamówieniach czy produktach będą obustronnie wymieniane z platformą eCommerce B2B. W VMP synchronizacja ERP z platformą jest zautomatyzowana w 100%.
  3. **Bez dodatkowych paneli**: Nie będziesz musiał zarządzać informacjami o produktach, klientach czy swojej ofercie z poziomu WiseB2B. Jeśli w swoim ERP będziesz w stanie zapisać niezbędne informacje, to dzięki integracji będą one spójne również w kanale eCommerce B2B.
- **Blok „Twój ERP”:**
  - **Etykieta:** Integrujemy się z:
  - **Lista:** Teneum · Comarch XL · Comarch Optima · enova365 · Subiekt · Apilo
  - **Masz inny ERP?** SAP, Oracle, IFS, Dynamics albo inny system bez gotowej integracji łączymy przez platformę Apilo, n8n lub Admin API. To dłuższy projekt integracyjny. Jego zakres, czas i koszt ustalamy w sprincie analitycznym (1–4 tygodnie), zanim ruszy wdrożenie.
> Źródło: maj = Figma (karty, etykieta „Integrujemy się z:”). Zmiany: myślniki → dwukropek i kropka; „e-Commerce” → „eCommerce”. Karta 1: dopisane cenniki indywidualne i kredyt kupiecki (kontekst §6: warunki z ERP 1:1). Karta 2: wersja z Figmy (krótsza, bez powtórzenia „spójne”) + dowód VMP 100% automatyzacji (kontekst §12). Karta 3: pełniejsza wersja z maja (Figma ucina „o produktach, klientach czy swojej ofercie”), tytuł z Figmy. Akapit „Masz inny ERP?” to NOWY ELEMENT (poza Figmą): mapa §9 wymaga ścieżki dla ERP spoza listy, a lekcja z przegranego deala (kontekst §5, pkt 4) mówi, żeby pokazywać ją od razu. SAP i pozostałe jako „dłuższy projekt, nie bloker” zgodnie z [P48] (wersja rekomendowana a).

## S3. Integracja za pomocą API
- **Tytuł sekcji:** Integracja za pomocą API
- **Lead:** Integracja WiseB2B za pomocą API jest możliwa w dwóch trybach:
- **Karty:**
  1. **Client API**: Przeznaczone dla klientów biznesowych dystrybutorów i producentów do składania i śledzenia realizacji swoich zamówień, ewentualnie pobierania cenników i informacji na temat dostępności towarów. Z Client API korzysta VMP.
  2. **Admin API**: Przeznaczone dla dystrybutorów i producentów korzystających z WiseB2B do samodzielnej integracji systemów własnych. Przez Admin API Twój dział IT może też automatyzować administrację platformą. Dokumentacja API jest dostępna w ReDoc.
> Źródło: maj = Figma (kolejność kart jak w Figmie: Client API, potem Admin API). Zmiany: Client API: zdanie CEO przywrócone (przebudowa na zdanie z podmiotem nie zmieniała treści), poprawione tylko „cenników, informacji” → „cenników i informacji”; dopisane VMP (`marketing/04`: VMP ma Client API i Admin API). Admin API: „integracji samodzielnej” → „samodzielnej integracji” (szyk); dopisana administracja automatyczna (`marketing/01`: „Admin API (integracje + administracja automatyczna)”) i ReDoc (VP#4). Twierdzenia o unikalności Client API nie ma [P42].

## S4. Płatności, kurierzy, wywiadownie i front-end
- **Karty:**
  1. **Integracje z systemami płatności**: W sprzedaży B2B coraz częściej mamy do czynienia z płatnościami natychmiastowymi, dlatego możliwość dokonywania opłaty za zamówienie z poziomu platformy B2B jest tak ważna. WiseB2B jest zintegrowane z najpopularniejszymi systemami płatności, m.in. AutoPay i PayU, ułatwiając finalizowanie transakcji klientom biznesowym. Status zamówienia aktualizuje się po potwierdzeniu płatności.
  2. **Integracje z kurierami** (karta dodana, poza Figmą): Platforma jest zintegrowana z GLS, DPD, DPD Pickup, InPost, InPost Kurier i Pocztex. Sama wylicza koszt dostawy, a klient wybiera kuriera i śledzi status przesyłki na platformie. Dla każdego sposobu dostawy ustawiasz osobne zasady: dla kogo jest widoczny, od jakiej kwoty dostawa jest darmowa i jak liczy się jej cena.
  3. **Wywiadownie gospodarcze BIG i KRD** (karta dodana, poza Figmą): Kredyt kupiecki możesz oprzeć na danych z wywiadowni gospodarczych, np. BIG i KRD. Platforma weryfikuje kontrahenta, sugeruje limit kredytowy i aktualizuje go, gdy przyjdą nowe dane.
  4. **Integracja z alternatywnym systemem front-end**: Wybierając WiseB2B, otrzymujesz kompletną platformę, która pozwoli scyfryzować Twoją sprzedaż B2B od A do Z. Jeśli jednak z dowolnego powodu zależy Ci na zastosowaniu własnego systemu front-end, możesz zintegrować WiseB2B z zewnętrznym rozwiązaniem UX, np. Vue Storefront. Architektura headless pozwala też podłączyć do platformy własny portal albo aplikację mobilną.
> Źródło: maj = Figma (karty 1 i 4). Zmiany: karta 1: zdanie CEO „zintegrowane z najpopularniejszymi systemami płatności, ułatwiając finalizowanie transakcji…” zostaje (redakcja cofnęła przebudowę, która miała tylko formalny powód), dopisane nazwy operatorów (m.in. AutoPay i PayU) i zdanie o statusie zamówienia. Karta 4: przecinek po „Wybierając WiseB2B”, zbędne „to” usunięte, dopisane headless (VP#4, mapa §9). Karty 2 i 3 dodane na prośbę briefu, z katalogu `produkt/opis modułów` (Kurierzy, Płatności elektroniczne, Zarządzanie kredytem kupieckim). Kolejność: płatności i logistyka przed front-endem, bo dotyczą każdego klienta, a front-end tylko niektórych.

## S5. Silnik automatyzacji n8n w WiseB2B Cloud
- **Tytuł sekcji:** Silnik automatyzacji n8n w WiseB2B Cloud
- **Lead:** W ramach usługi WiseB2B Cloud udostępniamy n8n: niezależne, potężne środowisko do integracji i automatyzacji procesów biznesowych.
- **Karty:**
  1. **Wizualne tworzenie workflow**: Twórz przepływy automatyzujące procesy między platformą a systemami zewnętrznymi bez pisania kodu. Interfejs drag & drop pozwala budować nawet złożone scenariusze.
  2. **Setki gotowych integracji**: Łącz platformę z ERP, CRM, systemami e-mail, SMS, magazynowymi i wieloma innymi. n8n wspiera setki konektorów do popularnych usług i systemów.
  3. **Harmonogramowanie i monitoring**: Ustawiaj automatyczne wykonywanie workflow w określonych godzinach. Monitoruj ich przebieg i korzystaj z logów do audytu oraz debugowania.
- **Tekst pod kartami:** n8n eliminuje manualną obsługę powtarzalnych procesów i redukuje błędy. Automatyzuj synchronizację danych, powiadomienia, statusy zamówień i dziesiątki innych operacji bez zatrudniania programistów. Przez n8n działa integracja z ERP u dystrybutora części do maszyn rolniczych, z wymianą danych przyrostową i nocną.
- **Plany:** Start: opcja · Professional: w cenie · Enterprise: w cenie
> Źródło: maj = Figma. Zmiany: myślniki (—) → dwukropek albo bez znaku; „Starter” → „Start” (słownik). Dopisane ostatnie zdanie tekstu pod kartami (kontekst §12: integracja przez n8n z wymianą przyrostową i nocną; klient anonimowo). „Potężne” zostaje, bo to słowo CEO i jedyne takie w sekcji. Status n8n w planach zgodny z `produkt/obszary i moduły` (Start: opcja).

## S6. Technologia, którą Twój dział IT może sprawdzić (NOWA SEKCJA, poza Figmą)
- **Tytuł sekcji:** Technologia, którą Twój dział IT może sprawdzić
- **Karty:**
  1. **PHP/Symfony i React**: Backend w PHP/Symfony z PostgreSQL lub MySQL, front-end w React. Architektura DDD, API-first, headless i PWA, budowa modułowa.
  2. **Kod źródłowy u Ciebie**: Kod źródłowy jest w pakiecie Enterprise, a w Professional jako opcja. Platformę może rozwijać Twój zespół IT, partner wdrożeniowy albo nasz zespół.
  3. **Chmura albo własne serwery**: Wybierasz WiseB2B Cloud z n8n, instalację OnPremise na swoich serwerach albo chmurę publiczną (AWS, Azure, Google). Abonament jest stały, bez opłat od obrotu.
- **Linki:** Partnerzy wdrożeniowi → /partnerzy-wdrozeniowi/ · Zobacz plany → /plany-wiseb2b/
> Źródło: nowy, z VP#4, kontekst §1 i §6. Powód sekcji: mapa §9 wymaga na tej stronie „technologii” i filaru 3, a mapa §4 każe mówić o niezależności wcześnie i wprost (lekcja z przegranego deala o vendor lock). Figma nie ma na to gniazda. Kod źródłowy zgodnie z [P50] (wersja rekomendowana: Enterprise, opcja w Professional).

## S7. Rozbudowa bez modyfikacji kodu
- **Tekst:** WiseB2B jest gotowy do rozbudowy bez modyfikacji kodu źródłowego, z zachowaniem możliwości aktualizacji. Tak, aby podążać za Twoim biznesem i wyprzedzać rynek.
- **CTA:** Przeczytaj więcej o migracji → /bezpieczna-migracja/
> Źródło: maj (tekst), Figma (przycisk). Zmiany: literówka „wyprzedać” → „wyprzedzać”, podwójna spacja. Trzy kroki migracji z maja pominięte, bo Figma ma tu tylko przycisk, a pełny opis jest na stronie Bezpieczna migracja.

## S8. Chcesz dowiedzieć się więcej o możliwościach integracyjnych WiseB2B?
- **Tytuł sekcji:** Chcesz dowiedzieć się więcej o możliwościach integracyjnych WiseB2B?
- **Osoba:** Jakub Czyżkowski, CEO
- **Tekst:** Porozmawiaj z nami
- **CTA:** Umów się na rozmowę z ekspertem → /zamow-demo/
> Źródło: maj (tytuł, przycisk), Figma (gniazdo „Potrzebujesz szczegółowych informacji?”). Tytuł CEO z maja, bo mówi, o czym będzie rozmowa.

## FAQ
- **Tytuł sekcji:** Najczęściej zadawane pytania
1. **Z jakimi systemami ERP WiseB2B ma gotowe integracje?**
   Z Teneum, Comarch XL, Comarch Optima, enova365 i Subiekt. Do tego dochodzi platforma integracyjna Apilo oraz n8n w WiseB2B Cloud.
2. **Mój ERP nie jest na liście. Czy to problem?**
   Nie. SAP, Oracle, IFS, Dynamics i inne systemy łączymy przez Apilo, n8n lub Admin API. Taki projekt integracyjny trwa dłużej i kosztuje więcej niż gotowa integracja. Zakres, czas i koszt poznasz w sprincie analitycznym, zanim zdecydujesz o wdrożeniu.
3. **Jak długo trwa integracja z ERP?**
   Integracja to etap wdrożenia, który toczy się równolegle z pracami wdrożeniowymi. Całe wdrożenie trwa zwykle 2–6 miesięcy. Sprint analityczny (1–4 tygodnie) kończy się backlogiem, zakresem, czasem i budżetem projektu.
4. **Czy moi klienci mogą podłączyć swoje systemy zakupowe?**
   Tak, przez Client API. Ich systemy składają zamówienia, śledzą realizację i pobierają cenniki oraz dostępność towarów bez logowania się do sklepu.
> Źródło: nowy (sytuacja A: w Figmie trzy razy to samo pytanie-zaślepka „Czym charakteryzuje się platforma B2B dla producentów?”). Pytania 1–3 odpowiadają na obiekcję „Boimy się integracji z ERP” (kontekst §8) i lekcję o ERP spoza listy; pytanie 4 dodane dla CTO i producentów (persona: „Client API, integracja z systemami zakupowymi dystrybutorów”). Czas wdrożenia wg [P49] (wersja rekomendowana: 2–6 miesięcy).

## Newsletter
- **Tytuł:** Bądź na bieżąco z nowościami eCommerce i WiseB2B
- **Pole:** E-mail...
- **CTA:** Zapisz się
> Źródło: Figma. Komponent wspólny, bez zmian.

## Otwarte kwestie
- [P43] Apilo zamiast „Aplio” (wersja rekomendowana; wszystkie dokumenty CEO piszą „Aplio”).
- [P42] Client API bez twierdzenia „tego nie daje żadne inne narzędzie”. Jeśli CEO zdecyduje inaczej, zdanie pasuje na koniec karty Client API w S3.
- [P48] ERP spoza listy (SAP, Oracle, IFS, Dynamics) jako dłuższy projekt, nie bloker.
- [P49] Wdrożenie 2–6 miesięcy w FAQ 3.
- [P50] Kod źródłowy: Enterprise, opcja w Professional (S6, karta 2).
- [NEED] Lista operatorów płatności (AutoPay, PayU) i kurierów pochodzi z `produkt/opis modułów`, nie z materiałów sprzedażowych CEO. Prośba o potwierdzenie aktualności.
- [NEED] Koszt integracji z ERP spoza listy: lekcja z deali mówi „pokazywać ścieżkę i jej koszt”. Bez widełek w materiałach nie podajemy kwoty; jeśli CEO ma orientacyjną kwotę, wstawić ją w akapit „Masz inny ERP?”.
