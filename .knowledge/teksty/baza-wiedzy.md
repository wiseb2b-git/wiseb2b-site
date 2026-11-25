---
strona: baza-wiedzy
url: /baza-wiedzy/
figma: 160:3209
title: Baza wiedzy o platformie B2B i eCommerce B2B
description: Artykuły o eCommerce B2B dla firm handlowych i produkcyjnych: czym B2B różni się od B2C, jak wybrać platformę i co daje wdrożenie platformy B2B.
diagnoza: B. H1, kategorie i blok kontaktowy to tekst CEO ze strony z maja (= Figma); jedyne nowe zdanie to lead hero, którego nie było ani w maju, ani w Figmie.
rola_w_mapie: Brak osobnego wiersza w mapie §9. Strona zbiera artykuły, które prowadzą do Funkcji, Platformy i Zamów demo; ton „strona: spokojniej, konkret” (kontekst §11).
---

# baza-wiedzy: tekst do wdrożenia

## S1. Hero
- **Eyebrow:** Baza wiedzy
- **H1:** Baza wiedzy o platformie [[B2B]]
- **Lead:** Piszemy o tym, co widzimy we wdrożeniach: czym sprzedaż B2B online różni się od B2C, jak wybrać platformę i co zmienia się w firmie, gdy stali klienci zamawiają sami.
> Źródło: maj = Figma (H1 w tekście ramki; akcent na „B2B” jak w v4 i PM, gdzie „B2B” jest w osobnej linii). Lead nowy (sytuacja A dla tego gniazda): opisuje cztery artykuły, które są w kolekcji (eCommerce w modelu B2B, Dedykowana czy gotowa platforma, Jak wybrać platformę, Korzyści z wdrożenia). Jeśli ramka nie ma gniazda na lead, pomijamy go.

## S2. Filtry kategorii
- **Zakładki:** Wszystkie kategorie · Dystrybucja i handel · Funkcje · Korzyści
> Źródło: Figma = maj. Zmiana: „Dystrybucja i Handel” (maj, frontmatter artykułów) → „Dystrybucja i handel” jak w Figmie. Uwaga dla implementacji: frontmatter artykułów ma dziś „Dystrybucja i Handel”, więc filtr musi porównywać bez rozróżniania wielkości liter albo trzeba poprawić pole `category`.

## S3. Lista artykułów
- **Karta:** etykieta kategorii (wersaliki, np. FUNKCJE) · data (DD.MM.RRRR) · tytuł artykułu
- **Link karty:** cały kafel prowadzi do /baza-wiedzy/[slug]/
> Źródło: Figma (12 kart: kategoria 12/800, data, tytuł 18/700). Treść kart pochodzi z kolekcji `baza-wiedzy`, tu nie piszę tytułów artykułów.

## S4. Potrzebujesz szczegółowych informacji?
- **Tytuł:** Potrzebujesz szczegółowych informacji?
- **Tekst:** Doświadczenie i efekty naszej pracy pomagają nam tworzyć powyższe treści. Ale każdy biznes jest inny. Chętnie poznamy Twoje wyzwania i oczekiwania.
- **CTA:** Porozmawiaj → /zamow-demo/
> Źródło: Figma (tytuł, przycisk; tekst „Porozmawiaj z nami”), maj (tekst CEO: „Doświadczenie i efekty naszej pracy pomagają tworzyć nam powyższe treści. Ale każdy biznes jest inny. Chętnie poznamy Twoje wyzwania i oczekiwania.”). Zmiany: „pomagają tworzyć nam” → „pomagają nam tworzyć” (szyk). „Powyższe treści” CEO przywrócone przy redakcji: blok stoi pod listą artykułów, więc słowo pasuje. Tekst CEO zamiast Figmowego „Porozmawiaj z nami”, bo mówi, dlaczego warto rozmawiać; jeśli gniazdo ma być jednym zdaniem, zostaje „Porozmawiaj z nami”.

## S5. Newsletter
- **Tytuł:** Bądź na bieżąco z nowościami eCommerce i WiseB2B
- **Pole:** E-mail...
- **Zgoda:** Akceptuję politykę prywatności i regulamin *
- **Przycisk:** Zapisz się
> Źródło: Figma, bez zmian.

## Otwarte kwestie
- [NEED] Strona z maja miała wyróżniony artykuł nad listą (pierwszy z kolekcji, z opisem). Figma go nie ma. Jeśli CEO chce go zachować, opis bierzemy z pola `description` artykułu.
- [NEED] W kolekcji są 4 artykuły, Figma projektuje 12 kart. Przy tak krótkiej liście filtry kategorii mają po 1–2 pozycje; warto zaplanować kolejne tematy (np. migracja z portalu doklejonego do ERP, Panel Handlowca, Agent AI w obsłudze zamówień).
