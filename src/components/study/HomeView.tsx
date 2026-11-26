"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ModuleIcon, accents, icons } from "./accents";
import { useStudy, levelFromXp, isDue, isMastered } from "@/lib/store";
import { modules, allQuestions, moduleQuestions } from "@/lib/content";
import type { Module } from "@/lib/types";

const { flame: Flame, zap: Zap, refresh: Refresh, shuffle: Shuffle, cap: Cap, check: Check } = icons;

type Props = {
  onOpenModule: (moduleId: string) => void;
  onOpenReview: () => void;
  onOpenMix: () => void;
};

export function HomeView({ onOpenModule, onOpenReview, onOpenMix }: Props) {
  const { xp, streakDays, cards } = useStudy();
  const { level, inLevel, needed } = levelFromXp(xp);

  const all = allQuestions();
  const now = Date.now();
  const dueCount = all.filter((x) => isDue(cards[x.q.id], now)).length;
  const totalSeen = Object.values(cards).filter((c) => c.seen > 0).length;

  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="rounded-2xl bg-primary text-primary-foreground p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm opacity-80 flex items-center gap-1.5">
              <Cap className="size-4" aria-hidden /> Nederlands MAVO 4 · Periode 2 · Schoolexamens SE612 + SE613
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">Oefenlab Nederlands</h1>
            <p className="text-sm sm:text-base opacity-90 mt-1 max-w-xl">
              Oefenen zoals je brein het beste onthoudt: actief ophalen, meteen feedback en herhaling op de
              juiste momenten.
            </p>
          </div>
          <div className="flex sm:flex-col gap-2 sm:text-right">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-sm font-semibold self-start">
              <Flame className="size-4" aria-hidden /> {streakDays} dag{streakDays === 1 ? "" : "en"} streak
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-sm font-semibold self-start">
              <Zap className="size-4" aria-hidden /> {xp} XP · niveau {level}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <div className="h-2 rounded-full bg-primary-foreground/20 overflow-hidden">
            <div className="h-full bg-primary-foreground/90 rounded-full transition-all" style={{ width: `${(inLevel / needed) * 100}%` }} />
          </div>
          <p className="text-xs opacity-75 mt-1">Nog {needed - inLevel} XP tot niveau {level + 1}</p>
        </div>
      </section>

      {/* Snelle acties */}
      <section className="grid gap-3 sm:grid-cols-2">
        <Card className={dueCount > 0 ? "border-primary" : ""}>
          <CardContent className="p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-primary/10 p-2.5">
                <Refresh className="size-5 text-primary" aria-hidden />
              </span>
              <div>
                <p className="font-semibold">Herhaling</p>
                <p className="text-sm text-muted-foreground">
                  {dueCount > 0 ? `${dueCount} vraag${dueCount === 1 ? "" : "en"} staat klaar` : "Alles wat je hebt geleerd zit veilig in je geheugen (voor nu)"}
                </p>
              </div>
            </div>
            <Button onClick={onOpenReview} disabled={dueCount === 0 && totalSeen === 0}>
              {dueCount > 0 ? "Herhalen" : "Terugblik"}
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-primary/10 p-2.5">
                <Shuffle className="size-5 text-primary" aria-hidden />
              </span>
              <div>
                <p className="font-semibold">Mix-oefening</p>
                <p className="text-sm text-muted-foreground">12 willekeurige vragen uit alle modules</p>
              </div>
            </div>
            <Button onClick={onOpenMix}>Start</Button>
          </CardContent>
        </Card>
      </section>

      {/* Schoolexamens */}
      <section>
        <h2 className="text-lg font-bold mb-3">Jouw twee schoolexamens (samen 50% van je SE-cijfer)</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-base">
                SE612 – Kijken & luisteren
                <Badge>25%</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1.5 text-muted-foreground">
              <p>Cito kijk- en luistertoets (KLT) in Woots, duur ±2 uur. Login met je Entrée-gegevens.</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Tekstbegrip (lang fragment + vragen)</li>
                <li>Kritisch kijken & luisteren (kort fragment)</li>
                <li>Fictie (kort fragment)</li>
              </ul>
              <p>Neem mee: opgeladen Chromebook, oplader, oortjes mét snoer.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-base">
                SE613 – Spreken (discussie)
                <Badge>25%</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1.5 text-muted-foreground">
              <p>Groepsdiscussie met 5 leerlingen. Jij bent één keer gespreksleider van je eigen stelling.</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Inleiding ±1,5 min · discussie ±7 min · afsluiting</li>
                <li>Vier artikelen: 2 vóór, 2 tegen</li>
                <li>Beoordeeld door twee docenten, ook je deelname aan andere discussies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modules */}
      <section>
        <h2 className="text-lg font-bold mb-3">Kies een module om te oefenen</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <ModuleCard key={mod.id} mod={mod} onOpen={() => onOpenModule(mod.id)} cards={cards} />
          ))}
        </div>
      </section>

      {/* Leermethode */}
      <section>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Zo werkt dit oefenlab (en waarom dat werkt)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong className="text-foreground">1. Actief ophalen:</strong> je haalt antwoorden uit je hoofd in plaats
              van ze te herlezen. Dat klinkt zwaarder, maar dat is precies wat je geheugen versterkt.
            </p>
            <p>
              <strong className="text-foreground">2. Meteen feedback:</strong> na elke vraag zie je direct uitleg, zodat
              je fouten ter plekke corrigeert.
            </p>
            <p>
              <strong className="text-foreground">3. Slimme herhaling:</strong> wat je fout doet komt snel terug, wat je
              goed doet pas later (na 1, 3, 7, 14 en 30 dagen). Kijk bij <em>Herhaling</em> wanneer er vragen klaar
              staan – een paar minuten per dag is genoeg.
            </p>
            <p>
              <strong className="text-foreground">4. Toetsmodus:</strong> oefen ook zonder meteen feedback en met de
              klok, net als op de echte KLT.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function ModuleCard({
  mod,
  onOpen,
  cards,
}: {
  mod: Module;
  onOpen: () => void;
  cards: Record<string, { box: number; due: number; correct: number; wrong: number; seen: number }>;
}) {
  const a = accents[mod.accent];
  const qs = moduleQuestions(mod);
  const mastered = qs.filter((q) => isMastered(cards[q.id])).length;
  const pct = qs.length ? Math.round((mastered / qs.length) * 100) : 0;
  const nFlash = mod.flashcards?.length ?? 0;

  return (
    <Card className={`flex flex-col ${a.border}`}>
      <CardContent className="p-5 flex flex-col gap-3 grow">
        <div className="flex items-start gap-3">
          <span className={`rounded-xl p-2.5 ${a.soft}`}>
            <ModuleIcon mod={mod} className="size-5" />
          </span>
          <div>
            <h3 className="font-bold leading-tight">{mod.title}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{mod.subtitle}</p>
          </div>
        </div>
        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {qs.length} vragen{nFlash > 0 ? ` · ${nFlash} flashcards` : ""}
            </span>
            <span className="font-semibold">{pct}% beheerst</span>
          </div>
          <Progress value={pct} aria-label={`Voortgang ${mod.title}`} />
          <div className="flex items-center justify-between gap-2 pt-1">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Check className="size-3.5" aria-hidden /> {mastered} van {qs.length}
            </span>
            <Button size="sm" className={a.solid} onClick={onOpen}>
              Openen
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ResetButton() {
  const resetAll = useStudy((s) => s.resetAll);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          Voortgang wissen
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Voortgang wissen?</AlertDialogTitle>
          <AlertDialogDescription>
            Alle punten, streaks en herhalings planning worden gewist. Dit kun je niet ongedaan maken.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuleren</AlertDialogCancel>
          <AlertDialogAction onClick={resetAll}>Ja, wissen</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
