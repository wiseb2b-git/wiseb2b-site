# Obiekcje i konkurencja — WiseB2B

## Typowe obiekcje klientów

| Obiekcja | Nasza odpowiedź | Materiały wspierające |
|----------|------------------|-----------------------|
| "To kolejny SaaS — będziemy uzależnieni od dostawcy" | WiseB2B daje kod źródłowy (pakiet Enterprise) i opcję OnPremise. Możesz hostować u siebie, w chmurze publicznej (AWS, Azure, Google) lub w WiseB2B Cloud. Twoja agencja lub zespół IT może rozwijać platformę niezależnie. Brak vendor lock-in jest jednym z naszych głównych wyróżników. | Slajd "OpenCode + OnPremise" z prezentacji, dokumentacja architektury, Customization Studio (Enterprise), opis Plugin-ready |
| "Magento / Shopware / Spryker mają większą społeczność" | Tak — i większy koszt wdrożenia, bo platformy te są B2C-first i wymagają silnej rozbudowy do obsługi specyfiki B2B (cenniki indywidualne, limity, sub-konta, autoryzacje, miejsca odbioru). WiseB2B jest B2B-first → komplet gotowych funkcji w standardzie → niższy koszt wdrożenia i krótszy time-to-market. Plus: żadne rozwiązanie OpenSource nie zapewnia gwarancji zgodności prawnej — ciężar dostosowania spada na klienta. WiseB2B bierze ten ciężar na siebie. | Tabela porównawcza B2B-first vs B2C-rozbudowany, kalkulacja TCO |
| "Boimy się aktualizacji — popsujecie nasze customizacje" | Architektura plugin-ready (DDD) gwarantuje, że rozszerzenia są w odseparowanym kodzie. Aktualizacja core nie wymaga przepisywania pluginów. Customization Studio wspiera tworzenie pluginów z asystą AI. | Diagram architektury, opis modelu pluginów, opis procesu aktualizacji |
| "Boimy się integracji z naszym ERP" | WiseB2B ma gotowe integracje z Teneum, Comarch XL, eNova, Comarch Optima, Subiekt + platformę integracyjną Aplio + n8n w WiseB2B Cloud. Dla VMP zrealizowaliśmy 100% automatyzację synchronizacji ERP↔B2B. | Lista gotowych integracji, case study VMP, dostęp do dokumentacji Admin API |
| "Wasi konkurenci oferują GMV jako 'rozliczenie z sukcesem'" | GMV brzmi atrakcyjnie na małej skali, ale przy rosnącym obrocie pożera marżę. WiseB2B ma deklarowaną "dożywotnią obietnicę" braku opłat GMV — stała opłata, przewidywalność, im więcej sprzedajesz, tym więcej zarabiasz. | Kalkulator TCO 5 lat (GMV vs flat-fee), opis modelu cenowego |
| "Czy macie prawdziwe AI, czy tylko czat?" | WiseB2B ma agentów AI realizujących operacje (nie tylko odpowiadających na pytania): Agent Klienta — wyszukiwanie, dodawanie do koszyka, import zamówień z dowolnej treści/plików, status, porównywanie. Agent Administratora — operacje masowe, konfiguracja. Automatyzacja generowania AI — schematy generowania wartości pól. AI w pluginach — niższe koszty rozwoju. | Demo Agentów AI, opis modułów AI w obszarze 6 |
| "Wdrożenie potrwa rok" | Sprawdzony 6-etapowy proces: Sprint analityczny (1-4 tyg.) → Projekt graficzny → Prace wdrożeniowe → Integracje → Testy akceptacyjne → Uruchomienie. Triplex i VMP Group potwierdzają realny harmonogram z mierzalnymi efektami. Sprint analityczny pozwala szybko zweryfikować zakres. Im więcej standardu używasz, tym szybciej go-live. | Case study VMP, case study Triplex, opis metodyki wdrożeniowej, plan wdrożenia z etapami |
| "Nie macie tylu wdrożeń co konkurencja" | Zespół WiseB2B ma za sobą wsparcie Sente — ponad 25 lat doświadczenia w handlu, ponad 120 projektów dla średnich i dużych firm. 12+ wdrożeń, 20 000+ użytkowników platformy. VMP: 86 000 indeksów, 13 krajów, >90% dropshipping. Triplex: 46% zamówień i 50% obrotu przez B2B. Sieć Partnerów Wdrożeniowych (Sente, Satisfly) zapewnia skalowanie zespołu. | Bio Sente (25+ lat, 120+ projektów), case study VMP, case study Triplex, strona /partnerzy-wdrozeniowi/ |
| "Co jeśli zniknie Sente / WiseB2B?" | Masz kod źródłowy (Enterprise) lub OnPremise — możesz utrzymywać platformę niezależnie. Architektura plugin-ready i otwarte API (Admin API, Client API) pozwalają zmienić zespół wsparcia bez wymiany platformy. Headless pozwala podpiąć dowolny frontend. | Opis OpenCode, plan continuity, analiza ryzyka |
| "Cena — czy to się opłaca przy naszej skali?" | Pakiet Start to 1 990 PLN/mies. (~24 000 PLN/rok), Professional 3 490 PLN/mies. (~42 000 PLN/rok), Enterprise 6 990 PLN/mies. (~84 000 PLN/rok). To 50-100% miesięcznego wynagrodzenia 1 handlowca przy modelu z wdrożeniem. Wdrożenie zwraca się w odciążeniu BOK i wzroście sprzedaży online. Triplex: 46% zamówień i 50% obrotu przeniesione na platformę B2B. Dla porównania: Magento Commerce / Adobe Commerce zaczyna się od ~22 000 USD/rok + GMV + koszt wdrożenia. | Tabela cen, kalkulator ROI, porównanie z Magento Commerce / Shopify Plus |
| "Boimy się migracji — to ryzyko" | WiseB2B ma 4-etapowy proces Bezpiecznej Migracji: (1) Sprint analityczny — mapowanie obecnego systemu; (2) Uruchomienie równoległe — stary i nowy system działają jednocześnie; (3) Migracja danych i klientów — etapowa, z testami; (4) Przełączenie — kontrolowane go-live po akceptacji. Zero przestojów = minimalne ryzyko dla operacji. | Strona wiseb2b.eu/bezpieczna-migracja/ (nowy URL), plan migracji, case study |
| "Mamy własny eCommerce zbudowany z agencją — po co WiseB2B?" | Pytanie o TCO 5 lat: ile kosztuje utrzymanie własnej platformy (zespół, długi technologiczny, brak gotowych integracji, brak AI)? WiseB2B daje gotowe funkcje B2B + AI + Panel Handlowca + ekspansję zagraniczną w standardzie. Customizacje robisz w pluginach, bez ryzyka legacy. Migracja jest bezpieczna — 4-etapowy proces z równoległym działaniem starej i nowej platformy. | Audit własnego rozwiązania (sprint analityczny), porównanie TCO, lista gotowych funkcji, opis Bezpiecznej Migracji |
| "Czy są jakieś case study z naszej branży?" | VMP Group (fashion/beauty/bielizna) — pełny case study z metrykami. Triplex (dystrybucja artykułów pirotechnicznych) — pełny case study z metrykami. Inne branże w portfolio Sente (handel techniczny, dystrybucja spożywcza, opakowania) — wymaga weryfikacji aktywnego wdrożenia WiseB2B przed użyciem jako referencji. | Case study VMP (wiseb2b.eu/case-study-vmp/), case study Triplex (wiseb2b.eu/case-study-triplex/), referencje na wniosek |

---

## Pozycjonowanie konkurencyjne

### Ogólne wyróżniki

- **B2B-first** — zaprojektowane od podstaw dla B2B, nie rozbudowa B2C; komplet 37 modułów B2B w standardzie
- **Commerce Platform (eCommerce + Panel Handlowca w jednym)** — bez konieczności posiadania osobnego CRM
- **Praktyczne AI (agenci wykonujący operacje)** — Agent Klienta (Email-2-Cart, import zamówień, kompletacja z doradztwem), Agent Administratora, generowanie AI
- **Client API** — Twoi klienci integrują swoje systemy zakupowe z Twoją platformą (deklarowane jako unikalne)
- **OpenCode + OnPremise + brak GMV** — pełna niezależność, brak prowizji od obrotu
- **Gwarancja zgodności prawnej** — WiseB2B gwarantuje compliance (GPSR, RODO, wymogi fakturowania) — przy OpenSource ciężar regulacji spada na klienta
- **Bezpieczna Migracja** — 4-etapowy proces z równoległym działaniem starego i nowego systemu, zero przestojów
- **Sieć Partnerów Wdrożeniowych** — Sente (25+ lat, 120+ projektów), Satisfly (14 lat, 120+ wdrożeń eCommerce, UX/UI) + program partnerski

---

### vs Magento / Adobe Commerce (B2B Edition)

- **Ich mocna strona:** Globalna społeczność, ogromny ekosystem rozszerzeń, dojrzałość, duża liczba certyfikowanych agencji wdrożeniowych
- **Nasza przewaga:** B2B-first vs B2C rozbudowany; niższy koszt wdrożenia (mniej customizacji w core); Panel Handlowca w standardzie; gotowe integracje z polskimi ERP (Teneum, Comarch, eNova, Subiekt); gwarancja zgodności prawnej (Magento = ciężar regulacji na kliencie); architektura prostsza i tańsza w utrzymaniu; lokalny zespół wsparcia + Sieć Partnerów (Sente, Satisfly)
- **Typowa obiekcja:** "Magento jest standardem rynkowym"
- **Nasz argument:** Standard B2C, nie B2B. Klienci rozbudowujący Magento pod B2B zazwyczaj kończą z 2-3x kosztem wdrożenia w porównaniu do platformy B2B-first. Ekosystem rozszerzeń Magento jest niesprawdzony pod nasze warunki rynkowe (cenniki PL, integracje PL, wymogi VAT). Żadne rozwiązanie OpenSource nie gwarantuje zgodności prawnej — ciężar dostosowania spada na klienta i agencję. Plus: opłaty Adobe Commerce (~22k USD/rok + GMV).

---

### vs Shopware (B2B Suite)

- **Ich mocna strona:** Niemiecka jakość, headless, dobre API, znane w branżach DACH, popularne w fashion
- **Nasza przewaga:** Polski zespół + polskie ERP-y w standardzie; Panel Handlowca + AI w jednym pakiecie; OpenCode i OnPremise; brak vendor lock-in; niższy koszt wdrożenia w warunkach polskich; gwarancja zgodności prawnej PL; Bezpieczna Migracja (4-etapowy proces)
- **Typowa obiekcja:** "Shopware jest popularny w naszej branży międzynarodowo"
- **Nasz argument:** Dla polskich firm sprzedających głównie do polskich/CEE klientów Shopware oznacza pracę z agencją niemiecką lub międzynarodową — wyższe koszty, dłuższe wdrożenie. WiseB2B + Sente dostarcza projekt w lokalnym kontekście z gotowymi integracjami.

---

## Polskie platformy B2B — mapa konkurencji


**Podział rynku (perspektywa z warsztatów):** rynek dzieli się na (1) **zamknięte SaaS-y** — klient jest "skazany" na dostawcę technologii, brak możliwości instalacji wewnętrznej, oraz (2) **open source** — pełna wolność, ale ciężar wdrożenia, utrzymania i zgodności prawnej spada na klienta (wdrożenie Magento/Presta to 500 tys.–1 mln PLN). **WiseB2B pozycjonuje się pośrodku** — wyciągnęliśmy najlepsze praktyki z obu modeli: gotowy produkt SaaS + dostęp do kodu i OnPremise. Funkcjonalnie platformy są coraz bardziej porównywalne — firmy ścigają się we wdrażaniu AI; tam mamy realną przewagę (agenci wykonujący operacje, nie czat).

**Zastosowanie w prospectingu:** platforma wykryta u prospekta (detekcja technologii) → sekcja konkurenta poniżej = gotowy talk track migracyjny.

---

### vs ONe (OneB2B, b2b.one) — główny konkurent funkcjonalny

- **Ich mocna strona:** Pozycjonują się jako "największa platforma B2B w Polsce" — 3 mld PLN transakcji rocznie; zaawansowana automatyzacja ofert i sprzedaży (moduły ePrice, Ofertownik), zaawansowany panel handlowca; 30+ integracji ERP (Subiekt GT, enova365, SAP, Comarch XL), architektura mikroserwisowa, API-first, PWA; bardzo dobry marketing (cykliczne webinary, pokazywanie nowości); platforma "przyjemna dla oka"; 60% klientów to branża elektrotechniczna (~1,2 mln zarejestrowanych produktów)
- **Nasza przewaga:** Technologicznie "postawili na złego konia" — w bezpośrednim przetargu nie czujemy zagrożenia technologicznego; **vendor lock** (zmiany tylko przez ich firmę wdrożeniową) vs nasz OpenCode/OnPremise; wysoki próg wejścia u nich; nasi agenci AI wykonują operacje, nie tylko analizują statystyki
- **Typowa obiekcja:** "ONe to największa platforma B2B w Polsce, obsługują miliardy transakcji"
- **Nasz argument:** Skala dostawcy ≠ dopasowanie do Twojej firmy. W ONe każda zmiana przechodzi przez ich zespół wdrożeniowy — to model, w którym rośnie koszt i zależność (analogia: BaseLinker z dnia na dzień podniósł klientom opłaty). WiseB2B daje kod źródłowy i wybór partnera — niezależność zamiast uzależnienia od jednego dostawcy.

---

### vs Comarch e-Sklep / Comarch B2B — **przede wszystkim ŹRÓDŁO LEADÓW, nie konkurent**

- **Ich mocna strona:** Portal B2B jako rozszerzenie Comarch ERP — jedna baza danych, 100% spójność (stany, ceny, faktury); bezpieczeństwo i stabilność wielkiej korporacji (6500 osób, własne data center); część szerokiego ekosystemu ERP/CRM/BI; świetnie wypozycjonowani w Google, znana marka
- **Ich słabość:** Comarch e-Sklep **współpracuje wyłącznie z systemami Comarch i nie jest customizowalny**. Firmy, które na nim wystartowały, często realizują przez niego zaledwie ~5% sprzedaży
- **Strategia prospectingowa (z warsztatów):** *"Wolimy rozmowy z firmami, które mają już Comarch e-Sklep i 5% sprzedaży w e-sklepie"* — taka firma zrobiła już pierwszy krok cyfryzacji, zna ograniczenia, a problemem jest mindset dyrektora sprzedaży, nie technologia. To najcieplejszy segment migracyjny.
- **Typowa obiekcja:** "Mamy już Comarch e-Sklep zintegrowany z naszym ERP — po co zmieniać?"
- **Nasz argument:** ERP zostaje — WiseB2B ma gotowe integracje z Comarch XL i Comarch Optima. Wymieniasz tylko warstwę sprzedażową, która dziś obsługuje kilka procent Twojej sprzedaży. Jeśli po latach platforma obsługuje 5–15% transakcji, to nie klienci są problemem — to platforma nie daje im powodu, by kupować online. Migracja jest bezpieczna (4-etapowy proces, systemy działają równolegle).

---

### vs cStore

- **Ich mocna strona:** ~20 lat na rynku, spółka na NewConnect, ~700 zrealizowanych projektów, ~130 aktywnych klientów abonamentowych (m.in. Cargill, Trefl); rozbudowane funkcje B2B: panel handlowca, ofertowanie, cenniki, rabaty, zamówienia hurtowe i cykliczne; szerokie integracje ERP (w tym SAP, Oracle, Symfonia); SFA — aplikacja mobilna dla handlowców terenowych
- **Nasza przewaga:** Panel Handlowca zintegrowany w standardzie (u nich CRM/OMS/SFA to osobne moduły — pełny zestaw od 16 950 PLN/mies. vs nasz Enterprise 6 990 PLN); praktyczne AI dostępne dziś (u nich w planach); OpenCode + OnPremise (cStore to czysty SaaS bez dostępu do kodu); niższa cena za porównywalny zakres (3 490 vs 6 850 PLN/mies.)
- **Typowa obiekcja:** "cStore ma 20 lat doświadczenia i setki wdrożeń"
- **Nasz argument:** Porównaj zakres w cenie: u nas eCommerce + Panel Handlowca + opcja AI w jednym pakiecie; u cStore analogiczny zestaw wymaga najwyższego pakietu i 36-miesięcznego kontraktu bez dostępu do kodu. Pełne porównanie: gotowy artykuł `wiseb2b/out/artykul_wiseb2b_vs_cstore.md` (PDF do wysyłki prospektom).

---

### vs AtomStore (przejęty przez IdoSell)

- **Ich mocna strona:** SaaS klasy enterprise z rozbudowanym B2B (cenniki, limity, ofertownik, integracje ERP, marketing automation w jednym); transparentny publiczny cennik pakietów i wdrożeń; 300+ aktywnych klientów (iSpot, Znak, Cocolita, Ogrodniczy.com); robią bardziej customowe rzeczy niż IdoSell
- **Nasza przewaga:** OpenCode/OnPremise (AtomStore = zamknięty SaaS); Panel Handlowca i agenci AI w standardzie; przejęcie przez IdoSell = niepewność kierunku produktu i przyszłej polityki cenowej
- **Typowa obiekcja:** "AtomStore dostosuje platformę pod nas, a cennik mają przejrzysty"
- **Nasz argument:** Customizacje w zamkniętym SaaS robi wyłącznie dostawca — wracamy do vendor locka. U nas customizacje powstają w pluginach (Customization Studio), może je robić dowolna agencja lub Twój zespół. Nasz cennik też jest jawny: 1 990 / 3 490 / 6 990 PLN/mies.

---

### vs IdoSell / Shoper

- **Ich mocna strona:** IdoSell: 25 lat, 8 000+ sklepów, 60 mln transakcji rocznie, kompletny ekosystem (IdoPay, IdoBooking, marketplace'y, WMS), funkcje AI (rekomendacje, dynamic pricing), silny brand i marketing ("przenieś sklep na IdoSell"), stabilna firma — ich klienci "się nie boją". Shoper: niski próg wejścia, masowa skala w segmencie MŚP
- **Nasza przewaga:** To platformy B2C-first z dodanym modułem B2B — ograniczony zakres warunków handlowych (hierarchie cenników, akceptacje, sub-konta, MPK, miejsca odbioru); brak kodu źródłowego, OnPremise niedostępne, vendor lock; brak zintegrowanego Panelu Handlowca
- **Typowa obiekcja:** "IdoSell ma B2B w cenniku i wszyscy ich znają"
- **Nasz argument:** Dla firmy 20+ mln PLN obrotu z setkami stałych klientów i negocjowanymi warunkami moduł B2B doklejony do silnika B2C to za mało — kończy się obsługą wyjątków mailem, czyli dokładnie tym, od czego chcesz odejść. **Uwaga z realnych deali:** zdarza się nam przegrywać z IdoSell na relacjach (właściciele firm znają się z właścicielami IdoSell) — tym ważniejsze jest wczesne dotarcie do właściciela i budowa relacji, nie tylko argumentacja funkcyjna.

---

### vs Saly (dawniej Sellingo)

- **Ich mocna strona:** Bardzo mocno komunikowane "wdrożenie w 4 tygodnie"; SaaS klasy enterprise z certyfikowanym data center (ISO, PCI DSS); integracje ERP/PIM/WMS; nowoczesny UX/UI i bardzo przejrzysta komunikacja oferty (kontakt → demo → wdrożenie ≤4 tyg. → wsparcie)
- **Nasza przewaga:** Głębia B2B (hierarchie cenników, uprawnienia, akceptacje) — szybkie wdrożenie konfiguracyjne oznacza standard bez odwzorowania specyfiki firmy; Panel Handlowca; agenci AI; OpenCode/OnPremise vs zamknięty SaaS
- **Typowa obiekcja:** "Saly wdroży nas w 4 tygodnie"
- **Nasz argument:** W 4 tygodnie wdraża się konfigurację standardu — pytanie, co z Twoimi warunkami handlowymi budowanymi latami (indywidualne cenniki, limity, autoryzacje)? Jeśli platforma ich nie odwzoruje, klienci zostaną przy mailu i telefonie, a Ty wrócisz do punktu wyjścia z platformą obsługującą 10% sprzedaży.

---

### vs Wapro B2B (Asseco)

- **Ich mocna strona:** 100% integracja z ERP Wapro Mag — jedna baza danych, zamówienia, płatności, rozrachunki i stany w czasie rzeczywistym; zaplecze Asseco (bezpieczeństwo, infrastruktura, długie utrzymanie produktów); szeroki pakiet od razu po wdrożeniu (hosting, backup, wielojęzyczność, B2B+B2C, 30-dniowy trial)
- **Nasza przewaga:** Rozwiązanie sensowne głównie dla użytkowników Wapro Mag — płytkie poza tym ekosystemem; brak Panelu Handlowca klasy CRM, brak agentów AI wykonujących operacje, zamknięty SaaS
- **Typowa obiekcja:** "Mamy Wapro Mag, ich B2B jest naturalnym wyborem"
- **Nasz argument:** Analogicznie jak przy Comarch e-Sklep: portal doklejony do ERP dobrze synchronizuje dane, ale nie zmienia sposobu sprzedaży (samoobsługa, ofertowanie, praca handlowca, AI). Jeśli po wdrożeniu nadal większość zamówień przychodzi mailem — potrzebujesz platformy sprzedażowej, nie okna do ERP.

---

### vs 2ClickShop (TI Sp. z o.o.)

- **Ich mocna strona:** Ekspresowe wdrożenia (komunikują "nawet 6 dni"); integracja real-time z ERP (w tym SAP, enova, Comarch XL); jasna specjalizacja "systemy e-Commerce B2B dla producentów, dystrybutorów i hurtowników"; klarownie opisany proces kontaktu i wdrożenia (wzór do naśladowania w komunikacji)
- **Nasza przewaga:** Głębia funkcji B2B + Panel Handlowca + agenci AI; OpenCode/OnPremise; architektura plugin-ready pod customizacje bez ryzyka aktualizacji
- **Typowa obiekcja:** "2ClickShop uruchomi nas w tydzień"
- **Nasz argument:** Jak przy Saly — tempo wdrożenia standardu nie jest wąskim gardłem; jest nim odwzorowanie Twoich procesów handlowych i adopcja przez klientów oraz handlowców. Nasz sprint analityczny w 1–4 tygodnie ustala realny zakres, a gotowe moduły skracają samo wdrożenie do 2–6 miesięcy.

---

### vs xSale.ai

- **Ich mocna strona:** Kompleksowa automatyzacja omnichannel — marketplace'y (Allegro, Amazon, eBay), sklepy, ERP i logistyka w jednym centrum; gotowe konektory wielokanałowe; adresują duże hurtownie multichannel
- **Nasza przewaga:** xSale to bardziej hub omnichannel/integrator niż głęboka platforma sprzedaży B2B — brak odwzorowania złożonych warunków handlowych, brak Panelu Handlowca klasy CRM; my dostarczamy kanał sprzedaży B2B z pełną specyfiką relacji handlowych
- **Typowa obiekcja:** "xSale spina nam wszystkie kanały w jednym miejscu"
- **Nasz argument:** Jeśli głównym problemem jest sprzedaż wielokanałowa B2C/marketplace — to inny use case. Jeśli problemem jest obsługa stałych klientów B2B z negocjowanymi warunkami — potrzebujesz platformy B2B-first; obie klasy narzędzi mogą zresztą współistnieć (nasze API + n8n).

---

### vs Automico B2B (Questy, automicob2b.pl)

- **Ich mocna strona:** Platforma B2B dla hurtowni i dystrybucji (higiena, metalurgia, sport, sanitarna), integracje ERP, szybkie uruchomienie, dostępność 24/7; zaplecze poznańskiej firmy Questy
- **Nasza przewaga:** Zamknięty SaaS średniej półki — brak kodu źródłowego, brak agentów AI, brak zintegrowanego Panelu Handlowca; nasza architektura (DDD, plugin-ready, headless) i ekspansja zagraniczna w standardzie
- **Typowa obiekcja:** "Automico jest tańsze i szybciej wdrażane"
- **Nasz argument:** Porównaj TCO i sufit funkcjonalny: platforma, z której wyrośniesz za 2 lata, to najdroższa opcja — druga migracja kosztuje więcej niż pierwsza. WiseB2B skaluje się z firmą (pakiety, moduły, pluginy, MultiStore) bez wymiany systemu.

---

### vs inTradus (inSolutions, Zabrze) — realnie przegrany deal, wyciągnięte lekcje

- **Ich mocna strona:** Dedykowana platforma B2B/B2C/Multistore/Marketplace (enterprise cloud); gotowe konektory NAVIREO, Subiekt GT, Nexo Pro, enova365; portfolio wdrożeń u dystrybutorów (elektrotechnika, artykuły biurowe)
- **Fakt z pipeline'u (lost deal):** klient wybrał inTradus, a naszą ofertę odrzucił z powodów: (1) mała liczba realizacji dostawcy, (2) aspekt wizualny zrealizowanych projektów, (3) obawa przed vendor lockiem, (4) wysokie koszty wdrożenia względem innych wycen, (5) wysokie koszty utrzymania względem innych wycen, (6) brak natywnego wsparcia integracji z ich ERP
- **Lekcje do stosowania w sprzedaży:** portfolio wizualne pokazywać wcześnie (case VMP/Triplex ze zrzutami ekranu); obiekcję vendor lock **uprzedzać** — paradoksalnie to nasz najmocniejszy atut (OpenCode/OnPremise), a mimo to przegraliśmy na tej obawie, czyli komunikacja nie dotarła; przy ERP spoza listy gotowych integracji jasno pokazywać ścieżkę (Aplio/n8n/Admin API) i jej koszt; kotwiczyć koszt wdrożenia wcześnie ("uruchomimy cię za 50–60 tys. PLN" dla standardowego zakresu)
- **Typowa obiekcja:** "inTradus ma więcej wdrożeń i natywną integrację z naszym ERP"
- **Nasz argument:** Zaplecze Sente to 25+ lat i 120+ projektów dla średnich i dużych firm handlowych — WiseB2B to v2 tych doświadczeń. Kod źródłowy i plugin-ready architektura dają Ci gwarancję niezależności, której zamknięta platforma nie da nigdy.

---

### vs Sylius / Medusa (open source)

- **Ich mocna strona:** Sylius — "Freedom of eCommerce Development": open source na Symfony, wysoka jakość architektury, europejska alternatywa dla Magento, Sylius Plus z funkcjami enterprise (multi-store, lojalność, zaawansowane uprawnienia). Medusa — "najbardziej elastyczna platforma commerce na świecie": darmowa, headless, API-first, ukochana przez zespoły developerskie
- **Nasza przewaga:** To frameworki do budowy sklepu, nie gotowe platformy B2B — funkcje B2B (cenniki indywidualne, limity, akceptacje, Panel Handlowca) trzeba wytworzyć; koszt i czas jak przy customie (wdrożenia open source w PL: 500 tys.–1 mln PLN); ciężar zgodności prawnej i aktualizacji na kliencie; Medusa dodatkowo oparta o stack frontendowy (React/Node) — trudna baza pod zaawansowane systemy transakcyjne
- **Typowa obiekcja:** "Open source = brak licencji i pełna wolność"
- **Nasz argument:** Licencja to najmniejszy koszt platformy B2B. Płacisz za wytworzenie funkcji, które my mamy w standardzie, a potem za ich utrzymanie przy każdej aktualizacji frameworka. WiseB2B daje ten sam poziom wolności (kod źródłowy, OnPremise, pluginy) bez budowania od zera — najlepsze praktyki obu światów.

---

### Segment poniżej ICP (nie konkurujemy aktywnie)

Dla firm mniejszych niż nasz ICP realną "konkurencją" są **Amazon Business, WooCommerce z rozszerzeniami B2B, Shoper** — nie walczymy o ten segment (patrz anty-persona w `03_buyer_persona.md`); to naturalni klienci tych rozwiązań, a dla nas ewentualny nurturing na przyszłość.

---

### vs własna platforma / build custom

- **Ich mocna strona:** Pełna kontrola, dopasowanie 1:1 do procesów
- **Nasza przewaga:** WiseB2B daje 80-90% gotowej funkcjonalności B2B + customizacje robisz w pluginach (10-20%). Build custom = ryzyko opóźnień, długu technologicznego, braku aktualizacji frameworka, problemów z utrzymaniem zespołu, brak gotowych integracji
- **Typowa obiekcja:** "Naszą platformę napisała agencja, działa OK"
- **Nasz argument:** Pytanie o TCO 5 lat: ile zespołu utrzymuje, ile kosztują nowe funkcje (AI, ekspansja zagraniczna, Panel Handlowca), ile długu technologicznego. WiseB2B = stała opłata + customizacje w pluginach, bez konieczności utrzymania zespołu rdzennego. Plus: code dostępny, więc migracja "obecna platforma → WiseB2B" możliwa stopniowo.

---

### vs Sales Layer / Akeneo PIM (PIM, nie eCommerce — często mylone)

- **Ich mocna strona:** Specjalizacja w PIM (zarządzanie informacją produktową)
- **Nasza przewaga:** WiseB2B ma wbudowany cyfrowy katalog z atrybutami, multimedia, dokumenty, GPSR, wielojęzyczność — funkcjonalność PIM zintegrowana z eCommerce. Nie potrzeba osobnego PIM-a dla większości firm
- **Typowa obiekcja:** "Mamy / chcemy mieć Akeneo"
- **Nasz argument:** Akeneo to dobra opcja dla firm z BARDZO dużą złożonością produktową (10k+ wariantów × 50+ atrybutów × 20+ języków × 10+ kanałów). Dla pozostałych — wbudowany katalog WiseB2B jest wystarczający i tańszy. Plus: integracja Akeneo ↔ eCommerce to projekt sam w sobie.

---

## Czym się NIE różnimy (co jest standardem rynkowym)

- **Responsywność / mobilna wersja** — to mają wszystkie nowoczesne platformy
- **Integracje z popularnymi kurierami (DPD, GLS, InPost)** — standard
- **Płatności online (PayU, AutoPay, PayPal)** — standard
- **Wielojęzyczność i wielowalutowość jako koncept** — standard (różnica jest w głębi i w cenie modułów)
- **API REST / GraphQL** — standard, choć nasza specyfika to dwa zestawy: Admin API + Client API
- **Filtry, wyszukiwarka, kategorie** — standard
- **Zwroty, reklamacje** — standard, choć automatyzacja zwrotów (case VMP) wyróżnia
- **CMS (aktualności, baza wiedzy)** — standard
- **Brak istotnych różnic w obszarze "podstawowej funkcjonalności sklepu"** — różnica jest w głębi B2B (cenniki, warunki, sub-konta), Panelu Handlowca, AI, niezależności (kod, OnPremise, GMV).

