import type { Module } from "../types";

export const tekstbegrip: Module = {
  id: "tekstbegrip",
  title: "Tekstbegrip",
  short: "Tekstbegrip",
  subtitle: "Begrijp wat je leest: hoofdzaken, details en de bedoeling van de schrijver.",
  icon: "book",
  accent: "amber",
  examInfo: [
    "Onderdeel van SE612: Kijk- en luistertoets (Cito, in Woots) – 25% van je SE-cijfer.",
    "Bij tekstbegrip krijg je een lang fragment en daarna de vragen.",
    "De hele KLT-toets duurt ongeveer 2 uur; houd ook hier rekening met de klok.",
    "Neem mee naar de toets: opgeladen Chromebook, oplader en oortjes mét snoer.",
  ],
  theory: [
    {
      title: "Zo pak je een tekstbegrip-tekst aan",
      bullets: [
        "Lees eerst de vragen (of skim ze) zodat je weet waar je op moet letten.",
        "Lees dan de tekst en geef elke alinea in je hoofd een kort 'label' (bijv. 'probleem', 'voorbeeld', 'oplossing').",
        "Let op signaalwoorden: 'maar', 'echter' (tegenstelling), 'omdat', 'daarom' (reden/gevolg), 'bijvoorbeeld' (toelichting).",
        "Zoek bij detailvragen terug in de tekst: het antwoord staat er altijd in, niet alleen in je hoofd.",
        "Onderscheid feiten (controleerbaar) van meningen (overtuigingen) en let op wie het zegt: de schrijver of iemand die geciteerd wordt.",
      ],
    },
    {
      title: "Doel van een tekst",
      paragraphs: [
        "Elke tekst heeft een doel: informeren (feiten overbrengen), overtuigen (je mening geven, bijvoorbeeld in een brief van een belangenclub), instrueren (uitleggen hoe iets moet) of amuseren. Vaak gaat het om twee doelen tegelijk.",
        "Kijk naar de toon: zijn er meningen, spitsvondige woorden of superlatieven ('hét beste')? Dan wil de schrijver waarschijnlijk ook overtuigen. Veel cijfers en neutrale feiten wijzen op informeren.",
      ],
    },
    {
      title: "Hoofdgedachte vinden",
      paragraphs: [
        "De hoofdgedachte staat vaak in de titel, de eerste alinea of de laatste alinea. Vraag jezelf af: 'Over wie of wat gaat het precies, en wat wordt erover gezegd?'",
        "Een goede samenvatting is kort, algemeen en dekt alle belangrijke alinea's. Een antwoordoptie die te veel details noemt of iets toevoegt dat er niet staat, is fout.",
      ],
    },
  ],
  texts: [
    {
      id: "tb-t1",
      title: "Telefoon in kluisje: school start proef met 'schermvrije lessen'",
      source: "Oefentekst – nieuwsbericht",
      intro: "Lees het bericht en beantwoord daarna de vragen.",
      paragraphs: [
        "MAVO 4 van het Compendium College begint dit schooljaar met een bijzonder experiment. Aan het begin van elke les stoppen alle leerlingen hun telefoon in een klein kluisje aan de muur. De sleutel blijft bij de docent. Aan het einde van de les krijgen de leerlingen hun telefoon terug. 'We willen onderzoeken of de lessen rustiger worden en of leerlingen beter opletten', zegt rector Karin Bosman.",
        "Het idee kwam van de leerlingenraad zelf. Vorig jaar vroeg de raad aan honderd schoolgenoten naar hun ervaringen met telefoons in de les. Daaruit bleek dat een grote groep zichzelf niet in de hand kon houden: bijna zeven op de tien leerlingen gaf toe dat ze stiekem berichten checkten, ook als dat niet mocht.",
        "Niet iedereen is even enthousiast. Leerling Noor (15) vindt het kluisjessysteem 'een soort gevangenis voor je telefoon'. Ze begrijpt het doel wel, maar ziet graag een alternatief: 'Laat ons de telefoon gewoon in ons etui stoppen. Wij kunnen ook zelf kiezen om hem weg te leggen.'",
        "Onderzoeksbureau Jongermening berekende eerder dat scholieren gemiddeld zo'n drie uur per dag op hun telefoon zitten. Docent Mascha de Wit merkte in haar eigen klas dat één ding vooral helpt: duidelijke regels die elke les hetzelfde gelden. 'Terughoudend ben ik met straffen. Maar een vast ritme werkt beter dan losse waarschuwingen', zegt ze.",
        "Na de kerstvakantie beslist de schoolleiding of het experiment volgend jaar voor de hele school geldt. Tot die tijd blijven de kluisjes dicht en de lessen hopelijk rustig.",
      ],
      questions: [
        {
          id: "tb-t1-q1",
          type: "mcq",
          prompt: "Wat is de hoofdgedachte van dit bericht?",
          options: [
            "Een school probeert telefoons uit de les te houden met kluisjes en beslist na de kerstvakantie of dat blijft.",
            "Onderzoeksbureau Jongermening heeft bewezen dat telefoons slecht zijn voor scholieren.",
            "De leerlingenraad wil dat alle leerlingen hun telefoon altijd bij de portier inleveren.",
            "Docent De Wit vindt straffen de beste manier om rust in de klas te krijgen.",
          ],
          correctIndex: 0,
          explanation:
            "Het bericht draait om het experiment met de kluisjes (alinea 1) en de beslissing na de kerstvakantie (laatste alinea). De andere opties noemen maar één detail of kloppen niet met de tekst.",
        },
        {
          id: "tb-t1-q2",
          type: "mcq",
          prompt: "In welke alinea lees je hoe een deel van de leerlingen over het experiment denkt?",
          options: [
            "De eerste alinea",
            "De derde alinea (over leerling Noor)",
            "De vierde alinea (over docent De Wit)",
            "De laatste alinea",
          ],
          correctIndex: 1,
          explanation:
            "In de derde alinea reageert leerling Noor kritisch op het kluisjessysteem. De eerste alinea gaat over het experiment zelf, de vierde vooral over de docent en het onderzoek.",
        },
        {
          id: "tb-t1-q3",
          type: "mcq",
          prompt: "Uit de tekst blijkt dat het idee voor het experiment …",
          options: [
            "opgelegd is door de rector",
            "afkomstig is van de leerlingenraad",
            "verplicht is gesteld door de overheid",
            "is bedacht door onderzoeksbureau Jongermening",
          ],
          correctIndex: 1,
          explanation:
            "Alinea 2: 'Het idee kwam van de leerlingenraad zelf.' De rector geeft alleen toelichting en het onderzoek kwam pas ná het idee.",
        },
        {
          id: "tb-t1-q4",
          type: "mcq",
          prompt: "Wat is het doel van dit bericht?",
          options: [
            "Overtuigen dat telefoons verboden moeten worden op alle scholen",
            "Instrueren: uitleggen hoe je een kluisjessysteem installeert",
            "Informeren over een experiment op één school",
            "Amuseren met een grappig verhaal over telefoons",
          ],
          correctIndex: 2,
          explanation:
            "Het bericht blijft neutraal: het geeft feiten, meningen van voor- en tegenstanders en een vooruitblik. De schrijver spreekt zelf geen oordeel uit.",
        },
        {
          id: "tb-t1-q5",
          type: "mcq",
          prompt: "Wat betekent 'terughoudend' in de zin 'Terughoudend ben ik met straffen.'?",
          options: [
            "Ze is streng met straffen",
            "Ze past straffen liever niet snel toe",
            "Ze is bang voor straffen",
            "Ze vergeet vaak om straffen uit te delen",
          ],
          correctIndex: 1,
          explanation:
            "Terughoudend = voorzichtig, niet snel iets doen. Dat past bij haar opmerking dat een vast ritme beter werkt dan straffen.",
        },
        {
          id: "tb-t1-q6",
          type: "mcq",
          prompt: "Welke uitspraak uit de tekst is een mening?",
          options: [
            "Bijna zeven op de tien leerlingen gaf toe stiekem berichten te checken.",
            "Scholieren zitten gemiddeld ongeveer drie uur per dag op hun telefoon.",
            "Het kluisjessysteem is 'een soort gevangenis voor je telefoon'.",
            "Na de kerstvakantie beslist de schoolleiding over het experiment.",
          ],
          correctIndex: 2,
          explanation:
            "Het citaat van Noor is een waardeoordeel. De andere opties zijn feitelijke mededelingen (controleerbare cijfers en plannen).",
        },
        {
          id: "tb-t1-q7",
          type: "mcq",
          prompt: "Welke zin vat het bericht het beste samen?",
          options: [
            "Leerlingen van het Compendium College mogen nooit meer hun telefoon gebruiken.",
            "Met kluisjes wil één school proberen de lessen rustiger te maken; of het blijft, moet nog blijken.",
            "Docenten eisen dat er eindelijk streng wordt opgetreden tegen telefoongebruik.",
            "Onderzoek wijst uit dat kluisjes de beste oplossing zijn tegen schermtijd.",
          ],
          correctIndex: 1,
          explanation:
            "Deze optie is kort, algemeen en dekt het experiment én de nog open beslissing. De overige opties zeggen te veel of iets dat er niet staat.",
        },
      ],
    },
    {
      id: "tb-t2",
      title: "Gemeente opent vernieuwde fietsenstalling bij station",
      source: "Oefentekst – persbericht Gemeente Rivendal",
      intro: "Let goed op: dit is een tekst van een betrokken partij. Kritisch lezen dus!",
      paragraphs: [
        "RIVENDAL – De gemeente Rivendal heeft dinsdag de vernieuwde fietsenstalling bij Station Noord in gebruik genomen. Na twee jaar bouwen biedt de stalling nu ruimte aan 1.400 fietsen, twee keer zoveel als voorheen. Ook zijn er 40 oplaadpunten voor elektrische fietsen en een gratis bandenoplaapmachine.",
        "Wethouder Anouk Verhoeven (bereikbaarheid) opende de stalling om 9.00 uur officieel. 'Dit is hét antwoord op de fietsenoverlast rond het station. Reizigers kunnen nu altijd op een plekje rekenen, in een schone en veilige stalling', aldus de wethouder.",
        "De vernieuwing kostte in totaal 4,2 miljoen euro. De gemeente verwacht dat meer forensen de fiets pakken voor het laatste stukje naar hun werk. Volgens het gemeentelijke verkeersplan moet het autogebruik rond het station in de komende vijf jaar met 15% dalen.",
        "Fietsersbond Rivendal noemt de stalling 'een flinke verbetering', maar wijst erop dat de aanlooproutes naar het station toe nog druk en onveilig zijn. 'Nu eerst de wegen', zegt voorzitter Bram Kuipers.",
      ],
      questions: [
        {
          id: "tb-t2-q1",
          type: "mcq",
          prompt: "Door wie is deze tekst geschreven en wat betekent dat voor de inhoud?",
          options: [
            "Door de gemeente zelf: verwacht vooral de positieve kant en mooie woorden",
            "Door een onafhankelijk journalist: alle nadelen worden evenveel behandeld",
            "Door de fietsersbond: de tekst gaat vooral over gevaarlijke wegen",
            "Door het bouwbedrijf: de tekst is vooral reclame voor bouwmaterialen",
          ],
          correctIndex: 0,
          explanation:
            "Een persbericht komt van de organisatie zelf. Die kiest haar eigen woorden ('hét antwoord', 'schone en veilige') en noemt nadelen nauwelijks.",
        },
        {
          id: "tb-t2-q2",
          type: "mcq",
          prompt: "Welke uitspraak in de tekst is een feitelijke bewering met een cijfer?",
          options: [
            "'Dit is hét antwoord op de fietsenoverlast.'",
            "De stalling biedt ruimte aan 1.400 fietsen.",
            "'Reizigers kunnen nu altijd op een plekje rekenen.'",
            "De stalling is 'schone en veilig'.",
          ],
          correctIndex: 1,
          explanation:
            "Het aantal plekken (1.400) is controleerbaar. De overige opties bevatten superlatieven en beloftes: dat zijn meningen of verwachtingen.",
          hint: "Zoek het enige antwoord waarin een controleerbaar getal staat.",
        },
        {
          id: "tb-t2-q3",
          type: "mcq",
          prompt: "Wat is het doel van dit persbericht?",
          options: [
            "De gemeente positief neerzetten en bewoners informeren over de nieuwe stalling",
            "Waarschuwen dat het station te druk is geworden",
            "Mensen oproepen om te demonstreren tegen de kosten",
            "Uitleggen hoe je een elektrische fiets oplaadt",
          ],
          correctIndex: 0,
          explanation:
            "De toon is trots en reclame-achtig, typisch voor een persbericht: informeren én overtuigen dat de gemeente goed werk levert.",
        },
        {
          id: "tb-t2-q4",
          type: "mcq",
          prompt: "Wat vind je in de laatste alinea terug?",
          options: [
            "Bewijs dat de stalling te duur is geweest",
            "Kritiek van een andere partij op de omgeving van de stalling",
            "Een uitnodiging voor de officiële opening",
            "De openingstijden van de stalling",
          ],
          correctIndex: 1,
          explanation:
            "De fietsersbond is enthousiast over de stalling zelf, maar kritisch over de aanlooproutes. Die kritiek staat los van de trots in het persbericht.",
        },
        {
          id: "tb-t2-q5",
          type: "mcq",
          prompt: "Welke zin uit de tekst is een verwachting (en geen vaststaand feit)?",
          options: [
            "De vernieuwing kostte in totaal 4,2 miljoen euro.",
            "De gemeente verwacht dat meer forensen de fiets pakken.",
            "De stalling werd dinsdag om 9.00 uur geopend.",
            "Er zijn 40 oplaadpunten voor elektrische fietsen.",
          ],
          correctIndex: 1,
          explanation:
            "'Verwacht dat' kondigt een toekomstbeeld aan. De andere opties beschrijven gebeurde of bestaande feiten.",
        },
      ],
    },
    {
      id: "tb-t3",
      title: "Stop met schamen om spelfouten: fouten maken hoort bij leren",
      source: "Oefentekst – column/opinie",
      intro: "In deze opinietekst geeft de schrijver duidelijk een mening. Let op argumenten en toon.",
      paragraphs: [
        "Vorige week hoorde ik weer een leerling fluisteren: 'Ik schrijf het maar niet op, dan kan ik tenminste geen fouten maken.' Die zin brak mijn hart. Want precies die angst voor fouten houdt leerlingen tegen om te groeien.",
        "Laat ik vooropstellen: spellingregels zijn nuttig. Je wilt dat je brief aan een docent verzorgd oogt en dat niemand afgeleid wordt door foutjes. Maar er is een groot verschil tussen verzorgd schrijven en perfect schrijven. Wie alleen maar veilige korte zinnen durft te schrijven, leert nooit echt formuleren.",
        "Wetenschappers die schrijfprocessen volgen, zien bovendien iets opvallends: leerlingen die veel schrijven – met fouten en al – maken na een jaar minder fouten dan leerlingen die vooral oefenen met losse regels. Fouten zijn dus geen bewijs dat je niet kunt schrijven; ze zijn de stof waaruit je leert.",
        "Daarom pleit ik voor het 'fout van de week'-prikbord in elke klas, waar de meest leerzame fouten bewust worden opgehangen en besproken – zonder namen, met een knipoog. Lachen om een fout zorgt ervoor dat je hem nooit meer vergeet. Laten we fouten dus geen schande meer noemen, maar een stap in het leerproces.",
      ],
      questions: [
        {
          id: "tb-t3-q1",
          type: "mcq",
          prompt: "Wat is de mening van de schrijver?",
          options: [
            "Spellingregels zijn nutteloos en moeten van school af.",
            "Leerlingen moeten vooral korte, veilige zinnen schrijven.",
            "Angst voor fouten remt leerlingen af; fouten horen bij het leerproces.",
            "Docenten moeten minder spellingverbeteringen geven.",
          ],
          correctIndex: 2,
          explanation:
            "De schrijver zegt expliciet dat angst voor fouten leerlingen tegenhoudt en dat fouten 'de stof waaruit je leert' zijn. Spellingregels vindt ze juist wél nuttig.",
        },
        {
          id: "tb-t3-q2",
          type: "mcq",
          prompt: "Welk argument gebruikt de schrijver NIET in de tekst?",
          options: [
            "Leerlingen die veel schrijven, maken na een jaar minder fouten.",
            "Wie de fout niet opschrijft, ontneemt zichzelf oefening.",
            "Werkgevers klagen dat sollicitatiebrieven vol spelfouten staan.",
            "Het prikbord met fouten werkt als geheugensteuntje.",
          ],
          correctIndex: 2,
          explanation:
            "Over werkgevers en sollicitatiebrieven zegt de tekst niets. De andere argumenten komen wel in de tekst voor.",
        },
        {
          id: "tb-t3-q3",
          type: "mcq",
          prompt: "Wat is het doel van deze tekst?",
          options: [
            "Neutraal informeren over spellingonderzoek",
            "Overtuigen: het moet normaal worden om fouten te maken",
            "Instrueren: uitleggen hoe je foutloos schrijft",
            "Adverteren voor een spellingcursus",
          ],
          correctIndex: 1,
          explanation:
            "Dit is een opiniestuk: de schrijver pleit bewust voor een andere kijk ('Daarom pleit ik voor...').",
        },
        {
          id: "tb-t3-q4",
          type: "mcq",
          prompt: "Het woord 'Daarom' aan het begin van de laatste alinea geeft aan dat …",
          options: [
            "er een reden volgt voor wat de schrijver voorstelt",
            "er een tegenstelling komt",
            "er een voorbeeld komt",
            "er iets wordt toegevoegd dat losstaat van de tekst",
          ],
          correctIndex: 0,
          explanation:
            "'Daarom' verwijst terug naar de argumenten (angst remt af, fouten zijn leerstof) en kondigt daarmee het voorstel aan.",
        },
        {
          id: "tb-t3-q5",
          type: "mcq",
          prompt: "Wat is volgens de schrijver het verschil tussen 'verzorgd' en 'perfect' schrijven?",
          options: [
            "Verzorgd schrijven betekent dat er geen enkele fout meer staat.",
            "Verzorgd schrijven mag foutjes bevatten, zolang de tekst netjes en leesbaar is.",
            "Perfect schrijven gaat alleen docenten aan, niet leerlingen.",
            "Ze vindt het verschil onbelangrijk.",
          ],
          correctIndex: 1,
          explanation:
            "Alinea 2: verzorgd = netjes en leesbaar; perfect = foutloos, en dat is volgens haar een te hoog (en zelfs schadelijk) doel.",
        },
      ],
    },
  ],
  sets: [
    {
      id: "tb-s1",
      title: "Snel-quiz tekststrategie",
      description: "Vragen over aanpak, doel en hoofdgedachte – zonder lange tekst erbij.",
      questions: [
        {
          id: "tb-s1-q1",
          type: "mcq",
          prompt: "Je krijgt bij tekstbegrip een lange tekst en 7 vragen. Wat is de slimste volgorde?",
          options: [
            "Eerst de vragen lezen, dan de tekst, dan antwoorden",
            "Eerst de hele tekst twee keer lezen, dan pas de vragen bekijken",
            "Direct de antwoordopties lezen en gokken",
            "Alleen de eerste en laatste zin lezen",
          ],
          correctIndex: 0,
          explanation:
            "Door eerst de vragen te skimmen weet je waar je op moet letten. Dan lees je doelgerichter en win je tijd.",
        },
        {
          id: "tb-s1-q2",
          type: "mcq",
          prompt: "Welke tekst hoort meestal bij 'de schrijver wil overtuigen'?",
          options: [
            "Een nieuwsbericht met alleen feiten en cijfers",
            "Een column met duidelijke meningen en argumenten",
            "Een handleiding met stappen 1 tot en met 5",
            "Een woordenlijst voor een toets",
          ],
          correctIndex: 1,
          explanation:
            "In een column staat de mening van de schrijver centraal, ondersteund door argumenten.",
        },
        {
          id: "tb-s1-q3",
          type: "mcq",
          prompt: "Wat is een goede samenvatting van een tekst?",
          options: [
            "Kort, algemeen en dekt alle belangrijke alinea's",
            "Zo lang mogelijk, zodat er niets ontbreekt",
            "Alleen de leukste details uit de tekst",
            "Je eigen mening over het onderwerp",
          ],
          correctIndex: 0,
          explanation:
            "Een samenvatting benoemt de kern van het hele verhaal in eigen woorden, zonder details en zonder eigen mening.",
        },
        {
          id: "tb-s1-q4",
          type: "mcq",
          prompt: "Welk woord kondigt een tegenstelling aan?",
          options: ["omdat", "echter", "bijvoorbeeld", "ten eerste"],
          correctIndex: 1,
          explanation:
            "'Echter' (net als 'maar' en 'toch') signaleert een tegenstelling. 'Omdat' geeft een reden, 'bijvoorbeeld' een voorbeeld.",
        },
        {
          id: "tb-s1-q5",
          type: "mcq",
          prompt: "Een vraag luidt: 'Met welk doel is deze tekst geschreven?' Je kiest 'overtuigen' wanneer …",
          options: [
            "de schrijver alleen feiten op een rijtje zet",
            "de schrijver zijn of haar mening duidelijk laat horen en je er iets van wil vinden",
            "de tekst alleen stappen van een werkwijze geeft",
            "de tekst een verhaal vertelt om te amuseren",
          ],
          correctIndex: 1,
          explanation:
            "Bij overtuigen proef je meningen, oordelen en oproepen; bij informeren vooral neutrale feiten.",
        },
      ],
    },
  ],
  exams: [
    {
      id: "tb-ex1",
      title: "Toetsmodus: Tekstbegrip (mini-KLT)",
      description:
        "12 vragen uit alle oefenteksten, feedback pas aan het einde – net als op de echte KLT. Zet de klok aan!",
      minutes: 12,
      questions: [],
    },
  ],
};
