"use client";

import { useState } from "react";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { HomeView, ResetButton } from "@/components/study/HomeView";
import { ModuleView, type ExerciseConfig } from "@/components/study/ModuleView";
import { SessionView } from "@/components/study/SessionView";
import { ExercisePlayer } from "@/components/study/ExercisePlayer";
import { moduleById } from "@/lib/content";
import { icons } from "@/components/study/accents";

const { back: Back, cap: Cap } = icons;

type View =
  | { kind: "home" }
  | { kind: "module"; moduleId: string }
  | { kind: "exercise"; cfg: ExerciseConfig; exitTo: "module" | "home"; moduleId: string }
  | { kind: "review" }
  | { kind: "mix" };

// hydration-detectie zonder setState-in-effect (voorkomt mismatch met zustand-persist)
const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function Page() {
  const mounted = useMounted();
  const [view, setView] = useState<View>({ kind: "home" });

  if (!mounted) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <Cap className="size-10" aria-hidden />
          <p>Oefenlab wordt geladen...</p>
        </div>
      </main>
    );
  }

  const moduleOpen =
    view.kind === "module" ? moduleById(view.moduleId) : view.kind === "exercise" ? moduleById(view.moduleId) : undefined;

  const backLabel =
    view.kind === "exercise" && view.exitTo === "module"
      ? "Terug naar module"
      : "Terug naar overzicht";

  const goBack = () => {
    if (view.kind === "module") setView({ kind: "home" });
    else if (view.kind === "exercise" && view.exitTo === "module") setView({ kind: "module", moduleId: view.moduleId });
    else setView({ kind: "home" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            {view.kind !== "home" && (
              <Button variant="ghost" size="sm" onClick={goBack} aria-label={backLabel}>
                <Back className="size-4" aria-hidden />
                <span className="hidden sm:inline">{backLabel}</span>
              </Button>
            )}
            <button
              onClick={() => setView({ kind: "home" })}
              className="font-extrabold tracking-tight flex items-center gap-1.5 truncate"
            >
              <Cap className="size-5 text-primary" aria-hidden />
              Oefenlab Nederlands M4
            </button>
          </div>
          <p className="text-xs text-muted-foreground hidden md:block">Periode 2 · SE612 + SE613</p>
        </div>
      </header>

      <main className="grow w-full max-w-5xl mx-auto px-4 py-6">
        {view.kind === "home" && (
          <HomeView
            onOpenModule={(moduleId) => setView({ kind: "module", moduleId })}
            onOpenReview={() => setView({ kind: "review" })}
            onOpenMix={() => setView({ kind: "mix" })}
          />
        )}

        {view.kind === "module" && moduleOpen && (
          <ModuleView
            mod={moduleOpen}
            onExit={() => setView({ kind: "home" })}
            onStartExercise={(cfg) =>
              setView({ kind: "exercise", cfg, exitTo: "module", moduleId: moduleOpen.id })
            }
          />
        )}

        {view.kind === "exercise" && (
          <ExercisePlayer
            key={view.cfg.setId}
            title={view.cfg.title}
            subtitle={view.cfg.subtitle}
            questions={view.cfg.questions}
            mode={view.cfg.mode}
            setId={view.cfg.setId}
            minutes={view.cfg.minutes}
            reading={view.cfg.reading}
            audioText={view.cfg.audioText}
            onExit={goBack}
          />
        )}

        {(view.kind === "review" || view.kind === "mix") && (
          <SessionView
            key={view.kind}
            kind={view.kind}
            onExit={() => setView({ kind: "home" })}
            onOpenMix={() => setView({ kind: "mix" })}
          />
        )}
      </main>

      <footer className="mt-auto border-t">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>
            Gebaseerd op de studieplanner en uitleg periode 2 (SE612 Kijk- en luistertoets · SE613 Spreken). Je
            voortgang wordt alleen in je eigen browser opgeslagen.
          </p>
          <ResetButton />
        </div>
      </footer>
    </div>
  );
}
