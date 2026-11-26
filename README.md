# Oefenlab Nederlands M4 – Periode 2 (SE612 & SE613)

Een oefenwebsite voor **Nederlands MAVO 4, periode 2**, gebaseerd op de studieplanner en de uitlegles:
- **SE612 – Kijk- en luistertoets** (Cito, in Woots, 25%): tekstbegrip, kritisch kijken & luisteren, fictie
- **SE613 – Spreken** (groepsdiscussie, 25%): stellingen, argumenten, discussievaardigheden, gespreksleider
- **Taalgebruik** (versterkingsles): spellen, formuleren en interpunctie

## Waarom werkt deze manier van oefenen?

De site is gebouwd rond vier principes uit leerwetenschap:

1. **Actief ophalen (retrieval practice)** – je haalt antwoorden uit je hoofd in plaats van te herlezen.
2. **Meteen feedback** – na elke vraag zie je direct of het goed was én waarom.
3. **Spaced repetition** – vragen die je fout doet komen snel terug, vragen die je goed doet pas na 1, 3, 7, 14 en 30 dagen (Leitner-systeem). De module *Herhaling* op de homepage laat zien wat er klaar staat.
4. **Toetsmodus (exam conditie)** – oefenen zonder meteen feedback en met aftelbare klok, net als de echte KLT.

Daarnaast: flashcards met hetzelfde herhalingssysteem, een mix-oefening (interleaving) die vragen uit alle modules door elkaar gooit, een voorbereidingschecklist voor de discussie en de deadlines uit de studieplanner.

## Modules en inhoud

| Module | Inhoud |
| --- | --- |
| Tekstbegrip | 3 oefenteksten (nieuwsbericht, persbericht, column) + strategiequiz |
| Kritisch kijken & luisteren | Feit-vs-mening sorteeropdracht, bronnen beoordelen, luisteroefening met voorleesstem (Web Speech API) |
| Fictie | 2 verhalende fragmenten + begrippenquiz (verteller, motief, beeldspraak, ...) |
| Spreken & discussie | Stellingen beoordelen, argumenten voor/tegen, inleiding op volgorde zetten, reacties geven, gespreksleider-taken, checklist + deadlines |
| Taalgebruik | d/t-werkwoorden (invulvragen), spelfouten spotten, interpunctie, verzorgd formuleren |

## Techniek

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui**
- Voortgang (XP, streak, herhalingsplanning, checklist) wordt lokaal in de browser opgeslagen via `zustand/persist` – geen account of database nodig
- Luisteroefeningen gebruiken de Web Speech API (`speechSynthesis`) met een Nederlandse stem als die beschikbaar is

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # productie-build
npm run lint     # eslint
```

## Deployen op Vercel

De site heeft geen database en geen environment variables.

1. Push/forke deze repository op GitHub.
2. Ga naar [vercel.com/new](https://vercel.com/new) en importeer de repository.
3. Klik op **Deploy** – Vercel herkent Next.js automatisch.

## Verwijzingen

- Oefen ook met de echte (oude) KLT-toetsen op [www.woots.nl](https://www.woots.nl) – log in met je Entrée-gegevens.
- Neem naar de toets mee: opgeladen Chromebook, oplader en **oortjes met snoer**.
