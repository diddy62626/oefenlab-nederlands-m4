import {
  BookOpen,
  Eye,
  Feather,
  MessagesSquare,
  PenLine,
  Flame,
  Zap,
  RefreshCcw,
  Shuffle,
  Clock,
  CircleCheck,
  GraduationCap,
  ArrowLeft,
  Volume2,
  Lightbulb,
  ListChecks,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";
import type { Module } from "@/lib/types";

export const icons: Record<string, LucideIcon> = {
  book: BookOpen,
  eye: Eye,
  feather: Feather,
  messages: MessagesSquare,
  pen: PenLine,
  flame: Flame,
  zap: Zap,
  refresh: RefreshCcw,
  shuffle: Shuffle,
  clock: Clock,
  check: CircleCheck,
  cap: GraduationCap,
  back: ArrowLeft,
  volume: Volume2,
  bulb: Lightbulb,
  list: ListChecks,
  calendar: CalendarDays,
};

export function moduleIcon(mod: Module): LucideIcon {
  return icons[mod.icon] ?? BookOpen;
}

export function ModuleIcon({ mod, className }: { mod: Module; className?: string }) {
  const Icon = icons[mod.icon] ?? BookOpen;
  return <Icon className={className} aria-hidden />;
}

export type Accent = {
  solid: string;
  soft: string;
  text: string;
  bar: string;
  border: string;
  hoverBg: string;
};

export const accents: Record<Module["accent"], Accent> = {
  amber: {
    solid: "bg-amber-500 text-white hover:bg-amber-600",
    soft: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
    text: "text-amber-700 dark:text-amber-400",
    bar: "bg-amber-500",
    border: "border-amber-200 dark:border-amber-900",
    hoverBg: "hover:bg-amber-50 dark:hover:bg-amber-950/50",
  },
  rose: {
    solid: "bg-rose-500 text-white hover:bg-rose-600",
    soft: "bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200",
    text: "text-rose-700 dark:text-rose-400",
    bar: "bg-rose-500",
    border: "border-rose-200 dark:border-rose-900",
    hoverBg: "hover:bg-rose-50 dark:hover:bg-rose-950/50",
  },
  violet: {
    solid: "bg-violet-500 text-white hover:bg-violet-600",
    soft: "bg-violet-100 text-violet-900 dark:bg-violet-950 dark:text-violet-200",
    text: "text-violet-700 dark:text-violet-400",
    bar: "bg-violet-500",
    border: "border-violet-200 dark:border-violet-900",
    hoverBg: "hover:bg-violet-50 dark:hover:bg-violet-950/50",
  },
  teal: {
    solid: "bg-teal-500 text-white hover:bg-teal-600",
    soft: "bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-200",
    text: "text-teal-700 dark:text-teal-400",
    bar: "bg-teal-500",
    border: "border-teal-200 dark:border-teal-900",
    hoverBg: "hover:bg-teal-50 dark:hover:bg-teal-950/50",
  },
  emerald: {
    solid: "bg-emerald-500 text-white hover:bg-emerald-600",
    soft: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
    text: "text-emerald-700 dark:text-emerald-400",
    bar: "bg-emerald-500",
    border: "border-emerald-200 dark:border-emerald-900",
    hoverBg: "hover:bg-emerald-50 dark:hover:bg-emerald-950/50",
  },
  orange: {
    solid: "bg-orange-500 text-white hover:bg-orange-600",
    soft: "bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-200",
    text: "text-orange-700 dark:text-orange-400",
    bar: "bg-orange-500",
    border: "border-orange-200 dark:border-orange-900",
    hoverBg: "hover:bg-orange-50 dark:hover:bg-orange-950/50",
  },
};

// deterministisch door elkaar schudden op basis van een sleutel
export function shuffleSeeded<T>(arr: T[], seed: string): T[] {
  const out = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  for (let i = out.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) | 0;
    const j = Math.abs(h) % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
