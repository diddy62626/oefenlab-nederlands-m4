import type { Module } from "../types";

export const fictie: Module = {
  id: "fictie",
  title: "Fictie",
  short: "Fictie",
  subtitle: "Verhalen begrijpen: verteller, personages, motieven en sfeer.",
  icon: "feather",
  accent: "violet",
  examInfo: [
    "Onderdeel van SE612: Kijk- en luistertoets (Cito, in Woots) – 25% van je SE-cijfer.",
    "Je ziet een kort fictiefragment en beantwoordt daarna één of meer vragen.",
    "Vaag gevraagde zaken: wie vertelt het verhaal, waarom doet iemand iets, en wat voor sfeer hangt er?",
    "Vertrouw op de tekst: elk antwoord moet steunen op een plekje in het fragment.",
  ],
  theory: [
    {
      title: "Vertelperspectief: wie vertelt het?",
      bullets: [
        "Ik-verteller: 'ik' in het verhaal; je leert alleen de gevoelens en gedachten van die ene verteller kennen.",
        "Alwetende verteller: geen 'ik'; de verteller kijkt iedereen van binnen. Gedachten van meerdere personages worden verteld.",
        "Personage-verteller (derde persoons): je volgt één personage ('hij/zij') en leert vooral diens gedachten kennen.",
        "Handig trucje: vraag 'van wie leer ik de gedachten?' – antwoord dat en je hebt het perspectief te pakken.",
      ],
    },
    {
      title: "Personages: rond en plat",
      bullets: [
        "Rond personage: kent verrassingen en tegenstrijdigheden; je leert hem/haar van meerdere kanten kennen (bijv. dapper én bang).",
        "Plat personage: één kenmerk, blijft hetzelfde (de strenge docent, de grappige beste vriend).",
        "Motief: de reden waarom een personage iets doet. Vaak dubbel: wat zeggen ze dat ze willen, en wat willen ze eigenlijk?",
        "Thema: het grote onderwerp van het verhaal (bijv. vriendschap, verlies, moed) – niet het verhaaltje zelf, maar waar het echt over gaat.",
      ],
    },
    {
      title: "Sfeer, stemming en beeldspraak",
      bullets: [
        "Stemming/sfeer: welk gevoel krijgt de lezer? Zoek woorden die dat bepalen (donker, zenuwachtig, warm...).",
        "Vergelijking: er staat 'als' of 'zoals' in ('zijn hart sloeg als een trommel').",
        "Metafoor: er staat GEEN 'als', maar er wordt iets direct iets anders genoemd ('de perronhal was een zee van koffers').",
        "Personificatie: iets niet-menselijks krijgt menselijke eigenschappen ('de wind fluisterde').",
        "Tijdsverloop: let op hoe het verhaal door de tijd gaat (flitsen tussen nu en vroeger, versnellen of vertragen).",
      ],
    },
  ],
  texts: [
    {
      id: "fi-t1",
      title: "Fragment 1 – 'Het kluisje' (ik-verteller)",
      source: "Oefenfragment – kort verhaal",
      intro: "Lees het fragment en beantwoord de vragen.",
      paragraphs: [
        "Ik stond al tien minuten voor de gymzaal, terwijl de gang helemaal leeg was. Alleen de lampen boven de ingang zoemden, alsof ze mijn geheim bewaarden. In mijn zak kneep ik de sleutel zo hard dat hij een afdruk in mijn handpalm achterliet.",
        "Waarom ik dit nu pas deed? Drie weken geleden had Bas mijn armband – de armband van oma – ingewisseld voor een grap, en hij had hem in het kluisje van de gymzaal gegooid om het 'nog eens te bewijzen'. Niemand geloofde me toen ik het vertelde. Dus nu, om half vijf, terwijl iedereen op het schoolplein stond te wachten op de bus, ging ik het zelf halen.",
        "Mijn hart sloeg als een trommel toen ik het slot omdraaide. Het kluisje stonk naar basketbal en oud rubber. Daar, achter een natte veldershirt, iets glimmends. Ik greep het, en mijn vingers trilden – niet van angst, maar van opluchting. Pas op het plein besefte ik dat Bas me vanaf de overkant had zien gaan. Hij keek me aan, en voor het eerst die dag zag ik niet zijn gebruikelijke grijns, maar iets dat leek op spijt.",
      ],
      questions: [
        {
          id: "fi-t1-q1",
          type: "mcq",
          prompt: "Van welk vertelperspectief is dit fragment?",
          options: [
            "Alwetende verteller: we leren de gedachten van Bas en de hoofdpersoon kennen",
            "Ik-verteller: we leren alleen de gedachten en gevoelens van de hoofdpersoon kennen",
            "Personage-verteller in de derde persoon: 'hij/zij'",
            "Een interviewvorm",
          ],
          correctIndex: 1,
          explanation:
            "Het verhaal staat in de ik-vorm en we lezen de gedachten en gevoelens van alleen de hoofdpersoon ('Waarom ik dit nu pas deed?'). Van Bas zien we alleen wat de hoofdpersoon waarneemt.",
        },
        {
          id: "fi-t1-q2",
          type: "mcq",
          prompt: "Wat is het motief van de hoofdpersoon om naar de gymzaal te gaan?",
          options: [
            "Zijn/haar armband terug halen die door Bas in het kluisje is gegooid",
            "Basketballen terwijl de zaal leeg is",
            "Bas angst aanjagen met een geheim plan",
            "Een nat veldershirt ophalen dat daar is vergeten",
          ],
          correctIndex: 0,
          explanation:
            "Alinea 2 legt het motief uit: de armband van oma zat in het kluisje en niemand geloofde de hoofdpersoon, dus ging het zelf halen.",
        },
        {
          id: "fi-t1-q3",
          type: "mcq",
          prompt: "'Mijn hart sloeg als een trommel.' Welke stijlmiddel is dit?",
          options: ["Metafoor", "Vergelijking", "Personificatie", "Herhaling"],
          correctIndex: 1,
          explanation:
            "Er staat 'als' in: twee dingen worden vergeleken (hart en trommel). Dat is een vergelijking.",
        },
        {
          id: "fi-t1-q4",
          type: "mcq",
          prompt: "Welke woorden dragen vooral bij aan de spanning in het begin?",
          options: [
            "'leeg was', 'zoemden', 'kneep ik de sleutel', 'afdruk in mijn handpalm'",
            "'basketbal', 'rubber', 'veldershirt'",
            "'schoolplein', 'bus', 'half vijf'",
            "'grijns', 'spijt', 'opluchting'",
          ],
          correctIndex: 0,
          explanation:
            "De lege gang, het zoemende licht en de knijpende hand tonen zenuwachtige afwachtendheid. De woorden uit optie 4 horen bij het einde van het fragment.",
        },
        {
          id: "fi-t1-q5",
          type: "mcq",
          prompt: "Wat kun je over de hoofdpersoon afleiden?",
          options: [
            "Hij/zij is moedig genoeg om iets engs alleen te doen, maar is wel zenuwachtig",
            "Hij/zij haat Bas en wil wraak nemen met een kluisjes-inbraak",
            "Hij/zij vindt basketbal het mooiste dat er is",
            "Hij/zij heeft helemaal geen emoties",
          ],
          correctIndex: 0,
          explanation:
            "De hoofdpersoon voelt angst (trillende vingers, hamerend hart) maar gaat tóch. Zo'n tegenstrijdige kant hoort bij een rond personage.",
        },
        {
          id: "fi-t1-q6",
          type: "mcq",
          prompt: "Wat wordt aan het einde gesuggereerd over Bas?",
          options: [
            "Dat hij de armband stiekem bewaard heeft",
            "Dat hij de hoofdpersoon heeft zien gaan en misschien spijt heeft",
            "Dat hij met de bus meereist",
            "Dat hij nooit meer op school komt",
          ],
          correctIndex: 1,
          explanation:
            "Bas keek 'vanaf de overkant' en er verscheen iets 'dat leek op spijt' in plaats van zijn grijns. Meer wordt er niet gezegd: het is een suggestie.",
        },
      ],
    },
    {
      id: "fi-t2",
      title: "Fragment 2 – 'Het perron' (alwetende verteller)",
      source: "Oefenfragment – kort verhaal",
      intro: "Let op: van hoeveel personages leer je hier de binnenkant kennen?",
      paragraphs: [
        "De stationshal was een zee van koffers en jassen. Op het perron stond Veer met haar rug tegen een kolom gedrukt, en in haar hoofd draaide maar één zin: als ik nu niet zwijg, dan barst alles open.",
        "Naast haar stond haar opa, handen op zijn rug, naar de vertrekborden starend. Hij dacht aan dezelfde winter veertig jaar eerder, toen hij zelf op dit perron iemand had laten gaan zonder iets te zeggen. Die stilte was hij nooit helemaal kwijtgeraakt.",
        "'Je treinstel wordt vandaag', zei hij uiteindelijk, met een stem die veel zachter klonk dan hij had gewild. Veer knikte en keek naar haar schoenen. Zij wist niet dat haar opa op dat moment precies hetzelfde voelde als zij: dat woorden ontbraken op het verkeerde moment. Boven hen hingen de borden te knikkeren, en de aankondiging van de trein scalpeerde de stilte.",
      ],
      questions: [
        {
          id: "fi-t2-q1",
          type: "mcq",
          prompt: "Van welk vertelperspectief is dit fragment?",
          options: [
            "Ik-verteller",
            "Alwetende verteller: we leren de gedachten van zowel Veer als opa kennen",
            "Personage-verteller: alleen opa's gedachten",
            "Een dagboekvorm",
          ],
          correctIndex: 1,
          explanation:
            "In alinea 1 lezen we Veers gedachten en in alinea 2 opa's gedachten. Van twee personages van binnen: alwetend.",
        },
        {
          id: "fi-t2-q2",
          type: "mcq",
          prompt: "'De stationshal was een zee van koffers en jassen.' Welke stijlmiddel is dit?",
          options: ["Vergelijking", "Metafoor", "Personificatie", "Ironie"],
          correctIndex: 1,
          explanation:
            "Er staat geen 'als' of 'zoals', maar de hal wordt direct een 'zee' genoemd: een metafoor.",
        },
        {
          id: "fi-t2-q3",
          type: "mcq",
          prompt: "Welk thema past het beste bij dit fragment?",
          options: [
            "Verloren tijd en onuitgesproken gevoelens tussen generaties",
            "De drukte op treinstations",
            "Treinreizen als goedkoopste vervoersmiddel",
            "Sporten in de winter",
          ],
          correctIndex: 0,
          explanation:
            "Opa draagt al veertig jaar een stilte met zich mee, en nu opnieuw kunnen beide niets zeggen. Dat raakt het thema onuitgesproken gevoelens en verhoudingen tussen generaties.",
        },
        {
          id: "fi-t2-q4",
          type: "mcq",
          prompt: "Wat leer je over opa? Hoe noem je zo'n personage?",
          options: [
            "Plat personage: hij heeft maar één kenmerk, hij is streng",
            "Rond personage: hij is gereserveerd, maar van binnen voll van gevoel en oude spijt",
            "Plat personage: hij haat treinen",
            "Rond personage, want hij is oud",
          ],
          correctIndex: 1,
          explanation:
            "Opa lijkt buiten op een stille, strenge man, maar van binnen voelt hij precies hetzelfde als Veer. Die tegenstelling maakt hem een rond personage.",
        },
        {
          id: "fi-t2-q5",
          type: "mcq",
          prompt: "Hoe verloopt de stemming in het fragment?",
          options: [
            "Van opgewekt naar feestelijk",
            "Van gespannen en stil naar een klein gebaar van aandacht",
            "Van rustig naar chaos",
            "Van boos naar verzoenend",
          ],
          correctIndex: 1,
          explanation:
            "De stilte en de gedachte 'als ik nu niet zwijg' spannen aan; opa's zachte 'Je treinstel wordt vandaag' is het kleine, warme gebaar. Boosheid of chaos staat er niet in.",
        },
        {
          id: "fi-t2-q6",
          type: "mcq",
          prompt: "Wat betekent de zin 'Die stilte was hij nooit helemaal kwijtgeraakt' voor het verhaal?",
          options: [
            "Opa is doof geworden",
            "Opa heeft een oude, pijnlijke herinnering aan iets wat hij toen niet zei",
            "Op het station is het altijd kalm",
            "Veer praat nooit met opa",
          ],
          correctIndex: 1,
          explanation:
            "De 'stilte' verwijst naar wat er veertig jaar eerder niet gezegd werd. Die onuitgesproken woorden blijven hem achtervolgen.",
        },
      ],
    },
  ],
  sets: [
    {
      id: "fi-s1",
      title: "Begrippen-quiz fictie",
      description: "Test je kennis van de belangrijkste fictiebegrippen.",
      questions: [
        {
          id: "fi-s1-q1",
          type: "mcq",
          prompt: "Waar herken je een ik-verteller aan?",
          options: [
            "Er staat 'ik' in het verhaal en je leert alleen diens binnenkant kennen",
            "Je leert de gedachten van alle personages kennen",
            "Er komen geen mensen in het verhaal voor",
            "Het verhaal staat in de verleden tijd",
          ],
          correctIndex: 0,
          explanation:
            "De ik-verteller is een personage in het eigen verhaal; je ziet de wereld door diens ogen.",
        },
        {
          id: "fi-s1-q2",
          type: "mcq",
          prompt: "Een alwetende verteller is een verteller die ...",
          options: [
            "alleen de hoofdpersoon van binnen kent",
            "van meerdere personages de gedachten en gevoelens kan vertellen",
            "nooit iets vertelt",
            "het verhaal eerst zelf verzonnen moet worden",
          ],
          correctIndex: 1,
          explanation:
            "Alwetend = alleswetend: de verteller kijkt alle personages van binnen en weet wat er gebeurt en gebeurd is.",
        },
        {
          id: "fi-s1-q3",
          type: "mcq",
          prompt: "Wat is een motief van een personage?",
          options: [
            "De reden waarom een personage iets doet",
            "De plaats waar het verhaal zich afspeelt",
            "De titel van het verhaal",
            "De tijd waarin het verhaal speelt",
          ],
          correctIndex: 0,
          explanation:
            "Het motief is de drijfveer: waarom handelt iemand zo? Motieven kunnen dubbel zijn (wat iemand zegt vs. wat die eigenlijk wil).",
        },
        {
          id: "fi-s1-q4",
          type: "mcq",
          prompt: "Wat is het verschil tussen een metafoor en een vergelijking?",
          options: [
            "Er is geen verschil",
            "Bij een vergelijking staat 'als' of 'zoals'; bij een metafoor wordt iets direct iets anders genoemd",
            "Een metafoor is altijd grappig, een vergelijking altijd sérieus",
            "Een vergelijking staat nooit in fictie",
          ],
          correctIndex: 1,
          explanation:
            "'Hij vecht als een leeuw' = vergelijking. 'Hij is een leeuw' = metafoor.",
        },
        {
          id: "fi-s1-q5",
          type: "mcq",
          prompt: "Wat betekent 'het thema van een verhaal'?",
          options: [
            "Het onderwerp waar het verhaal op een dieper niveau over gaat, bijv. moed of verlies",
            "De eerste zin van het verhaal",
            "De naam van de hoofdpersoon",
            "Het tijdstip waarop het verhaal speelt",
          ],
          correctIndex: 0,
          explanation:
            "Het thema is de grote lijn (vriendschap, verlies, moed), niet de gebeurtenissen zelf.",
        },
        {
          id: "fi-s1-q6",
          type: "mcq",
          prompt: "'De wind fluisterde door de bomen.' Welke stijlmiddel is dit?",
          options: ["Vergelijking", "Metafoor", "Personificatie", "Feit"],
          correctIndex: 2,
          explanation:
            "De wind krijgt een menselijke eigenschap (fluisteren): personificatie.",
        },
      ],
    },
  ],
  exams: [
    {
      id: "fi-ex1",
      title: "Toetsmodus: Fictie",
      description: "12 vragen over beide fragmenten en de begrippen, feedback na afloop.",
      minutes: 10,
      questions: [],
    },
  ],
  flashcards: [
    {
      id: "fi-fc1",
      front: "Ik-verteller",
      back: "Er staat 'ik' in het verhaal. Je leert alleen de gedachten en gevoelens van die verteller kennen.",
    },
    {
      id: "fi-fc2",
      front: "Alwetende verteller",
      back: "Geen 'ik' in het verhaal. De verteller kijkt meerdere personages van binnen en weet alles.",
    },
    {
      id: "fi-fc3",
      front: "Personage-verteller",
      back: "Derde persoons ('hij/zij'), maar je volgt één personage van binnen.",
    },
    {
      id: "fi-fc4",
      front: "Rond personage",
      back: "Een 'echt' personage met meerdere kanten en tegenstrijdigheden (dapper én bang).",
    },
    {
      id: "fi-fc5",
      front: "Plat personage",
      back: "Eén kenmerk, verandert niet door het verhaal heen (de strenge docent, de grappige vriend).",
    },
    {
      id: "fi-fc6",
      front: "Motief",
      back: "De reden waarom een personage iets doet of laat.",
    },
    {
      id: "fi-fc7",
      front: "Thema",
      back: "Het onderwerp waar het verhaal op een dieper niveau over gaat: vriendschap, verlies, moed...",
    },
    {
      id: "fi-fc8",
      front: "Stemming / sfeer",
      back: "Het gevoel dat de lezer krijgt. Zoek naar woorden die dat gevoel bepalen.",
    },
    {
      id: "fi-fc9",
      front: "Vergelijking",
      back: "Twee dingen vergeleken met 'als' of 'zoals'. Voorbeeld: 'zijn hart sloeg als een trommel'.",
    },
    {
      id: "fi-fc10",
      front: "Metafoor",
      back: "Iets wordt direct iets anders genoemd, zonder 'als'. Voorbeeld: 'de stationshal was een zee van koffers'.",
    },
    {
      id: "fi-fc11",
      front: "Personificatie",
      back: "Niet-menselijke dingen krijgen menselijke eigenschappen. Voorbeeld: 'de wind fluisterde'.",
    },
    {
      id: "fi-fc12",
      front: "Tijdsverloop",
      back: "Hoe het verhaal door de tijd beweegt: terugflitsen, versnellen, vertragen.",
    },
  ],
};
