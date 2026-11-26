"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useStudy } from "@/lib/store";
import type { Flashcard } from "@/lib/types";
import { icons } from "./accents";

const { refresh: Refresh } = icons;

export function FlashcardTrainer({ cards, title }: { cards: Flashcard[]; title: string }) {
  const stats = useStudy((s) => s.cards);
  const recordAnswer = useStudy((s) => s.recordAnswer);
  const [queueIdx, setQueueIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [tick, setTick] = useState(0);

  // sorteer: eerst nieuwe kaarten, dan kaarten die aan de beurt zijn, dan de rest
  const queue = useMemo(() => {
    const now = Date.now();
    const score = (c: Flashcard) => {
      const st = stats[c.id];
      if (!st || st.seen === 0) return -2; // nieuw
      if (st.due <= now) return -1; // te herhalen
      return st.box;
    };
    return [...cards].sort((a, b) => score(a) - score(b));
  }, [cards, tick]);

  useEffect(() => {
    setQueueIdx(0);
    setFlipped(false);
  }, [cards]);

  if (cards.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">Geen kaarten in deze module.</CardContent>
      </Card>
    );
  }

  if (queueIdx >= queue.length) {
    return (
      <Card>
        <CardContent className="p-6 text-center space-y-3">
          <p className="text-lg font-semibold">Ronde afgerond!</p>
          <p className="text-muted-foreground">
            Kaarten waar je op &quot;Nog lastig&quot; drukte komen straks eerst terug. Kom morgen weer voor het beste
            resultaat – herhaling op oplopende afstanden is de snelste manier om iets te onthouden.
          </p>
          <Button
            onClick={() => {
              setTick((t) => t + 1);
              setQueueIdx(0);
              setFlipped(false);
            }}
          >
            <Refresh className="size-4 mr-1" aria-hidden /> Nog een ronde
          </Button>
        </CardContent>
      </Card>
    );
  }

  const card = queue[queueIdx];
  const st = stats[card.id];

  function answer(correct: boolean) {
    recordAnswer(card.id, correct, correct ? 5 : 2);
    setFlipped(false);
    setQueueIdx((i) => i + 1);
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">
          Kaart {queueIdx + 1} van {queue.length}
          {st && st.seen > 0 ? ` · gezien ${st.seen}x` : " · nieuwe kaart"}
        </p>
      </div>
      <Progress value={(queueIdx / queue.length) * 100} aria-label="Voortgang flashcards" />
      <Card
        className="min-h-48 cursor-pointer select-none transition-shadow hover:shadow-md"
        onClick={() => setFlipped((f) => !f)}
      >
        <CardContent className="p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-48 gap-3">
          {!flipped ? (
            <>
              <p className="text-xl sm:text-2xl font-bold">{card.front}</p>
              <p className="text-xs text-muted-foreground">Tik op de kaart om het antwoord te zien</p>
            </>
          ) : (
            <>
              <p className="text-lg">{card.back}</p>
              {card.example && <p className="text-sm text-muted-foreground italic">Bijv. {card.example}</p>}
            </>
          )}
        </CardContent>
      </Card>
      {flipped && (
        <div className="flex flex-wrap gap-2 justify-center">
          <Button variant="outline" onClick={() => answer(false)}>
            Nog lastig
          </Button>
          <Button onClick={() => answer(true)}>Weten!</Button>
        </div>
      )}
    </div>
  );
}
