"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ModuleIcon, accents, icons } from "./accents";
import { FlashcardTrainer } from "./FlashcardTrainer";
import { useStudy } from "@/lib/store";
import { moduleQuestions, buildExamQuestions } from "@/lib/content";
import type { Module, Question } from "@/lib/types";

const { clock: Clock, check: Check, calendar: Calendar, volume: Volume } = icons;

export type ExerciseConfig = {
  moduleId: string;
  setId: string;
  title: string;
  subtitle?: string;
  questions: Question[];
  mode: "practice" | "exam";
  minutes?: number;
  reading?: { title: string; paragraphs: string[] };
  audioText?: string;
};

type Props = {
  mod: Module;
  onExit: () => void;
  onStartExercise: (cfg: ExerciseConfig) => void;
};

export function ModuleView({ mod, onExit, onStartExercise }: Props) {
  const a = accents[mod.accent];
  const sets = mod.texts
    ? [
        ...(mod.texts ?? []).map((t) => ({
          id: t.id,
          title: t.title,
          description: t.intro ?? "Oefentekst met vragen.",
          questions: t.questions,
          reading: { title: t.title, paragraphs: t.paragraphs },
        })),
        ...mod.sets.map((s) => ({ id: s.id, title: s.title, description: s.description, questions: s.questions, reading: undefined })),
      ]
    : mod.sets.map((s) => ({ id: s.id, title: s.title, description: s.description, questions: s.questions, reading: undefined }));

  const listeningSetId = mod.id === "kritisch" ? "kr-s3" : undefined;

  return (
    <div className="space-y-5">
      <section className={`rounded-2xl ${a.soft} p-5 sm:p-6`}>
        <div className="flex items-start gap-3">
          <span className="rounded-xl bg-background/60 p-2.5">
            <ModuleIcon mod={mod} className="size-6" />
          </span>
          <div className="grow">
            <h1 className="text-xl sm:text-2xl font-extrabold">{mod.title}</h1>
            <p className="text-sm mt-0.5 opacity-90">{mod.subtitle}</p>
          </div>
          <Button variant="outline" onClick={onExit} className="shrink-0 hidden sm:inline-flex">
            Terug
          </Button>
        </div>
        <ul className="mt-3 space-y-1 text-sm list-disc list-inside opacity-90">
          {mod.examInfo.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ul>
      </section>

      <Tabs defaultValue="theorie">
        <TabsList className="w-full flex-wrap h-auto gap-1">
          <TabsTrigger value="theorie">Info & theorie</TabsTrigger>
          <TabsTrigger value="oefenen">Oefenen</TabsTrigger>
          {mod.exams && mod.exams.length > 0 && <TabsTrigger value="toets">Toetsmodus</TabsTrigger>}
          {mod.flashcards && mod.flashcards.length > 0 && <TabsTrigger value="flash">Flashcards</TabsTrigger>}
        </TabsList>

        <TabsContent value="theorie" className="space-y-4 mt-4">
          {mod.deadlines && mod.deadlines.length > 0 && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Calendar className="size-4" aria-hidden /> Deadlines SE613
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {mod.deadlines.map((d, i) => (
                    <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <span>{d.what}</span>
                      <Badge variant="outline" className="self-start whitespace-nowrap">
                        {d.when}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {mod.theory.map((block, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{block.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-muted-foreground">
                {block.paragraphs?.map((p, j) => (
                  <p key={j} className="leading-relaxed">
                    {p}
                  </p>
                ))}
                {block.bullets && (
                  <ul className="list-disc list-inside space-y-1 leading-relaxed">
                    {block.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}

          {mod.checklist && mod.checklist.length > 0 && <ChecklistCard mod={mod} />}
        </TabsContent>

        <TabsContent value="oefenen" className="space-y-3 mt-4">
          {sets.map((s) => {
            return (
              <SetRow
                key={s.id}
                id={s.id}
                title={s.title}
                description={s.description}
                count={s.questions.length}
                hasReading={!!s.reading}
                onStart={() =>
                  onStartExercise({
                    moduleId: mod.id,
                    setId: s.id,
                    title: s.title,
                    questions: s.questions,
                    mode: "practice",
                    reading: s.reading,
                    audioText: s.id === listeningSetId ? mod.listeningText : undefined,
                  })
                }
              />
            );
          })}
        </TabsContent>

        {mod.exams && mod.exams.length > 0 && (
          <TabsContent value="toets" className="space-y-3 mt-4">
            {mod.exams.map((ex) => (
              <Card key={ex.id}>
                <CardContent className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">{ex.title}</p>
                    <p className="text-sm text-muted-foreground">{ex.description}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <Clock className="size-3.5" aria-hidden /> {ex.minutes} minuten · {Math.min(12, moduleQuestions(mod).length)} vragen
                    </p>
                  </div>
                  <Button
                    className={a.solid}
                    onClick={() =>
                      onStartExercise({
                        moduleId: mod.id,
                        setId: ex.id,
                        title: ex.title,
                        questions: buildExamQuestions(mod, ex.id),
                        mode: "exam",
                        minutes: ex.minutes,
                      })
                    }
                  >
                    Start toets
                  </Button>
                </CardContent>
              </Card>
            ))}
            <p className="text-xs text-muted-foreground">
              In de toetsmodus krijg je pas na inleveren feedback – zo train je je examen-conditie. De timer loopt mee.
            </p>
          </TabsContent>
        )}

        {mod.flashcards && mod.flashcards.length > 0 && (
          <TabsContent value="flash" className="mt-4">
            <FlashcardsLazy mod={mod} />
          </TabsContent>
        )}
      </Tabs>

      <div className="sm:hidden">
        <Button variant="outline" onClick={onExit} className="w-full">
          Terug naar overzicht
        </Button>
      </div>
    </div>
  );
}

function SetRow({
  id,
  title,
  description,
  count,
  hasReading,
  onStart,
}: {
  id: string;
  title: string;
  description?: string;
  count: number;
  hasReading: boolean;
  onStart: () => void;
}) {
  const setsStore = useStudy((s) => s.sets);
  const stat = setsStore[id];
  const best = stat?.bestPct ?? 0;
  return (
    <Card>
      <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="grow">
          <p className="font-semibold flex items-center gap-2 flex-wrap">
            {title}
            {hasReading && (
              <Badge variant="outline" className="gap-1">
                <Volume className="size-3" aria-hidden /> tekst
              </Badge>
            )}
          </p>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
          <div className="flex items-center gap-2 mt-1.5">
            <Progress value={best} className="h-1.5 max-w-40" aria-label={`Beste score ${title}`} />
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {best}% {stat ? `(beste van ${stat.attempts})` : ""}
            </span>
          </div>
        </div>
        <Button onClick={onStart} className="shrink-0">
          {stat ? "Opnieuw" : "Start"} · {count} vragen
        </Button>
      </CardContent>
    </Card>
  );
}

function ChecklistCard({ mod }: { mod: Module }) {
  const checklist = useStudy((s) => s.checklist);
  const toggle = useStudy((s) => s.toggleChecklist);
  const items = mod.checklist ?? [];
  const done = items.filter((i) => checklist[i.id]).length;
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <Check className="size-4" aria-hidden /> Voorbereidingschecklist ({done}/{items.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Progress value={(done / items.length) * 100} className="mb-2" aria-label="Checklist voortgang" />
        {items.map((item) => (
          <label
            key={item.id}
            className="flex items-start gap-3 rounded-lg border p-3 cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <Checkbox checked={!!checklist[item.id]} onCheckedChange={() => toggle(item.id)} className="mt-0.5" />
            <span>
              <span className={`text-sm font-medium ${checklist[item.id] ? "line-through opacity-60" : ""}`}>
                {item.label}
              </span>
              {item.detail && <span className="block text-xs text-muted-foreground mt-0.5">{item.detail}</span>}
            </span>
          </label>
        ))}
      </CardContent>
    </Card>
  );
}

function FlashcardsLazy({ mod }: { mod: Module }) {
  const [started, setStarted] = useState(false);
  if (!started) {
    return (
      <Card>
        <CardContent className="p-6 text-center space-y-3">
          <p className="font-semibold">{mod.flashcards?.length ?? 0} begripskaarten</p>
          <p className="text-sm text-muted-foreground">
            Draai de kaart om, bedenk het antwoord en check jezelf. Nieuwe en lastige kaarten komen automatisch vaker
            terug.
          </p>
          <Button onClick={() => setStarted(true)}>Start flashcards</Button>
        </CardContent>
      </Card>
    );
  }
  return <FlashcardTrainer cards={mod.flashcards ?? []} title={`Flashcards: ${mod.title}`} />;
}
