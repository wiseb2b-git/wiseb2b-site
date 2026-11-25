# Product Marketing Context: WiseB2B

**Document version:** v3.1
**Last updated:** 2026-11-24

> **Rola:** MASTER dla skilli marketingowych i strony www (czytany przez `.agents/product-marketing.md`). Pełna wiedza sprzedażowa: `marketing/` (tylko do odczytu). Hierarchia i spis: `.knowledge/projekt/README.md`. Otwarte sprzeczności: `.knowledge/projekt/decyzje-do-podjecia.md`.

**Źródła (w kolejności ważności):**
1. Decyzje CEO z sesji 2026-11-09…24 (sekcja „Zasady CEO” na końcu).
2. Dokumenty marketingowe CEO: `.knowledge/marketing/00–07` (lipiec 2026, warsztaty strategiczne, realne deale).
3. Materiały CEO w `zrodla/`: szkolenia gid360, opis rozwiązania, przykłady wdrożeń, case VMP.
4. Katalog produktu w `produkt/` i notatka NotebookLM w `archiwum/` (próbka głosu CEO).

Gdy źródła się różnią, wygrywa wyższe. Dokument wewnętrzny, nie trafia do publicznego repo.

---

## 1. Product Overview

**One-liner:** WiseB2B to platforma Commerce B2B, w której w jednym środowisku spotykają się samoobsługa klienta, praca handlowca i agenci AI.

**Claim kategorii:** „Jedyna platforma Commerce B2B AI-Native z Panelem Handlowca i otwartym kodem” (decyzja CEO 2026-11-09). Wcześniejsza wersja w marketing/: „…z użytecznym AI…”.

**What it does:** Stali klienci dystrybutora lub producenta zamawiają sami, na cenach i warunkach z ERP. Handlowiec pracuje w Panelu Handlowca na tych samych danych: ofertuje, prowadzi sprawy, widzi kartę klienta 360°. Agenci AI wykonują operacje: składają koszyk z maila, PDF-a lub Excela, sprawdzają statusy, przygotowują oferty, robią operacje masowe.

**Cztery elementy platformy:** eCommerce B2B · Panel Handlowca (Sales CRM) · Agenci AI · pełna elastyczność rozwoju (37 modułów, pluginy bez naruszania kodu standardowego).

**Product category:** platforma Commerce B2B (eCommerce B2B + Sales CRM) dla dystrybucji i produkcji.

**Product type:** oprogramowanie z wdrożeniem. WiseB2B Cloud (SaaS z n8n), OnPremise albo chmura publiczna (AWS, Azure, Google). Kod źródłowy w Enterprise, opcja w Professional.

**Business model:**
| | Start | Professional | Enterprise |
|---|---:|---:|---:|
| Cena pakietu (netto/mies.) | od 1 990 zł | od 3 490 zł | od 6 990 zł |
| Limit produktów | do 1 000 | do 30 000 | bez limitu |
| Limit klientów | do 2 000 | do 10 000 | bez limitu |

- Wszystkie pakiety: hosting w WiseB2B Cloud, aktualizacje, monitoring 24/7, backupy, brak opłat od obrotu (GMV, „dożywotnia obietnica”).
- Professional i Enterprise: środowisko testowe, n8n, opcja OnPremise.
- Subskrypcja z wdrożeniem rozłożonym: 50–100% miesięcznej pensji handlowca, ok. 5–10 tys. zł/mies.
- Kotwica wdrożenia (sprzedaż, nie strona): standardowy zakres „uruchomimy cię za 50–60 tys. zł”; wdrożenia Magento/Presta pod B2B to 500 tys.–1 mln zł.
- Ceny 2 090 / 3 690 / 7 290 z pliku „obszary i moduły” są nieaktualne.

**Model dostarczania (hybryda):**
1. Ścieżka partnerska („dwie umowy”): oprogramowanie od WiseB2B, wdrożenie i utrzymanie od partnera (Sente, Satisfly). WiseB2B daje metodykę, scenariusz sprintu, estymację fixprice.
2. Ścieżka bezpośrednia: zespół WiseB2B ze wsparciem Sente (pilotaże, klienci strategiczni, Early Adopter).
W komunikacji zewnętrznej nie rozstrzygamy ścieżki: mówimy „sprawdzona metodyka wdrożenia i sieć partnerów wdrożeniowych”.

**Firma:** WiseB2B Sp. z o.o., Wrocław. 5 osób dedykowanych do produktu + zaplecze Sente (~150–160 osób). 12+ wdrożeń, 20 000+ użytkowników. CEO: Jakub Czyżkowski. Projekt współfinansowany z FEDS 2021–2027 (3,64 mln zł, wkład UE 2,17 mln zł).

---

## 2. Target Audience (ICP)

**Dwa segmenty:**
| | Dystrybutor / firma handlowa | Producent z własną sprzedażą B2B |
|---|---|---|
| Przychód | 20–600 mln zł (bez sztywnego limitu) | 20–300 mln zł |
| Decyzje | właścicielskie; w 20–100 mln właściciel = dyrektor sprzedaży | właścicielskie, nie korporacyjne |
| Asortyment | kilkanaście tys. indeksów, kilkunastu dostawców, do ~2 000 nowych produktów/mies. | mniejszy, często 200–500 produktów |
| Sytuacja | ma już e-commerce, „dorósł”, ograniczenia SaaS bolą bardziej niż koszt; boi się ryzyka migracji | sprzedaż głównie mailowa, przedstawiciele handlowi; chce dotrzeć do mniejszych odbiorców; motor: KPO |

**Progi:** min. 100 stałych klientów, min. 300 transakcji/mies., min. 4 handlowców + kierownik (najlepiej ~10), Polska (kapitał lub decyzyjność w PL), istniejący ERP.

**Branże:** papier i tekstylia, narzędzia, opakowania, części rolnicze, przemysł, oświetlenie, rowery, elektronika, BHP, fashion/beauty/bielizna, dystrybucja techniczna i spożywcza, produkcja. Wykluczone: usługi, finanse, farmacja.

**Główny trigger (warsztaty):** firma ma e-commerce, ale przechodzi przez niego tylko **10–15% sprzedaży** (poniżej 50% = sygnał). Reszta idzie mailem, telefonem i Excelem. Do nich mówimy „Wejdź na wyższy poziom eCommerce”.

**Najcieplejszy segment migracyjny:** Comarch e-Sklep / Wapro B2B (portal doklejony do ERP) z kilkuprocentowym udziałem w sprzedaży. Pierwszy krok zrobiony, ograniczenia znane.

**Sytuacje wejścia (do komunikacji na stronie):**
1. **Ma e-commerce, który nie pracuje** (niska adopcja, SaaS bez warunków z ERP, portal doklejony do ERP, stary dedyk, Magento/Presta do ciągłej rozbudowy).
2. **Sprzedaje głównie przez handlowców** (telefon, mail, Excel). B2B online to dla niego nowy kanał i bezpieczny eksperyment.
3. **Producent** uruchamiający kanał B2B dla dealerów i hurtowni (zlecenia, konfigurator, limity kontraktowe).
4. **Ekspansja zagraniczna** (wielojęzyczność, waluty, VIES, VAT 0%).

**Jobs to be done:**
- „Chcę, żeby klienci zamawiali sami, a handlowcy sprzedawali, zamiast przepisywać maile.”
- „Chcę jeden obraz klienta: co kupuje online, offline i co mu oferowaliśmy.”
- „Chcę uruchomić kanał online bez ryzyka dla relacji i bez uzależnienia od dostawcy.”
- „Chcę wejść na nowy rynek na tej samej platformie.”

---

## 3. Personas (komitet zakupowy)

| Persona | Rola | Co go interesuje | Czego się boi | Co obiecujemy | Jak mówi |
|---|---|---|---|---|---|
| CEO / właściciel | Economic buyer, sponsor | wzrost sprzedaży, marża, skalowanie bez etatów, niezależność, ROI 12–24 mies. | długie i ryzykowne wdrożenie, vendor lock, ukryte koszty, GMV, wymiana platformy za 3 lata | nowy kanał o przewidywalnym koszcie, bez prowizji, z kodem i wyborem hostingu | „Klienci proszą o lepszą platformę”, „Nie chcę być uzależniony od jednego dostawcy” |
| Dyrektor sprzedaży / eCommerce | Champion, **najczęstszy inicjator** | % online, odciążenie handlowców, monitoring klientów, ofertowanie | klienci nie przyjmą platformy, bunt handlowców, spadek sprzedaży w trakcie, „jak się nie uda, to mnie zwolnią” | bezpieczeństwo (sprint, metodyka, referencje) + handlowcy sprzedają | „Handlowcy mają sprzedawać, a nie przepisywać maile”, „Nie wiem, co klienci robią w naszym sklepie” |
| CTO / IT | Technical buyer, gatekeeper | stack, DDD, headless, API, aktualizacje, dokumentacja | ryzykowna integracja z ERP, brak dokumentacji, problemy z aktualizacjami | Admin API + Client API, pluginy, kod, OnPremise | „W jakim stacku to jest?”, „Jak wygląda aktualizacja?” |
| COO / operacje | Influencer | ERP/WMS, BOK, zwroty, dropshipping, kurierzy | „każde wdrożenie to 3 miesiące chaosu” | gotowe integracje, równoległe działanie systemów, VMP −60% / −45% | „Czy to się wpina w nasze procesy?” |
| CFO | Economic gatekeeper | TCO 3–5 lat, CAPEX vs OPEX, brak GMV | ukryte koszty, „to się nie zwróci” | jawny cennik, subskrypcja z wdrożeniem, brak prowizji | „Ile to kosztuje przez 5 lat?” |
| Dyrektor handlowy producenta | Champion | zlecenia online, konfigurator, limity kontraktowe, centrum dokumentów 24/7 | dystrybutorzy nie przyjmą platformy, konfigurator nie odwzoruje złożoności | kanał B2B dla dealerów bez utraty kontaktu handlowca | „Dystrybutorzy dzwonią po każde zamówienie” |

**Relacja:** w firmach tej skali liczy się relacja właściciel–właściciel („handshaking” prezesów, zwykle w sprincie analitycznym). Zależy nam na obecności właściciela na spotkaniu.

**Anti-persona:** obrót <5 mln zł (ICP od 20 mln); korporacje z RFP i komitetami; usługi i finanse; brak stałych klientów; czyste B2C; brak ERP („Excel jako ERP”); polskie spółki-córki zagranicznego producenta jednej marki; administracja, uczelnie, farmacja; start >12 mies. lub uzależniony od dotacji; budżet „pudełkowy” 200–500 zł/mies.; szukający społeczności open source.
**Nie są anty-personą:** firmy z SAP, Oracle, IFS, Dynamics. To dłuższy projekt integracyjny, nie bloker.

---

## 4. Problems & Pain Points

**Core problem:** firma ma kanał cyfrowy, ale większość zamówień nadal obsługują handlowcy i BOK (mail, telefon, Excel). Platforma nie odwzorowuje warunków z ERP albo nikt jej nie rozwija.

**Why alternatives fall short:**
- Zamknięte SaaS: klient „skazany” na dostawcę, customizacja tylko przez dostawcę, brak kodu.
- Open source / B2C przerabiane na B2B (Magento, Presta, Shopware, Sylius, Medusa): 2–3× droższe wdrożenie (500 tys.–1 mln zł), ciężar zgodności prawnej i aktualizacji na kliencie.
- Portal doklejony do ERP (Comarch e-Sklep, Wapro B2B): dobrze synchronizuje dane, ale nie zmienia sposobu sprzedaży; przechodzi przez niego ~5% sprzedaży.
- System własny: koszt utrzymania, dług technologiczny, odchodzą ludzie, którzy go znali.
- Osobny CRM (Pipedrive, HubSpot, Salesforce, Bitrix): niespięty z platformą.
- „Nic nie robić”: koszty BOK rosną z wolumenem, handlowcy „klepią” zamówienia.

**What it costs them:** czas handlowców (20–30% na obsługę transakcyjną), rosnący BOK, błędy w przepisanych zamówieniach, brak zamówień poza godzinami biura, utracone okazje do sprzedaży.

**Emotional tension:** strach przed utratą klientów i rynku przy zmianie sposobu sprzedaży; strach przed uzależnieniem od dostawcy; osobista odpowiedzialność szefa sprzedaży za projekt.

---

## 5. Competitive Landscape

> Skrót. Pełne talk tracki i ich mocne strony: `marketing/06_objections_and_competition.md`.

**Pozycjonowanie rynkowe:** rynek dzieli się na zamknięte SaaS-y i open source. WiseB2B stoi pośrodku: gotowy produkt jak SaaS + kod źródłowy i OnPremise jak open source. Funkcjonalnie platformy się zbliżają, wyścig idzie o AI. Tu mamy realną przewagę: agenci wykonują operacje, nie tylko czatują.

| Konkurent | Ich siła | Nasz argument (skrót) |
|---|---|---|
| ONe (OneB2B) | „największa platforma B2B w PL”, panel handlowca, 30+ ERP, dobry marketing | skala dostawcy ≠ dopasowanie; każda zmiana przez ich zespół = vendor lock; u nas kod i wybór partnera |
| Comarch e-Sklep / B2B | jedna baza z ERP, marka | **źródło leadów**: ERP zostaje, wymieniasz tylko warstwę sprzedaży, która dziś robi kilka % |
| cStore | 20 lat, ~700 projektów, SFA | Panel w jednym systemie z eCommerce (u nich osobne moduły, pełen zestaw od 16 950 zł/mies.; u nas Panel w pakiecie Enterprise, opcja w Professional), AI dziś, kod |
| AtomStore (IdoSell) | enterprise SaaS, jawny cennik | customizacja tylko przez dostawcę; przejęcie = niepewność; nasz cennik też jawny |
| IdoSell / Shoper | skala, marka, ekosystem | B2C-first z doklejonym B2B; brak kodu i Panelu; **uwaga: przegrywamy na relacjach właścicieli** |
| Saly | „wdrożenie w 4 tygodnie”, UX | 4 tygodnie to konfiguracja standardu; co z Twoimi warunkami budowanymi latami? |
| Wapro B2B | 100% z Wapro Mag, Asseco | okno do ERP, nie platforma sprzedaży |
| 2ClickShop | „nawet 6 dni” | tempo standardu to nie wąskie gardło; sprint 1–4 tyg., wdrożenie 2–6 mies. |
| xSale.ai | omnichannel, marketplace'y | inny use case; mogą współistnieć (API + n8n) |
| Automico (Questy) | taniej, szybciej | platforma, z której wyrośniesz za 2 lata, to najdroższa opcja |
| inTradus | konektory ERP, portfolio | **przegrany deal**: mało realizacji, wizual, obawa vendor lock, koszt, brak natywnej integracji ERP |
| Magento / Adobe Commerce | społeczność, ekosystem | standard B2C, nie B2B; 2–3× koszt; ~22k USD/rok + GMV |
| Shopware | DACH, headless | agencja zagraniczna, wyższy koszt w PL |
| Sylius / Medusa | wolność, architektura | frameworki, nie platformy B2B; funkcje trzeba wytworzyć |
| System własny | kontrola 1:1 | 80–90% gotowe + 10–20% w pluginach; TCO 5 lat |
| Akeneo / Sales Layer | PIM | katalog wbudowany wystarcza większości |

**Lekcje z przegranych deali:** (1) obawę vendor lock i skali dostawcy uprzedzać w pierwszej rozmowie (kod + Sente 25 lat / 120+ projektów + Sieć Partnerów); (2) portfolio wizualne pokazywać wcześnie; (3) kotwiczyć koszt wdrożenia; (4) przy ERP spoza listy od razu pokazywać ścieżkę (Apilo, n8n, Admin API) i jej koszt; (5) docierać do właściciela wcześnie.

---

## 6. Differentiation

**Key differentiators:**
- **B2B-first:** 37 modułów w 13 obszarach w standardzie; warunki z ERP 1:1 (cenniki z hierarchią, ceny per magazyn/opakowanie/próg, kredyt kupiecki, sub-konta, akceptacje, MPK, miejsca odbioru).
- **Commerce Platform:** eCommerce + Panel Handlowca w jednym środowisku, bez osobnego CRM.
- **AI-Native, agenci wykonujący operacje:** Agent Klienta (Email-2-Cart, kompletacja z doradztwem), Agent Handlowca (oferty z otrzymanych komunikatów, „czym się dziś zająć”, kolejne kroki), Agent Administratora (operacje masowe), automatyzacja generowania AI (opisy, SEO, tłumaczenia), DevStudio (pluginy tworzone z AI).
- **Client API:** klienci integrują swoje systemy zakupowe z platformą sprzedawcy (marka deklaruje to jako unikalne).
- **Niezależność:** kod źródłowy, OnPremise / chmura publiczna, brak GMV, Customization Studio, Sieć Partnerów.
- **Gwarancja zgodności prawnej:** GPSR, RODO, Omnibus, SUP, wymogi fakturowania po stronie WiseB2B.
- **Gotowe integracje:** Teneum, Comarch XL, Comarch Optima, enova365, Subiekt + Apilo + n8n.
- **Ekspansja w standardzie:** wielojęzyczność, waluty (NBP/ECB), MultiStore, VIES, VAT 0% przy WDT.
- **Bezpieczna Migracja:** stary i nowy system działają równolegle do pełnego przejścia.
- **Architektura:** DDD, plugin-ready, API-first, headless, PWA; PHP/Symfony + React.

**Why customers choose us (hipoteza z warsztatów i deali):** dopasowanie do procesów + integracja z ERP + brak prowizji + niezależność + zaplecze Sente. [NEED: wywiady z VMP i Triplex]

---

## 7. Value Propositions (z marketing/, VP#1–8)

> Skrót. Pełne opisy, sygnały i benchmarki: `marketing/02_value_propositions.md`.

| VP | Obietnica | Dowód | Strona-właściciel |
|---|---|---|---|
| 1. B2B-first z odwzorowaniem 100% specyfiki | platforma dopasowuje się do warunków, nie odwrotnie | VMP 100% automatyzacji ERP↔B2B, −60%, −45%; Triplex 46,36% / 49,55% / 34,43%; średnio 80% obrotu przez B2B | Platforma, Funkcje |
| 2. Commerce Platform (eCommerce + Panel Handlowca) | jeden system zamiast sklepu + CRM + Excela | 20–30% uwolnionego czasu handlowca (deklaracja) | Panel Handlowca |
| 3. Praktyczne AI (agenci) | agenci wykonują operacje, nie czatują | Email-2-Cart; VMP −45% BOK (cała platforma) | Agent AI |
| 4. Niezależność technologiczna | kod, OnPremise, brak GMV | Sieć Partnerów, Customization Studio | Integracje, Plany, Partnerzy |
| 5. Ekspansja w standardzie | wiele rynków na jednej instancji | VMP 13 krajów, 13 wersji językowych, VIES | Platforma, Dla producentów |
| 6. Fashion / beauty / odzież | warianty, multimagazyn, dropshipping, koszyk Excel-like | VMP 86 000+ indeksów, >90% dropshipping | Wdrożenia, case VMP |
| 7. Producenci | zlecenia produkcyjne, konfigurator, limity kontraktowe, centrum informacji 24/7 | brak case'u producenckiego: używamy VMP/Triplex jako dowodu technologii | Dla producentów |
| 8. SEO i profil otwarty | platforma pozyskuje nowych klientów | moduł SEO, profil otwarty | Funkcje, Dla dystrybutorów |

---

## 8. Objections

| Objection | Response |
|---|---|
| „Kolejny SaaS, będziemy uzależnieni” | kod źródłowy, OnPremise, chmura publiczna, Sieć Partnerów; **mówić to w pierwszej rozmowie** |
| „Jesteście za mali / mało wdrożeń” | zaplecze Sente: 25 lat, 120+ projektów; 12+ wdrożeń, 20 000+ użytkowników; Sieć Partnerów |
| „Magento / Shopware mają większą społeczność” | standard B2C; 2–3× koszt; zgodność prawna na kliencie |
| „Boimy się integracji z ERP” | gotowe integracje + Apilo + n8n; VMP 100% automatyzacji |
| „Boimy się aktualizacji” | pluginy w odseparowanym kodzie |
| „GMV to rozliczenie z sukcesem” | przy wzroście zjada marżę; u nas stała opłata |
| „Czy macie prawdziwe AI?” | agenci wykonujący operacje (Email-2-Cart, Agent Handlowca, Agent Administratora) |
| „Wdrożenie potrwa rok” | sprint 1–4 tyg., wdrożenie 2–6 mies. |
| „Nie mamy budżetu / czy to się opłaca” | 50–100% pensji jednego handlowca; „pół pensji handlowca = 25% więcej transakcji” |
| „Klienci nie przejdą na platformę” | Triplex: obawa była ta sama, klienci są zachwyceni |
| „Migracja to ryzyko” | Bezpieczna Migracja, systemy równolegle; VMP wyłączył stary po miesiącu |
| „Mamy Comarch e-Sklep zintegrowany z ERP” | ERP zostaje; wymieniasz warstwę, która robi kilka % sprzedaży |
| „Saly / 2ClickShop wdroży nas w tydzień” | tempo standardu to nie problem; problemem jest odwzorowanie warunków i adopcja |
| „Co jeśli zniknie WiseB2B?” | kod, OnPremise, otwarte API, headless |

---

## 9. Switching Dynamics

**Push:** e-commerce robi 10–15% sprzedaży; handlowcy klepią zamówienia; rosnące koszty BOK i zespołu handlowego, trudna rekrutacja; skargi klientów na starą platformę; nikt nie rozwija dedyka; koszty programistów.
**Pull:** samoobsługa na warunkach z ERP; Panel Handlowca; agenci AI; brak prowizji; kod; ekspansja.
**Habit:** klienci i handlowcy przy telefonie i Excelu; „zawsze tak sprzedawaliśmy”; relacje z obecnym dostawcą.
**Anxiety:** utrata klientów; chaos w operacjach; vendor lock; skala dostawcy; osobista odpowiedzialność szefa sprzedaży.
**Wyzwalacze:** konkurencja coś wdrożyła; presja prezesa na szefa sprzedaży; niedowożony plan; cold mail lub telefon.

---

## 10. Customer Language

**Jak opisują problem:**
- „Klienci skarżą się, że nasza platforma jest stara.”
- „Handlowcy obsługują zamówienia, które klient mógłby złożyć sam.”
- „Nie wiem, co klienci robią w naszym sklepie.”
- „Nie chcę być uzależniony od jednego dostawcy.”
- „Każde wdrożenie kosztuje nas 3 miesiące chaosu.”
- „Dystrybutorzy dzwonią po każde zamówienie.”
- „Baliśmy się, że klienci przyzwyczajeni do Exceli i telefonu nie będą chcieli składać zamówień przez platformę B2B.” (Aneta Siwarga, Triplex)

**Jak opisują nas:** „Klienci są zachwyceni.” (Triplex) · „WiseB2B dało nam nowoczesne narzędzie, które odciąża zespół…” (VMP) · „Jedno z najwygodniejszych miejsc do zakupów w branży.” (klienci dystrybutora części rolniczych)

**Hasła z warsztatów (sprzedaż, cold call, kampanie):**
- „Wejdź na wyższy poziom eCommerce.”
- „Zmień swoich handlowców z sekretarek w tygrysy sprzedaży.”
- „Ściągamy z handlowców pasywną sprzedaż.”
- „Pół pensji handlowca = 25% wzrostu liczby transakcji.”
- „Platforma kończy wymówki handlowców.”
- „Ten sam zespół, w tych samych kosztach, bardziej efektywny.”
- „Handlowcy niech sprzedają, zamiast przepisywać maile.”

**Words to use:** stali klienci, warunki handlowe, cenniki indywidualne, kredyt kupiecki, handlowiec, BOK, ERP, samoobsługa, „propozycja współpracy” (nie „oferta”).
**Words to avoid:** rewolucja, kompleksowy, innowacyjny, „najlepszy na rynku”, chatbot / asystent (o naszym AI).

**Glossary:**
| Term | Meaning |
|---|---|
| Panel Handlowca | Sales CRM wbudowany w platformę, 8 obszarów |
| Agent Klienta / Handlowca / Administratora | agenci AI wykonujący operacje |
| Email-2-Cart | zamówienie z maila, PDF-a lub Excela zamienione w koszyk |
| Bezpieczna Migracja | przejście ze starego systemu, oba działają równolegle |
| Sprint analityczny | 1–4 tyg.; wynik: backlog, zakres, czas, budżet |
| Customization Studio / DevStudio | środowisko do tworzenia pluginów, także z AI |
| Client API / Admin API | integracja systemów klientów / administracja i ERP |
| GMV | prowizja od obrotu; WiseB2B jej nie pobiera |
| Start / Professional / Enterprise | pakiety (nie „Starter”) |

**Słownik pisowni (stały, obowiązuje też mapę):**
| Używamy | Nie używamy |
|---|---|
| WiseB2B (w tekście), #wiseB2B (w linii marki) | Wise B2B, wiseb2b |
| platforma Commerce B2B | B2B Commerce, e-commerce platform B2B |
| eCommerce | e-commerce, e-Commerce, ecommerce |
| Panel Handlowca (Sales CRM tylko jako dopowiedzenie) | panel handlowca |
| Agent Klienta / Handlowca / Administratora, agenci AI | chatbot, asystent |
| Start, Professional, Enterprise | Starter |
| enova365 | eNova, eNoca |
| Apilo [P43] | Aplio |
| bez opłat od obrotu / bez prowizji od obrotu (GMV) | |
| propozycja współpracy | oferta (w kontakcie z klientem) |

---

## 11. Brand Voice

| Attribute | Means | Doesn't mean | Example line (z materiałów CEO) |
|---|---|---|---|
| Szczery | mówimy, gdy pomysł nie realizuje celów | przemądrzały | „Jeśli pomysł klienta na nowy moduł nie realizuje celów biznesowych, WiseB2B powie o tym otwarcie.” |
| Biznes ponad technologią | najpierw sprzedaż i marża | lekceważenie IT | „Platforma ma służyć biznesowi klienta, nie odwrotnie.” |
| Bezpośredni, z charakterem | mocne obrazy z języka handlu | wulgarność, hype | „Zmień swoich handlowców z sekretarek w tygrysy sprzedaży.” |
| Konkretny | liczby, ERP, scenariusze | żargon w nagłówkach | „Uruchomimy cię za 50–60 tys. zł.” |
| Partnerski | „nie jesteśmy Twoimi wspólnikami” | protekcjonalny | „Dostarczamy narzędzia, ale biznes dalej jest Twój.” |

**Tone by context:** sprzedaż i cold call: hasła z warsztatów, konkret i pytanie o udział e-commerce w sprzedaży · strona: spokojniej, konkret i dowody, hasła z warsztatów najwyżej jako akcent · social: opinie CEO, wnioski z wdrożeń.
**Terms we own:** Panel Handlowca, AI-Native / użyteczne AI, #wiseB2B, Bezpieczna Migracja, „Mądre dopasowanie”, „Precyzyjne dopasowanie do specyfiki Twojego biznesu”.

---

## 12. Proof Points i zasady referencji

**Klienci potwierdzeni jako WiseB2B (publiczne case study):**
- **VMP Group** (bielizna premium, Professional): 86 000+ indeksów; −60% czasu obsługi zamówienia; −45% zapytań do BOK; 13 krajów, 13 wersji językowych [PDF przykłady wdrożeń: 17 krajów UE, patrz P44]; migracja z systemu autorskiego, cel osiągnięty „w 100%”; 100% automatyzacji ERP↔B2B; >90% dropshipping; stary system wyłączony po miesiącu.
- **Triplex** (pirotechnika, Professional, Comarch Optima): 46,36% zamówień, 49,55% obrotu, 34,43% klientów przez B2B; opinia Anety Siwargi (Prokurent).
- **Dystrybutor części do maszyn rolniczych** (anonimowo, Agrotex tylko jako logo): 120 mln zł, 840 klientów, 2,5 tys. zamówień/mies. (~7 mln zł/mies.), 50 tys. produktów. **Migracja z platformy SaaS pod ERP Wa-PRO** (segment „portal doklejony do ERP”), integracja przez n8n z wymianą przyrostową i nocną. Efekty: 42% zamówień bez weryfikacji handlowca (automatyczna wycena dostawy dla gabarytów, szkła, opon); +22% dostępności (sprzedaż z wielu sklepów); katalog części wg modeli ciągników; „jedno z najwygodniejszych miejsc do zakupów w branży”. Dowód na migrację z SaaS i na Panel/odciążenie handlowców. (`zrodla/przykłady wdrożeń`, s. 3–4)
- **Doświadczenie zespołu WiseB2B i Sente** (bez nazw): spożywka 1,6 mld zł, opakowania 80 mln zł, branża medyczna.
- **Benchmark marki:** średnio 80% obrotu u klientów przez platformę B2B.

**Zasady:**
1. Liczby tylko z publicznych case study i materiałów CEO; nie szacujemy.
2. Logotypy Candellux, Raw-Pol, Łobos, TedMark, Intermal, Mastermedia mogą być klientami ekosystemu Sente; jako referencji WiseB2B używamy ich dopiero po zatwierdzeniu CEO.
3. Do producentów nie powołujemy się na case'y producenckie (brak), tylko na VMP/Triplex jako dowód technologii.
4. Indywidualna referencja (telefon, wizyta) zawsze po zgodzie klienta.

---

## 13. Goals

**Business goal:** uruchomić marketing i pozyskać pierwsze leady od firm, które mogą szybko podjąć decyzję (krótki cykl, klient „na eksperyment”).
**Conversion action:** Zamów demo (około 60 minut, pokaz na żywo). Punkt konwersji w procesie: sprint analityczny („jeśli klient robi sprint, to raczej dochodzi do wdrożenia”).
**Cykl:** najkrótszy 6–8 tyg.; typowy 3–6 mies. [do potwierdzenia]; wdrożenie 2–6 mies.
**Current metrics:** marketing wstrzymany, brak danych.

---

## 14. Learnings

| Date | Learning | Evidence | Applies to | Status |
|---|---|---|---|---|
| 2026-11-09 | Claim AI-Native; hero = 3 rotujące hasła; opinia Triplex: Aneta Siwarga | decyzja CEO | strona, materiały | active |
| 2026-11-09 | Stała warstwa komunikacji ≠ hasło kampanii | korekta CEO | copywriting | active |
| 2026-11-10 | Nie usuwać liczb bez zgody CEO | korekta CEO | wszystkie treści | active |
| 2026-11-10 | Nie podważać funkcji opisanych w materiałach | decyzja CEO | wszystkie treści | active |
| 2026-11-24 | Teksty CEO to sytuacja B (prawdziwy głos): poprawiać, nie pisać od nowa | ocena CEO tekstów v4, skill copywriting | copywriting | active |
| 2026-11-24 | Dokumenty `marketing/` jest nadrzędna wobec notatek NotebookLM | audyt | wszystkie treści | active |
| 2026-07 (marketing/) | Obawa vendor lock wygrała mimo naszego OpenCode: komunikat nie dotarł | lost deal vs inTradus | strona, sprzedaż | active |

---

## 15. Zasady CEO (sesja 2026-11-09…24)

- Claim: AI-Native (zamiast „użyteczne AI”).
- Agrotex: tylko logo; wyniki anonimowo; skala (120 mln zł, 840 klientów) zostaje.
- Nie usuwamy liczb bez wyraźnej zgody CEO.
- Funkcje opisane w materiałach traktujemy jako dostępne.
- SLA, czasy reakcji, wsparcie: kwestia umowy.
- Lista ERP potwierdzona: Teneum, Comarch XL i Optima, enova365, Subiekt.
- Karta „Wdrożenia zespołu WiseB2B i Sente” bez nazw: zatwierdzona.
- Demo: około 60 minut. Triplex: liczby zgodne z case study (34,43%).

## 16. Do potwierdzenia przez CEO

Wszystkie otwarte sprzeczności faktów: `.knowledge/projekt/decyzje-do-podjecia.md` (P39–P54).

## Changelog
- v3.1 (2026-11-24): rola MASTER w nagłówku; nowa struktura `.knowledge` (zrodla/, produkt/, archiwum/); case Agrotex jako dowód migracji z SaaS pod Wa-PRO; uwaga VMP 13/17 krajów; poprawka „Panel w standardzie”; słownik pisowni przeniesiony z mapy; pytania przeniesione do `.knowledge/projekt/decyzje-do-podjecia.md`.
- v3 (2026-11-24): audyt względem dokumentów `.knowledge/marketing/`. Dodane: segmenty i progi ICP, trigger 10–15%, 6 person, poprawiona anty-persona (SAP itd. nie wykluczają), mapa konkurencji z argumentami i lekcjami z deali, model dostarczania, limity pakietów, Agent Handlowca, VP#1–8, hasła z warsztatów, zasady referencji, pytania do CEO.
- v2 (2026-11-09): claim AI-Native, autor opinii Triplex, strona główna v4.
- v1 (2026-11-09): pierwsza wersja z materiałów gid360 i trzech wersji strony.
