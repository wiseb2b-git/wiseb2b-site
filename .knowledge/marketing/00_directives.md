# Dyrektywy marki dla skilli — WiseB2B

> Reguły specyficzne marki wiseb2b stosowane przez skille report-deep, detect-b2b i prospect.

## Weryfikacje specjalistyczne (dla report-deep Krok 3c)

| Skill | Kiedy uruchomić | Co zasila |
|-------|-----------------|-----------|
| detect-b2b | **ZAWSZE** przy deep researchu (chyba że rejestr ma wynik młodszy niż 90 dni) | Sygnały scoringu z 07: "posiada e-commerce/B2B z niską adopcją" (+6), "wykryta zamknięta platforma konkurencyjna" (+5), red flag "świeżo po wdrożeniu konkurencyjnej platformy" (-10); pola rejestru `platform_*`; sekcja 4B raportu; pole `vp_hook` |
| find-contacts | **ZAWSZE** przy deep researchu prospekta (chyba że rejestr ma `contact_check_date` młodszy niż 90 dni — wtedy użyj pól `contact_*` z rejestru). Wywołuj przez Skill tool i POCZEKAJ na wynik — komplet kontaktów MUSI trafić do raportu | Sekcja 4 raportu (telefon centrali, wzorzec e-mail, tabela osób z telefonami/LinkedIn/pewnością), pola rejestru `contact_*` |

## Własne produkty marki (dla detect-b2b)

| Produkt marki | Identyfikator sygnatury w scripts/platform_signatures.json |
|---------------|-------------------------------------------------------------|
| WiseB2B Commerce Platform | `wiseb2b` |

Wykrycie tej platformy u prospekta = firma jest klientem WiseB2B (bezpośrednim lub przez partnera): NIE prospectować, zgłosić w wyniku i zapisać w rejestrze `status=client`.

## Klasyfikacja szansy per wynik detekcji platformy (dla detect-b2b Krok 4)

Haki do rozmowy: tabela "Haki migracyjne per wykryta platforma" w `wiseb2b/02_value_propositions.md`; argumentacja per konkurent: `wiseb2b/06_objections_and_competition.md` (sekcja "Polskie platformy B2B — mapa konkurencji").

| Wynik detekcji | Klasa szansy | Hak / uzasadnienie |
|----------------|--------------|--------------------|
| Comarch e-Sklep / Comarch B2B / Wapro B2B (portal doklejony do ERP) | **LEAD MIGRACYJNY (gorący)** | Pierwszy krok cyfryzacji zrobiony, adopcja niska; "ERP zostaje — wymieniasz tylko warstwę sprzedażową" |
| Inny zamknięty SaaS (ONe, cStore, AtomStore, IdoSell, Saly, Automico, inTradus, Shoper, Sky-Shop, RedCart...) | **LEAD MIGRACYJNY** | Ograniczenia SaaS + vendor lock; talk track w 06 przy sekcji danego konkurenta |
| Dedyk (custom) ze stackiem LEGACY (PHP 5/7, jQuery 1.x, WebForms) | **LEAD MODERNIZACYJNY** | Koszt utrzymania platformy, której nikt nie rozwija; Bezpieczna Migracja |
| Magento / PrestaShop / open source rozbudowywany pod B2B | **LEAD TCO** | Koszt ciągłej rozbudowy B2C→B2B vs komplet funkcji B2B-first w standardzie |
| Brak platformy, firma o profilu B2B | **GREENFIELD** | Sprzedaż mailowa → samoobsługa 24/7; "handlowcy niech sprzedają, zamiast przepisywać maile" |
| Nowoczesna platforma, świeże wdrożenie (<2 lata, brak sygnałów bólu) | **ZŁY TIMING** | Red flag -10 w scoringu; nurturing, rewizja za 12 mies. |
| `unknown` (strona nie działa / anty-bot) | **NIE OKREŚLONO** | Zweryfikować ręcznie lub w discovery |

## Inne dyrektywy

- W EXTRA_QUERIES do data-deep zawsze uwzględnij: "Jaki system ERP?" (gotowe integracje: Teneum, Comarch XL, Comarch Optima, eNova, Subiekt — sygnał +8; SAP/Oracle/IFS/Dynamics — red flag -8), "Ile osób w dziale sprzedaży?", "Czy firma ma e-commerce i jaki udział sprzedaży przez niego przechodzi?".
- `vp_hook` i `pain_hypothesis` w rejestrze pisz językiem cold callu, spójnie z hasłami z `02_value_propositions.md` (sekcja "Język korzyści").
