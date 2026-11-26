"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CardStat } from "./types";

// Leitner-boxen: interval in dagen per box
export const SRS_INTERVALS_DAYS = [10 / 1440, 1, 3, 7, 14, 30]; // box 0 = 10 minuten

const DAY_MS = 24 * 60 * 60 * 1000;

function newStat(): CardStat {
  return { box: 0, due: Date.now(), correct: 0, wrong: 0, seen: 0 };
}

export function todayString(): string {
  return new Date().toISOString().slice(0, 10);
}

type StudyState = {
  xp: number;
  streakDays: number;
  lastPracticeDay: string | null;
  // voortgang per vraag-id en per flashcard-id
  cards: Record<string, CardStat>;
  sets: Record<string, { bestPct: number; attempts: number }>;
  checklist: Record<string, boolean>;
  // acties
  recordAnswer: (id: string, correct: boolean, xpGain?: number) => void;
  recordSet: (setId: string, pct: number) => void;
  toggleChecklist: (id: string) => void;
  resetAll: () => void;
};

export const useStudy = create<StudyState>()(
  persist(
    (set) => ({
      xp: 0,
      streakDays: 0,
      lastPracticeDay: null,
      cards: {},
      sets: {},
      checklist: {},
      recordAnswer: (id, correct, xpGain) =>
        set((state) => {
          const prev = state.cards[id] ?? newStat();
          const next: CardStat = {
            seen: prev.seen + 1,
            correct: prev.correct + (correct ? 1 : 0),
            wrong: prev.wrong + (correct ? 0 : 1),
            box: correct ? Math.min(prev.box + 1, SRS_INTERVALS_DAYS.length - 1) : 0,
            due: correct
              ? Date.now() + SRS_INTERVALS_DAYS[Math.min(prev.box + 1, SRS_INTERVALS_DAYS.length - 1)] * DAY_MS
              : Date.now() + 10 * 60 * 1000,
          };
          const today = todayString();
          let streakDays = state.streakDays;
          if (state.lastPracticeDay !== today) {
            const yesterday = new Date(Date.now() - DAY_MS).toISOString().slice(0, 10);
            streakDays = state.lastPracticeDay === yesterday ? state.streakDays + 1 : 1;
          }
          return {
            cards: { ...state.cards, [id]: next },
            xp: state.xp + (xpGain ?? (correct ? 10 : 2)),
            streakDays,
            lastPracticeDay: today,
          };
        }),
      recordSet: (setId, pct) =>
        set((state) => {
          const prev = state.sets[setId] ?? { bestPct: 0, attempts: 0 };
          return {
            sets: {
              ...state.sets,
              [setId]: { bestPct: Math.max(prev.bestPct, pct), attempts: prev.attempts + 1 },
            },
          };
        }),
      toggleChecklist: (id) =>
        set((state) => ({ checklist: { ...state.checklist, [id]: !state.checklist[id] } })),
      resetAll: () =>
        set({
          xp: 0,
          streakDays: 0,
          lastPracticeDay: null,
          cards: {},
          sets: {},
          checklist: {},
        }),
    }),
    { name: "oefenlab-m4-nl-p2" }
  )
);

export function isDue(stat: CardStat | undefined, now = Date.now()): boolean {
  return !!stat && stat.due <= now && stat.seen > 0;
}

export function isMastered(stat: CardStat | undefined): boolean {
  return !!stat && stat.box >= 2;
}

export function levelFromXp(xp: number): { level: number; inLevel: number; needed: number } {
  const needed = 150;
  const level = Math.floor(xp / needed) + 1;
  const inLevel = xp % needed;
  return { level, inLevel, needed };
}
