import type { Module, Question } from "../types";
import { tekstbegrip } from "./tekstbegrip";
import { kritisch } from "./kritisch";
import { fictie } from "./fictie";
import { discussie } from "./discussie";
import { taalgebruik } from "./taalgebruik";

export const modules: Module[] = [tekstbegrip, kritisch, fictie, discussie, taalgebruik];

export function moduleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

// Alle oefenvragen van een module (teksten + sets), met verwijzing naar de bron
export function moduleQuestions(mod: Module): Question[] {
  const fromTexts = (mod.texts ?? []).flatMap((t) => t.questions);
  const fromSets = mod.sets.flatMap((s) => s.questions);
  return [...fromTexts, ...fromSets];
}

export function allQuestions(): { q: Question; moduleId: string; setId: string }[] {
  const out: { q: Question; moduleId: string; setId: string }[] = [];
  for (const mod of modules) {
    for (const t of mod.texts ?? []) {
      for (const q of t.questions) out.push({ q, moduleId: mod.id, setId: t.id });
    }
    for (const s of mod.sets) {
      for (const q of s.questions) out.push({ q, moduleId: mod.id, setId: s.id });
    }
  }
  return out;
}

export function questionCount(mod: Module): number {
  return moduleQuestions(mod).length;
}

// Toetsmodus: maak een examen samenstelling runtime (vaste selectie per module)
export function buildExamQuestions(mod: Module, examId: string): Question[] {
  const pool = moduleQuestions(mod);
  const count = Math.min(12, pool.length);
  // deterministische mix: pot door elkaar met vaste start-offset per examen
  const shuffled = [...pool].sort((a, b) => hash(a.id + examId) - hash(b.id + examId));
  return shuffled.slice(0, count);
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return h;
}
