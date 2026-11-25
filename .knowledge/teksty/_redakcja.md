# Redakcja copy decków (copy-editing, sytuacja B)

Stan: 2026-11-24. Zakres: 19 plików w `.knowledge/teksty/`. Metoda: skill `copy-editing`, teksty CEO z maja i z Figmy traktowane jako prawdziwy głos. Zdania CEO zmienione tylko dlatego, że formalnie pasowały do wzorca AI (kontrast „nie tylko…, ale”, „to nie X, ale Y”, „nigdy nie było takie łatwe”), wróciły do oryginału z poprawką literówki, myślnika lub słownika. Zmiany z realnym powodem (fakt, słownik, słowo z listy zakazanej, nazwa konkurenta, niejasność, powtórzenie na tej samej stronie) zostały i są opisane w notatkach „>” sekcji.

## Kanon spójności (obowiązuje we wszystkich plikach)

Sente: 25 lat i ponad 120 projektów [P40]. VMP: 13 krajów i 13 wersji językowych [P44], −60% czasu obsługi zamówienia, −45% zapytań do BOK, ponad 86 000 indeksów. Triplex: 46,36% zamówień, 49,55% obrotu, 34,43% klientów, opinia Anety Siwargi bez zmian. Dystrybutor części do maszyn rolniczych: 120 mln zł, 840 klientów, anonimowo. Demo: około 60 minut. Ceny: Start od 1 990 zł, Professional od 3 490 zł, Enterprise od 6 990 zł netto miesięcznie, bez opłat od obrotu. Podpis: zawsze „Jakub Czyżkowski, CEO”. Linki case study: `/case-study/triplex/` i `/case-study/vmp/` (to faktyczne strony; `/case-study-*/` to tylko przekierowania).

Kontrola końcowa po redakcji (grep we wszystkich 19 plikach): brak myślników ozdobnych poza cytatem Triplex i zakresami liczb, brak linków `/case-study-triplex/` i `/case-study-vmp/` w tekście, wszystkie podpisy „Jakub Czyżkowski, CEO”, brak form spoza słownika (e-commerce, Starter, eNova, Aplio, panel handlowca, chatbot, asystent) w tekście strony. Żadna liczba nie została usunięta.

# Zmiany w plikach

## strona-glowna.md
**Przywrócone zdania CEO**
- S1 lead: „Platforma Commerce B2B dla firm…” → „Platforma eCommerce B2B dla firm…” (maj = Figma słowo w słowo).
- S3 karta 2: „wykorzystuje je przy obsłudze klienta i przy wdrożeniu” → „wykorzystuje te możliwości zarówno przy obsłudze klienta, jak i w szybkim procesie wdrożenia” (wypada tylko niejasna końcówka „na nowy poziom efektywności”).
- S4 karta 2: „Agenci AI w WiseB2B zupełnie zmieniają…” → „WiseB2B oferuje nowoczesne narzędzie Agentów AI, które zupełnie zmienia…”.
- S4 karta 4: wraca „Monitorowanie procesów handlowych nigdy nie było takie łatwe.” (po dopisanym zdaniu o alercie).

**Ujednolicenia**
- S5: link /case-study-triplex/ → /case-study/triplex/; usunięta notatka sugerująca zmianę linku.

**Poprawki**
- Notatki S1, S3, S4, S5, S6 opisują stan po redakcji. Przy S6 dopisane, że tytuł „Twój zespół sprzedaży zasługuje na lepsze narzędzie” jest z wersji PM (nie z maja ani Figmy), więc zmiana zostaje.

## platforma-commerce-b2b.md
**Przywrócone zdania CEO**
- S2 tytuł 1: „B2B first: platforma stworzona od podstaw dla B2B” → „B2B first: platforma stworzona dla B2B, nie adaptowana”.
- S2 blok 3: wraca „Klient może nie tylko wyszukać produkt, może też poprosić agenta…” i zamknięcie „Więcej czasu na to, co naprawdę ważne.” (Agent Handlowca i Administratora zostają jako dopisek).
- S2 blok 4: „Budujesz na solidnym fundamencie, który zawsze jest Twój.” → „Budujesz na solidnym fundamencie. I ten fundament zawsze jest Twój.”
- S3 tytuł: „Co jeszcze dostajesz w [logo]?” → „Co więcej w [logo]?” (Figma).
- S3 Ekspansja: wraca „obsługa stawek VAT i lokalnych metod dostawy” (dopiski VAT 0%, NBP/ECB, VMP zostają).
- S3 SEO: „Platforma B2B może też zdobywać nowych klientów.” → „Platforma B2B to nie tylko obsługa obecnych klientów, ale też pozyskiwanie nowych.”
- S4 lead: „Za technologią WiseB2B stoi partner…” → „WiseB2B to nie tylko technologia, ale też partner…”.
- S4 karta 1: wraca „…to realna niezależność, nie marketingowa obietnica.” (konkret o zmianie firmy rozwijającej platformę zostaje).
- S4 karta 3: „biznes dalej jest Twój” → „Twój sukces należy do Ciebie” (maj, Figma).
- S4 karta 5: wraca „nie jest teorią. Jest wbudowana…”.
- S5 03: wraca zdanie „Zwiększ liczbę obsługiwanych klientów i zamówień, redukując koszty obsługi sprzedaży, i bez ograniczeń skaluj przychody.” (dowód VMP zostaje).
- S6 karta 3: wraca „…n8n, bez budowania infrastruktury od zera.”; karta 4 znów jednym zdaniem jak w maju.
- FAQ 1: wraca całe zdanie CEO („eliminujący vendor lock-in”, „umożliwiającą rozwój bez ryzyka utraty customizacji”, „To platforma zaprojektowana od podstaw dla B2B, a nie adaptacja sklepu detalicznego”).
- FAQ 2: wraca „autonomiczni agenci”, „natomiast”, „znacznie szybszą realizację zamówień, zarówno dla Twoich klientów, jak i Twojego zespołu”.
- FAQ 3: wraca „który zastępuje potrzebę korzystania z osobnego systemu CRM”, „dostęp do przygotowywania…”, „zamiast administrować transakcjami, skupia się na budowaniu relacji i wzroście marży”.
- FAQ 4: wraca „W odróżnieniu od platform SaaS, WiseB2B udostępnia kod źródłowy, co daje Ci pełną niezależność technologiczną.”
- FAQ 5: wraca „co znacząco obniża koszty i czas wdrożenia”.
- FAQ 6: wraca „Nie ma ukrytych prowizji od obrotu, prowizji od liczby transakcji ani dodatkowych opłat rosnących wraz z Twoim sukcesem.”
- FAQ 7: wraca „W praktyce oznacza to, że…” i „To poważna przewaga konkurencyjna: …”.
- FAQ 9: wraca „przede wszystkim” i „rozwiązanie SaaS”.

**Ujednolicenia**
- S7: „Jakub Czyżkowski, Lider projektu” → „Jakub Czyżkowski, CEO”.
- Sente „25 lat, ponad 120 projektów” (bez zmian, zgodne z kanonem); VMP 13 krajów / 13 wersji językowych; ceny Start/Professional/Enterprise zgodne.

**Poprawki (zmiany autora, które zostają z powodem)**
- S2 tytuł 3 bez „nie tylko asystent, ale realny agent” i FAQ 2 bez „to nie chatboty”: słowa „asystent” i „chatbot” o naszym AI są w słowniku na liście „nie używamy”.
- S4 karta 4 bez drugiego „WiseB2B to nie tylko technologia”: powtarzało lead słowo w słowo.
- FAQ 3 bez „Kluczowa zaleta” (słowo zakazane); FAQ 4 bez drugiego „realna niezależność” (powtórzenie z S4); FAQ 5 bez nazw konkurentów; FAQ 9 progi z kontekstu zamiast „kilkuset klientów”.
- Notatki S2, S3, S4, S5, S6, FAQ, S7 przepisane na stan po redakcji.

## agent-ai.md
**Przywrócone zdania CEO**
- S2 karta 2: dwa zdania autora → „Narzędzie nie tylko odpowiada na pytania, ale realizuje faktyczne procesy biznesowe, zdejmując ciężar operacyjny z Twojego zespołu.”
- S5 karta 2: wraca „To nie jest dodatkowy skrypt osadzany na stronie, lecz mechanizm wbudowany w interfejs sklepu.” i „To daje zupełnie nowe doświadczenie użytkownikowi.” (konkret o przycisku „Zapytaj AI” zostaje w środku).
- S5 karta 3: tytuł „Robi to, co klient w sklepie” → „Nie tylko wyszukiwanie, ale również działanie”; wraca „Agent to nie jest tylko wyszukiwarka czy porównywarka produktów.” i lista operacji CEO.
- S6: „przekłada się na realne wzrosty” → „to nie tylko wygoda, ale realne wzrosty”.

**Ujednolicenia**
- S6 dowód: „VMP, hurtownia bielizny z 86 000 indeksów: −45%… i −60%…” → „VMP Group, dystrybutor bielizny i odzieży premium z katalogiem ponad 86 000 indeksów: −60% czasu obsługi zamówienia i −45% zapytań do BOK” (jak na Wdrożeniach i w case study).
- Link /case-study/vmp/ i podpis „Jakub Czyżkowski, CEO” były już zgodne.

**Poprawki (zmiany autora, które zostają z powodem)**
- „e‑Commerce” → „eCommerce”, literówka „efekywności”, „Handlowców” małą literą, „pozwalają” (dwa podmioty), „operator” → „dany użytkownik” (jasność), tytuł „Dlaczego Agent AI od WiseB2B?” (słownik).

## baza-wiedzy.md
**Przywrócone zdania CEO**
- S4: „pomagają nam tworzyć te treści” → „pomagają nam tworzyć powyższe treści” (zostaje tylko poprawka szyku „tworzyć nam” → „nam tworzyć”).

**Ujednolicenia**
- Brak potrzeb (plik nie zawiera faktów objętych kanonem).

**Poprawki**
- Notatka S4 opisuje stan po redakcji.

## panel-handlowca.md
**Przywrócone zdania CEO**
- S1 lead: „jedno środowisko pracy handlowca z klientem” → „jedno środowisko pracy dla handlowca z klientem” (wypadło „dla” z maja; zostaje tylko poprawka wielkich liter i podwójnej spacji).
- S4 karta 3: „Karta klienta łączy standardowe dane CRM z…” → „Karta klienta prezentuje nie tylko standardowe dane CRM, ale też…” (zmiana miała tylko formalny powód „nie tylko… ale”; dopisek „online i offline” zostaje).
- H1 „Twój zespół sprzedaży zasługuje na lepsze narzędzie” był zachowany, bez zmian.

**Ujednolicenia**
- Podpis „Jakub Czyżkowski, CEO” już zgodny. Panel Handlowca, Agent Handlowca zgodnie ze słownikiem.

**Poprawki**
- Notatki S1 i S4 opisują stan po redakcji.

## funkcje.md
**Przywrócone zdania CEO**
- S2 karta 3: „z najważniejszymi klientami” → „z kluczowymi klientami” (termin handlowy CEO, zamiana była tylko z listy słów).
- S5 karta 1: „z najważniejszymi klientami” → „z kluczowymi klientami”; „W Panelu Handlowca zweryfikują statystyki tych klientów” → „To dzięki niej, w Panelu Handlowca, zweryfikują statystyki najważniejszych klientów” (zdanie CEO po myślniku przywrócone, dopisek Panelu Handlowca zostaje).

**Ujednolicenia**
- „Agent AI zamieni w koszyk” → „Agent Klienta zamieni w koszyk” (S2 karta 3) i „zapyta o nie Agenta AI” → „Agenta Klienta” (S5 karta 2): nazwa konkretnego agenta ze słownika.
- Ceny w pasku S6 zgodne z kanonem.

**Poprawki**
- FAQ 1: „agenci AI, które pracują” → „agenci AI pracujący” (składnia).
- Notatki S2 i S5 opisują stan po redakcji.

## integracje.md
**Przywrócone zdania CEO**
- S4 karta 1: „WiseB2B jest zintegrowane z systemami płatności AutoPay i PayU. Klient biznesowy płaci…” → „WiseB2B jest zintegrowane z najpopularniejszymi systemami płatności, m.in. AutoPay i PayU, ułatwiając finalizowanie transakcji klientom biznesowym.” (+ zdanie o statusie zamówienia). Zmiana była tylko z powodu formalnego wzorca „ogona po przecinku”.
- S3 Client API: przebudowa „Ich systemy zakupowe łączą się…” → zdanie CEO „Przeznaczone dla klientów biznesowych dystrybutorów i producentów do składania i śledzenia realizacji swoich zamówień, ewentualnie pobierania cenników i informacji na temat dostępności towarów.” (poprawione tylko „cenników, informacji” → „cenników i informacji”; dopisek VMP zostaje).

**Ujednolicenia**
- Bez zmian: Apilo, enova365, Start, eCommerce, podpis CEO już zgodne.

**Poprawki**
- Notatki S3 i S4 opisują stan po redakcji.

## proces-wdrozenia.md
**Przywrócone zdania CEO**
- Brak potrzeby: sześć etapów było już w wersji z maja; zmiany autora (literówki, składnia, dopiski z księgi) mają realne powody i zostają.

**Ujednolicenia**
- FAQ 3: „Plany zaczynają się od 1 990 zł netto miesięcznie (Start)” → „Plany: Start od 1 990 zł, Professional od 3 490 zł, Enterprise od 6 990 zł netto miesięcznie, bez opłat od obrotu.” (to samo brzmienie co na innych stronach).

**Poprawki**
- Notatka FAQ zaktualizowana.

## zamow-demo.md
**Przywrócone zdania CEO**
- Brak potrzeby: pięć punktów programu i tekst Sente są CEO; zmiany (pokaz na żywo, nazwy planów, składnia) mają powód.

**Ujednolicenia**
- „około 60 minut” zgodne. Liczba Sente „ponad 100 klientów” zostaje w tekście (P40 w notatce).

**Poprawki**
- description: „Pokażemy… Agent AI” → „Agenta AI” (przypadek).

## dla-dystrybutorow.md

Przywrócone zdania CEO:
- S2 karta 3: „to narzędzie…, a zarazem źródło” → „to nie tylko narzędzie…, ale również źródło”; „pod kątem wyszukiwarek i profilowi otwartemu” → „pod kątem pozycjonowania w wyszukiwarkach i dostępowi przez profil otwarty”.
- S2 karta 4: przywrócone „docieraniu do nowych rynków oraz klientów”.
- S2 karta 1: „: pomogą w tym… podpowiedź, ile brakuje do lepszej ceny” → bliżej CEO: „a pomogą w tym takie funkcje jak… czy wartości zakupów potrzebnej do skorzystania z lepszej ceny” (usunięte tylko podwójne „dzięki”).
- S3 karta 3: przywrócone zdanie „Dzięki nim możesz udostępnić swoim klientom jedną platformę…”, które pilot zastąpił zdaniem o Panelu Handlowca (oba zostają).
- S4 karta 1: „albo” → „lub”; „a potem rozwijanie rozwiązania” → „a następnie dopracowywanie i rozwijanie wdrożonego rozwiązania”; „dostajesz…, a w pakiecie” → „decydujesz się nie tylko na… W pakiecie dostajesz również…”; „w transformacji” → „w procesach transformacji sprzedaży”.
- S4 karta 2: „Tak brzmi misja” → „To nie marketingowy frazes, ale nasza misja”; przywrócone „nasza platforma”, „Jednocześnie wiemy… dla Ciebie za mało, bo…”, „takie podejście do budowania cyfrowych narzędzi sprzedaży dla B2B to jedyna słuszna droga”. Zdanie o kodzie źródłowym zostaje jako osobne.

Ujednolicenia:
- Link case study: /case-study-triplex/ → /case-study/triplex/.

Poprawki:
- S4 karta 2: „innowacyjny model” → „nowy model” (słowo z listy unikanych); „Dlatego tworząc WiseB2B naszym priorytetem było” → „Dlatego, tworząc WiseB2B, postawiliśmy na to” (imiesłów bez podmiotu).
- Notatki S2, S3, S4, S6 przepisane na stan po redakcji; z otwartych kwestii usunięta pozycja o „To nie marketingowy frazes” (zdanie wróciło).

## dla-producentow.md

Przywrócone zdania CEO:
- S2 karta 1: „wgląd w statusy realizowanych” → „…aktualnie realizowanych zleceń”.
- S2 karta 2: tytuł „…szczegółach zamówień” → „…szczegółach na temat zamówień” (Figma); „sprawdzić wszystkie dane o realizowanych i historycznych” → „zweryfikować wszelkie dane o aktualnie oraz historycznie realizowanych zamówieniach” (dopisek o fakturach, rozrachunkach, dokumentach i „przez całą dobę” zostaje).
- S3: „informacji” → „wszelkich informacji”; „ze sprzedażą i obsługą klienta” → „z procesem sprzedaży i obsługi klienta”; „a członkowie… skupili się” → „członkowie Twojego zespołu mogliby skupić się”; „klientom kontraktowym” → „swoim klientom kontraktowym”; „integracji” → „odpowiedniej integracji”.
- S4 karta 1: „Planując zmiany…, korzystasz” → „Planując wdrażanie zmian…, możesz skorzystać”; „To korzyść” → „To unikalna korzyść”.
- S4 karta 2: tytuł „przewagę Twojej firmy” → „przewagę biznesową Twojej firmy” (Figma); „Choć dziś…, na pewno” → „Choć aktualnie…, to na pewno”; „a których” → „a jakich”; „To da Ci” → „Wszystko to da Ci”; „które dostosujesz” → „które w przyszłości będzie mogło być dostosowane” (dopisek o kodzie źródłowym zostaje).
- FAQ 1, 4, 5: przywrócony tekst CEO z maja (pilot zastąpił go odpowiedziami ze strony dystrybutorów); fakty pilota dopisane do zdań CEO: warunki z ERP i 24/7 (pyt. 1), ceny planów i brak opłat od obrotu (pyt. 4, „start professional lub enterprise” → nazwy planów), sprint analityczny 1–4 tygodnie (pyt. 5).

Ujednolicenia:
- Link case study: /case-study-triplex/ → /case-study/triplex/.
- Sente: „w ponad 120 projektach” [P40] zostaje.

Poprawki:
- Notatki S2, S3, S4, S6, FAQ przepisane na stan po redakcji.

## bezpieczna-migracja.md

Przywrócone zdania CEO: brak (cztery etapy to już tekst CEO z maja; zmiany autora mają powód: literówka, słownik, powtórzenie „kluczowe”, zmiana podmiotu).

Ujednolicenia:
- Link case study VMP: /case-study-vmp/ → /case-study/vmp/; dopisek w notatce S6, że liczby VMP są takie jak w innych plikach (13 krajów, ponad 86 000 indeksów, −60%, −45%).
- Meta description: „VMP wyłączył stary” → „VMP wyłączyło stary system” (zgodnie z kartą S6 i case study).

Poprawki: brak innych.

## plany-wiseb2b.md

Przywrócone zdania CEO:
- Hero lead: „wybierasz jeden z trzech planów” → „możesz wybrać jeden z trzech planów” (notatka twierdziła, że zdanie CEO wraca, a było zmienione).
- S3 lead: dwa nowe zdania („Serwerami, kopiami zapasowymi…”) → zdanie CEO „…online, bez konieczności zarządzania infrastrukturą IT” (myślnik → przecinek).
- S3 karta 2: „…testujesz bez ryzyka” → „Bezpieczne testowanie nowych funkcji, konfiguracji i integracji bez ryzyka…”.
- S3 karta 3: tytuł „n8n do automatyzacji procesów” → „n8n: automatyzacja procesów”; „Scenariusze składasz bez programowania” → „…(ERP, CRM, e-mail, SMS), bez konieczności programowania”.
- S3 karta 5: „Nie płacisz opłat GMV, tylko za plan” → „Brak opłat GMV: płacisz tylko za plan, niezależnie od obrotów”.
- FAQ 8: przywrócone „do budowania własnych automatyzacji i integracji” (Apilo zostaje).
- FAQ 9: „Dzięki temu” → „To sprawia, że”.
- FAQ 10: „zlecić partnerowi” → „lub zlecić ich budowę partnerowi wdrożeniowemu albo zespołowi WiseB2B”.
- FAQ 12: przywrócone pierwsze zdanie CEO („Wdrożenie WiseB2B obejmuje analizę potrzeb…”) i zdanie o środowisku produkcyjnym i testowym; sprint 1–4 tygodnie, 2–6 miesięcy [P49] i 50–100% pensji handlowca zostają.

Ujednolicenia: ceny, nazwy planów, Panel Handlowca, Agent Klienta, enova365, Apilo, VMP 13 krajów już zgodne z kanonem.

Poprawki:
- Notatki S1, S3 i FAQ uzupełnione o stan po redakcji.

## case-study-triplex.md
**Przywrócone zdania CEO**
- Metryczka: „w platformie” → „w ramach platformy B2B”; „przez odciążenie ich” → „dzięki odciążeniu ich” (usunięty tylko zbędny przecinek).
- Karta 1, drugie zdanie: „pozwala składać…, wygodnie przeglądać…” → „pozwala na składanie zamówień…, intuicyjne przeglądanie…, łatwe kompletowanie koszyków zakupowych…” (bez pustego „i wiele więcej”).
- Karta 2: „pełni rolę centrum wiedzy… Triplex dodaje artykuły” → „została wyposażona w elementy pozwalające na budowanie centrum wiedzy… Rozwiązanie pozwala na dodawanie artykułów i plików PDF oraz podział materiałów na kategorie… bez obaw przed konkurencją”.
- Karta 3: „z którego korzysta Triplex… więc dane” → „zaprojektowana dla firmy Triplex… Dzięki temu… co daje gwarancję, że dane w obu narzędziach…”.
- Karta 4: „UX”, „oddawała”, brak łącznika → „user experience”, „odzwierciedlała”, „W związku z tym konsultanci Sente dostosowali…”.

**Ujednolicenia**
- „e-Commerce” → „eCommerce”, „rozwiązanie e-Commerce B2B” → „platforma eCommerce B2B”. Link /case-study/triplex/ bez zmian.

**Poprawki**
- Karta 1, pierwsze zdanie zostaje w wersji autora (ciąg rzeczowników CEO był nieczytelny); przecinek przed „że”, „itp.” → „oraz”. Diagnoza i notatki zaktualizowane.

## case-study-vmp.md
**Przywrócone zdania CEO**
- Metryczka: „platformą, która nadąży za rozwojem firmy” → „nowoczesną platformą eCommerce”; „Automatyzacja zamówień” → „Automatyzacja procesów zamówień”; „Odciążenie BOK oraz działu IT ze wsparcia…” → „Redukcja obciążenia działu obsługi klienta i IT” (wersja z PDF w notatce jako wariant).
- O firmie: przywrócone „indeksów produktowych”, „realizowanych jest”, „zaawansowanej logistyki”.
- Karta 1: przywrócone „Nowoczesny”, „Design inspirowany najlepszymi rozwiązaniami B2C, który buduje…”.
- Karta 2: „Reguły… liczone automatycznie” → „Konfigurowanie reguł rabatowych…” + osobne zdanie „Rabaty liczą się automatycznie.”
- Karta 3: „odpowiada za” → „umożliwia”; „pozwala składać” → „pozwala na składanie… z własnych systemów”.
- Karta 4: „Koszyk stworzony do obsługi… z importem z CSV/XLS. Pełne wsparcie logistyki dropshippingowej” (dopisani przewoźnicy z PDF zostają).
- Karta 5: przywrócone „Zaawansowana”, „przejrzyste” i osobne zdanie o wariantach rozmiarowych.
- Karta 6: struktura CEO („Moduł automatyzacji zwrotów: …”, „ma duże znaczenie”) z poprawką faktu „Celem VMP było…” i skalą etatu.
- Wyniki: przywrócona kolejność i etykiety z maja (86 000+, 60%, 45%, 13), 100% automatyzacji jako piąta liczba.

**Ujednolicenia**
- „13 rynków zagranicznych” → „klientów w 13 krajach” [P44]; „Wersja” → „Plan”; „e-Commerce” → „eCommerce”.

**Poprawki**
- Diagnoza: usunięte „słowa z listy zakazanej” jako powód zmian.

## wdrozenia.md
**Przywrócone zdania CEO**
- Karta VMP: rozbite zdanie → zdanie CEO „…integruje się z ERP, skracając czas obsługi zamówień o 60%.” (myślnik → przecinek), dopiski o BOK i wyłączeniu starego systemu zostają.

**Ujednolicenia**
- „sklepy w 13 krajach” → „klientów w 13 krajach” (jak w case study). Linki /case-study/triplex/ i /case-study/vmp/ bez zmian.

**Poprawki**
- Lead: błąd faktu (VMP nie zamawiało telefonicznie i w Excelu) → „Klienci Triplexa przez lata zamawiali telefonicznie i w Excelu, a VMP Group pracowało na autorskim systemie B2B, który nie nadążał za rozwojem firmy.”

## o-nas.md
**Przywrócone zdania CEO**
- Lead S3: dwa skrócone zdania → zdanie CEO „…które stanowią dla nas wytyczne do działania, zarówno podczas bieżącej współpracy, jak i w obliczu konieczności podjęcia trudnych decyzji.” (z przecinkiem).
- Karta 1: „zobaczymy… lepiej będzie pójść… na początku” → „zaobserwujemy… lepsze będzie pójście… pierwotnie”.
- Karta 2: „Technologia, zakres rozwiązania i dostępne wtyczki mają służyć efektom” → „Technologia, zakres rozwiązania, dostępne wtyczki: wszystko to ma służyć realizacji efektów biznesowych… dostosowane”.
- Karta 3: „osiągniemy we współpracy długofalowej” → „możemy uzyskać podczas długofalowej współpracy nad rozwojem platformy, zgodnie z tym, jak zmieniają się potrzeby Twojego biznesu”.

**Ujednolicenia**
- „Dlatego nie pobieramy prowizji od obrotu” → „Nie pobieramy też prowizji od obrotu” (brak wynikania). Słownik „w wybranym planie” zostaje.

**Poprawki**
- Meta description: „i ponad 25 lat w sprzedaży B2B” → „i ponad 25 latami doświadczenia w sprzedaży B2B” (składnia).

## partnerzy-wdrozeniowi.md
**Przywrócone zdania CEO**
- Lead: „ma potwierdzone kompetencje we wdrożeniach B2B, a Ty wybierasz…” → „posiada potwierdzone kompetencje w zakresie wdrożeń B2B. Ty wybierasz, z kim pracujesz.”
- Satisfly: ostatnie zdanie CEO w oryginalnym szyku („wnosi perspektywę UX i optymalizacji konwersji do projektów B2B”), fakt o migracji z Magento jako osobne zdanie.

**Ujednolicenia**
- Karta „Oferuj lepsze rozwiązania”, dopisek: „Agent AI zamienia zamówienie…” → „Agent Klienta zamienia zamówienie… (Email-2-Cart)”; tytuł i zdanie CEO „Panel Handlowca i Agent AI” bez zmian.

**Poprawki**
- Notatka S4 poprawiona: karta 4 też ma dopisek (środowisko demonstracyjne), wcześniej opisana jako bez zmian.

## zespol-wiseb2b.md
**Przywrócone zdania CEO**
- Lead hero: „WiseB2B to w pełni funkcjonalne narzędzie i zespół…, który wspiera Cię” → „WiseB2B to nie tylko w pełni funkcjonalne narzędzie, ale również zespół konsultantów, który zapewni Ci wielowymiarowe wsparcie…”.
- Doradztwo, karta 1: przywrócone „organizacji obszaru sprzedaży” i „skutecznie przenieść” (dopisane pytanie o kilkanaście procent sprzedaży zostaje).
- Doradztwo, karta 3: przywrócone „faktycznego wdrożenia jej w życie”, „W tym celu będziesz potrzebować narzędzia…”, „w jakości co najmniej tak dobrej, jaką znają z bezpośrednich kontaktów z handlowcami” (poprawione „dostępnych” → „dostępne”).
- Wdrożenie: „nie oznacza, że” → „nie jest jednoznaczny z tym, że”.
- Utrzymanie, karta 2: „rozbudowę… pomoże Ci wskazać… opracować i wdrożyć” → „rozbudowywanie… zapewni Ci wsparcie w identyfikowaniu… oraz opracowywaniu i wdrażaniu”.
- Infrastruktura: „aby była… utrzymywana” → „aby rozwiązanie było… utrzymywane”.

**Ujednolicenia**
- Podpis „Jakub Czyżkowski, CEO WiseB2B” → „Jakub Czyżkowski, CEO”.
- Notatka P40 poprawiona: copy deck Platformy też ma „ponad 120 projektów”, „około 100” jest tylko w obecnym kodzie.

**Poprawki**
- Diagnoza: usunięte „poprawiam »nie tylko… ale«” jako powód zmian.


# Otwarte kwestie (zbiorczo, bez duplikatów)

## Decyzje CEO z numerem (`.knowledge/projekt/decyzje-do-podjecia.md`)
- **[P39] Liczba osób w zespole.** Wariant a: 5 osób + zaplecze Sente (ok. 150). W maju i Figmie 12, na live 15. Dotyczy: o-nas (zespol-wiseb2b nie ma gniazda).
- **[P40] Projekty Sente.** Wszędzie „ponad 120 projektów” (wariant a). Wyjątki do decyzji: zamow-demo ma liczbę z maja „ponad 100 klientów” (zostaje w tekście); platforma-commerce-b2b S4 karta 4 ma „przetestowana w dziesiątkach projektów” (tekst CEO: czy dotyczy metodyki Sente). Dotyczy też: strona-glowna, dla-producentow (było „w setkach projektów”), zespol-wiseb2b.
- **[P41] Logotypy „Zaufali nam”.** Potwierdzone VMP i Triplex; pozostałe po zatwierdzeniu CEO. Agrotex nie przy liczbach dystrybutora. Dotyczy: strona-glowna, wdrozenia.
- **[P42] Client API „unikalna funkcja”.** Platforma (S3, FAQ 5, FAQ 7) do decyzji; integracje bez twierdzenia o unikalności.
- **[P43] Apilo zamiast „Aplio”.** Użyte Apilo: platforma, integracje, proces-wdrozenia, plany.
- **[P44] VMP: 13 czy 17 krajów.** Użyte 13 krajów i 13 wersji językowych: platforma, plany, bezpieczna-migracja, case-study-vmp, wdrozenia.
- **[P45] Liczby skali VMP z PDF-u przykładów wdrożeń.** Nieużyte do czasu wyjaśnienia (bezpieczna-migracja, case-study-vmp, wdrozenia).
- **[P46] 37 modułów w 13 obszarach.** Użyte na stronie głównej, platformie, funkcjach, procesie wdrożenia; tabela w planach ma więcej pozycji.
- **[P47] Panel Handlowca a pakiety.** Plany i platforma: w pakiecie Enterprise, opcja w Professional. Panel Handlowca, dla-dystrybutorow, dla-producentow celowo bez informacji o pakiecie.
- **[P48] ERP spoza listy (SAP, Oracle, IFS, Dynamics).** Opisane jako dłuższy projekt przez Apilo, n8n lub Admin API, nie jako bloker (integracje).
- **[P49] Czas wdrożenia 2–6 miesięcy** (wariant a): platforma FAQ 8, integracje FAQ 3, proces-wdrozenia, plany FAQ 12, zespol-wiseb2b.
- **[P50] Kod źródłowy: w którym pakiecie.** Użyte „Enterprise, opcja w Professional”: platforma, funkcje, integracje, plany, partnerzy.
- **[P51] Cztery etapy Bezpiecznej Migracji** wg wariantu a: bezpieczna-migracja, dla-dystrybutorow FAQ 3.
- **[P52] Early Adopter Panelu Handlowca (rabat 15%).** Pominięty, dopóki nie wiadomo, czy program trwa.
- **[P53] Claim AI-Native na stronie Agent AI.** Dziś go tam nie ma; jeśli CEO chce, miejsce to lead S2 (raz, nie w H1).

## Do potwierdzenia lub uzupełnienia [NEED]
Dowody i liczby:
- Okres pomiaru liczb Triplex i czy wdrożenie z 2022 r. odpowiada dzisiejszemu planowi Professional (case-study-triplex).
- Autor cytatu VMP (imię, rola) i zgoda na publikację; do tego czasu podpis „VMP Group”. Sprawdzić fakty z PDF case study VMP w oryginale i podstawę „lidera dystrybucji bielizny w Europie” (case-study-vmp, wdrozenia, bezpieczna-migracja).
- Dystrybutor części rolniczych: „120 mln zł” to obrót czy przychód; „sprzedaż z wielu sklepów” czy „z wielu magazynów”; czy migracja szła według czterech etapów i równolegle (dla-dystrybutorow, wdrozenia, bezpieczna-migracja).
- Karta „Wdrożenia zespołu WiseB2B i Sente”: szczegóły (waluty, Omnibus, konfigurator medyczny) niezweryfikowane w PDF (wdrozenia).
- Pomiar samego Agenta AI i samego Panelu Handlowca; dziś liczby VMP i 42% u dystrybutora dotyczą całej platformy (agent-ai, panel-handlowca).
- Liczby z warsztatów, które zostają w tekście (wariant bez liczby tylko w notatce): „2–3 razy więcej” (platforma FAQ 5), „20–30% czasu handlowca” (funkcje, panel-handlowca), „50–100% pensji handlowca” (plany FAQ 12).
- Brak case'u producenckiego (potencjalnie ExpertGlass); do tego czasu Triplex i VMP jako dowód technologii (dla-producentow).

Produkt i oferta:
- Zakres migrowanych danych (konta, historia zamówień, listy zakupowe, przekierowania SEO) i typowy czas do wyłączenia starego systemu (bezpieczna-migracja).
- Brak okien serwisowych przy pracy „wieczorem i w weekend” i przy zmianie planu; parametry dostępności określa umowa (funkcje, plany FAQ 5).
- Lista operatorów płatności (AutoPay, PayU) i kurierów; orientacyjny koszt integracji ERP spoza listy (integracje).
- Nazwy lokalizacji magazynów „fabryczny, centralny, partnerski” (dla-producentow FAQ 3).
- Opis Agenta Handlowca do potwierdzenia na demo; publiczne środowisko demo Agenta AI czy pokaz w ramach „Zamów demo” (agent-ai, strona-glowna).
- Długość i zakres asysty powdrożeniowej, pakiety serwisowe i stawki T&M (proces-wdrozenia, zespol-wiseb2b).
- Ceny modułów na stronie tylko po aktualnym cenniku (plany).
- Model współpracy partnerskiej (marża lub prowizja, wymagania, certyfikacja), osobny formularz dla partnerów; czy ścieżka „dwie umowy” ma być opisana publicznie (partnerzy-wdrozeniowi).

Treść i układ strony:
- Cel przycisku „Poznaj nasz zespół”: `/o-nas/` czy `/zespol-wiseb2b/`; pigułki w hero: wersja v4 czy 1:1 z Figmą; brak końcowego CTA przed stopką poza newsletterem (strona-glowna).
- Alternatywy H1 w notatkach (agent-ai, panel-handlowca); rekomendacja: H1 CEO bez zmian.
- Czy sekcja 80% obrotu jest w ramce Figmy 117:384 jako grafika (agent-ai).
- Baza wiedzy: wyróżniony artykuł nad listą (był w maju, nie ma w Figmie); 4 artykuły wobec 12 kart w Figmie, plan kolejnych tematów.
- Bezpośredni kontakt z CEO na stronie demo (jak w v4) i forma zgody w formularzu (zamow-demo).
- Blok „Dołącz do Nas / Dane spółki” z maja bez gniazda w Figmie (propozycja: dane spółki w stopce); prawdziwe zdjęcie zespołu lub CEO zamiast stockowego (o-nas).
- „Dowiedz się więcej” przy partnerach: podstrony w serwisie czy strony www partnerów; PrestaShop przy Satisfly jest w opisie, nie ma go w specjalizacjach w Figmie (partnerzy-wdrozeniowi).

## Do zrobienia w kodzie (osobny krok, poza copy deckiem)
- Kolejność kart w sekcjach 01 i 02 strony Dla dystrybutorów wg Figmy 68:124 (pilot v4 ma kolejność z maja).
- Kafle dla agentów AI i Panelu Handlowca w kolekcji `funkcjonalnosci`.
- Pole `starter` w kolekcji `obszary` i etykieta „Start”.
- Kategoria „Dystrybucja i Handel” w frontmatter artykułów a filtr „Dystrybucja i handel”.
