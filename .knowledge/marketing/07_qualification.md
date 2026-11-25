# Scorecard kwalifikacji leadów — WiseB2B

## Model scoringowy (0–100 punktów)

### Kryteria demograficzne (max 40 pkt)

| Kryterium | Warunek | Punkty |
|-----------|---------|--------|
| Przychody — dystrybutor / firma handlowa | 20–600 mln PLN/rok | +10 |
| Przychody — dystrybutor / firma handlowa | >600 mln PLN/rok | +7 (bez sztywnego górnego limitu, ale dłuższy proces zakupowy i ryzyko struktur korporacyjnych) |
| Przychody — producent | 20–300 mln PLN/rok | +10 |
| Przychody — producent | >300 mln PLN/rok | +6 (rosnące ryzyko decyzji w "ładzie korporacyjnym" zamiast właścicielskim) |
| Wielkość firmy (przychody) | <20 mln PLN/rok | -5 (poniżej ICP) |
| Branża | Dystrybucja fashion / beauty / odzież / bielizna | +10 |
| Branża | Dystrybucja techniczna / przemysłowa / FMCG / spożywcza | +8 |
| Branża | Producent z własną dystrybucją B2B | +7 |
| Branża | Inna B2B (np. usługowa) | +3 |
| Branża | Czyste B2C / administracja / farmacja / uczelnie | -10 |
| Geografia | Polska, kapitał polski, decyzyjność w PL | +6 |
| Geografia | Polska, kapitał zagraniczny, decyzyjność w PL | +4 |
| Geografia | Decyzyjność za granicą | -5 |
| Typ działalności | Stałych klientów >100, transakcji >300/mies. | +8 |
| Typ działalności | Stałych klientów 30-100 | +4 |
| Typ działalności | <30 stałych klientów / dominacja jednorazowych transakcji | -5 |
| Zespół sprzedaży | 4+ osób + kierownik sprzedaży | +6 |
| Skala katalogowa | >30 000 produktów lub >10 000 klientów (wymaga pakietu Enterprise) | +3 (potencjał upsell) |
| Skala katalogowa | >1 000 produktów lub >2 000 klientów (wymaga min. Professional) | +2 |

### Zasada szacowania przy braku danych (wybrane kryteria demograficzne)

Dla dwóch kryteriów demograficznych — **"Typ działalności"** i **"Zespół sprzedaży"** — brak potwierdzonych danych w źródłach publicznych NIE oznacza automatycznie 0 pkt. Te dane rzadko są publikowane właśnie przez mniejsze, rodzinne hurtownie, czyli rdzeń ICP WiseB2B — twarde zero karałoby dokładnie te firmy, które najlepiej pasują profilem, tylko za to, że nie mają PR-u/danych online.

Jeśli research nie ustalił wartości wprost, ale są **konkretne sygnały pośrednie (proxy)** z tego samego researchu, przyznaj **połowę** standardowych punktów jako wynik **szacunkowy**:

| Kryterium | Proxy uzasadniający szacunek | Warunek szacunkowy | Punkty szacunkowe |
|-----------|-------------------------------|---------------------|--------------------|
| Typ działalności (>100 stałych klientów, >300 transakcji/mies.) | Liczba oddziałów, wiek firmy, model sprzedaży (hurt/dystrybucja vs projekty) | 3+ oddziały LUB firma na rynku 20+ lat, model czysto hurtowy z powtarzalną sprzedażą towarową (nie projektowy/ofertowy) | +4 (szacunkowo; połowa z +8) |
| Zespół sprzedaży (4+ osób + kierownik sprzedaży) | Liczba oddziałów, liczba nazwanych osób w dziale handlowym znalezionych na stronie www/LinkedIn | 3+ oddziały LUB zidentyfikowano min. 3 nazwane osoby w dziale handlowym | +3 (szacunkowo; połowa z +6) |

**Zasady stosowania:**
- Szacunek działa TYLKO w kierunku dodatnim — brak danych nigdy nie uzasadnia szacunkowego przyznania punktów ujemnych (np. -5 za "<30 stałych klientów"). Brak proxy = 0 pkt, tak jak dotychczas.
- Nie stosuj tej zasady do kryteriów bez sensownego proxy w danych z researchu (np. geografia decyzyjności, plany ekspansji) — tam brak danych nadal = 0 pkt.
- W rozbiciu score (sekcja 7 raportu) i w rejestrze oznacz wprost, że punkty są szacunkowe, np. `Typ działalności: +4 (szacunkowo — 3 oddziały, brak potwierdzonej liczby klientów)`.
- Zawsze dopisz oszacowane kryterium do listy "Do weryfikacji w discovery" — szacunek nie zwalnia z potwierdzenia realnej wartości przy pierwszym kontakcie.
- To pozostaje zgodne z zasadą "nie zmyślaj danych": szacunek opiera się na faktycznie znalezionych sygnałach (liczba oddziałów, wiek firmy, nazwiska ze strony www), nie na domysłach bez podstawy.

### Sygnały wzmacniające (max 30 pkt)

| Sygnał | Punkty |
|--------|--------|
| Korzysta z ERP wspieranego gotową integracją (Teneum, Comarch XL, Comarch Optima, eNova, Subiekt) | +8 |
| Korzysta z innego, uznanego ERP bez gotowej integracji (SAP, Oracle, IFS, Microsoft Dynamics, Axapta, Streamsoft, Asseco i inne) — brak gotowej integracji nie jest problemem, ważne że ERP istnieje i jest z czym integrować (dłuższy/droższy projekt integracyjny, nie bloker) | +4 |
| **Posiada e-commerce/B2B z niską adopcją** — platforma istnieje, ale <15% sprzedaży przechodzi przez nią (proxy przed discovery: portal widoczny, a firma nadal komunikuje/rekrutuje pod ręczne przyjmowanie zamówień mailem i telefonem) | +6 |
| **Wykryta zamknięta platforma konkurencyjna z ograniczeniami** (Comarch e-Sklep, Wapro B2B, Automico, Saly, inny portal doklejony do ERP) — gotowy hak migracyjny | +5 |
| Posiada obecną platformę B2B z oznakami zaniedbania (stare technologie, brak responsywności, brak AI, brak Panelu Handlowca) | +6 |
| **Brak jakiejkolwiek platformy e-commerce/B2B mimo odpowiedniej skali firmy** (strona czysto informacyjna/katalogowa, kontakt tylko telefon/e-mail, brak koszyka/logowania) — czysta szansa: prostszy pitch niż migracja z konkurenta, brak przyzwyczajenia klientów do innego systemu. Wymaga **potwierdzonego** braku (research wprost stwierdził brak sklepu/logowania), nie samego "nie udało się ustalić" — w tym drugim przypadku 0 pkt, nie zgadujemy | +6 |
| Plany ekspansji zagranicznej w 12 miesiącach (komunikaty, eventy, targi międzynarodowe) | +5 |
| Rosnąca skala (wzrost obrotu o 20%+ przez ostatnie 3 lata) | +4 |
| Rekrutacja na stanowiska eCommerce Manager / B2B Manager / Digital Sales / Head of Sales | +4 |
| Wymiana CTO / CIO / Dyrektora IT / CEO w ostatnich 6-12 miesiącach | +3 |
| Korzysta z dropshippingu / planuje uruchomienie | +3 |
| Komunikuje plany cyfryzacji sprzedaży B2B (wywiady, LinkedIn, konferencje) | +3 |
| Klienci otwarcie skarżą się na obecną platformę (Google reviews, social media) | +3 |
| Branża z naturalną wariantowością (fashion, electronics, narzędzia) | +2 |
| Aktywność konkurentów w branży (oni wdrożyli, nasz prospekt jeszcze nie) | +2 |
| Producent z własną dystrybucją B2B (zlecenia produkcyjne, konfigurator, limity kontraktowe) | +3 |

### Red flags (punkty ujemne, max -40 pkt)

| Red flag | Punkty |
|----------|--------|
| Mikrofirma poniżej progów ICP (<20 mln PLN, <30 stałych klientów) | -10 |
| Czyste B2C / administracja publiczna / uczelnia / farmacja regulowana | -10 |
| Firma usługowa / finansowa (brak katalogu produktów i powtarzalnej sprzedaży towarowej) | -8 |
| Korporacyjna struktura decyzyjna / brak decyzyjności właścicielskiej (formalne RFP, wielopoziomowe komitety) | -5 |
| Termin startu projektu >12 miesięcy / uzależnienie od dotacji UE | -6 |
| Brak ERP / "Excel jako ERP" — wymaga najpierw wdrożenia ERP | -8 |
| Wewnętrzny konflikt (IT vs Sprzedaż, brak konsensusu) | -5 |
| Dominacja kapitału zagranicznego z decyzyjnością poza PL | -5 |
| Świeżo po wdrożeniu konkurencyjnej platformy (<2 lata) | -10 |
| Komunikuje strategię "tylko Microsoft stack" / "tylko enterprise vendors" | -8 |
| Polityka "no SaaS" przy budżecie OPEX, ale niezdolność do CAPEX | -5 |
| Budżet poniżej minimum (<24 000 PLN/rok = pakiet Start) | -6 |
| Wcześniejsze niezadowolenie z dostawców IT, agresywna postawa zakupowa | -3 |
| Brak sponsora zarządczego (proces prowadzony tylko przez IT lub niskoszczeblowego managera) | -4 |

### Sygnały jakościowe (max 30 pkt, wymagają weryfikacji w discovery)

| Sygnał | Punkty | Źródło weryfikacji |
|--------|--------|--------------------|
| Budżet zatwierdzony lub w przygotowaniu na rok bieżący/następny | +8 | Discovery call z CFO / CEO |
| Sponsor (CEO / Właściciel / Dyrektor Sprzedaży) zaangażowany osobiście | +7 | Discovery call, kto bierze udział w rozmowie |
| Termin startu wdrożenia <6 miesięcy | +6 | Discovery call |
| Jasny cel biznesowy (np. wzrost sprzedaży online o X%, redukcja BOK o Y%, ekspansja na 3 nowe kraje) | +5 | Discovery call |
| Liczba interesariuszy w buying committee uporządkowana (CEO, CTO, Sprzedaż, COO, CFO) | +2 | Discovery call |
| Firma już ma doświadczenia w wdrożeniach IT (gotowa do partnerskiej współpracy) | +2 | Discovery call, referencje branżowe |

---

## Progi decyzyjne

| Score | Kategoria | Akcja |
|-------|-----------|-------|
| 60–100 | **HOT (A)** | Priorytetowy kontakt w 48h. Demo dopasowane do branży. Propozycja wizyty referencyjnej (VMP — fashion/beauty, Triplex — dystrybucja techniczna). CEO osobiście. |
| 45–59 | **WARM (B)** | Kontakt w 1-2 tygodnie. Materiały edukacyjne (case study VMP/Triplex, prezentacja). Pogłębione discovery call. Doprecyzowanie sygnałów jakościowych. |
| 30–44 | **NURTURE (C)** | Dodaj do nurturingu (newsletter, webinary, content marketingowy). Monitoruj sygnały (rekrutacje, komunikaty, zmiany w zarządzie). Rewizja kwartalna. |
| 0–29 | **REJECT (D)** | Odrzuć lub zaparkuj — nie inwestuj czasu sprzedażowego. Wyjątek: jeśli pojawi się trigger (np. nowy CTO), wracamy do oceny. |

Progi dopasowane do priorytetów `/prospect` (A = score>60, B = 40-60, C = 30-40, patrz `.claude/skills/prospect/skill.md`) — HOT=A i WARM=B pokrywają się teraz w przybliżeniu na tej samej granicy 60 pkt, mimo że to nadal dwie odrębne skale (fast-check pomija sygnały wzmacniające i jakościowe, deep-check liczy je w pełni).

---

## Do weryfikacji przed pełną kwalifikacją (discovery call)

- **Budżet projektu** — zatwierdzony / orientacyjny / brak; CAPEX vs OPEX; widełki kwotowe
- **Termin startu** — pilny (<3 mies.) / planowany (3-12 mies.) / nieokreślony
- **Sponsor** — kto? Zaangażowany osobiście czy delegował? Czy uczestniczy w rozmowach?
- **Cel biznesowy** — co konkretnie chce osiągnąć (wzrost online, redukcja BOK, ekspansja, AI, Panel Handlowca)?
- **Obecny stan** — jaka platforma, jakie problemy, jakie integracje, jaki wolumen
- **ERP** — który, w jakiej wersji, kto utrzymuje, czy mamy gotową integrację
- **Zespół** — wielkość zespołu sprzedaży, kierownik sprzedaży, zespół IT, zespół eCommerce
- **Klienci** — liczba stałych klientów B2B, średnia wartość zamówienia, liczba transakcji/mies.
- **Skala katalogowa** — liczba produktów/SKU i liczba klientów → dopasowanie pakietu (Start: do 1 000 prod. / 2 000 kl.; Professional: do 30 000 / 10 000; Enterprise: bez limitu)
- **Specyfika** — czy są negocjowane warunki indywidualne, sub-konta, miejsca odbioru, dropshipping, wielo-magazynowość, eksport
- **Doświadczenia z wdrożeniami IT** — pozytywne / negatywne / brak
- **Inne shortlist** — z kim jeszcze rozmawiają, na jakim etapie
- **Decision criteria** — co jest najważniejsze (cena, funkcje, technologia, referencje, SLA)
- **Decision timeline** — kiedy ma zapaść decyzja, kto podejmuje
- **Hosting** — preferencja SaaS vs OnPremise vs chmura publiczna
- **Compliance** — wymagania prawne, branżowe (GDPR, ISO, HACCP, GMP)

---

## Specyficzne kryteria dla programu Early Adopter Panelu Handlowca

| Kryterium | Warunek |
|-----------|---------|
| Typ firmy | Dystrybucyjna lub produkcyjna |
| Skala transakcji | Min. 300 transakcji miesięcznie |
| Zespół sprzedaży | Min. 4 osoby + kierownik sprzedaży |
| Baza klientów | Min. 100 stałych klientów |
| eCommerce | Posiada lub planuje uruchomienie systemu eCommerce |
| Otwartość na warsztaty | 40-50h zaangażowania szefa sprzedaży, 3-4 sesje × 6h + sesja zapoznawcza + dogrywki |
| Otwartość na kolaborację | Gotowość dzielenia się doświadczeniem w gronie niekonkurencyjnych firm |

**Korzyści dla Early Adopter:** dożywotni rabat 15% na opłatę SaaS, realny wpływ na finalny produkt, wymiana doświadczeń między dyrektorami sprzedaży.

**Limity:** 3-4 firmy, prace analityczne październik/listopad 2025. <!-- DO WERYFIKACJI: czy program jest jeszcze otwarty / czy wystartował / czy uczestnicy są już potwierdzeni -->
