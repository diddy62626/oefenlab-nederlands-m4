import type { Module } from "../types";

export const kritisch: Module = {
  id: "kritisch",
  title: "Kritisch kijken & luisteren",
  short: "Kritisch",
  subtitle: "Ontdek feiten, meningen, trucjes en betrouwbaarheid van bronnen.",
  icon: "eye",
  accent: "rose",
  examInfo: [
    "Onderdeel van SE612: Kijk- en luistertoets (Cito, in Woots) – 25% van je SE-cijfer.",
    "Je krijgt een kort fragment te zien en beantwoordt daarna één of meer vragen.",
    "De vraag is vaak: klopt dit, wie zegt het en waarom zegt diegene het?",
    "Op deze site oefen je luisteren met een voorleesstem; op de echte toets hoor je een video.",
  ],
  theory: [
    {
      title: "Feit of mening?",
      bullets: [
        "Feit: controleerbaar, bijv. 'Er gingen vorig jaar 4,3 miljoen vakantiegangers op schiphol van boord'. Je kunt het nazoeken.",
        "Mening: waardeoordeel of voorkeur, bijv. 'Vliegen is slecht voor het klimaat en zou veel duurder moeten'. Let op woorden als 'vind', 'zou moeten', 'slecht', 'het beste'.",
        "Pas op: een feit kan IN een mening zitten ('Uit cijfers blijkt dat jongeren 3 uur per dag op hun telefoon zitten – dat is te veel'). Het cijfer is feit, 'te veel' is mening.",
        "Cijfers klinken betrouwbaar, maar check altijd: waar komen ze vandaan en wie heeft ze laten meten?",
      ],
    },
    {
      title: "Is de bron betrouwbaar?",
      bullets: [
        "Vraag 1 – Wie zegt het? Is het een deskundige, een betrokkene (met belang) of gewoon iemand met een mening?",
        "Vraag 2 – Waarom zegt diegene het? Verkoop iemand iets? Wil iemand stemmen winnen? Dan kan de informatie gekleurd zijn.",
        "Vraag 3 – Hoe weet diegene het? Er is een onderzoek met bronvermelding, of alleen 'iedereen weet toch dat...'.",
        "Belangenverstrengeling betekent niet dat iemand ligt, maar je moet extra opletten.",
      ],
    },
    {
      title: "Bekende trucjes (ook in reclame en sociale media)",
      bullets: [
        "Emotieargument: je laten bang maken of dromen ('Denk aan je kinderen!').",
        "Expertargument: een dokter of professor zegt iets – check of het echt een expert op DIT gebied is.",
        "Bandwagon: 'Iedereen doet het al, jij nog?' – druk via de groep.",
        "Anekdotisch bewijs: één verhaal als 'bewijs' voor een algemene regel.",
        "Generalisatie: 'Jongeren zijn altijd...' – één groep over één kam scheuren.",
      ],
    },
  ],
  sets: [
    {
      id: "kr-s1",
      title: "Feit of mening?",
      description: "Wijs elke uitspraak toe aan de juiste categorie.",
      questions: [
        {
          id: "kr-s1-q1",
          type: "sort",
          prompt:
            "Stelling bij de oefening: 'Telefoons horen niet in de klas.' Wijs elke uitspraak toe aan Feit of aan Mening.",
          buckets: ["Feit", "Mening"],
          items: [
            {
              text: "Er bestaat sinds 2024 een landelijk beleid dat telefoons uit de klas moet houden.",
              bucket: 0,
            },
            { text: "Telefoons in de les zijn een ramp.", bucket: 1 },
            {
              text: "Uit een enquête onder 500 docenten gaf 62% aan dat de klassen rustiger werden.",
              bucket: 0,
            },
            { text: "TikTok is het slechtste wat jongeren is overkomen.", bucket: 1 },
            {
              text: "Meer dan de helft van de scholieren fietst op een gewone schooldag naar school.",
              bucket: 0,
            },
            { text: "Iedereen leert beter zonder telefoon in de buurt.", bucket: 1 },
            { text: "De school introduceerde vorig jaar het kluisjessysteem.", bucket: 0 },
            { text: "Spelletjes op je telefoon zijn zonde van je tijd.", bucket: 1 },
          ],
          explanation:
            "Feiten zijn controleerbaar (beleid, cijfers, gebeurtenissen). Woorden als 'ramp', 'slechtste', 'zonde' en 'iedereen' verraden een mening.",
        },
      ],
    },
    {
      id: "kr-s2",
      title: "Bronnen beoordelen",
      description: "Wie kun je geloven, en waarom (niet)?",
      questions: [
        {
          id: "kr-s2-q1",
          type: "mcq",
          prompt:
            "Je zoekt betrouwbare cijfers over hoeveel uur jongeren per dag achter een scherm zitten. Welke bron kies je?",
          options: [
            "Een influencer die over gezond leven praat",
            "Een onderzoeksbureau dat zijn rapport openbaar maakt",
            "De maker van een app die schermtijd beperkt",
            "Een anonieme discussiegroep op internet",
          ],
          correctIndex: 1,
          explanation:
            "Een onderzoeksbureau met openbaar rapport werkt methodisch en is controleerbaar. De influencer en de appmaker hebben belangen; een forum is geen controleerbare bron.",
        },
        {
          id: "kr-s2-q2",
          type: "mcq",
          prompt:
            "Een bekend tv-gezicht zegt in een commercial: 'Dit tandpasta werkt écht.' Wat is de zwakke plek?",
          options: [
            "Tv-gezichten mogen nooit in reclames voorkomen",
            "Er is geen bewijs, alleen een bekend persoon die er (waarschijnlijk) voor betaald wordt",
            "Tandpasta kan nooit werken",
            "Niets: bekendheid is bewijs",
          ],
          correctIndex: 1,
          explanation:
            "Dit is beroep op bekendheid: geen onderzoek, geen cijfers, en de persoon wordt betaald. Dat maakt de uitspraak zwak bewijs.",
        },
        {
          id: "kr-s2-q3",
          type: "mcq",
          prompt:
            "Een website over energie blijkt gefinancierd te worden door een oliemaatschappij. Wat betekent dat?",
          options: [
            "Alles op de site is automatisch fout",
            "Je moet extra opletten: de site kan gekleurde informatie geven (belangenverstrengeling)",
            "De site is officieel onbetrouwbaar en verboden",
            "Niets, geld heeft geen invloed op inhoud",
          ],
          correctIndex: 1,
          explanation:
            "Financiering betekent niet dat alles fout is, maar de bron heeft belang. Vergelijk altijd met onafhankelijke bronnen.",
        },
        {
          id: "kr-s2-q4",
          type: "mcq",
          prompt: "'9 van de 10 mensen gebruiken dit product.' Wat voor truc is dit vooral?",
          options: [
            "Expertargument",
            "Emotieargument",
            "Bandwagon: je moet meedoen omdat de groep al meedoet",
            "Anekdotisch bewijs",
          ],
          correctIndex: 2,
          explanation:
            "Je wordt onder druk gezet via de groep ('bijna iedereen doet het'). Bovendien is dit cijfer vaak niet te controleren.",
        },
        {
          id: "kr-s2-q5",
          type: "mcq",
          prompt:
            "Een artikel beweert: 'Een groot deel van de jongeren slaapt slecht door sociale media.' Er staat geen bron bij. Wat mist er vooral?",
          options: [
            "Alinea's",
            "Cijfers en de herkomst ervan (bronvermelding)",
            "Hoofdletters",
            "Een conclusie",
          ],
          correctIndex: 1,
          explanation:
            "'Een groot deel' is vaag: hoeveel is dat, en wie heeft dat gemeten? Zonder bron kun je de bewering niet controleren.",
        },
        {
          id: "kr-s2-q6",
          type: "mcq",
          prompt:
            "Iemand redeneert: 'Mijn opa rookte zijn hele leven en werd 95, dus roken is niet schadelijk.' Wat is hier mis met dit bewijs?",
          options: [
            "Niets, opa's zeggen altijd de waarheid",
            "Eén persoonlijk verhaal is geen bewijs voor een algemene regel (anekdotisch bewijs)",
            "Roken is nooit onderzocht",
            "Je mag nooit over familie praten in een discussie",
          ],
          correctIndex: 1,
          explanation:
            "Eén geval (zelfs een opvallende) weerlegt geen grote onderzoeken. Dit heet anekdotisch bewijs.",
        },
      ],
    },
    {
      id: "kr-s3",
      title: "Luisteroefening: het radionieuwsbericht",
      description:
        "Luister naar het korte bericht (voorstem) en beantwoord de vragen. Je mag het bericht opnieuw afspelen.",
      questions: [
        {
          id: "kr-s3-q1",
          type: "mcq",
          prompt: "Luister opnieuw en let op de woordkeus. Wat is de kern van het bericht?",
          options: [
            "De gemeenteraad heeft besloten dat scholen later mogen beginnen op één proeflocatie.",
            "Alle scholen in het land beginnen voortaan later.",
            "De burgemeester verbiedt vroege schooldagen voorgoed.",
            "Er wordt nog helemaal niets besloten over schooltijden.",
          ],
          correctIndex: 0,
          explanation:
            "Het bericht gaat over één proef met latere starttijden, besloten door de gemeenteraad. 'Alle scholen' of 'voorgoed' staat er niet in.",
        },
        {
          id: "kr-s3-q2",
          type: "mcq",
          prompt:
            "Met welke woorden laat de presentator zijn eigen voorkeur doorschemeren?",
          options: [
            "Met neutrale feiten zoals 'de raad stemde gisteren'",
            "Met woorden als 'eindelijk', 'slim besluit' en 'gelukkig'",
            "Met de naam van de raadsleden",
            "Met de openingstijden van de school",
          ],
          correctIndex: 1,
          explanation:
            "'Eindelijk', 'slim' en 'gelukkig' zijn waardeoordelen. Een neutrale presentator zou die weglaten.",
        },
        {
          id: "kr-s3-q3",
          type: "mcq",
          prompt: "Welke uitspraak uit het bericht is een feit?",
          options: [
            "'Een slim besluit.'",
            "'De raad stemde gisteren met 21 tegen 8 vóór de proef.'",
            "'Dat was eindelijk eens goed nieuws.'",
            "'Gelukkig denken de docenten er zo over.'",
          ],
          correctIndex: 1,
          explanation:
            "De stemverhouding 21 tegen 8 is controleerbaar. De rest zijn oordelen van de presentator.",
        },
        {
          id: "kr-s3-q4",
          type: "mcq",
          prompt: "Is dit bericht neutraal te noemen?",
          options: [
            "Ja, er zitten alleen feiten in",
            "Nee, de presentator kleurt met zijn woordkeus en toon",
            "Ja, want het is een nieuwsuitzending",
            "Nee, want er staat geen enkele feit in",
          ],
          correctIndex: 1,
          explanation:
            "Er staan wél feiten in, maar de presentator mengt er meningen tussen. Dat maakt het bericht niet neutraal.",
        },
        {
          id: "kr-s3-q5",
          type: "mcq",
          prompt: "Wat zou een neutrale nieuwslezer anders doen?",
          options: [
            "Geen cijfers noemen",
            "Alleen meningen van tegenstanders geven",
            "Feiten melden en oordelen zoals 'slim' en 'eindelijk' weglaten",
            "Het bericht niet uitzenden",
          ],
          correctIndex: 2,
          explanation:
            "Neutraliteit betekent: feiten en standpunten van beide kanten geven, zonder eigen oordeel erbij te gooien.",
        },
      ],
    },
  ],
  exams: [
    {
      id: "kr-ex1",
      title: "Toetsmodus: Kritisch kijken & luisteren",
      description:
        "11 vragen uit deze module, feedback pas na afloop. Speel bij de luistervragen eerst het fragment af.",
      minutes: 10,
      questions: [],
    },
  ],
  flashcards: [
    {
      id: "kr-fc1",
      front: "Feit",
      back: "Controleerbare mededeling. Je kunt nazoeken of het klopt.",
      example: "Er gingen vorig jaar 4,3 miljoen reizigers op Schiphol van boord.",
    },
    {
      id: "kr-fc2",
      front: "Mening",
      back: "Waardeoordeel of voorkeur. Niet controleerbaar; je kunt het wel of niet met iemand eens zijn.",
      example: "Vliegen zou veel duurder moeten worden.",
    },
    {
      id: "kr-fc3",
      front: "Generalisatie",
      back: "Een hele groep over één kam scheuren op basis van enkele voorbeelden.",
      example: "Jongeren zijn altijd op hun telefoon.",
    },
    {
      id: "kr-fc4",
      front: "Anekdotisch bewijs",
      back: "Eén persoonlijk verhaal gebruiken als bewijs voor een algemene regel.",
      example: "Mijn opa rookte en werd 95, dus roken is niet schadelijk.",
    },
    {
      id: "kr-fc5",
      front: "Bandwagon",
      back: "Reclame- of overtuigingstruc: 'iedereen doet het, doe jij ook mee.'",
      example: "9 van de 10 mensen gebruiken dit product.",
    },
    {
      id: "kr-fc6",
      front: "Expertargument",
      back: "Beroep op een deskundige. Check of die expert is op precies DIT onderwerp en of die wordt betaald.",
      example: "Een tandarts zegt dat deze tandpasta werkt – bij een tandpastabedrijf in dienst.",
    },
    {
      id: "kr-fc7",
      front: "Emotieargument",
      back: "Angst, schuldgevoel of verlangen opwekken in plaats van argumenten geven.",
      example: "Denk aan de toekomst van je kinderen!",
    },
    {
      id: "kr-fc8",
      front: "Belangenverstrengeling",
      back: "De bron heeft er zelf voordeel bij als je de boodschap gelooft. Niet automatisch fout, maar extra kritisch lezen!",
      example: "Een site over energie die door een oliemaatschappij wordt betaald.",
    },
    {
      id: "kr-fc9",
      front: "Betrouwbare bron",
      back: "Deskundig, onafhankelijk en controleerbaar. Denk aan onderzoeksbureaus met openbare rapporten.",
      example: "CBS of een universiteit met een publiceerde studie.",
    },
    {
      id: "kr-fc10",
      front: "Kleuren (voorkeur doorschemeren)",
      back: "De maker kiest bewust woorden die zijn eigen mening erin leggen, terwijl het 'nieuws' lijkt.",
      example: "'Eindelijk een slim besluit' in een nieuwsbericht.",
    },
  ],
  listeningText:
    "Goedemorgen, hier volgt een kort bericht. De gemeenteraad stemde gisteren met 21 stemmen voor en 8 stemmen tegen in met een proef: op één scholengemeenschap mogen de lessen vanaf januari een uur later beginnen. Volgens de voorzitter van de raad is dit eindelijk eens een slim besluit, want uit onderzoek blijkt dat tieners 's ochtends beter kunnen uitslapen. Gelukkig reageerden ook de meeste docenten positief, al vreest een deel van de ouders dat sportclubs na schooltijd in de knel komen. De proef duurt een jaar; daarna wordt het resultaat opnieuw voorgelegd aan de raad.",
};
