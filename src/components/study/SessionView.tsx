"use client";

import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExercisePlayer } from "./ExercisePlayer";
import { icons } from "./accents";
import { useStudy, isDue } from "@/lib/store";
import { allQuestions } from "@/lib/content";
import type { Question } from "@/lib/types";

const { refresh: Refresh, shuffle: Shuffle } = icons;

type Props = {
  kind: "review" | "mix";
  onExit: () => void;
  onOpenMix: () => void;
};

export function SessionView({ kind, onExit, onOpenMix }: Props) {
  const cards = useStudy((s) => s.cards);

  const questions = useMemo<Question[]>(() => {
    const all = allQuestions();
    if (kind === "review") {
      const now = Date.now();
      return all
        .filter((x) => isDue(cards[x.q.id], now))
        .sort((a, b) => (cards[a.q.id]?.due ?? 0) - (cards[b.q.id]?.due ?? 0))
        .map((x) => x.q);
    }
    // mix: 12 willekeurige vragen
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 12).map((x) => x.q);
  }, [kind]);

  if (kind === "review" && questions.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center space-y-4">
          <Refresh className="size-10 mx-auto text-primary" aria-hidden />
          <p className="text-lg font-semibold">Niks te herhalen op dit moment</p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Je hebt alles wat je tot nu toe deed al herhaald – goed gedaan! Nieuwe herhalingsvragen verschijnen
            automatisch (na 10 minuten, 1 dag, 3 dagen, 7 dagen, 14 dagen of 30 dagen). Doe intussen een mix-oefening
            om nieuwe vragen te leren.
          </p>
          <Button onClick={onOpenMix}>
            <Shuffle className="size-4 mr-1" aria-hidden /> Start mix-oefening
          </Button>
          <div>
            <Button variant="ghost" onClick={onExit}>
              Terug naar overzicht
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <ExercisePlayer
      title={kind === "review" ? "Herhaling" : "Mix-oefening"}
      subtitle={
        kind === "review"
          ? "Vragen die je nog niet goed vast hebt, komen hier terug"
          : "Willekeurige vragen uit alle modules – zo leer je onderlinge verbanden zien"
      }
      questions={questions}
      mode={kind === "review" ? "review" : "mix"}
      onExit={onExit}
    />
  );
}
