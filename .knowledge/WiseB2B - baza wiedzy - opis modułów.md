# Opisy Modułów WiseB2B

Pełne opisy modułów platformy WiseB2B z perspektywy biznesowej i technicznej.

---

## 1. Katalog Produktów

### Cyfrowy katalog produktów

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 90,00 PLN

**Opis biznesowy:**

Cyfrowy katalog produktów to fundament Twojej platformy B2B. Pozwala zarządzać pełną ofertą produktową z hierarchiczną strukturą kategorii, co ułatwia klientom nawigację po tysiącach pozycji. Każdy produkt może mieć rozbudowane atrybuty techniczne, co jest kluczowe w handlu B2B, gdzie specyfikacje są równie ważne jak cena. System obsługuje zdjęcia, multimedia i dokumenty techniczne, które klienci mogą pobrać bezpośrednio z karty produktu. Funkcja powiązań produktów (akcesoria, zamienniki, kompatybilne elementy) zwiększa wartość średniego zamówienia, sugerując klientom dodatkowe produkty. To wszystko przekłada się na wyższy konwersję i większą wartość koszyka.

**Ciekawostki techniczne:**

Moduł oparty na elastycznym systemie atrybutów produktowych, który można konfigurować bez zmian w kodzie. Wspiera wielowartościowe atrybuty, atrybuty zależne i dynamiczne powiązania między produktami. System kategorii jest wielopoziomowy z możliwością przypisania produktu do wielu kategorii jednocześnie.  Jeśli jakaś  Dokumenty i multimedia są przechowywane w systemie plików z automatyczną optymalizacją obrazów. Moduł integruje się z systemem wyszukiwania, pozwalając na filtrowanie po atrybutach w czasie rzeczywistym.
Produkty można wiązać w relacji rodzic - dziecko, co pozwala na efekt "dziedziczenia cech". W ten sposób można zdefiniować jeden produkt "matkę", z opisem, zdjęciami, a jego warianty - jako dzieci. Cena może być przypisana do rodzica i do dziecka. Mechanizm oszczędza wiele czasu i eliminuje pomyłki przy zarządzaniu kartotekami z wersjami, rozmiarami itd.

**Moduł WiseB2B:** `Wise\Product`

---

### GPSR

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 40,00 PLN

**Opis biznesowy:**

Moduł GPSR (Globalny System Praw i Rozporządzeń) automatycznie zarządza kartoteką dostawców zgodnie z wymogami prawnymi. System przechowuje i aktualizuje dodatkowe opisy produktów wymagane przepisami, co eliminuje ryzyko nieprawidłowości prawnych. Dla firm dystrybucyjnych to kluczowe narzędzie zapewniające zgodność z regulacjami branżowymi. Automatyzacja tego procesu oszczędza czas pracowników i redukuje błędy manualne, które mogą prowadzić do problemów prawnych lub kar finansowych.

**Ciekawostki techniczne:**

W Panelu Administracyjnym jest osobna kartoteka "Producentów GPSR". Może być synchronziwana z kartoteką dostawców z systemu ERP. Potem wystarczy jednym atrybutem powiązać produkt z odpowiednim dostawcą GPSR, i gotowe!

**Moduł WiseB2B:** `Wise\GPSR`

---

### Wielojęzyczność

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 350,00 PLN

**Opis biznesowy:**

Wielojęzyczność to klucz do ekspansji międzynarodowej. Moduł pozwala prezentować ofertę w wielu językach, co jest niezbędne przy sprzedaży do klientów zagranicznych. Opisy produktów, kategorie, artykuły CMS i komunikaty systemowe są tłumaczone, zapewniając spójne doświadczenie dla klientów z różnych krajów. To zwiększa zasięg rynkowy i ułatwia wejście na nowe rynki bez konieczności tworzenia osobnych platform. Dla firm dystrybucyjnych działających w regionie CEE to standard, który otwiera drzwi do większej bazy klientów.

**Ciekawostki techniczne:**

System wykorzystuje mechanizm tłumaczeń oparty na kluczach językowych z możliwością nadpisania tłumaczeń dla konkretnych produktów lub kategorii. Wspiera automatyczne wykrywanie języka użytkownika i przełączanie między językami. Tłumaczenia są cache'owane dla optymalnej wydajności. Moduł integruje się z systemem zarządzania treścią, umożliwiając edycję tłumaczeń przez panel administracyjny bez konieczności zmian w kodzie.

**Moduł WiseB2B:** `Wise\I18n`

---

### Ograniczenie widoczności produktów

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 100,00 PLN

**Opis biznesowy:**

Ograniczenie widoczności produktów to narzędzie do personalizacji oferty na poziomie klienta lub grupy klientów. Pozwala ukryć wybrane produkty przed określonymi klientami, co jest przydatne przy ofertach ekskluzywnych, produktach testowych lub negocjowanych indywidualnie. Możesz tworzyć specjalne oferty dla VIP-ów lub ograniczać dostęp do produktów premium. To zwiększa elastyczność negocjacyjną i pozwala na bardziej zaawansowane strategie cenowe. Dla handlowców to sposób na budowanie relacji z kluczowymi klientami poprzez ekskluzywne oferty.

**Ciekawostki techniczne:**

System wykorzystuje mechanizm filtrów widoczności działających na poziomie zapytań do bazy danych, co zapewnia wysoką wydajność nawet przy dużej liczbie produktów. Można konfigurować reguły widoczności oparte na grupach klientów, indywidualnych klientach lub kombinacji obu. Reguły są cache'owane i automatycznie aktualizowane przy zmianie uprawnień klienta. Moduł integruje się z systemem wyszukiwania, automatycznie filtrując wyniki zgodnie z uprawnieniami użytkownika.

**Moduł WiseB2B:** `Wise\SearchProductClientVisibility`

---

### Symbole własne

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⛔ Brak
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 70,00 PLN

**Opis biznesowy:**

Symbole własne to funkcja dla zaawansowanych klientów B2B, którzy mają własne systemy kodowania produktów. Klienci mogą przypisać własne symbole do produktów w Twoim katalogu, co przyspiesza proces zamawiania, gdy pracownicy klienta używają wewnętrznych kodów. To szczególnie przydatne dla dużych firm z rozbudowanymi systemami ERP, które chcą zintegrować Twoją platformę z własnymi procesami. Funkcja zwiększa lojalność klientów, ułatwiając im pracę i redukując czas na składanie zamówień.

**Ciekawostki techniczne:**

System przechowuje mapowanie symboli własnych w relacji wiele-do-wielu z produktami, umożliwiając przypisanie wielu symboli do jednego produktu. Wyszukiwanie działa zarówno po symbolach systemowych, jak i własnych klienta. Symbole są walidowane i mogą mieć własne formaty zgodne z wymaganiami klienta. Moduł wspiera import symboli z plików CSV/Excel, co ułatwia masowe przypisania dla dużych klientów.

**Moduł WiseB2B:** `Wise\Product` (funkcjonalność w module produktów)

---

## 2. Oferta handlowa

### Cenniki grupowe i indywidualne

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 80,00 PLN

**Opis biznesowy:**

Cenniki grupowe i indywidualne to serce strategii cenowej w B2B. System pozwala tworzyć różne ceny dla różnych grup klientów oraz indywidualne cenniki dla kluczowych kontraktów. To standard w handlu B2B, gdzie ceny są negocjowane indywidualnie. Możesz oferować lepsze warunki VIP-om, tworzyć specjalne ceny dla dużych kontraktów lub segmentować klientów według wielkości obrotu. System automatycznie wybiera odpowiedni cennik dla każdego klienta, eliminując błędy manualne i zapewniając spójność cenową. To zwiększa marżowość poprzez optymalizację strategii cenowej.

**Ciekawostki techniczne:**

System wykorzystuje hierarchię priorytetów cenników - najpierw sprawdza cennik indywidualny, potem grupowe, na końcu domyślny. Cenników w hierarchii może być wiele, cena jest analizowana zgodnie z priorytetami cenników. Cenniki mogą być datowane, co pozwala na automatyczne zmiany cen w przyszłości. System cache'uje wyliczone ceny dla optymalnej wydajności. Moduł umożliwa definiowanie różnych cen na ten sam produkt w zależności nie tylko od klienta/grupy klientów, ale magazynu czy jednostki. Cena na sztukę, karton czy paletę to różne ceny. 
**Moduł WiseB2B:** `Wise\Pricing`

---

### Promocje katalogowe

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 90,00 PLN

**Opis biznesowy:**

Promocje katalogowe pozwalają tworzyć atrakcyjne oferty na poziomie produktu lub kategorii. Możesz ustawić promocje procentowe, kwotowe lub "kup X, zapłać za Y". Promocje są widoczne bezpośrednio w katalogu, co zwiększa konwersję poprzez wizualne wyróżnienie ofert. System automatycznie wylicza ceny promocyjne, eliminując błędy. Możesz tworzyć promocje czasowe, co pozwala na sezonowe kampanie sprzedażowe. To narzędzie do zwiększania obrotu, czyszczenia magazynu z wolno rotujących produktów i przyciągania uwagi do wybranych kategorii.

**Ciekawostki techniczne:**

Promocje są obliczane w czasie rzeczywistym z uwzględnieniem hierarchii cenników i promocje. System wspiera złożone reguły promocyjne z warunkami opartymi na kategoriach, atrybutach produktów lub kombinacjach. Promocje mogą być datowane z automatyczną aktywacją i deaktywacją. Promocje mogą być traktowane jako łączące się lub wyłączne. W przypadku kombinacji system sam dokona wyboru najkorzystniejszej dla klienta. W koszyku będzie widoczna informacja z tytułu jakiej promocji klient otrzymał rabat.

**Moduł WiseB2B:** `Wise\Pricing`

---

### Promocje koszykowe

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 90,00 PLN

**Opis biznesowy:**

Promocje koszykowe to zaawansowane narzędzie do zwiększania wartości zamówień. Możesz tworzyć promocje typu "kup za X, otrzymaj Y", "darmowa dostawa od kwoty" lub "rabat procentowy od wartości koszyka od X z kategorii Y". To zachęca klientów do dokładania produktów do koszyka, aby osiągnąć próg promocyjny. System automatycznie informuje klienta, ile brakuje do kolejnego progu rabatu, co zwiększa konwersję. Promocje koszykowe są szczególnie skuteczne w B2B, gdzie zamówienia są większe i klienci planują zakupy z wyprzedzeniem. To narzędzie do zwiększania średniej wartości zamówienia.

**Ciekawostki techniczne:**

System wylicza promocje koszykowe w czasie rzeczywistym podczas dodawania produktów do koszyka. Wspiera złożone reguły z wieloma warunkami (kwota, ilość, kategorie, produkty). Promocje mogą być wzajemnie wykluczające się lub kumulujące. Moduł automatycznie wybiera najlepszą promocję dla klienta lub pozwala na ręczny wybór.

**Moduł WiseB2B:** `Wise\Pricing`

---

### Dostępność produktów

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 80,00 PLN

**Opis biznesowy:**

Dostępność produktów to kluczowa informacja dla klientów B2B, którzy planują zakupy z wyprzedzeniem. System pokazuje stany magazynowe na wielu magazynach, co jest istotne dla firm z rozproszoną logistyką. Poziomy dostępności (dużo, mało, na wyczerpaniu) dają klientom jasny sygnał o możliwości realizacji zamówienia. To redukuje frustrację klientów i zwiększa zaufanie do platformy. Dla Ciebie to sposób na zarządzanie oczekiwaniami klientów i optymalizację rotacji magazynowej poprzez wizualizację stanów.

**Ciekawostki techniczne:**

System integruje się z systemami magazynowymi przez API, umożliwiając synchronizację stanów w czasie rzeczywistym lub okresową. Wspiera wiele magazynów z możliwością wyboru magazynu źródłowego dla zamówienia. Poziomy dostępności są konfigurowalne i mogą być oparte na bezwzględnych wartościach lub procentach. Moduł wspiera rezerwacje stanów dla zamówień w trakcie realizacji.

**Moduł WiseB2B:** `Wise\Stock`

---

### Warunki handlowe

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 80,00 PLN

**Opis biznesowy:**

Warunki handlowe to fundament relacji B2B. System zarządza limitami kredytowymi dla każdego klienta, automatycznie blokując zamówienia przekraczające limit. To chroni przed nadmiernym ryzykiem kredytowym i eliminuje konieczność manualnej weryfikacji każdego zamówienia. Możesz definiować dostępne sposoby płatności dla każdego klienta (przelew, karta, faktura z odroczonym terminem), co daje elastyczność w negocjacjach. System automatycznie weryfikuje warunki przy składaniu zamówienia, co przyspiesza proces i redukuje błędy. To narzędzie do zarządzania ryzykiem i optymalizacji przepływów finansowych.

**Ciekawostki techniczne:**

System wykorzystuje mechanizm weryfikacji warunków handlowych działający w czasie rzeczywistym podczas składania zamówienia. Limity kredytowe są automatycznie aktualizowane po realizacji zamówień i płatnościach. Moduł integruje się z systemami rozliczeniowymi, umożliwiając automatyczne aktualizacje sald. Warunki mogą być definiowane na poziomie klienta, grupy klientów lub globalnie. System wspiera złożone reguły z wieloma warunkami i wyjątkami.

**Moduł WiseB2B:** `Wise\Client`, `Wise\Payment`

---

### Feedy produktowe dla klientów

**Metryczka:**
* **Pakiet Starter:** ⭕ Dostępny (opcja)
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 90,00 PLN

**Opis biznesowy:**

Feedy produktowe to narzędzie dla klientów, którzy prowadzą własne sklepy internetowe i chcą zsynchronizować Twoją ofertę ze swoim systemem. Możesz tworzyć własne zestawienia grup produktów i eksportować je w formatach Shopify, Ceneo, IAI lub innych. To otwiera nowy kanał sprzedaży - Twoi klienci mogą sprzedawać Twoje produkty w swoich sklepach, a Ty otrzymujesz zamówienia przez feed. To model dropshippingu lub sprzedaży hurtowej, który zwiększa zasięg Twojej oferty bez konieczności inwestycji w marketing. Dla klientów to sposób na rozszerzenie asortymentu bez konieczności utrzymywania magazynu.

**Ciekawostki techniczne:**

System generuje feedy w różnych formatach (XML, CSV, JSON) zgodnych z wymaganiami popularnych platform e-commerce. Feedy są generowane dynamicznie z możliwością cache'owania dla optymalnej wydajności. Można konfigurować mapowanie pól produktowych na formaty docelowe. System wspiera filtrowanie produktów w feedach (np. tylko dostępne, tylko z określonych kategorii). Moduł umożliwia automatyczną aktualizację feedów przy zmianie cen, stanów lub produktów.

**Moduł WiseB2B:** `Wise\ExportCatalog`

---

### Ceny wg magazynów

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 110,00 PLN

**Opis biznesowy:**

Ceny wg magazynów to funkcja dla firm z rozproszoną strukturą magazynową, gdzie koszty operacyjne różnią się między lokalizacjami. Możesz ustawić różne ceny dla tego samego produktu w zależności od magazynu, z którego jest realizowane zamówienie. To pozwala uwzględnić różnice w kosztach logistycznych, podatkach lokalnych lub strategiach rynkowych. Klient widzi cenę odpowiednią dla wybranego magazynu, co zwiększa transparentność. To narzędzie do optymalizacji marż w zależności od lokalizacji i kosztów operacyjnych.

**Ciekawostki techniczne:**

System automatycznie wybiera cenę na podstawie magazynu przypisanego do pozycji zamówienia. Ceny mogą być definiowane na poziomie produktu, lub kombinacji produkt-magazyn. Moduł wspiera hierarchię cen - najpierw sprawdza cenę dla konkretnego magazynu, potem cenę domyślną.

**Moduł WiseB2B:** `Wise\Pricing`, `Wise\MultiStore`

---

### Ceny wg opakowań i progów ilościowych

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 110,00 PLN

**Opis biznesowy:**

Ceny wg opakowań i progów ilościowych to standard w handlu B2B, gdzie ceny zależą od ilości i jednostki zakupu. Możesz ustawić różne ceny dla sztuki, kartonu, palety czy innych jednostek. System automatycznie wylicza najlepszą cenę na podstawie zamawianej ilości, zachęcając klientów do większych zamówień. Progi ilościowe (np. rabat za zamówienie powyżej 100 sztuk) to skuteczne narzędzie do zwiększania wartości zamówień. To zwiększa średnią wartość koszyka i optymalizuje procesy logistyczne poprzez większe partie zamówień.

**Ciekawostki techniczne:**

System wspiera wiele jednostek miary dla jednego produktu z automatyczną konwersją między jednostkami. Ceny progowe mogą być definiowane jako bezwzględne wartości lub procentowe rabaty. Moduł automatycznie wybiera najlepszą cenę dla klienta na podstawie zamawianej ilości. System cache'uje wyliczone ceny i automatycznie aktualizuje je przy zmianie ilości w koszyku. Wspiera złożone reguły z wieloma progami i jednostkami.

**Moduł WiseB2B:** `Wise\Pricing`

---

### Cenniki wielowalutowe

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 180,00 PLN

**Opis biznesowy:**

Cenniki wielowalutowe to niezbędne narzędzie dla firm działających międzynarodowo. Możesz tworzyć cenniki w różnych walutach, co eliminuje konieczność manualnej konwersji i redukuje błędy. Klienci widzą ceny w swojej walucie, co zwiększa zaufanie i ułatwia decyzje zakupowe. System automatycznie aktualizuje kursy wymiany, co zapewnia aktualność cen. To otwiera drzwi do ekspansji międzynarodowej bez konieczności tworzenia osobnych platform dla każdego rynku. Dla klientów zagranicznych to standard, który zwiększa profesjonalizm Twojej oferty.

**Ciekawostki techniczne:**

System integruje się z zewnętrznymi źródłami kursów walut (NBP, ECB) z możliwością automatycznej aktualizacji. Cenniki mogą być definiowane w różnych walutach z automatyczną konwersją lub stałymi kursami. Moduł wspiera wiele walut jednocześnie z możliwością wyboru waluty przez klienta. System cache'uje kursy wymiany dla optymalnej wydajności. Można konfigurować zaokrąglenia cen w różnych walutach zgodnie z lokalnymi standardami.

**Moduł WiseB2B:** `Wise\Pricing`, `Wise\I18n`

---

### Zarządzanie kredytem kupieckim

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 180,00 PLN

**Opis biznesowy:**

Zarządzanie kredytem kupieckim to zaawansowane narzędzie do optymalizacji ryzyka kredytowego. System integruje się z wywiadowniami gospodarczymi, automatycznie weryfikując wiarygodność klientów i sugerując limity kredytowe. To eliminuje konieczność manualnej analizy każdego klienta i redukuje ryzyko nieściągalnych należności. System automatycznie aktualizuje limity na podstawie historii płatności i zmian w sytuacji finansowej klienta. To narzędzie do zwiększania bezpieczeństwa transakcji i optymalizacji przepływów finansowych poprzez inteligentne zarządzanie kredytem.

**Ciekawostki techniczne:**

Moduł integruje się z API wywiadowni gospodarczych (np. BIG, KRD) z automatyczną weryfikacją danych. System wykorzystuje algorytmy scoringowe do sugerowania limitów kredytowych na podstawie wielu czynników. Limity są automatycznie aktualizowane po otrzymaniu nowych danych z wywiadowni. Moduł wspiera złożone reguły z wieloma warunkami i wyjątkami. System generuje raporty i alerty o zmianach w sytuacji finansowej klientów.

**Moduł WiseB2B:** `Wise\RiskAssessment`, `Wise\Client`

---

## 3. Prezentacja oferty

### Wyszukiwarka z obsługą synonimów i priorytetów

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 100,00 PLN

**Opis biznesowy:**

Wyszukiwarka z obsługą synonimów i priorytetów to kluczowe narzędzie do ułatwienia klientom znalezienia produktów. System rozpoznaje synonimy i warianty nazw produktów, co eliminuje frustrację klientów, którzy nie znają dokładnych nazw. Priorytety pozwalają wyróżnić wybrane produkty w wynikach wyszukiwania, co jest przydatne przy promocjach lub strategiach sprzedażowych. Normalizacja słów kluczowych zapewnia, że klienci znajdą produkty nawet przy błędach pisowni. To zwiększa konwersję poprzez ułatwienie nawigacji po katalogu, szczególnie ważne przy dużych asortymentach.

**Ciekawostki techniczne:**

System wykorzystuje słownik synonimów konfigurowalny przez panel administracyjny. Wyszukiwanie działa na znormalizowanych wersjach słów kluczowych, co eliminuje problemy z odmianami i błędami pisowni. Priorytety produktów są uwzględniane w algorytmie rankingowym wyników. Moduł cache'uje wyniki wyszukiwania dla popularnych zapytań. System wspiera wyszukiwanie pełnotekstowe z możliwością wyszukiwania po fragmentach nazw, opisów i atrybutów.

**Moduł WiseB2B:** `Wise\SearchProduct`

---

### Dynamiczny ranking produktów

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 250,00 PLN

**Opis biznesowy:**

Dynamiczny ranking produktów to zaawansowane narzędzie do optymalizacji prezentacji oferty. System automatycznie określa kolejność produktów w wynikach wyszukiwania na podstawie dopasowania, promocji, strategii sprzedażowej i innych czynników. Możesz wpływać na ranking, promując wybrane produkty lub kategorie, co zwiększa ich widoczność i sprzedaż. System uczy się z zachowań klientów, dostosowując ranking do preferencji. To narzędzie do zwiększania konwersji poprzez pokazywanie najbardziej relevantnych produktów na górze wyników, co jest szczególnie ważne przy dużych asortymentach.

**Ciekawostki techniczne:**

System wykorzystuje algorytmy rankingowe oparte na wielu czynnikach (dopasowanie, promocje, popularność, dostępność, marża). Ranking jest obliczany dynamicznie dla każdego zapytania, uwzględniając kontekst użytkownika. Moduł wspiera ręczne nadpisywanie rankingu dla wybranych produktów lub kategorii. System cache'uje wyniki rankingowe dla optymalnej wydajności. Można konfigurować wagi poszczególnych czynników wpływających na ranking.

**Moduł WiseB2B:** `Wise\SearchProduct`

---

### Wyszukiwanie z Elasticsearch

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⛔ Brak
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 250,00 PLN

**Opis biznesowy:**

Wyszukiwanie z Elasticsearch to zaawansowane rozwiązanie dla platform z bardzo dużymi katalogami produktów (dziesiątki tysięcy pozycji). Elasticsearch zapewnia błyskawiczne wyszukiwanie nawet przy złożonych zapytaniach i wielu filtrach. To poprawia doświadczenie użytkownika, eliminując opóźnienia w wynikach wyszukiwania. System wspiera zaawansowane funkcje wyszukiwania (fuzzy search, faceted search, autocomplete), co zwiększa precyzję wyszukiwań. Dla dużych platform to inwestycja w wydajność, która przekłada się na wyższą konwersję i zadowolenie klientów.

**Ciekawostki techniczne:**

Elasticsearch jest zintegrowany jako zewnętrzny serwis z automatyczną synchronizacją danych produktowych. System indeksuje produkty, atrybuty, opisy i kategorie w czasie rzeczywistym lub okresowo. Moduł wspiera zaawansowane zapytania z wieloma warunkami, filtrami i sortowaniem. Elasticsearch cache'uje wyniki i optymalizuje zapytania automatycznie. Można konfigurować mapowanie pól i analizatory tekstu dla różnych języków.

**Moduł WiseB2B:** `Wise\SearchProduct`

---

### Wyszukiwanie z TypeSense

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⛔ Brak
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 250,00 PLN

**Opis biznesowy:**

Wyszukiwanie z TypeSense to alternatywa dla Elasticsearch, oferująca podobną wydajność przy prostszej konfiguracji. TypeSense jest zoptymalizowany pod kątem wyszukiwarek e-commerce, oferując intuicyjne API i szybkie wyniki. System automatycznie sugeruje poprawne zapytania przy błędach pisowni i oferuje autocomplete, co poprawia doświadczenie użytkownika. To rozwiązanie dla firm, które potrzebują zaawansowanego wyszukiwania bez złożoności Elasticsearch. Dla klientów to oznacza szybsze i bardziej precyzyjne wyszukiwanie produktów.

**Ciekawostki techniczne:**

TypeSense jest zintegrowany jako zewnętrzny serwis z automatyczną synchronizacją danych. System indeksuje produkty z możliwością konfiguracji schematu indeksu. Moduł wspiera typografię, synonimy i ranking oparty na popularności. TypeSense automatycznie optymalizuje zapytania i cache'uje wyniki. Można konfigurować wagi pól wpływających na ranking wyników.

**Moduł WiseB2B:** `Wise\SearchProduct`

---

## 4. Proces zakupowy

### Zakupy B2B

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 120,00 PLN

**Opis biznesowy:**

Zakupy B2B to fundament platformy, obsługujący specyfikę handlu między firmami. System wspiera ceny netto i brutto, co jest standardem w B2B, gdzie klienci mają różne statusy VAT. Miejsca odbioru pozwalają klientom wybierać, skąd odbierają zamówienia, co jest kluczowe dla firm z wieloma lokalizacjami. Umowy i zgody zakupowe zapewniają zgodność z procedurami wewnętrznymi klientów. System automatycznie wylicza koszty dostawy i płatności, co zwiększa transparentność. To kompleksowe rozwiązanie dla procesu zakupowego w B2B, eliminujące konieczność manualnej obsługi zamówień.

**Ciekawostki techniczne:**

System automatycznie wybiera odpowiednią stawkę VAT na podstawie statusu klienta i lokalizacji. Miejsca odbioru są powiązane z magazynami, co wpływa na dostępność produktów i ceny. Umowy zakupowe są przechowywane w systemie z możliwością weryfikacji przy składaniu zamówienia. Koszty dostawy i płatności są wyliczane dynamicznie na podstawie konfigurowalnych reguł. Moduł wspiera wiele walut i automatyczną konwersję przy międzynarodowych zamówieniach.

**Moduł WiseB2B:** `Wise\Cart`, `Wise\Checkout`, `Wise\Order`

---

### Wielokoszyki

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 60,00 PLN

**Opis biznesowy:**

Wielokoszyki to funkcja dla firm, gdzie różni pracownicy składają zamówienia lub gdzie zamówienia są przygotowywane dla różnych projektów. Każdy użytkownik może mieć wiele koszyków, co pozwala na organizację zakupów (np. koszyk na bieżące zamówienia, koszyk na planowane zakupy, koszyk na pilne zamówienia). To zwiększa efektywność procesu zakupowego, eliminując konieczność rozpoczynania od nowa przy każdej zmianie kontekstu. Dla dużych firm to standard, który ułatwia zarządzanie wieloma zamówieniami jednocześnie.

**Ciekawostki techniczne:**

System przechowuje wiele koszyków dla każdego użytkownika z możliwością nazwania i organizacji. Koszyki mogą być współdzielone między użytkownikami w ramach jednego klienta. Moduł wspiera automatyczne zapisywanie koszyków i przywracanie ich przy następnym logowaniu. Często przy wdrożeniu w pluginie oprogramowuje się zdarzenie logowania, aby system automatycznie tworzył kilka koszyków. 

**Moduł WiseB2B:** `Wise\Cart`

---

### Listy zakupowe

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 60,00 PLN

**Opis biznesowy:**

Listy zakupowe w procesie zakupowym to narzędzie do szybkiego składania powtarzalnych zamówień. Klienci mogą tworzyć i zapisywać listy najczęściej zamawianych produktów, co znacznie przyspiesza codzienne zakupy. Zamiast wyszukiwać te same produkty za każdym razem, wystarczy otworzyć zapisaną listę i dodać produkty do koszyka jednym kliknięciem. To szczególnie przydatne dla firm z regularnymi, powtarzalnymi zamówieniami — oszczędza czas zakupowców i redukuje ryzyko pominięcia produktu.

**Ciekawostki techniczne:**

Moduł jest zintegrowany z procesem zakupowym — listy mogą być szybko przekształcane w koszyk z automatyczną weryfikacją dostępności i aktualnych cen. System wspiera wiele list per użytkownik z możliwością nazwania i organizacji. Listy mogą być współdzielone między użytkownikami w ramach jednego klienta.

**Moduł WiseB2B:** `Wise\ShoppingList`

---

### Import zamówienia

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 60,00 PLN

**Opis biznesowy:**

Import koszyka to funkcja dla zaawansowanych klientów, którzy pracują z plikami Excel lub CSV. Możesz eksportować wzorzec koszyka, wypełnić go produktami i zaimportować z powrotem. To przyspiesza proces zamawiania dla dużych zamówień, eliminując konieczność ręcznego dodawania setek pozycji. Szybkie koszyki pozwalają zapisać często zamawiane zestawy produktów i dodawać je jednym kliknięciem. To oszczędza czas klientów i zwiększa efektywność procesu zakupowego, szczególnie dla firm z cyklicznymi zamówieniami.

**Ciekawostki techniczne:**

System wspiera import z plików CSV i Excel z automatyczną walidacją danych. Import weryfikuje dostępność produktów i aktualne ceny przed dodaniem do koszyka. Moduł automatycznie mapuje kolumny pliku na pola produktowe z możliwością konfiguracji. System obsługuje różne formaty plików i kodowania. Szybkie koszyki są przechowywane w systemie z możliwością edycji i współdzielenia między użytkownikami.

**Moduł WiseB2B:** `Wise\Cart`

---

### Podział koszyka

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 60,00 PLN

**Opis biznesowy:**

Podział koszyka to funkcja dla firm, które potrzebują rozdzielić jedno zamówienie na wiele realizacji. Możesz podzielić koszyk na części według różnych kryteriów (magazyn, data dostawy, projekt). To przydatne przy dużych zamówieniach, gdzie różne produkty są realizowane z różnych magazynów lub w różnych terminach. System automatycznie tworzy osobne zamówienia dla każdej części, co ułatwia zarządzanie realizacją. To zwiększa elastyczność procesu zakupowego i ułatwia planowanie dostaw.


**Moduł WiseB2B:** `Wise\Cart`, `Wise\Order`

---

### Kurierzy

**Metryczka:**
* **Pakiet Starter:** ⭕ Dostępny (opcja)
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 120,00 PLN

**Opis biznesowy:**

Integracja z kurierami to kluczowe narzędzie do automatyzacji procesu dostawy. System integruje się z GLS, DPD, DPD PickUp, InPost, InPost Kurier i Pocztex, automatycznie wyliczając koszty dostawy. Klienci mogą wybierać preferowanego kuriera i śledzić status przesyłki bezpośrednio z platformy. To eliminuje konieczność manualnej obsługi zamówień i redukuje błędy w adresach. Dla Ciebie to oszczędność czasu i kosztów, dla klientów to wygoda i transparentność procesu dostawy.

**Ciekawostki techniczne:**

Dla każdego sposobu dostawy skonfigurowanego w systemie można deklarować osobną strategię, która opisuje metody na widoczność dla danego klienta, próg darmowej dostawy, opcje dostawy danego kuriera, i kalkulator ceny dostawy. To najbardziej elastyczny sposób jaki jest na rynku definiowania algorytów liczenia kosztów i dostępności do wyboru. 

**Moduł WiseB2B:** `Wise\Delivery`

---

### Płatności elektroniczne

**Metryczka:**
* **Pakiet Starter:** ⭕ Dostępny (opcja)
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 130,00 PLN

**Opis biznesowy:**

Płatności elektroniczne to standard w e-commerce, umożliwiający szybkie i bezpieczne rozliczenia. System integruje się z AutoPay i PayU, oferując klientom wygodne metody płatności. To zwiększa konwersję, eliminując konieczność manualnego przelewu i oczekiwania na potwierdzenie. Dla klientów to wygoda, dla Ciebie to szybsze otrzymywanie płatności i redukcja ryzyka nieściągalnych należności. System automatycznie weryfikuje płatności i aktualizuje status zamówień, co eliminuje manualną obsługę.

**Ciekawostki techniczne:**

Moduł wykorzystuje uniwersalny driver płatności, umożliwiający łatwe dodawanie nowych dostawców. System automatycznie weryfikuje płatności przez webhooki z dostawcami. Moduł wspiera wiele metod płatności jednocześnie z możliwością konfiguracji dostępności dla każdego klienta. Płatności są szyfrowane i przechowywane zgodnie z wymogami PCI DSS. System generuje automatyczne potwierdzenia płatności i aktualizuje statusy zamówień.

**Moduł WiseB2B:** `Wise\Payment`

---

### Dropshipping

**Metryczka:**
* **Pakiet Starter:** ⭕ Dostępny (opcja)
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 110,00 PLN

**Opis biznesowy:**

Dropshipping to model biznesowy, gdzie klient może podać dowolny adres dostawy, umożliwiając sprzedaż bezpośrednio do końcowych odbiorców. System automatycznie nalicza opłatę za obsługę dropshippingową, co kompensuje dodatkowe koszty logistyczne. Możesz oferować dodatkowe usługi (pakowanie indywidualne, ubezpieczenie zwrotu), co zwiększa wartość oferty. To otwiera nowy kanał sprzedaży, gdzie Twoi klienci mogą sprzedawać Twoje produkty bez konieczności utrzymywania magazynu. Dla klientów to możliwość rozszerzenia działalności bez inwestycji w logistykę.

**Ciekawostki techniczne:**

System weryfikuje adresy dostawy i automatycznie wybiera odpowiedniego kuriera. Opłaty dropshippingowe są konfigurowalne i mogą być naliczane procentowo lub kwotowo. Moduł wspiera dodatkowe usługi z możliwością konfiguracji cen i dostępności. Klient ma możliwość podania własnych etykiet spedycyjnych  do obsługi wysyłki. 

**Moduł WiseB2B:** `Wise\Delivery`, `Wise\Receiver`

---

### Sprzedaż zagraniczna

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 160,00 PLN

**Opis biznesowy:**

Sprzedaż zagraniczna to funkcja dla firm eksportujących, umożliwiająca automatyczną weryfikację statusu VAT klientów przez system VIES. System automatycznie stosuje stawkę VAT 0% dla klientów z UE z ważnym numerem VAT, eliminując błędy manualne. Różne waluty koszyka sprzedaży pozwalają klientom widzieć ceny w swojej walucie, co zwiększa zaufanie. To otwiera drzwi do ekspansji międzynarodowej bez konieczności manualnej obsługi każdego zamówienia zagranicznego. Dla klientów to profesjonalna obsługa zgodna z wymogami międzynarodowego handlu.

**Ciekawostki techniczne:**

System integruje się z API VIES dla automatycznej weryfikacji numerów VAT. Weryfikacja jest wykonywana w czasie rzeczywistym przy składaniu zamówienia. Moduł automatycznie wybiera odpowiednią stawkę VAT na podstawie lokalizacji klienta i statusu VAT. System wspiera wiele walut z automatyczną konwersją i aktualizacją kursów. Moduł generuje dokumenty zgodne z wymogami międzynarodowego handlu (faktury, CMR).

**Moduł WiseB2B:** `Wise\Order`, `Wise\I18n`

---

### Zaawansowane uprawnienia użytkowników

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 140,00 PLN

**Opis biznesowy:**

Zaawansowane uprawnienia użytkowników to funkcja dla dużych firm z rozbudowanymi strukturami organizacyjnymi. Limity zakupowe pozwalają kontrolować wydatki poszczególnych pracowników, co jest kluczowe dla zarządzania budżetem. Proces akceptacji zakupów przez przełożonego zapewnia zgodność z procedurami wewnętrznymi firmy. Oddziały i MPK (miejsca powiązane z kosztami) umożliwiają przypisanie zamówień do konkretnych jednostek organizacyjnych. To narzędzie do zarządzania procesem zakupowym w dużych organizacjach, zapewniające kontrolę i zgodność z politykami firmy.

**Ciekawostki techniczne:**

System wspiera hierarchiczne struktury uprawnień z możliwością dziedziczenia. Limity mogą być definiowane na poziomie użytkownika, grupy lub globalnie. Proces akceptacji jest konfigurowalny z możliwością wielu poziomów zatwierdzeń. Moduł integruje się z systemami ERP klientów dla synchronizacji struktur organizacyjnych. System automatycznie wysyła powiadomienia o zamówieniach wymagających akceptacji.

**Moduł WiseB2B:** `Wise\User`, `Wise\Order`

---

### SUP

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 50,00 PLN

**Opis biznesowy:**

SUP (System Utylizacji Produktów) to funkcja dla firm sprzedających produkty objęte opłatą produktową. System automatycznie nalicza opłatę SUP zgodnie z obowiązującymi przepisami i umożliwia rezygnację z opłaty przy zakupie profesjonalnym. To eliminuje ryzyko błędów w naliczaniu opłat i zapewnia zgodność z wymogami prawnymi. Dla firm dystrybucyjnych to standard, który musi być obsługiwany. Automatyzacja tego procesu oszczędza czas i redukuje błędy manualne.

**Ciekawostki techniczne:**

System automatycznie identyfikuje produkty objęte opłatą SUP na podstawie kategorii i atrybutów. Opłata jest naliczana zgodnie z aktualnymi stawkami z możliwością automatycznej aktualizacji. Moduł wspiera rezygnację z opłaty dla zakupów profesjonalnych z weryfikacją uprawnień. System generuje raporty opłat SUP zgodne z wymogami prawnymi. Moduł integruje się z systemami rozliczeniowymi dla automatycznego przekazywania opłat.

**Moduł WiseB2B:** `Wise\Order`, `Wise\Pricing`

---

### Optymalizator zakupów

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⛔ Brak
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 500,00 PLN

**Opis biznesowy:**

Optymalizator zakupów to zaawansowane narzędzie wykorzystujące algorytmy do sugerowania optymalnych kombinacji produktów i ilości. System analizuje ceny, dostępność, progi ilościowe i promocje, sugerując klientom najlepsze opcje zakupowe. To zwiększa wartość zamówień poprzez optymalizację wykorzystania promocji i progów ilościowych. Dla klientów to oszczędność czasu i pieniędzy, dla Ciebie to wyższa wartość zamówień i lepsze wykorzystanie promocji. To narzędzie dla zaawansowanych platform, które chcą maksymalizować wartość każdego zamówienia.

**Ciekawostki techniczne:**

System wykorzystuje algorytmy optymalizacyjne do analizy tysięcy kombinacji produktów w czasie rzeczywistym. Optymalizator uwzględnia ceny, promocje, progi ilościowe, dostępność i koszty dostawy. Moduł cache'uje wyniki optymalizacji dla popularnych kombinacji produktów. System może sugerować alternatywne produkty lub ilości dla osiągnięcia lepszych cen. Optymalizator integruje się z systemem promocji i cenników dla pełnej analizy opcji.

**Moduł WiseB2B:** `Wise\Cart`, `Wise\Pricing`

---

## 5. Obsługa klienta

### Dane klienta

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 100,00 PLN

**Opis biznesowy:**

Dane klienta to fundament relacji B2B, przechowujący pełne informacje o kontrahentach. System zarządza danymi adresowymi, rejestrowymi (NIP, REGON) i miejscami odbioru, co jest kluczowe dla procesu zamawiania i fakturyzacji. Miejsca odbioru pozwalają klientom mieć wiele adresów dostawy, co jest standardem w B2B. System automatycznie weryfikuje dane rejestrowe, co eliminuje błędy i zapewnia zgodność z wymogami prawnymi. To narzędzie do zarządzania relacjami z klientami, zapewniające aktualność i poprawność danych.

**Ciekawostki techniczne:**

System automatycznie weryfikuje dane rejestrowe przez API GUS i innych dostawców danych. Miejsca odbioru są powiązane z magazynami i wpływają na dostępność produktów. Moduł wspiera wiele adresów dla jednego klienta z możliwością ustawienia domyślnego. System cache'uje dane klientów dla optymalnej wydajności. Moduł integruje się z systemami ERP dla synchronizacji danych klientów.

**Moduł WiseB2B:** `Wise\Client`

---

### Użytkownicy klienta i role

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 100,00 PLN

**Opis biznesowy:**

Użytkownicy klienta i role to system zarządzania dostępem dla firm z wieloma pracownikami korzystającymi z platformy. Rola głównego użytkownika pozwala zarządzać kontem i uprawnieniami innych użytkowników. Rola zakupowca umożliwia składanie zamówień zgodnie z uprawnieniami. To standard w B2B, gdzie różni pracownicy mają różne uprawnienia. System zapewnia bezpieczeństwo i kontrolę dostępu, eliminując ryzyko nieautoryzowanych zamówień. To narzędzie do zarządzania relacjami z klientami, zapewniające elastyczność i bezpieczeństwo.

**Ciekawostki techniczne:**

System wspiera hierarchiczne struktury uprawnień z możliwością dziedziczenia. Role mogą być konfigurowane z precyzyjnym określeniem uprawnień (zakupy, podgląd, edycja danych). Moduł automatycznie weryfikuje uprawnienia przy każdej operacji. System wspiera jednorazowe hasła i uwierzytelnianie dwuskładnikowe. Moduł integruje się z systemami SSO klientów dla jednorazowego logowania.

**Moduł WiseB2B:** `Wise\User`, `Wise\Client`

---

### Listy zakupowe

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 80,00 PLN

**Opis biznesowy:**

Listy zakupowe to narzędzie do organizacji zakupów dla firm z cyklicznymi lub planowanymi zamówieniami. Możesz tworzyć listy produktów do dowolnego gromadzenia specyfikacji (np. lista na projekt, lista na miesiąc, lista standardowa). System umożliwia zamawianie wybranych produktów z listy lub całości jednym kliknięciem. To oszczędza czas przy powtarzalnych zamówieniach i ułatwia planowanie zakupów. Dla firm z regularnymi zamówieniami to standard, który zwiększa efektywność procesu zakupowego.

**Ciekawostki techniczne:**

Listy są przechowywane w systemie z możliwością nazwania, kategoryzacji i współdzielenia. Moduł wspiera wiele list dla jednego użytkownika z możliwością organizacji. System automatycznie weryfikuje dostępność i aktualne ceny produktów z listy. Listy mogą być eksportowane do plików CSV/Excel i importowane z powrotem. Moduł cache'uje zawartość list dla optymalnej wydajności.

**Moduł WiseB2B:** `Wise\ShoppingList`

---

### Historia zamówień

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 80,00 PLN

**Opis biznesowy:**

Historia zamówień to narzędzie do śledzenia wszystkich zamówień klienta w jednym miejscu. System pokazuje statusy zamówień w czasie rzeczywistym, co eliminuje konieczność kontaktowania się z działem obsługi klienta. Klienci mogą śledzić postęp realizacji, co zwiększa zaufanie i satysfakcję. Możliwość powtarzania zamówień z historii oszczędza czas przy cyklicznych zakupach. To narzędzie do zwiększania transparentności i zadowolenia klientów, redukując obciążenie działu obsługi.

**Ciekawostki techniczne:**

System automatycznie aktualizuje statusy zamówień na podstawie zdarzeń w procesie realizacji. Moduł wspiera filtrowanie i wyszukiwanie zamówień po wielu kryteriach. Historia jest przechowywana w systemie z możliwością eksportu do plików. System cache'uje dane zamówień dla optymalnej wydajności. Moduł integruje się z systemami realizacji dla automatycznej aktualizacji statusów.

**Moduł WiseB2B:** `Wise\Order`

---

### Historia faktur

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 120,00 PLN

**Opis biznesowy:**

Historia faktur to narzędzie do zarządzania dokumentami rozliczeniowymi, umożliwiające klientom dostęp do wszystkich faktur w jednym miejscu. System automatycznie synchronizuje faktury z systemem rozliczeniowym, eliminując konieczność manualnego przekazywania dokumentów. Klienci mogą pobierać faktury w formacie PDF, co ułatwia archiwizację i rozliczenia. To redukuje obciążenie działu obsługi klienta i zwiększa satysfakcję poprzez dostępność dokumentów 24/7. Dla klientów to wygoda, dla Ciebie to redukcja kosztów obsługi.

**Ciekawostki techniczne:**

Moduł integruje się z systemami rozliczeniowymi przez API dla automatycznej synchronizacji faktur. Faktury są przechowywane w systemie z możliwością wyszukiwania i filtrowania. System automatycznie generuje pliki PDF z faktur zgodnie z szablonami. Moduł wspiera wiele formatów faktur (PDF, XML, e-faktura). System cache'uje faktury dla optymalnej wydajności i automatycznie aktualizuje je przy zmianach.

**Moduł WiseB2B:** `Wise\Document`

---

### Historia dostaw

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 120,00 PLN

**Opis biznesowy:**

Historia dostaw to narzędzie do śledzenia realizacji zamówień, pokazujące listy spedycyjne powiązane z zamówieniami i fakturami. Klienci mogą śledzić status dostaw w czasie rzeczywistym, co zwiększa transparentność i zaufanie. System automatycznie aktualizuje statusy na podstawie danych z kurierów, eliminując konieczność manualnej weryfikacji. To redukuje zapytania do działu obsługi klienta i zwiększa satysfakcję poprzez dostępność informacji. Dla klientów to wygoda, dla Ciebie to redukcja kosztów obsługi.

**Ciekawostki techniczne:**

Moduł integruje się z systemami kurierów przez API dla automatycznej synchronizacji statusów dostaw. Listy spedycyjne są powiązane z zamówieniami i fakturami w systemie. System automatycznie aktualizuje statusy na podstawie zdarzeń w procesie dostawy. Moduł wspiera wiele kurierów jednocześnie z unifikacją statusów. System cache'uje dane dostaw dla optymalnej wydajności i automatycznie aktualizuje je przy zmianach.

**Moduł WiseB2B:** `Wise\Delivery`, `Wise\Order`

---

### Rozrachunki

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 130,00 PLN

**Opis biznesowy:**

Rozrachunki to narzędzie do zarządzania saldami i rozliczeniami z klientami, pokazujące aktualne saldo, zaległości i nadpłaty. Klienci mogą śledzić swoje salda w czasie rzeczywistym, co zwiększa transparentność i ułatwia planowanie płatności. System automatycznie aktualizuje salda po realizacji zamówień i otrzymaniu płatności, eliminując konieczność manualnej weryfikacji. To redukuje zapytania o salda i zwiększa satysfakcję poprzez dostępność informacji. Dla klientów to wygoda, dla Ciebie to redukcja kosztów obsługi i lepsze zarządzanie należnościami.

**Ciekawostki techniczne:**

Moduł integruje się z systemami rozliczeniowymi przez API dla automatycznej synchronizacji sald. Salda są obliczane w czasie rzeczywistym na podstawie zamówień, faktur i płatności. System automatycznie aktualizuje salda po każdej transakcji. Moduł wspiera wiele walut z automatyczną konwersją sald. System generuje raporty sald zgodnie z konfigurowalnymi szablonami i automatycznie wysyła powiadomienia o zaległościach.

**Moduł WiseB2B:** `Wise\Client`, `Wise\Document`

---

### Zwroty i reklamacje

**Metryczka:**
* **Pakiet Starter:** ⭕ Dostępny (opcja)
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 190,00 PLN

**Opis biznesowy:**

Zwroty i reklamacje to narzędzie do obsługi procesu zwrotów i reklamacji, umożliwiające klientom składanie wniosków online. System automatycznie weryfikuje uprawnienia do zwrotu i generuje dokumenty zwrotne, co przyspiesza proces. Klienci mogą śledzić status zwrotów w czasie rzeczywistym, co zwiększa transparentność i zaufanie. To redukuje obciążenie działu obsługi klienta i zwiększa satysfakcję poprzez dostępność procesu online. Dla klientów to wygoda, dla Ciebie to redukcja kosztów obsługi i lepsze zarządzanie zwrotami.

**Ciekawostki techniczne:**

Moduł wspiera złożone procesy zwrotów z wieloma krokami i weryfikacjami. System automatycznie weryfikuje uprawnienia do zwrotu na podstawie daty zakupu i statusu produktu. Moduł generuje dokumenty zwrotne zgodnie z konfigurowalnymi szablonami. System integruje się z systemami magazynowymi dla automatycznej aktualizacji stanów po przyjęciu zwrotu. Moduł wspiera wiele typów zwrotów (zwrot, reklamacja, wymiana) z różnymi procesami dla każdego typu.

**Moduł WiseB2B:** `Wise\ReturnComplain`

---

### Oferty dedykowane

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 350,00 PLN

**Opis biznesowy:**

Oferty dedykowane to zaawansowane narzędzie do tworzenia spersonalizowanych ofert dla wybranych klientów. Możesz tworzyć specjalne ceny, promocje i zestawy produktów dostępne tylko dla konkretnych klientów. System umożliwia budowanie koszyka w oparciu o oferty, co przyspiesza proces zamawiania. To narzędzie do budowania relacji z kluczowymi klientami poprzez ekskluzywne oferty. Dla handlowców to sposób na negocjacje i budowanie lojalności poprzez spersonalizowane warunki.

**Ciekawostki techniczne:**

Moduł wspiera złożone reguły ofert z wieloma warunkami i wyjątkami. Oferty mogą być datowane z automatyczną aktywacją i deaktywacją. System automatycznie wybiera najlepszą ofertę dla klienta na podstawie wielu kryteriów. Moduł cache'uje oferty dla optymalnej wydajności i automatycznie aktualizuje je przy zmianach. System wspiera wiele typów ofert (ceny, promocje, zestawy) z możliwością łączenia ich w kompleksowe pakiety.

**Moduł WiseB2B:** `Wise\Offer`

---

### Edycja zamówień w realizacji

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 200,00 PLN

**Opis biznesowy:**

Edycja zamówień w realizacji to funkcja dla zaawansowanych procesów, umożliwiająca modyfikację zamówień już po ich złożeniu. System blokuje zamówienia do realizacji (np. przy dropshippingu), umożliwiając zmiany przed rozpoczęciem pakowania. To zwiększa elastyczność procesu zakupowego i redukuje konieczność anulowania i ponownego składania zamówień. Dla klientów to wygoda, dla Ciebie to redukcja kosztów obsługi zwrotów i reklamacji. To narzędzie dla firm z długimi procesami realizacji, gdzie klienci mogą potrzebować zmian.

**Ciekawostki techniczne:**

Moduł wspiera złożone procesy edycji z wieloma krokami weryfikacji i akceptacji. System automatycznie weryfikuje możliwość edycji na podstawie statusu zamówienia i konfigurowalnych reguł. Moduł blokuje zamówienia do realizacji z możliwością ręcznego odblokowania. System automatycznie aktualizuje ceny i dostępność przy edycji zamówień. Moduł wspiera wiele typów zmian (ilość, produkty, adres) z różnymi procesami dla każdego typu.

**Moduł WiseB2B:** `Wise\OrderEdit`

---

## 6. AI

### Agent klienta

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 600,00 PLN

**Opis biznesowy:**

Agent klienta to zaawansowane narzędzie AI wspierające klientów w wyszukiwaniu i realizacji zakupów. Asystent rozumie naturalny język, pomaga znaleźć produkty, porównuje oferty i sugeruje najlepsze opcje. To zwiększa konwersję poprzez ułatwienie procesu zakupowego i redukuje obciążenie działu obsługi klienta. Dla klientów to wygoda i oszczędność czasu, dla Ciebie to wyższa konwersja i lepsze wykorzystanie katalogu. To narzędzie dla platform, które chcą oferować najnowocześniejsze doświadczenie zakupowe.

**Ciekawostki techniczne:**

Agent wykorzystuje zaawansowane modele językowe do rozumienia intencji klientów i kontekstu zapytań. System integruje się z katalogiem produktów, wyszukiwarką i systemem koszyka dla pełnej funkcjonalności. Moduł cache'uje odpowiedzi dla popularnych zapytań dla optymalnej wydajności. Agent uczy się z interakcji klientów, dostosowując odpowiedzi do preferencji. System wspiera wiele języków z automatycznym wykrywaniem języka użytkownika.

**Moduł WiseB2B:** `Wise\AssistantAi`

---

### Agent administratora

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 600,00 PLN

**Opis biznesowy:**

Agent administratora to asystent AI wspierający administratorów w konfigurowaniu systemu. Asystent pomaga w ustawianiu cenników, promocji, kategorii i innych elementów platformy, redukując czas potrzebny na konfigurację. To zwiększa efektywność pracy administratorów i redukuje błędy konfiguracyjne. Dla małych firm to możliwość samodzielnej konfiguracji bez konieczności zatrudniania specjalistów. Dla dużych platform to narzędzie do przyspieszenia wdrożeń i zmian konfiguracyjnych.

**Ciekawostki techniczne:**

Agent wykorzystuje zaawansowane modele językowe do rozumienia intencji administratorów i kontekstu konfiguracji. System integruje się z wszystkimi modułami platformy dla pełnej funkcjonalności konfiguracyjnej. Moduł cache'uje odpowiedzi dla popularnych zapytań dla optymalnej wydajności. Agent uczy się z interakcji administratorów, dostosowując odpowiedzi do preferencji. System wspiera wiele języków z automatycznym wykrywaniem języka użytkownika.

**Moduł WiseB2B:** `Wise\AssistantAi`

---

### Automatyzacja generowania AI

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 800,00 PLN

**Opis biznesowy:**

Automatyzacja generowania AI to zaawansowane narzędzie do automatycznego generowania treści przez AI. Dla każdego pola dowolnego elementu systemu możesz skonfigurować schemat generowania wartości poprzez AI. To pozwala automatycznie generować opisy produktów, tytuły, tagi SEO i inne treści, oszczędzając czas pracowników. System uczy się z istniejących danych, generując spójne i wysokiej jakości treści. To narzędzie dla platform z dużymi katalogami, gdzie ręczne tworzenie treści jest nieefektywne.

**Ciekawostki techniczne:**

Moduł wspiera konfigurowalne schematy generowania dla każdego pola z możliwością definiowania wzorców i reguł. System wykorzystuje zaawansowane modele językowe do generowania treści zgodnych z kontekstem i stylem. Moduł cache'uje wygenerowane treści dla optymalnej wydajności. System wspiera wiele języków z automatycznym generowaniem treści w odpowiednim języku. Moduł integruje się z systemem walidacji dla automatycznej weryfikacji jakości generowanych treści.

**Moduł WiseB2B:** `Wise\AssistantAi`, `Wise\Core`

---

## 7. CMS

### Konfigurowanie layoutu

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 70,00 PLN

**Opis biznesowy:**

Konfigurowanie layoutu to narzędzie do personalizacji wyglądu i struktury platformy bez konieczności programowania. Możesz konfigurować stronę główną, slidery (w tym obsługa video), wybrane kategorie, dowolne bloki HTML, obsługę mediów i boxy produktowe. To pozwala dostosować platformę do Twojej marki i strategii marketingowej. System umożliwia szybkie zmiany treści i layoutu, co jest kluczowe dla kampanii marketingowych i sezonowych promocji. To narzędzie do zwiększania zaangażowania klientów poprzez atrakcyjną prezentację oferty.

**Ciekawostki techniczne:**

Moduł wykorzystuje system szablonów z możliwością nadpisywania i customizacji. Layout jest konfigurowany przez panel administracyjny bez konieczności zmian w kodzie. System cache'uje wygenerowane strony dla optymalnej wydajności. Moduł wspiera responsywny design z automatyczną adaptacją do różnych urządzeń. System integruje się z systemem mediów dla zarządzania zdjęciami, video i innymi plikami.

**Moduł WiseB2B:** `Wise\Cms`, `Wise\DynamicUI`

---

### Aktualności

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 50,00 PLN

**Opis biznesowy:**

Aktualności to narzędzie do komunikacji z klientami poprzez publikowanie wiadomości, ogłoszeń i informacji o nowościach. Możesz informować klientów o nowych produktach, promocjach, zmianach w ofercie i innych ważnych informacjach. System wspiera kategoryzację aktualności i automatyczne powiadomienia, co zwiększa zasięg komunikacji. To narzędzie do budowania relacji z klientami i zwiększania zaangażowania poprzez regularną komunikację. Dla klientów to źródło informacji o ofercie i zmianach w platformie.

**Ciekawostki techniczne:**

Moduł wspiera zaawansowany edytor treści z możliwością formatowania, wstawiania obrazów i linków. System automatycznie generuje podsumowania i obrazy wyróżniające dla aktualności. Moduł cache'uje aktualności dla optymalnej wydajności. System wspiera wiele języków z automatycznym wyborem języka aktualności. Moduł integruje się z systemem powiadomień dla automatycznego wysyłania informacji o nowych aktualnościach.

**Moduł WiseB2B:** `Wise\Cms`

---

### Baza wiedzy

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 50,00 PLN

**Opis biznesowy:**

Baza wiedzy to narzędzie do gromadzenia i udostępniania dokumentacji, instrukcji i odpowiedzi na często zadawane pytania. Możesz tworzyć artykuły pomocowe, które redukują obciążenie działu obsługi klienta poprzez samodzielne znajdowanie odpowiedzi przez klientów. System wspiera kategoryzację i wyszukiwanie, co ułatwia znalezienie potrzebnych informacji. To narzędzie do zwiększania satysfakcji klientów i redukcji kosztów obsługi. Dla klientów to wygoda i dostępność informacji 24/7.

**Ciekawostki techniczne:**

Moduł wspiera zaawansowany edytor treści z możliwością formatowania, wstawiania obrazów, video i linków. System automatycznie indeksuje treści dla wyszukiwania pełnotekstowego. Moduł cache'uje artykuły dla optymalnej wydajności. System wspiera wiele języków z automatycznym wyborem języka artykułów. Moduł integruje się z systemem wyszukiwania dla ułatwienia znajdowania odpowiedzi.

**Moduł WiseB2B:** `Wise\Cms`, `Wise\Docs`

---

### SEO

**Metryczka:**
* **Pakiet Starter:** ⭕ Dostępny (opcja)
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 180,00 PLN

**Opis biznesowy:**

SEO to narzędzie do optymalizacji widoczności platformy w wyszukiwarkach internetowych. System umożliwia zarządzanie treściami SEO dla różnych rodzajów podstron (główna, listingi produktów, kategorie, produkty, artykuły i sekcje). Możesz konfigurować meta tagi, tytuły, opisy i inne elementy SEO, co zwiększa widoczność w wynikach wyszukiwania. To narzędzie do zwiększania ruchu organicznego i redukcji kosztów marketingu. Dla platform B2B to kluczowe narzędzie do budowania widoczności w internecie.

**Ciekawostki techniczne:**

Moduł automatycznie generuje meta tagi na podstawie treści strony z możliwością ręcznej edycji. System wspiera wiele języków z automatycznym generowaniem treści SEO w odpowiednim języku. Moduł cache'uje wygenerowane strony dla optymalnej wydajności. System integruje się z systemem sitemap dla automatycznego generowania mapy strony. Moduł wspiera zaawansowane funkcje SEO (schema markup, Open Graph, Twitter Cards).

**Moduł WiseB2B:** `Wise\Cms`, `Wise\Core`

---

## 8. Dostępność platformy

### Profil zamknięty

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 50,00 PLN

**Opis biznesowy:**

Profil zamknięty to standardowa funkcja platform B2B, gdzie platforma jest dostępna jedynie po zalogowaniu. To zapewnia bezpieczeństwo danych i oferty, umożliwiając kontrolę dostępu do platformy. System wymaga rejestracji i weryfikacji klientów przed udostępnieniem dostępu, co eliminuje nieautoryzowany dostęp. To narzędzie do zarządzania relacjami z klientami i zapewniania bezpieczeństwa danych. Dla platform B2B to standard, który zapewnia profesjonalizm i bezpieczeństwo. Klienci muszą być zweryfikowani przed dostępem do oferty, co chroni Twoje cenniki i strategię cenową.

**Ciekawostki techniczne:**

System wykorzystuje zaawansowane mechanizmy uwierzytelniania z możliwością integracji z systemami SSO. Moduł wspiera wiele metod uwierzytelniania (hasło, jednorazowe hasło, uwierzytelnianie dwuskładnikowe). System automatycznie weryfikuje uprawnienia użytkowników przy każdej operacji. Moduł cache'uje sesje użytkowników dla optymalnej wydajności. System wspiera automatyczne wylogowanie po okresie nieaktywności dla zwiększenia bezpieczeństwa.

**Moduł WiseB2B:** `Wise\Security`, `Wise\User`

---

### Profil otwarty

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 50,00 PLN

**Opis biznesowy:**

Profil otwarty to funkcja dla firm, które chcą prezentować ofertę szerszej publiczności bez konieczności logowania. Użytkownicy mogą przeglądać produkty i wyszukiwać bez rejestracji, co zwiększa zasięg i możliwość generowania leadów. System automatycznie akceptuje rejestracje, eliminując konieczność manualnej weryfikacji. To narzędzie do zwiększania widoczności oferty i pozyskiwania nowych klientów. Dla firm, które chcą budować markę i przyciągać uwagę potencjalnych klientów, to sposób na zwiększenie ruchu na platformie. Zakupy wymagają jednak rejestracji, co zapewnia kontrolę nad klientami.

**Ciekawostki techniczne:**

System automatycznie generuje leady z danych kontaktowych niezarejestrowanych użytkowników. Moduł wspiera automatyczną akceptację rejestracji na podstawie konfigurowalnych reguł. System cache'uje dane produktowe dla niezalogowanych użytkowników dla optymalnej wydajności. Moduł integruje się z systemami CRM dla automatycznego przekazywania leadów. System wspiera różne poziomy dostępu dla niezalogowanych użytkowników (tylko przeglądanie, wyszukiwanie, generowanie leadów).

**Moduł WiseB2B:** `Wise\Security`, `Wise\User`, `Wise\Client`

---

### MultiStore

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⛔ Brak
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 600,00 PLN

**Opis biznesowy:**

MultiStore to zaawansowane rozwiązanie dla firm prowadzących wiele sklepów lub marek na jednej platformie. Możesz definiować różne sklepy z własnymi zakresami produktów, grupami klientów, cennikami i językami. Każdy sklep ma własny frontend, ale korzysta z jednego backendu, co oszczędza koszty utrzymania. To narzędzie dla dużych firm z wieloma markami lub firm działających na różnych rynkach. Dla Ciebie to możliwość zarządzania wieloma kanałami sprzedaży z jednego miejsca, co zwiększa efektywność i redukuje koszty operacyjne.

**Ciekawostki techniczne:**

System wspiera nieograniczoną liczbę sklepów z pełną izolacją danych między sklepami. Każdy sklep może mieć własną konfigurację produktów, cenników, promocji i języków. Moduł umożliwia współdzielenie produktów między sklepami lub całkowitą izolację. System cache'uje konfiguracje sklepów dla optymalnej wydajności. Moduł wspiera różne domeny dla każdego sklepu z automatycznym routingiem.

**Moduł WiseB2B:** `Wise\MultiStore`

---

## 9. B2C

### Profil B2C

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 600,00 PLN

**Opis biznesowy:**

Profil B2C to funkcja dla firm, które chcą obsługiwać zarówno klientów biznesowych, jak i indywidualnych na jednej platformie. System umożliwia zakupy niezarejestrowanym użytkownikom, co jest standardem w e-commerce B2C. Rejestracja B2C jest uproszczona w porównaniu do B2B, co przyspiesza proces zakupowy. Prezentacja w cenach brutto jest naturalna dla klientów indywidualnych. To narzędzie do rozszerzenia działalności o kanał B2C bez konieczności budowania osobnej platformy. Dla firm dystrybucyjnych to sposób na dotarcie do szerszej grupy odbiorców.

**Ciekawostki techniczne:**

System automatycznie rozpoznaje typ klienta (B2B/B2C) i dostosowuje interfejs i proces zakupowy. Moduł wspiera różne procesy rejestracji dla klientów B2B i B2C. System automatycznie wybiera odpowiednie ceny (netto/brutto) w zależności od typu klienta. Moduł integruje się z systemami płatności B2C (karty, BLIK) dla wygodnych transakcji. System wspiera różne koszyki i procesy checkout dla klientów B2B i B2C.

**Moduł WiseB2B:** `Wise\Client`, `Wise\Cart`, `Wise\Checkout`

---

### Obsługa Omnibus

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 0,00 PLN

**Opis biznesowy:**

Obsługa Omnibus to funkcja zapewniająca zgodność z unijnym rozporządzeniem o transparentności cen. System automatycznie pokazuje najniższą cenę z ostatnich 30 dni, co jest wymagane przez przepisy UE. To eliminuje ryzyko kar prawnych i zwiększa zaufanie klientów poprzez transparentność cenową. Dla firm działających w UE to obowiązkowa funkcja, która musi być zaimplementowana. Automatyzacja tego procesu oszczędza czas i zapewnia zgodność z wymogami prawnymi.

**Ciekawostki techniczne:**

System automatycznie śledzi historię cen produktów i wyświetla najniższą cenę z ostatnich 30 dni. Moduł wspiera różne formaty prezentacji informacji o najniższej cenie zgodnie z wymogami prawnymi. System cache'uje dane o najniższych cenach dla optymalnej wydajności. Moduł automatycznie aktualizuje informacje o najniższych cenach przy każdej zmianie ceny. System wspiera wiele języków z automatycznym tłumaczeniem komunikatów o najniższych cenach.

**Moduł WiseB2B:** `Wise\Pricing`, `Wise\Product`

---

## 10. Handlowiec

### Wsparcie klienta w zakupach

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 100,00 PLN

**Opis biznesowy:**

Wsparcie klienta w zakupach to funkcja dla handlowców, którzy pomagają klientom w procesie zakupowym. System umożliwia przelogowanie w konto klienta i obsługę sklepu w imieniu klienta, co przyspiesza proces zakupowy i zwiększa satysfakcję. Handlowiec może pomóc klientowi w wyborze produktów, dodaniu ich do koszyka i finalizacji zamówienia. To narzędzie do budowania relacji z klientami poprzez personalną obsługę. Dla klientów to wygoda, dla Ciebie to wyższa konwersja i lepsze wykorzystanie czasu handlowców.

**Ciekawostki techniczne:**

System wspiera bezpieczne przelogowanie handlowca w konto klienta z pełnym audytem operacji. Moduł automatycznie loguje wszystkie działania handlowca w imieniu klienta dla bezpieczeństwa. System wspiera różne poziomy uprawnień handlowców (tylko przeglądanie, dodawanie do koszyka, finalizacja). Moduł integruje się z systemem CRM dla automatycznego przypisania zamówień do handlowców. System wspiera powiadomienia klienta o działaniach handlowca w jego imieniu.

**Moduł WiseB2B:** `Wise\User`, `Wise\Cart`, `Wise\Order`

---

### Panel handlowca

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 300,00 PLN

**Opis biznesowy:**

Panel handlowca to dedykowane narzędzie dla zespołu sprzedażowego, umożliwiające zarządzanie klientami, zamówieniami i ofertami w jednym miejscu. Handlowcy mogą śledzić status zamówień swoich klientów, przeglądać historię zakupów i zarządzać relacjami. To zwiększa efektywność pracy handlowców i poprawia jakość obsługi klientów. Dla handlowców to narzędzie do organizacji pracy i budowania relacji z klientami. Dla Ciebie to lepsze wykorzystanie zasobów sprzedażowych i wyższa konwersja.

**Ciekawostki techniczne:**

Panel jest zbudowany na architekturze modułowej z możliwością dostosowania do potrzeb handlowców. System wspiera różne widoki i filtry dla szybkiego dostępu do potrzebnych informacji. Moduł cache'uje dane klientów i zamówień dla optymalnej wydajności. System integruje się z systemami CRM dla synchronizacji danych. Moduł wspiera eksport danych do plików Excel/CSV dla analiz offline.

**Moduł WiseB2B:** `Wise\AdminPanel`, `Wise\Client`, `Wise\Order`

---

### Ofertowanie

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 300,00 PLN

**Opis biznesowy:**

Ofertowanie to narzędzie dla handlowców do tworzenia i edycji ofert dla klientów. System umożliwia przygotowanie spersonalizowanych ofert z wybranymi produktami, cenami i warunkami. Handlowcy mogą tworzyć oferty, wysyłać je klientom i śledzić ich status. To przyspiesza proces negocjacji i zwiększa szanse na zamknięcie transakcji. Dla handlowców to narzędzie do profesjonalnej prezentacji oferty, dla klientów to wygoda w procesie zakupowym.

**Ciekawostki techniczne:**

System wspiera tworzenie ofert z szablonów dla szybkiego przygotowania propozycji. Moduł umożliwia edycję ofert z automatycznym przeliczaniem cen i dostępności. System wspiera wiele wersji ofert z możliwością porównywania zmian. Moduł automatycznie generuje dokumenty ofertowe (PDF, Excel) zgodnie z szablonami. System integruje się z systemem koszyka dla automatycznego tworzenia zamówień z ofert.

**Moduł WiseB2B:** `Wise\Offer`, `Wise\Cart`

---

### Zadania

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 300,00 PLN

**Opis biznesowy:**

Zadania to narzędzie do zarządzania pracą zespołu sprzedażowego poprzez przypisywanie i śledzenie zadań. Handlowcy mogą otrzymywać zadania związane z klientami, zamówieniami lub ofertami, co zwiększa organizację pracy. System wspiera priorytetyzację zadań, terminy i powiadomienia, co poprawia efektywność. To narzędzie do koordynacji pracy zespołu i zapewnienia, że ważne sprawy nie są pomijane. Dla menedżerów to sposób na kontrolę pracy zespołu, dla handlowców to organizacja codziennych obowiązków.

**Ciekawostki techniczne:**

System wspiera różne typy zadań (kontakt z klientem, przygotowanie oferty, weryfikacja zamówienia) z własnymi procesami. Moduł automatycznie przypisuje zadania na podstawie konfigurowalnych reguł. System wspiera powiadomienia o zadaniach przez email, SMS lub w systemie. Moduł integruje się z kalendarzem dla automatycznego planowania zadań. System wspiera raporty i analizy zadań dla optymalizacji procesów.

**Moduł WiseB2B:** `Wise\Service`, `Wise\Message`

---

### Monitoring klientów

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⛔ Brak
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 100,00 PLN

**Opis biznesowy:**

Monitoring klientów to zaawansowane narzędzie do identyfikacji klientów wymagających uwagi na podstawie definiowalnych polityk. System automatycznie wykrywa klientów z problemami (zaległości, spadek zamówień, brak aktywności) i alertuje handlowców. To pozwala na proaktywne podejście do obsługi klientów i redukuje ryzyko utraty klientów. Dla handlowców to lista priorytetów, dla Ciebie to narzędzie do zwiększania retencji klientów. To szczególnie przydatne dla dużych firm z wieloma klientami, gdzie manualne śledzenie jest niemożliwe.

**Ciekawostki techniczne:**

System wspiera konfigurowalne polityki monitorowania z wieloma warunkami i wyjątkami. Moduł automatycznie analizuje dane klientów i identyfikuje te wymagające uwagi. System wspiera różne poziomy alertów (informacja, ostrzeżenie, krytyczne) z automatycznymi powiadomieniami. Moduł cache'uje wyniki analizy dla optymalnej wydajności. System wspiera raporty i dashboardy dla wizualizacji klientów wymagających uwagi.

**Moduł WiseB2B:** `Wise\Client`, `Wise\Service`

---

## 11. Integracje

### Admin API

**Metryczka:**
* **Pakiet Starter:** ⭕ Dostępny (opcja)
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 160,00 PLN

**Opis biznesowy:**

Admin API to interfejs programistyczny umożliwiający integrację platformy z systemami zewnętrznymi przez administratorów. Możesz synchronizować dane produktowe, klientów, zamówień i innych elementów platformy z systemami ERP, CRM lub innymi narzędziami. To eliminuje konieczność manualnej obsługi danych i redukuje błędy. Dla firm z rozbudowaną infrastrukturą IT to standard, który umożliwia automatyzację procesów. To narzędzie do zwiększania efektywności operacyjnej poprzez integrację z istniejącymi systemami.

**Ciekawostki techniczne:**

API jest zbudowane na standardzie REST z pełną dokumentacją OpenAPI/Swagger. System wspiera uwierzytelnianie przez tokeny OAuth2 z możliwością zarządzania uprawnieniami. Moduł wspiera webhooki dla automatycznych powiadomień o zdarzeniach w systemie. API jest rate-limited dla ochrony przed nadmiernym obciążeniem. System wspiera wiele wersji API dla zapewnienia kompatybilności wstecznej.

**Moduł WiseB2B:** `Wise\Core`, `Wise\AdminPanel`

---

### Client API

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 160,00 PLN

**Opis biznesowy:**

Client API to interfejs programistyczny umożliwiający klientom integrację platformy z własnymi systemami. Klienci mogą synchronizować dane produktowe, cenniki, zamówienia i faktury z własnymi systemami ERP lub innymi narzędziami. To zwiększa wygodę dla zaawansowanych klientów i redukuje konieczność manualnej obsługi zamówień. Dla klientów to możliwość automatyzacji procesów zakupowych, dla Ciebie to wyższa lojalność i większe zamówienia. To narzędzie dla dużych klientów z rozbudowaną infrastrukturą IT.

**Ciekawostki techniczne:**

API jest zbudowane na standardzie REST z pełną dokumentacją dla klientów. System wspiera uwierzytelnianie przez tokeny OAuth2 z możliwością zarządzania uprawnieniami per klient. Moduł wspiera webhooki dla automatycznych powiadomień o zmianach w zamówieniach, fakturach i innych danych. API jest rate-limited dla ochrony przed nadmiernym obciążeniem. System wspiera wiele wersji API dla zapewnienia kompatybilności wstecznej.

**Moduł WiseB2B:** `Wise\ClientApi`, `Wise\Core`

---

### Integracje ERP

**Metryczka:**
* **Pakiet Starter:** ⭕ Dostępny (opcja)
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 400,00 PLN

**Opis biznesowy:**

Integracje ERP to gotowe rozwiązania do synchronizacji platformy z popularnymi systemami ERP (Teneum, Comarch Optima, eNova, Comarch XL). System automatycznie synchronizuje dane produktowe, klientów, zamówienia i faktury między platformą a systemem ERP. To eliminuje konieczność manualnej obsługi danych i redukuje błędy. Dla firm z systemami ERP to standard, który umożliwia pełną automatyzację procesów. To narzędzie do zwiększania efektywności operacyjnej poprzez eliminację duplikacji danych.

**Ciekawostki techniczne:**

Każda integracja ERP jest zbudowana jako osobny moduł z możliwością konfiguracji parametrów połączenia. System wspiera dwukierunkową synchronizację danych z automatycznym rozwiązywaniem konfliktów. Moduł wspiera różne formaty danych (XML, JSON, CSV) w zależności od wymagań systemu ERP. System cache'uje dane synchronizacji dla optymalnej wydajności. Moduł wspiera logowanie wszystkich operacji synchronizacji dla audytu i debugowania.

**Moduł WiseB2B:** `Wise\Core`, integracje zewnętrzne

---

## 12. WiseB2B Cloud

### Środowisko produkcyjne

**Metryczka:**
* **Pakiet Starter:** ✅ Wliczony
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 750,00 PLN

**Opis biznesowy:**

Środowisko produkcyjne to kompleksowa usługa hostingu platformy WiseB2B w chmurze. Obejmuje oprogramowanie platformy, instalację aktualizacji do nowych wersji i zapewnienie dostępności systemu. To eliminuje konieczność zarządzania infrastrukturą IT i pozwala skupić się na biznesie. Dla firm, które chcą uniknąć kosztów i złożoności zarządzania serwerami, to idealne rozwiązanie. To narzędzie do redukcji kosztów operacyjnych i zwiększenia bezpieczeństwa poprzez profesjonalne zarządzanie infrastrukturą.

**Ciekawostki techniczne:**

Środowisko jest zbudowane na skalowalnej infrastrukturze chmurowej z automatycznym skalowaniem w zależności od obciążenia. System wspiera automatyczne aktualizacje z możliwością planowania okien serwisowych. Moduł zapewnia backup danych z możliwością przywracania do dowolnego punktu w czasie. System wspiera monitoring i alerting dla zapewnienia wysokiej dostępności. Moduł integruje się z systemami CDN dla optymalnej wydajności globalnej.

**Moduł WiseB2B:** Infrastruktura cloud

---

### Środowisko testowe

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 300,00 PLN

**Opis biznesowy:**

Środowisko testowe to instancja platformy do testowania zmian przed wdrożeniem na produkcję. System automatycznie synchronizuje dane z nocy z dnia poprzedniego, zapewniając realistyczne warunki testowe. To pozwala bezpiecznie testować nowe funkcje, konfiguracje i integracje bez ryzyka dla produkcji. Dla firm, które często wprowadzają zmiany, to standard, który redukuje ryzyko błędów. To narzędzie do zwiększania jakości wdrożeń poprzez testowanie w bezpiecznym środowisku.

**Ciekawostki techniczne:**

Środowisko testowe jest izolowane od produkcji z możliwością resetowania do stanu początkowego. System automatycznie synchronizuje dane z produkcji w nocy dla aktualnych warunków testowych. Moduł wspiera różne wersje platformy dla testowania aktualizacji przed wdrożeniem. System wspiera automatyczne testy regresyjne dla weryfikacji poprawności zmian. Moduł integruje się z systemami CI/CD dla automatycznego wdrażania zmian.

**Moduł WiseB2B:** Infrastruktura cloud

---

### n8n

**Metryczka:**
* **Pakiet Starter:** ⭕ Dostępny (opcja)
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 300,00 PLN

**Opis biznesowy:**

n8n to środowisko do automatyzacji i synchronizacji systemu z jego otoczeniem bez konieczności programowania. Możesz tworzyć workflow automatyzujące procesy między platformą a systemami zewnętrznymi (ERP, CRM, email, SMS). To eliminuje konieczność manualnej obsługi powtarzalnych procesów i redukuje błędy. Dla firm, które chcą automatyzować procesy bez zatrudniania programistów, to idealne rozwiązanie. To narzędzie do zwiększania efektywności operacyjnej poprzez automatyzację rutynowych zadań.

**Ciekawostki techniczne:**

n8n jest zintegrowane z platformą przez API z dostępem do wszystkich funkcji systemu. System wspiera wizualne tworzenie workflow bez konieczności programowania. Moduł wspiera setki gotowych integracji z popularnymi systemami i usługami. System wspiera harmonogramowanie workflow dla automatycznego wykonywania w określonych czasach. Moduł wspiera logowanie i monitoring workflow dla audytu i debugowania.

**Moduł WiseB2B:** `Wise\Core`, integracja z n8n

---

### OnPremise

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 0,00 PLN

**Opis biznesowy:**

OnPremise to możliwość instalacji platformy na własnej infrastrukturze zamiast w chmurze. To rozwiązanie dla firm, które mają wymagania bezpieczeństwa, compliance lub preferują pełną kontrolę nad infrastrukturą. Instalacja lokalna daje pełną kontrolę nad danymi i konfiguracją, co jest ważne dla niektórych branż. Dla firm z restrykcyjnymi wymaganiami bezpieczeństwa to standard, który zapewnia zgodność z regulacjami. To narzędzie dla firm, które potrzebują pełnej kontroli nad infrastrukturą i danymi.

**Ciekawostki techniczne:**

Instalacja OnPremise wspiera różne systemy operacyjne (Linux, Windows) i bazy danych (PostgreSQL, MySQL). System wspiera konteneryzację (Docker) dla łatwej instalacji i zarządzania. Moduł wspiera automatyczne aktualizacje z możliwością planowania okien serwisowych. System wspiera backup i restore dla zapewnienia bezpieczeństwa danych. Moduł integruje się z systemami monitoringu dla zapewnienia wysokiej dostępności.

**Moduł WiseB2B:** Infrastruktura OnPremise

---

### Tłumaczenia językowe

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⛔ Brak
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 80,00 PLN

**Opis biznesowy:**

Tłumaczenia językowe to usługa profesjonalnego tłumaczenia interfejsu platformy na wybrane języki. System zapewnia spójne i wysokiej jakości tłumaczenia wszystkich elementów interfejsu, co jest kluczowe dla międzynarodowej ekspansji. To eliminuje konieczność manualnego tłumaczenia i zapewnia profesjonalizm w komunikacji z klientami. Dla firm działających międzynarodowo to standard, który zwiększa zaufanie klientów. To narzędzie do zwiększania zasięgu rynkowego poprzez profesjonalną prezentację w językach klientów.

**Ciekawostki techniczne:**

Tłumaczenia są wykonywane przez profesjonalnych tłumaczy z weryfikacją jakości. System wspiera wiele języków z możliwością dodawania nowych w przyszłości. Moduł integruje się z systemem wielojęzyczności dla automatycznego wyboru języka. System wspiera kontekstowe tłumaczenia z uwzględnieniem specyfiki branżowej. Moduł wspiera aktualizacje tłumaczeń przy zmianach w interfejsie.

**Moduł WiseB2B:** `Wise\I18n`, usługa tłumaczeń

---

## 13. Technologia

### Wtyczki własne

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ✅ Wliczony
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 0,00 PLN

**Opis biznesowy:**

Wtyczki własne to możliwość instalacji własnych wtyczek rozszerzających funkcjonalność platformy. Możesz tworzyć lub zamawiać wtyczki dostosowane do specyficznych potrzeb biznesowych, co daje pełną elastyczność. To narzędzie dla firm, które potrzebują niestandardowych funkcji nie dostępnych w podstawowej ofercie. Dla firm z unikalnymi wymaganiami to sposób na dostosowanie platformy do własnych procesów. To zwiększa elastyczność i pozwala na pełne wykorzystanie potencjału platformy.

**Ciekawostki techniczne:**

System wspiera modułową architekturę wtyczek z możliwością izolacji i zarządzania wersjami. Moduł wspiera automatyczne aktualizacje wtyczek z możliwością rollbacku. System wspiera API dla wtyczek z dostępem do wszystkich funkcji platformy. Moduł wspiera sandboxing wtyczek dla bezpieczeństwa. System wspiera dokumentację i przykłady dla ułatwienia tworzenia wtyczek.

**Moduł WiseB2B:** `Wise\Core`, system wtyczek

---

### Kod źródłowy

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⭕ Dostępny (opcja)
* **Pakiet Enterprise:** ✅ Wliczony
* **Cena modułu:** 300,00 PLN

**Opis biznesowy:**

Kod źródłowy to dostęp do pełnego kodu źródłowego platformy, umożliwiający pełną kontrolę i customizację. To rozwiązanie dla firm, które potrzebują głębokich modyfikacji lub chcą mieć pełną kontrolę nad kodem. Dostęp do kodu źródłowego daje możliwość tworzenia własnych rozszerzeń i integracji na najniższym poziomie. Dla firm z zaawansowanymi wymaganiami technicznymi to standard, który zapewnia pełną elastyczność. To narzędzie dla firm, które chcą mieć pełną kontrolę nad platformą i możliwość tworzenia unikalnych rozwiązań.

**Ciekawostki techniczne:**

Kod źródłowy jest dostępny przez repozytorium Git z pełną historią zmian. System wspiera dokumentację techniczną i przykłady dla ułatwienia customizacji. Moduł wspiera aktualizacje kodu z możliwością merge'owania zmian. System wspiera code review i testy dla zapewnienia jakości. Moduł integruje się z systemami CI/CD dla automatycznego wdrażania zmian.

**Moduł WiseB2B:** Repozytorium kodu źródłowego

---

### Customization Studio

**Metryczka:**
* **Pakiet Starter:** ⛔ Brak
* **Pakiet Professional:** ⛔ Brak
* **Pakiet Enterprise:** ⭕ Dostępny (opcja)
* **Cena modułu:** 400,00 PLN

**Opis biznesowy:**

Customization Studio to środowisko do budowania i generowania własnych pluginów bez konieczności głębokiej znajomości programowania. Możesz tworzyć wtyczki przez interfejs graficzny, co przyspiesza proces customizacji. To narzędzie dla firm, które chcą dostosować platformę do własnych potrzeb bez zatrudniania programistów. Dla firm z unikalnymi wymaganiami to sposób na szybkie tworzenie rozszerzeń. To zwiększa elastyczność i pozwala na pełne wykorzystanie potencjału platformy przy niższych kosztach.

**Ciekawostki techniczne:**

Studio wykorzystuje wizualne edytory i generatory kodu dla ułatwienia tworzenia pluginów. System wspiera szablony pluginów dla szybkiego startu z popularnymi funkcjami. Moduł wspiera testowanie pluginów w środowisku sandbox przed wdrożeniem. System wspiera dokumentację i tutoriale dla ułatwienia nauki. Moduł integruje się z systemem wtyczek dla automatycznej instalacji i aktualizacji.

**Moduł WiseB2B:** `Wise\DevStudio`, `Wise\Generator`

---