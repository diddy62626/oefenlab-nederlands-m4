import type { Module } from "../types";

export const discussie: Module = {
  id: "discussie",
  title: "Spreken & discussie",
  short: "Spreken",
  subtitle: "Stellingen, argumenten en discussievaardigheden voor SE613.",
  icon: "messages",
  accent: "teal",
  examInfo: [
    "SE613: Spreken – groepsdiscussie met 5 leerlingen, 25% van je SE-cijfer.",
    "Elke leerling heeft een eigen, actueel onderwerp met een stelling en is één keer gespreksleider.",
    "Per onderwerp: inleiding ±1,5 minuut, discussie ±7 minuten, daarna de afsluiting.",
    "Doel: actief deelnemen en inhoudelijk reageren, niet 'winnen'. Beoordeling door twee docenten Nederlands.",
    "Ook je deelname aan de discussies van anderen wordt beoordeeld!",
  ],
  theory: [
    {
      title: "Wat is een goede stelling?",
      bullets: [
        "Een stelling is een bewering waarmee je het wel of niet eens kunt zijn. Geen vraag!",
        "De stelling is scherp genoeg voor echte discussie: er zijn goede argumenten voor én tegen.",
        "Het onderwerp is actueel en groot genoeg, maar wel begrensd.",
        "Formuleer kort en duidelijk: 'De school moet...', 'Er moet een verbod komen op...', 'X is beter dan Y.'",
        "Voorbeelden van zwak: een feit ('Er rijden veel fietsen op school') of een vraag ('Vinden jullie telefoons erg?').",
      ],
    },
    {
      title: "Voorbereiding (zoals de docent verwacht)",
      bullets: [
        "Kies een onderwerp en formuleer een stelling.",
        "Zoek vier artikelen: 2 vóór en 2 tegen je stelling, uit betrouwbare bronnen.",
        "Noteer bij elk artikel de bronvermelding (auteur, website, datum).",
        "Maak een inleiding van ±1,5 minuut en een afsluiting.",
        "Noteer je argumenten op een argumentenkaart: standpunt – argument – onderbouwing (voorbeeld, cijfer, ervaring).",
        "Oefen met je groep, verdeel voor/tegen en geef elkaar feedback.",
        "Print de goedgekeurde artikelen: 1 keer voor de docent en 5 keer voor het groepje.",
      ],
    },
    {
      title: "De discussie: drie delen",
      bullets: [
        "1. Inleiding (±1,5 min): introduceer je onderwerp, geef achtergrond en noem je stelling. Zorg dat het vangt.",
        "2. Discussie (±7 min): reageer inhoudelijk op elkaar. Iedereen komt aan het woord; als dat niet lukt, grijpt de gespreksleider in.",
        "3. Afsluiting: rond je onderwerp af met een samenvatting of je gewijzigde mening, eventueel met een uitsmijter.",
        "Als gespreksleider: laat iedereen aan het woord, stel doorverwijsvragen en geef zelf ook inhoudelijk reacties.",
      ],
    },
    {
      title: "Inhoudelijk reageren: zo klink je volwassen",
      bullets: [
        "Vraag om toelichting: 'Kun je dat uitleggen met een voorbeeld?'",
        "Nuanceer: 'Je hebt gelijk dat..., maar het nadeel is...'",
        "Geef een tegenvoorbeeld of cijfer dat het tegendeel laat zien.",
        "Vraag naar de bron: 'Waar komt dat getal vandaan?'",
        "Erkén en ga verder: 'Dat is een sterk punt. Toch blijkt uit...'",
        "Niet doen: 'jij snapt er niks van', een andere discussie starten, of stil blijven bij de kant.",
      ],
    },
  ],
  sets: [
    {
      id: "di-s1",
      title: "Is dit een goede stelling?",
      description: "Beoordeel of je hier goed mee kunt discussiëren.",
      questions: [
        {
          id: "di-s1-q1",
          type: "mcq",
          prompt: "Welke stelling is het meest geschikt voor een discussie?",
          options: [
            "Moeten scholen later beginnen?",
            "De schooldag moet op alle middelbare scholen pas om 9.00 uur beginnen.",
            "Er rijden veel bussen naar scholen.",
            "Ik vind school soms leuk.",
          ],
          correctIndex: 1,
          explanation:
            "Optie 2 is een bewering met duidelijk standpunt waar argumenten voor én tegen bestaan. Optie 1 is een vraag, optie 3 een feit, optie 4 te vaag.",
        },
        {
          id: "di-s1-q2",
          type: "mcq",
          prompt: "Waarom is 'Er wonen meer dan 17 miljoen mensen in Nederland' een zwakke stelling?",
          options: [
            "Het is te kort",
            "Het is een controleerbaar feit: er valt weinig voor of tegen te zeggen",
            "Het klopt niet",
            "Het gaat niet over school",
          ],
          correctIndex: 1,
          explanation:
            "Een stelling moet discussie mogelijk maken. Bij een feit dat je kunt nazoeken, is er geen echte discussie.",
        },
        {
          id: "di-s1-q3",
          type: "mcq",
          prompt: "Welke stelling hoort hier niet thuis in een discussie?",
          options: [
            "Huiswerk moet afgeschaft worden.",
            "Sport op school moet verplicht blijven.",
            "Wat vinden jullie eigenlijk van huiswerk?",
            "Elke leerling moet een uur per dag sporten.",
          ],
          correctIndex: 2,
          explanation:
            "Dit is een vraag aan de groep, geen bewering. Een stelling formuleer je als zin waarmee je het wel of niet eens kunt zijn.",
        },
        {
          id: "di-s1-q4",
          type: "mcq",
          prompt: "Je stelling is: 'Telefoons moeten in de les in kluisjes.' Welke twee kanten horen bij deze stelling?",
          options: [
            "Voor: beter leren. Tegen: leerlingen voelen zich niet vrij.",
            "Voor: kluisjes zijn mooi. Tegen: kluisjes zijn duur.",
            "Voor: telefoons zijn slecht. Tegen: telefoons zijn goed.",
            "Er bestaan geen tegenargumenten.",
          ],
          correctIndex: 0,
          explanation:
            "Bij een goede stelling bestaan er aan beide kanten inhoudelijke argumenten met een echte afweging.",
        },
        {
          id: "di-s1-q5",
          type: "mcq",
          prompt: "Wat maakt een onderwerp 'actueel'?",
          options: [
            "Dat het over iets gaat wat nu speelt of nieuws is",
            "Dat het vroeger ook al gebeurde",
            "Dat het over de toekomst gaat",
            "Dat de docent het leuk vindt",
          ],
          correctIndex: 0,
          explanation:
            "Actueel = nu actueel in het nieuws of in het debat, bijvoorbeeld over AI op school, fietsen in de stad of sociale media.",
        },
        {
          id: "di-s1-q6",
          type: "mcq",
          prompt: "Je stelling 'Sporten is gezond' wordt afgekeurd door de docent. Waarom?",
          options: [
            "Sporten is niet gezond",
            "Bijna niemand kan er iets tegenin brengen: er is geen echte discussie mogelijk",
            "Het onderwerp is te actueel",
            "De stelling is te lang",
          ],
          correctIndex: 1,
          explanation:
            "Vrijwel iedereen is het hiermee eens. Kies een stelling met een echte afweging, bijv. 'Sporten moet verplicht worden op elke schooldag.'",
        },
      ],
    },
    {
      id: "di-s2",
      title: "Argumenten sorteren: voor of tegen?",
      description:
        "Bij de stelling 'Scholieren moeten één dag per week thuiswerken (huiswerkklasje thuis)' – wijs elk argument toe.",
      questions: [
        {
          id: "di-s2-q1",
          type: "sort",
          prompt:
            "Stelling: 'Scholieren moeten één dag per week thuis aan hun huiswerk mogen werken.' Wijs elk argument toe aan Vóór of Tegen.",
          buckets: ["Vóór", "Tegen"],
          items: [
            { text: "Thuis kun je beter concentreren dan in een vol klaslokaal.", bucket: 0 },
            { text: "Zonder docent in de buurt stoppen zwakke leerlingen sneller met werken.", bucket: 1 },
            { text: "Je traint zelfstandigheid, wat je later op studie nodig hebt.", bucket: 0 },
            { text: "Niet iedereen heeft thuis een rustige werkplek of goede internetverbinding.", bucket: 1 },
            { text: "Er gaat reistijd vrij die je aan huiswerk of sport kunt besteden.", bucket: 0 },
            { text: "Docenten kunnen moeilijker zien wie vastloopt en hulp nodig heeft.", bucket: 1 },
            { text: "Leerlingen met een bijbaan kunnen hun dag beter indelen.", bucket: 0 },
            { text: "Sociale contacten en groepswerken krijgen minder ruimte.", bucket: 1 },
          ],
          explanation:
            "Vóór-argumenten wijzen op concentratie, zelfstandigheid en tijdwinst. Tegen-argumenten wijzen op begeleiding, gelijke kansen en sociaal leren.",
        },
      ],
    },
    {
      id: "di-s3",
      title: "De perfecte inleiding: zet de volgorde goed",
      description: "Klik de onderdelen in de juiste volgorde.",
      questions: [
        {
          id: "di-s3-q1",
          type: "order",
          prompt: "Zet de onderdelen van een goede inleiding in de juiste volgorde (±1,5 minuut).",
          items: [
            "Aandachtstrekkertje: een verrassend feit, vraag of korte anecdote",
            "Onderwerp benoemen en korte achtergrond geven (waarom is dit actueel?)",
            "Je stelling duidelijk uitspreken",
            "Aangeven dat jij gespreksleider bent en kort de regels van het spel geven",
          ],
          explanation:
            "Eerst je publiek vangen, dan het onderwerp en de actualiteit, dan je stelling, en pas daarna de afspraken als gespreksleider. Zo luistert de groep eerst.",
        },
        {
          id: "di-s3-q2",
          type: "order",
          prompt: "Zet de drie delen van de discussieronde in de juiste volgorde met hun inhoud.",
          items: [
            "Inleiding: onderwerp + stelling (±1,5 min)",
            "Discussie: inhoudelijk reageren, iedereen aan het woord (±7 min)",
            "Afsluiting: samenvatting of gewijzigde mening, eventueel met een uitsmijter",
          ],
          explanation:
            "Volgens de opdracht: inleiding van ±1,5 minuut, daarna ±7 minuten discussie, en als laatste de afsluiting.",
        },
      ],
    },
    {
      id: "di-s4",
      title: "Welke reactie past?",
      description: "Kies in elke situatie de beste inhoudelijke reactie.",
      questions: [
        {
          id: "di-s4-q1",
          type: "mcq",
          prompt: "Iemand zegt: 'Dat bewijs je helemaal niet.' Wat is een goede reactie?",
          options: [
            "'Jij snapt er niks van.'",
            "'Ik leg het graag uit: mijn punt is dat... Heb je daar een tegenvoorbeeld bij?'",
            "Zwijgen en verder kijken",
            "'Dat had je eerder moeten zeggen.'",
          ],
          correctIndex: 1,
          explanation:
            "Je blijft zakelijk, herhaalt je punt en nodigt uit tot inhoud. Persoonlijke aanvallen of zwijgen beoordeelt de docent negatief.",
        },
        {
          id: "di-s4-q2",
          type: "mcq",
          prompt: "Iemand geeft een sterk argument dat je eigenlijk overtuigt. Wat doe je?",
          options: [
            "Alsof je niets hoorde, gewoon je oude punt herhalen",
            "'Je hebt gelijk dat... Toch denk ik dat...' – erkennen en nuanceren",
            "Direct je stelling opgeven",
            "Lachen en het onderwerp wisselen",
          ],
          correctIndex: 1,
          explanation:
            "Erkennen + nuanceren ('Dat is een sterk punt. Toch...') laat zien dat je inhoudelijk meebeweegt met de discussie.",
        },
        {
          id: "di-s4-q3",
          type: "mcq",
          prompt: "Iemand roept: 'Iedereen weet toch dat sporten beter is dan gamen.' Wat is een slimme inhoudelijke reactie?",
          options: [
            "'Klopt helemaal.'",
            "'Waar komt dat vandaan? Weet je een onderzoek dat dat laat show?'",
            "'Nee, jij bent fout.'",
            "Je telefoon pakken",
          ],
          correctIndex: 1,
          explanation:
            "Vraag naar de bron ('iedereen weet toch' is geen bewijs). Zo dwing je de ander inhoudelijk te onderbouwen.",
        },
        {
          id: "di-s4-q4",
          type: "mcq",
          prompt: "Een deelnemer praat heel lang en niemand anders komt aan het woord. Jij bent gespreksleider. Wat doe je?",
          options: [
            "Afwachten tot hij/zij uitgesproken is",
            "Onderbreken met: 'Bedankt voor je punt. We horen nog graag van de anderen. [naam], wat vind jij?'",
            "Het gesprek stoppen",
            "Zelf heel lang praten als tegenreactie",
          ],
          correctIndex: 1,
          explanation:
            "De gespreksleider zorgt dat iedereen aan het woord komt: friendly onderbreken en iemand anders uitnodigen.",
        },
        {
          id: "di-s4-q5",
          type: "mcq",
          prompt: "Wat hoort NIET thuis bij een goede afsluiting?",
          options: [
            "Een korte samenvatting van de standpunten",
            "Vertellen dat je mening door argumenten is veranderd",
            "Nieuwe argumenten beginnen die de discussie opnieuw opstarten",
            "Een uitsmijter of memorabel slotwoord",
          ],
          correctIndex: 2,
          explanation:
            "In de afsluiting rond je af. Nieuwe discussiepunten openen hoort daar niet bij.",
        },
      ],
    },
    {
      id: "di-s5",
      title: "Taken van de gespreksleider",
      description: "Wat hoort bij de rol van gespreksleider – en wat niet?",
      questions: [
        {
          id: "di-s5-q1",
          type: "sort",
          prompt: "Wijs elke taak toe aan 'Gespreksleider' of 'Deelnemer'. (Let op: sommige taken doen ze ALLEBEI.)",
          buckets: ["Gespreksleider", "Deelnemer"],
          items: [
            { text: "Zorgen dat iedereen aan het woord komt", bucket: 0 },
            { text: "Inhoudelijk reageren op argumenten van anderen", bucket: 1 },
            { text: "De inleiding geven en de stelling introduceren", bucket: 0 },
            { text: "Eigen voor- en tegenargumenten inbrengen", bucket: 1 },
            { text: "Doorverwijsvragen stellen als het stilvalt", bucket: 0 },
            { text: "Eigen mening opdringen zonder te luisteren", bucket: 1 },
          ],
          explanation:
            "Inhoudelijk reageren en eigen argumenten inbrengen doen deelnemers (en de gespreksleider mag dat ook, maar zijn EERSTE taak is leiden). 'Opdringen zonder luisteren' hoort bij niemand – dat is een fout.",
        },
        {
          id: "di-s5-q2",
          type: "mcq",
          prompt: "Waarom is de afsluiting door de gespreksleider belangrijk?",
          options: [
            "Zodat de discussie netjes afgerond wordt en er een samenvatting of slotmening staat",
            "Zodat er nog een nieuwe discussie kan beginnen",
            "Zodat de docent kan vertrekken",
            "Het heeft geen betekenis",
          ],
          correctIndex: 0,
          explanation:
            "De afsluiting rond je eigen onderwerp af: samenvatting, veranderde mening of een uitsmijter. Zo eindigt de ronde duidelijk.",
        },
      ],
    },
  ],
  exams: [
    {
      id: "di-ex1",
      title: "Toetsmodus: Spreken & discussie",
      description:
        "12 vragen uit deze module, feedback pas na afloop. Zo test je of je de regels uit je hoofd kent.",
      minutes: 10,
      questions: [],
    },
  ],
  flashcards: [
    {
      id: "di-fc1",
      front: "Stelling",
      back: "Een bewering waarmee je het wel of niet eens kunt zijn. Geen vraag, geen feit.",
      example: "De schooldag moet pas om 9.00 uur beginnen.",
    },
    {
      id: "di-fc2",
      front: "Standpunt",
      back: "Jouw keuze voor of tegen de stelling, waarmee je de discussie in gaat.",
    },
    {
      id: "di-fc3",
      front: "Argument",
      back: "Een reden waarom je standpunt klopt.",
      example: "Later beginnen geeft beter slaapritme voor tieners.",
    },
    {
      id: "di-fc4",
      front: "Onderbouwing",
      back: "Het bewijs onder een argument: voorbeeld, cijfer, onderzoek of ervaring.",
    },
    {
      id: "di-fc5",
      front: "Gespreksleider",
      back: "Leidt de discussie: inleiding, iedereen aan het woord laten, doorvragen en afsluiten.",
    },
    {
      id: "di-fc6",
      front: "Aandachtstrekkertje",
      back: "De opener van je inleiding: verrassend feit, vraag of korte anekdote die de groep pakt.",
    },
    {
      id: "di-fc7",
      front: "Nuanceren",
      back: "Erkennen dat een ander punt klopt, maar er iets genuanceerd bij zeggen: 'Dat klopt, maar...'",
    },
    {
      id: "di-fc8",
      front: "Tegenvoorbeeld",
      back: "Een concreet voorbeeld dat het algemene punt van de ander weerlegt.",
    },
    {
      id: "di-fc9",
      front: "Doorverwijsvraag",
      back: "Een vraag die de discussie weer op gang helpt of naar iemand anders leidt.",
      example: "'We horen nog graag van de anderen. Sema, wat vind jij?'",
    },
    {
      id: "di-fc10",
      front: "Uitsmijter",
      back: "Een memorabel slotzinnetje in je afsluiting, zodat je discussie blijft hangen.",
    },
  ],
  checklist: [
    {
      id: "di-cl1",
      label: "Onderwerp gekozen en stelling geformuleerd",
      detail: "Bewering (geen vraag), actueel, met echte voor- en tegenkanten.",
    },
    {
      id: "di-cl2",
      label: "Vier artikelen gevonden: 2 vóór en 2 tegen",
      detail: "Uit betrouwbare bronnen (kranten, kennisinstellingen), niet van social media.",
    },
    {
      id: "di-cl3",
      label: "Bronvermelding bij elk artikel genoteerd",
      detail: "Auteur, website/titel en datum, voor op je papier bij de docent.",
    },
    {
      id: "di-cl4",
      label: "Inleiding van ±1,5 minuut geschreven en geoefend",
      detail: "Aandachtstrekkertje, onderwerp + actualiteit, stelling, rol als gespreksleider.",
    },
    {
      id: "di-cl5",
      label: "Afsluiting klaar",
      detail: "Samenvatting of veranderde mening, eventueel met uitsmijter.",
    },
    {
      id: "di-cl6",
      label: "Argumentenkaart met voor- en tegenargumenten",
      detail: "Per argument een onderbouwing: voorbeeld, cijfer of ervaring.",
    },
    {
      id: "di-cl7",
      label: "Geoefend met je groep en feedback gegeven/ontvangen",
      detail: "Verdeel voor/tegen en oefen inhoudelijk reageren.",
    },
    {
      id: "di-cl8",
      label: "Goedgekeurde artikelen geprint (1x docent + 5x groepje)",
      detail: "Plus papier met je naam, klas, onderwerp en stelling voor bij de docent.",
    },
  ],
  deadlines: [
    { what: "Groepsindeling doorgeven aan de docent", when: "uiterlijk week 48 (23–27 november)" },
    { what: "Onderwerp en stelling doorgeven", when: "uiterlijk week 50 (7–11 december)" },
    { what: "Artikelen laten zien aan de docent", when: "week 50/51 (7–18 december)" },
    {
      what: "Inleveren op papier: naam, klas, onderwerp, stelling, vier artikelen + bronvermelding",
      when: "week 2 (4–8 januari)",
    },
    { what: "Resultaten", when: "na de SE-periode in Magister" },
  ],
};
