import type { Module } from "../types";

export const taalgebruik: Module = {
  id: "taalgebruik",
  title: "Taalgebruik",
  short: "Taalgebruik",
  subtitle: "Spellen, formuleren en interpunctie – voor de versterkingsles én voor je eigen discussieteksten.",
  icon: "pen",
  accent: "emerald",
  examInfo: [
    "De versterkingsles periode 2 gaat over taalgebruik: spellen, formuleren en interpunctie.",
    "Goed taalgebruik is ook nodig voor je stelling, inleiding en afsluiting bij SE613.",
    "Oefen hier met werkwoorden (d/t), spelfouten spotten, interpunctie en helder formuleren.",
  ],
  theory: [
    {
      title: "Werkwoorden: d of t?",
      bullets: [
        "Ik-vorm: nooit een t erbij ('ik antwoord', 'ik praat').",
        "Jij-/hij-/zij-/het-vorm: krijg een t als de stam op d of t eindigt ('hij antwoordt', 'hij praat', 'hij fietst').",
        'Vuistregel: luister naar de ik-vorm. Klinkt het in de ik-vorm al met t/d, dan komt er in de jij-/hij-vorm dt ("ik antwoord" -> "hij antwoordt").',
        "Meervoud (wij/zij) en verleden tijd plural: gewoon stam + en ('wij antwoorden').",
        "word/wordt: 'ik word' (d), 'jij/hij wordt' (dt).",
      ],
    },
    {
      title: "Interpunctie: de belangrijkste regels",
      bullets: [
        "Komma tussen hoofdzinnen met en/maar/dus: 'Ik kwam te laat, maar de toets was al begonnen.'",
        "Komma vóór aansluitende bijzin: 'Ik kwam te laat, omdat de trein vertraging had.'",
        "Komma's bij opsomming, maar niet vóór 'en': 'pen, schrift en oortjes'.",
        "Dubbele punt na een aankondiging of opsomming: 'Ik heb drie dingen nodig: pen, schrift en oortjes.'",
        "Aanhalingstekens rond letterlijk gesproken tekst: Zei de rector: '...' ",
        "Geen vraagteken bij indirecte vragen: 'Hij vroeg waar ik bleef.' (wel: 'Waar bleef jij?')",
      ],
    },
    {
      title: "Verzorgd formuleren",
      bullets: [
        "Kies actief boven passief: 'De leerlingen maken de toets' klinkt directer dan 'De toets wordt gemaakt door de leerlingen'.",
        "Houd zinnen kort: een zin met meer dan drie bijzinnen? Splits hem op.",
        "Wees concreet: 'we gaan iets met teksten doen' -> 'we gaan een tekst analyseren'.",
        "Geen dubbele ontkenning: 'Ik heb het niet onmogelijk gevonden' – bedoelde je dat het moeilijk of juist haalbaar was?",
        "Geen chat-taal in formele teksten: geen 'ff', 'omg' of 'hu' in je inleiding of brief.",
      ],
    },
  ],
  sets: [
    {
      id: "tg-s1",
      title: "D of t? Vul het werkwoord aan",
      description: "Type de juiste vorm van het werkwoord tussen haakjes.",
      questions: [
        {
          id: "tg-s1-q1",
          type: "fill",
          prompt: "Hij ___ (antwoorden) altijd beleefd.",
          accepted: ["antwoordt"],
          explanation: "Stam = antwoord (klinkt met d/t in de ik-vorm). Hij-vorm: dt.",
          placeholder: "typ hier...",
        },
        {
          id: "tg-s1-q2",
          type: "fill",
          prompt: "Jij ___ (praten) te snel.",
          accepted: ["praat"],
          explanation: "Stam = praat. Jij-vorm krijgt hier geen extra t (dubbele t klinkt hetzelfde).",
          placeholder: "typ hier...",
        },
        {
          id: "tg-s1-q3",
          type: "fill",
          prompt: "Ik ___ (vinden) dat een goed idee.",
          accepted: ["vind"],
          explanation: "In de ik-vorm staat nooit een extra t: ik vind.",
          placeholder: "typ hier...",
        },
        {
          id: "tg-s1-q4",
          type: "fill",
          prompt: "Het vliegtuig ___ (landen) om tien uur.",
          accepted: ["landt"],
          explanation: "Stam = land. Hij-/het-vorm: dt.",
          placeholder: "typ hier...",
        },
        {
          id: "tg-s1-q5",
          type: "fill",
          prompt: "Ik ___ (worden) er niet blij van.",
          accepted: ["word"],
          explanation: "ik word (d). Bij hij/jij wordt het 'wordt'.",
          placeholder: "typ hier...",
        },
        {
          id: "tg-s1-q6",
          type: "fill",
          prompt: "Jij ___ (worden) er niet blij van.",
          accepted: ["wordt"],
          explanation: "Jij/hij/het + worden = wordt.",
          placeholder: "typ hier...",
        },
        {
          id: "tg-s1-q7",
          type: "fill",
          prompt: "Wij ___ (antwoorden) samen op de vragen.",
          accepted: ["antwoorden"],
          explanation: "Wij/zij (meervoud): stam + en, dus antwoorden.",
          placeholder: "typ hier...",
        },
        {
          id: "tg-s1-q8",
          type: "fill",
          prompt: "Zij ___ (wachten) op de bus.",
          accepted: ["wacht", "wachten"],
          explanation:
            "Zij = hij (enkelvoud) -> wacht; zij = wij/meervoud -> wachten. Beide vormen zijn hier grammaticaal mogelijk: let op de context!",
          placeholder: "typ hier...",
        },
      ],
    },
    {
      id: "tg-s2",
      title: "Spot de juiste zin",
      description: "Welke zin is foutloos geschreven?",
      questions: [
        {
          id: "tg-s2-q1",
          type: "mcq",
          prompt: "Welke zin is goed?",
          options: [
            "Jij word maandag goedgekeurd.",
            "Jij wordt maandag goedgekeurd.",
            "Jij wordt maandag goedgekeurt.",
            "Jij worddt maandag goedgekeurd.",
          ],
          correctIndex: 1,
          explanation: "Jij/hij + worden = wordt. Het volled werkwoord 'goedgekeurd' eindigt op d.",
        },
        {
          id: "tg-s2-q2",
          type: "mcq",
          prompt: "Welke zin is goed?",
          options: [
            "De leerlingen hun boeken liggen in de kast.",
            "De boeken van de leerlingen liggen in de kast.",
            "De leerlings boeken liggen in de kast.",
            "De boeken der leerlingen hun liggen in de kast.",
          ],
          correctIndex: 1,
          explanation: "Gebruik 'van' in plaats van 'hun' bij bezit: de boeken van de leerlingen.",
        },
        {
          id: "tg-s2-q3",
          type: "mcq",
          prompt: "Welke zin is goed?",
          options: [
            "Ik heb vannacht heerlijk geslaapen.",
            "Ik heb vannacht heerlijk geslapen.",
            "Ik heb vannacht heerlijk gesleept.",
            "Ik slaapte vannacht heerlijk geslapen.",
          ],
          correctIndex: 1,
          explanation: "Voltooid deelwoord van slapen = geslapen.",
        },
        {
          id: "tg-s2-q4",
          type: "mcq",
          prompt: "Welke zin is goed?",
          options: [
            "Vorige week heb ik mijn oma's verjaardag gevierd.",
            "Vorige week heb ik mijn omas verjaardag gevierd.",
            "Vorige week heb ik mijn oma s verjaardag gevierd.",
            "Vorige week heb ik mijn oma's verjaar-dag gevierd.",
          ],
          correctIndex: 0,
          explanation:
            "Bij bezit na een woord op een klinker krijg je een apostrof: oma's verjaardag.",
        },
        {
          id: "tg-s2-q5",
          type: "mcq",
          prompt: "Welke zin is goed?",
          options: [
            "Hij rent sneller dan ik, omdat hij dagelijks traind.",
            "Hij rent sneller dan ik, omdat hij dagelijks traint.",
            "Hij rent sneller dan ik om dat hij dagelijks traint.",
            "Hij rent sneller dan ik omdat hij dagelijks trein.",
          ],
          correctIndex: 1,
          explanation: "Stam train -> hij traint. 'omdat' schrijf je als één woord.",
        },
      ],
    },
    {
      id: "tg-s3",
      title: "Interpunctie: kies de juiste zin",
      description: "Komma's, dubbele punten en aanhalingstekens.",
      questions: [
        {
          id: "tg-s3-q1",
          type: "mcq",
          prompt: "Waar hoort de komma in deze zin? 'De docent die de toets had nagekeken gaf uitleg.'",
          options: [
            "De docent, die de toets had nagekeken gaf uitleg.",
            "De docent die de toets had nagekeken, gaf uitleg.",
            "De docent die, de toets had nagekeken, gaf uitleg.",
            "Er hoeft geen komma in deze zin.",
          ],
          correctIndex: 1,
          explanation:
            "Na de aansluitende bijzin ('die de toets had nagekeken') komt een komma, voordat de hoofdzin verdergaat.",
        },
        {
          id: "tg-s3-q2",
          type: "mcq",
          prompt: "Welke zin is goed?",
          options: [
            "Ik heb drie dingen nodig: pen, schrift en oortjes.",
            "Ik heb drie dingen nodig, pen: schrift en oortjes.",
            "Ik heb: drie dingen nodig pen, schrift en oortjes.",
            "Ik heb drie dingen nodig pen schrift oortjes.",
          ],
          correctIndex: 0,
          explanation:
            "Na een aankondiging ('ik heb drie dingen nodig') komt een dubbele punt; in de opsomming staan komma's, niet vóór 'en'.",
        },
        {
          id: "tg-s3-q3",
          type: "mcq",
          prompt: "Welke zin geeft op de juiste manier een letterlijk gezegde weer?",
          options: [
            "Zei de rector: we willen rustigere lessen.",
            "De rector zei: 'We willen rustigere lessen.'",
            "De rector zei dat 'we willen rustigere lessen.'",
            "De rector: zei we willen rustigere lessen.",
          ],
          correctIndex: 1,
          explanation:
            "Letterlijk gesproken tekst zet je tussen aanhalingstekens, met een dubbele punt vóór het gezegde.",
        },
        {
          id: "tg-s3-q4",
          type: "mcq",
          prompt: "Welke zin is goed?",
          options: [
            "Ik kwam te laat omdat, de trein vertraging had.",
            "Ik kwam te laat, omdat de trein vertraging had.",
            "Ik kwam te laat omdat de trein vertraging had, toch.",
            "Ik kwam, te laat omdat de trein vertraging had.",
          ],
          correctIndex: 1,
          explanation: "Vóór de aansluitende bijzin met 'omdat' staat een komma.",
        },
        {
          id: "tg-s3-q5",
          type: "mcq",
          prompt: "Welke zin is goed? (Let op: geen vraag, maar een indirecte vraag.)",
          options: [
            "Hij vroeg waar ik bleef?",
            "Hij vroeg waar ik bleef.",
            "Hij vroeg: waar ik bleef?",
            "Hij vroeg waar ik bleef!?",
          ],
          correctIndex: 1,
          explanation:
            "Bij een indirecte vraag (ingeleid met 'hij vroeg') eindig je met een punt. Alleen bij een directe vraag ('Waar bleef jij?') komt een vraagteken.",
        },
        {
          id: "tg-s3-q6",
          type: "mcq",
          prompt: "Welke zin is goed?",
          options: [
            "De toets bestaat uit drie delen: tekstbegrip, kritisch kijken en fictie.",
            "De toets bestaat uit drie delen, tekstbegrip: kritisch kijken en fictie.",
            "De toets bestaat uit drie delen tekstbegrip kritisch kijken en fictie.",
            "De toets bestaat, uit drie delen: tekstbegrip, kritisch kijken en fictie.",
          ],
          correctIndex: 0,
          explanation:
            "Dubbele punt na de aankondiging, komma's tussen de onderdelen, geen komma vóór 'en'.",
        },
      ],
    },
    {
      id: "tg-s4",
      title: "Verzorgd formuleren",
      description: "Kies in elke situatie de beste formulering.",
      questions: [
        {
          id: "tg-s4-q1",
          type: "mcq",
          prompt: "Welke zin is het beste geformuleerd?",
          options: [
            "De toets wordt gemaakt door de leerlingen.",
            "De leerlingen maken de toets.",
            "Door de leerlingen wordt de toets gemaakt worden.",
            "Er wordt dusdanig een toets gemaakt door leerlingen.",
          ],
          correctIndex: 1,
          explanation:
            "Actief formuleren (wie doet wat) is korter en helderder dan passief.",
        },
        {
          id: "tg-s4-q2",
          type: "mcq",
          prompt: "Welke zin is het duidelijkst voor de lezer?",
          options: [
            "Het is dus eigenlijk zo dat de reden waarom we dat doen ongeveer te maken heeft met dat het beter werkt enzo.",
            "We doen dit omdat het beter werkt.",
            "Dat dat we dat doen is omdat beter.",
            "We doen dit. Omdat het beter werkt namelijk.",
          ],
          correctIndex: 1,
          explanation: "Kort en concreet wint altijd: wie doet wat, en waarom.",
        },
        {
          id: "tg-s4-q3",
          type: "mcq",
          prompt: "'Ik heb het niet onmogelijk gevonden.' Wat bedoelt de schrijver waarschijnlijk?",
          options: [
            "Het was onmogelijk",
            "Het was lastig, maar haalbaar",
            "De schrijver heeft het niet gelezen",
            "Dat is onduidelijk geformuleerd – de dubbele ontkenning maakt de zin verwarrend",
          ],
          correctIndex: 3,
          explanation:
            "Dubbele ontkenning ('niet onmogelijk') is verwarrend. Beter: 'Het was lastig, maar haalbaar.'",
        },
        {
          id: "tg-s4-q4",
          type: "mcq",
          prompt: "Je schrijft een formele brief aan je docent. Welke zin past?",
          options: [
            "He docent, ff iets vragen over de discussie oké?",
            "Geachte docent, ik heb een vraag over de voorbereiding van de discussie.",
            "Yo, mijn onderwerp is niet gelukt man sorry.",
            "hoi ik kom niet",
          ],
          correctIndex: 1,
          explanation:
            "In een formele brief: aanhef, verzorgde taal en geen chatwoorden zoals 'ff' of 'oké'.",
        },
        {
          id: "tg-s4-q5",
          type: "mcq",
          prompt: "Welke zin hoort in een inleiding van je discussie (gesproken taal, maar verzorgd)?",
          options: [
            "Vandaag ga ik het hebben over dat ding met telefoons enzo, weet je.",
            "Vandaag bespreken we een actueel onderwerp: telefoons in de klas. Mijn stelling is: 'Telefoons horen niet in de les.'",
            "Telefoons, ja, daar heb ik dus echt zo'n mening over, echt waar.",
            "Het onderwerp is telefoons. Discussiëren maar.",
          ],
          correctIndex: 1,
          explanation:
            "Gesproken maar verzorgd: benoem het onderwerp en je stelling duidelijk. Uitgelaten of te kort is minder sterk.",
        },
      ],
    },
  ],
  exams: [
    {
      id: "tg-ex1",
      title: "Toetsmodus: Taalgebruik",
      description: "18 vragen uit deze module, feedback pas na afloop.",
      minutes: 15,
      questions: [],
    },
  ],
  flashcards: [
    {
      id: "tg-fc1",
      front: "Werkwoord: ik-vorm",
      back: "Nooit een extra t: ik antwoord, ik praat, ik word.",
    },
    {
      id: "tg-fc2",
      front: "Werkwoord: hij/jij-vorm",
      back: "Krijgt t (of dt als de stam op t/d eindigt): hij praat, hij antwoordt, hij wordt.",
    },
    {
      id: "tg-fc3",
      front: "Komma bij aansluitende bijzin",
      back: "Vóór omdat/terwijl/want-zinnen: 'Ik kwam te laat, omdat de trein vertraging had.'",
    },
    {
      id: "tg-fc4",
      front: "Dubbele punt",
      back: "Na een aankondiging of vóór een opsomming: 'Ik heb drie dingen nodig: pen, schrift en oortjes.'",
    },
    {
      id: "tg-fc5",
      front: "Aanhalingstekens",
      back: "Rond letterlijk gesproken tekst: De rector zei: 'We willen rustigere lessen.'",
    },
    {
      id: "tg-fc6",
      front: "Indirecte vraag",
      back: "Eindigt met een punt, geen vraagteken: 'Hij vroeg waar ik bleef.'",
    },
    {
      id: "tg-fc7",
      front: "Actief formuleren",
      back: "Wie doet wat, vooraan in de zin: 'De leerlingen maken de toets.' (niet 'wordt gemaakt door').",
    },
    {
      id: "tg-fc8",
      front: "Opsomming",
      back: "Komma's tussen onderdelen, geen komma vóór 'en': 'pen, schrift en oortjes'.",
    },
  ],
};
