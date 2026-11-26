"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QuestionView } from "./QuestionView";
import { ListeningPanel } from "./ListeningPanel";
import { icons } from "./accents";
import { useStudy } from "@/lib/store";
import type { Question } from "@/lib/types";

const { clock: Clock, check: Check, refresh: Refresh } = icons;

export type PlayerMode = "practice" | "exam" | "review" | "mix";

type Props = {
  title: string;
  subtitle?: string;
  questions: Question[];
  mode: PlayerMode;
  setId?: string;
  minutes?: number;
  reading?: { title: string; paragraphs: string[] };
  audioText?: string;
  onExit: () => void;
};

export function ExercisePlayer({ title, subtitle, questions, mode, setId, minutes, reading, audioText, onExit }: Props) {
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(() => questions.map(() => false));
  const [results, setResults] = useState<(boolean | null)[]>(() => questions.map(() => null));
  const [examAnswers, setExamAnswers] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(minutes ? minutes * 60 : null);
  const [startedAt] = useState(Date.now());
  const recordedRef = useRef<Set<number>>(new Set());

  const recordAnswer = useStudy((s) => s.recordAnswer);
  const recordSet = useStudy((s) => s.recordSet);

  const isExam = mode === "exam";
  const done = isExam ? submitted : idx >= questions.length;
  const correctCount = useMemo(
    () => results.filter((r) => r === true).length,
    [results]
  );

  function handleAnswer(correct: boolean) {
    // feedback vastleggen (oefen/herhaling/mix: meteen; toets: pas bij inleveren)
    if (!isExam) {
      setResults((r) => {
        const next = [...r];
        next[idx] = correct;
        return next;
      });
      setRevealed((rev) => {
        const next = [...rev];
        next[idx] = true;
        return next;
      });
      recordAnswer(questions[idx].id, correct);
    } else {
      // in toetsmodus overschrijfbaar tot inleveren
      setExamAnswers((a) => ({ ...a, [idx]: correct }));
    }
  }

  function submitExam() {
    if (submitted) return;
    setSubmitted(true);
    // niet-beantwoorde vragen gelden als fout
    for (let i = 0; i < questions.length; i++) {
      const correct = examAnswers[i] ?? false;
      if (!recordedRef.current.has(i)) {
        recordedRef.current.add(i);
        recordAnswer(questions[i].id, correct);
      }
    }
  }

  // timer voor toetsmodus (start pas nadat submitExam bestaat)
  useEffect(() => {
    if (!isExam || !minutes) return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s === null) return s;
        if (s <= 1) {
          clearInterval(t);
          submitExam();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [isExam, minutes]);

  // set-statistiek opslaan bij afronden
  const savedRef = useRef(false);
  useEffect(() => {
    if (!done || !setId || savedRef.current) return;
    savedRef.current = true;
    const total = questions.length;
    const nCorrect = isExam
      ? Object.entries(examAnswers).filter(([, v]) => v).length
      : correctCount;
    recordSet(setId, total ? Math.round((nCorrect / total) * 100) : 0);
  }, [done, setId, isExam, examAnswers, correctCount, questions.length, recordSet]);

  function next() {
    setIdx((i) => i + 1);
  }

  function restart() {
    setIdx(0);
    setRevealed(questions.map(() => false));
    setResults(questions.map(() => null));
    setExamAnswers({});
    setSubmitted(false);
    setSecondsLeft(minutes ? minutes * 60 : null);
    recordedRef.current = new Set();
    savedRef.current = false;
  }

  if (questions.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          Er zijn hier nog geen vragen.
        </CardContent>
      </Card>
    );
  }

  // ---------- resultaten ----------
  if (done) {
    const total = questions.length;
    const nCorrect = isExam ? Object.entries(examAnswers).filter(([, v]) => v).length : correctCount;
    const pct = Math.round((nCorrect / total) * 100);
    const usedSec = Math.round((Date.now() - startedAt) / 1000);
    const feedback =
      pct >= 90
        ? "Top! Dit zit goed in je hoofd."
        : pct >= 70
          ? "Goed bezig! Nog even de foutjes herhalen."
          : pct >= 50
            ? "Mooi begin. Kom vooral terug voor de herhaling."
            : "Nog even flink oefenen – begin met de theorie.";
    return (
      <div className="space-y-4">
        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <p className="text-5xl font-extrabold">{pct}%</p>
            <p className="text-muted-foreground">
              {nCorrect} van de {total} vragen goed
              {isExam && minutes ? ` · tijd gebruikt: ${Math.floor(usedSec / 60)} min ${usedSec % 60} s` : ""}
            </p>
            <p className="font-medium">{feedback}</p>
            <div className="flex flex-wrap gap-2 justify-center pt-2">
              <Button onClick={restart} variant="outline">
                <Refresh className="size-4 mr-1" aria-hidden /> Opnieuw
              </Button>
              <Button onClick={onExit}>Terug</Button>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-3">
          <h3 className="font-semibold">Bespreek de vragen nog even na:</h3>
          {questions.map((q, i) => {
            const wasCorrect = isExam ? examAnswers[i] : results[i];
            return (
              <Card key={q.id} className={wasCorrect ? "border-emerald-300" : "border-rose-300"}>
                <CardContent className="p-4 space-y-2">
                  <p className="font-medium text-sm">
                    <span className={wasCorrect ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}>
                      {wasCorrect ? "✔" : "✘"}
                    </span>{" "}
                    Vraag {i + 1}: {q.prompt}
                  </p>
                  {q.type === "mcq" && (
                    <p className="text-sm text-muted-foreground">Goed antwoord: {q.options[q.correctIndex]}</p>
                  )}
                  {q.type === "fill" && <p className="text-sm text-muted-foreground">Goed antwoord: {q.accepted[0]}</p>}
                  {q.type === "order" && (
                    <p className="text-sm text-muted-foreground">Goede volgorde: {q.items.join(" → ")}</p>
                  )}
                  {q.type === "sort" && (
                    <p className="text-sm text-muted-foreground">
                      Indeling: {q.items.map((it) => `${it.text} → ${q.buckets[it.bucket]}`).join(" · ")}
                    </p>
                  )}
                  <p className="text-sm bg-muted rounded-lg p-3">{q.explanation}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------- vraag ----------
  const q = questions[idx];
  const progress = ((idx + (isExam ? 0 : 1)) / questions.length) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold leading-tight">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        {isExam && secondsLeft !== null && (
          <span className="flex items-center gap-1 text-sm font-mono font-semibold bg-muted rounded-lg px-3 py-1.5">
            <Clock className="size-4" aria-hidden />
            {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, "0")}
          </span>
        )}
      </div>
      <Progress value={progress} aria-label="Voortgang" />
      <p className="text-xs text-muted-foreground">
        Vraag {idx + 1} van {questions.length}
        {isExam ? " · toetsmodus: feedback komt na inleveren" : mode === "practice" ? " · oefenmodus: meteen feedback" : ""}
      </p>

      {audioText && idx === 0 && <ListeningPanel text={audioText} />}

      {reading && (
        <Card>
          <CardContent className="p-4 space-y-2">
            <h3 className="font-bold">{reading.title}</h3>
            <div className="max-h-72 overflow-y-auto space-y-2 pr-2 text-sm leading-relaxed scroll-smooth">
              {reading.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-4 sm:p-6">
          <QuestionView question={q} revealed={revealed[idx]} onAnswer={handleAnswer} />
          {!isExam && revealed[idx] && (
            <div className="mt-4 space-y-3">
              <p
                className={`rounded-lg p-3 text-sm font-medium ${
                  results[idx]
                    ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200"
                    : "bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200"
                }`}
              >
                {results[idx] ? "Goed!" : "Helaas, niet goed."}
              </p>
              <p className="text-sm text-muted-foreground bg-muted rounded-lg p-3">{q.explanation}</p>
              <Button onClick={next}>
                {idx === questions.length - 1 ? "Bekijk je score" : "Volgende vraag"}
              </Button>
            </div>
          )}
          {isExam && (
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0}>
                Vorige
              </Button>
              {idx < questions.length - 1 ? (
                <Button onClick={next}>Volgende</Button>
              ) : (
                <Button onClick={submitExam}>
                  <Check className="size-4 mr-1" aria-hidden /> Inleveren
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
