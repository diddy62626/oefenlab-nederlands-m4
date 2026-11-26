"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { icons, shuffleSeeded } from "./accents";
import type { Question } from "@/lib/types";

const { check: Check, bulb: Bulb } = icons;

function normalize(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[.!?]+$/, "")
    .replace(/\s+/g, " ");
}

type Props = {
  question: Question;
  revealed: boolean;
  onAnswer: (correct: boolean) => void;
};

export function QuestionView({ question: q, revealed, onAnswer }: Props) {
  if (q.type === "mcq") return <McqView key={q.id} q={q} revealed={revealed} onAnswer={onAnswer} />;
  if (q.type === "fill") return <FillView key={q.id} q={q} revealed={revealed} onAnswer={onAnswer} />;
  if (q.type === "order") return <OrderView key={q.id} q={q} revealed={revealed} onAnswer={onAnswer} />;
  return <SortView key={q.id} q={q} revealed={revealed} onAnswer={onAnswer} />;
}

function McqView({
  q,
  revealed,
  onAnswer,
}: {
  q: Extract<Question, { type: "mcq" }>;
  revealed: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const order = useMemo(() => shuffleSeeded(q.options.map((_, i) => i), q.id), [q]);

  const choose = (i: number) => {
    if (revealed) return;
    setPicked(i);
    onAnswer(i === q.correctIndex);
  };

  return (
    <div className="space-y-3">
      <p className="text-base font-medium leading-relaxed">{q.prompt}</p>
      {q.hint && !revealed && (
        <div>
          <Button variant="ghost" size="sm" onClick={() => setShowHint((s) => !s)} className="text-muted-foreground">
            <Bulb className="size-4 mr-1" aria-hidden /> Hint
          </Button>
          {showHint && <p className="text-sm text-muted-foreground mt-1">{q.hint}</p>}
        </div>
      )}
      <div className="grid gap-2" role="radiogroup" aria-label={q.prompt}>
        {order.map((origIdx) => {
          const isCorrect = origIdx === q.correctIndex;
          const isPicked = picked === origIdx;
          let cls =
            "justify-start text-left h-auto py-3 px-4 border rounded-xl transition-colors min-h-11 whitespace-normal";
          if (revealed) {
            if (isCorrect) cls += " border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200";
            else if (isPicked) cls += " border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950 dark:text-rose-200";
            else cls += " opacity-60";
          } else if (isPicked) {
            cls += " border-primary bg-primary/10";
          } else {
            cls += " hover:bg-muted/60 border-border";
          }
          return (
            <Button
              key={origIdx}
              variant="outline"
              role="radio"
              aria-checked={isPicked}
              className={cls}
              onClick={() => choose(origIdx)}
              disabled={revealed}
            >
              <span className="mr-2 font-semibold">{String.fromCharCode(65 + order.indexOf(origIdx))}.</span>
              <span>{q.options[origIdx]}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

function FillView({
  q,
  revealed,
  onAnswer,
}: {
  q: Extract<Question, { type: "fill" }>;
  revealed: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const checkAnswer = () => {
    if (!value.trim() || checked) return;
    const ok = q.accepted.map(normalize).includes(normalize(value));
    setChecked(true);
    onAnswer(ok);
  };

  const ok = checked && q.accepted.map(normalize).includes(normalize(value));

  return (
    <div className="space-y-3">
      <p className="text-base font-medium leading-relaxed">{q.prompt}</p>
      <div className="flex gap-2 max-w-md">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={q.placeholder ?? "antwoord"}
          disabled={revealed}
          onKeyDown={(e) => {
            if (e.key === "Enter") checkAnswer();
          }}
          aria-label="Jouw antwoord"
          className={
            checked
              ? ok
                ? "border-emerald-500"
                : "border-rose-500"
              : ""
          }
        />
        {!revealed && (
          <Button onClick={checkAnswer} disabled={!value.trim() || checked}>
            <Check className="size-4 mr-1" aria-hidden /> Controleer
          </Button>
        )}
      </div>
      {checked && !ok && (
        <p className="text-sm text-muted-foreground">
          Goed was: <span className="font-semibold">{q.accepted[0]}</span>
        </p>
      )}
    </div>
  );
}

function OrderView({
  q,
  revealed,
  onAnswer,
}: {
  q: Extract<Question, { type: "order" }>;
  revealed: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [sequence, setSequence] = useState<number[]>([]);
  const order = useMemo(() => shuffleSeeded(q.items.map((_, i) => i), q.id), [q]);

  const toggleItem = (i: number) => {
    if (revealed) return;
    setSequence((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
  };

  const checkAnswer = () => {
    if (sequence.length !== q.items.length || revealed) return;
    const ok = sequence.every((v, idx) => v === idx);
    onAnswer(ok);
  };

  const ok = sequence.every((v, idx) => v === idx);

  return (
    <div className="space-y-4">
      <p className="text-base font-medium leading-relaxed">{q.prompt}</p>
      <div>
        <p className="text-sm text-muted-foreground mb-2">
          Jouw volgorde (klik op een item om te verwijderen):
        </p>
        <div className="space-y-2 mb-3 min-h-10">
          {sequence.map((i, pos) => (
            <button
              key={i}
              onClick={() => toggleItem(i)}
              disabled={revealed}
              className={`w-full text-left rounded-lg border px-3 py-2 text-sm transition-colors ${
                revealed
                  ? ok
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950"
                    : "border-rose-500 bg-rose-50 dark:bg-rose-950"
                  : "border-primary/40 bg-primary/5 hover:bg-primary/10"
              }`}
            >
              <span className="font-bold mr-2">{pos + 1}.</span>
              {q.items[i]}
            </button>
          ))}
          {sequence.length === 0 && <p className="text-sm text-muted-foreground italic">Nog leeg – klik hieronder.</p>}
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Klik de onderdelen in de juiste volgorde:</p>
        <div className="space-y-2">
          {order
            .filter((i) => !sequence.includes(i))
            .map((i) => (
              <Button
                key={i}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 whitespace-normal min-h-11"
                onClick={() => toggleItem(i)}
                disabled={revealed}
              >
                {q.items[i]}
              </Button>
            ))}
        </div>
      </div>
      {!revealed && (
        <Button onClick={checkAnswer} disabled={sequence.length !== q.items.length}>
          <Check className="size-4 mr-1" aria-hidden /> Controleer volgorde
        </Button>
      )}
      {revealed && !ok && (
        <div className="text-sm space-y-1">
          <p className="font-semibold">Dit was de juiste volgorde:</p>
          {q.items.map((it, i) => (
            <p key={i} className="text-muted-foreground">
              {i + 1}. {it}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function SortView({
  q,
  revealed,
  onAnswer,
}: {
  q: Extract<Question, { type: "sort" }>;
  revealed: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  return <SortInner q={q} revealed={revealed} onAnswer={onAnswer} />;
}

function SortInner({
  q,
  revealed,
  onAnswer,
}: {
  q: Extract<Question, { type: "sort" }>;
  revealed: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [picks, setPicks] = useState<Record<number, number>>({});
  const items = useMemo(() => shuffleSeeded(q.items.map((it, i) => ({ ...it, i })), q.id), [q]);

  const allAssigned = q.items.every((_, i) => picks[i] !== undefined);

  const checkAnswer = () => {
    if (!allAssigned || revealed) return;
    const ok = q.items.every((it, i) => picks[i] === it.bucket);
    onAnswer(ok);
  };

  const correctCount = q.items.filter((it, i) => picks[i] === it.bucket).length;
  const ok = correctCount === q.items.length;

  return (
    <div className="space-y-3">
      <p className="text-base font-medium leading-relaxed">{q.prompt}</p>
      <div className="space-y-2">
        {items.map((it) => {
          const correct = picks[it.i] === it.bucket;
          return (
            <div
              key={it.i}
              className={`rounded-xl border p-3 transition-colors ${
                revealed
                  ? correct
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950"
                    : "border-rose-500 bg-rose-50 dark:bg-rose-950"
                  : "border-border"
              }`}
            >
              <p className="text-sm mb-2">{it.text}</p>
              <div className="flex flex-wrap gap-2">
                {q.buckets.map((b, bi) => {
                  const active = picks[it.i] === bi;
                  return (
                    <Button
                      key={b}
                      variant={active ? "default" : "outline"}
                      size="sm"
                      className="min-h-9"
                      disabled={revealed}
                      onClick={() => setPicks((p) => ({ ...p, [it.i]: bi }))}
                      aria-pressed={active}
                    >
                      {b}
                    </Button>
                  );
                })}
                {revealed && (
                  <span className="text-xs text-muted-foreground self-center">
                    Goed: {q.buckets[it.bucket]}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {!revealed && (
        <Button onClick={checkAnswer} disabled={!allAssigned}>
          <Check className="size-4 mr-1" aria-hidden /> Controleer
        </Button>
      )}
      {revealed && (
        <p className={`text-sm font-medium ${ok ? "text-emerald-700 dark:text-emerald-400" : "text-rose-700 dark:text-rose-400"}`}>
          {correctCount} van de {q.items.length} goed.
        </p>
      )}
    </div>
  );
}
