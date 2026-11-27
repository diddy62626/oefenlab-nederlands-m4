"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { icons } from "./accents";

const { volume: Volume } = icons;

export function ListeningPanel({ text }: { text: string }) {
  const [supported] = useState(
    () => typeof window !== "undefined" && "speechSynthesis" in window
  );
  const [speaking, setSpeaking] = useState(false);
  const [rate, setRate] = useState(1);
  const [showText, setShowText] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function speak() {
    if (!supported || speaking) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    const nlVoice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith("nl"));
    if (nlVoice) utter.voice = nlVoice;
    utter.lang = "nl-NL";
    utter.rate = rate;
    utter.onstart = () => setSpeaking(true);
    utter.onend = () => {
      setSpeaking(false);
      doneRef.current = true;
    };
    utter.onerror = () => setSpeaking(false);
    synth.speak(utter);
  }

  function stop() {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
    doneRef.current = true;
  }

  return (
    <Card className="animate-fade-up">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Volume
            className={`size-5 text-primary ${speaking ? "animate-pulse-ring" : "animate-floaty"}`}
            aria-hidden
          />
          <h3 className="font-semibold">Luisterfragment</h3>
        </div>
        {supported ? (
          <div className="flex flex-wrap items-center gap-2 animate-fade-in stagger-2">
            <Button onClick={speak} disabled={speaking} size="sm">
              {speaking ? "Speelt af..." : "Afspelen"}
            </Button>
            <Button onClick={stop} variant="outline" size="sm" disabled={!speaking}>
              Stop
            </Button>
            <span className="text-xs text-muted-foreground ml-1">Snelheid:</span>
            {[0.85, 1, 1.2].map((r) => (
              <Button
                key={r}
                size="sm"
                variant={rate === r ? "default" : "outline"}
                className="h-8 px-3"
                onClick={() => setRate(r)}
                aria-pressed={rate === r}
              >
                {r === 0.85 ? "langzaam" : r === 1 ? "normaal" : "snel"}
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Je browser ondersteunt geen voorleesstem. Lees de tekst hieronder en stel jezelf voor dat je hem hoort –
            op de echte toets speelt het fragment vanzelf af.
          </p>
        )}
        <div>
          <Button variant="ghost" size="sm" onClick={() => setShowText((s) => !s)} className="text-muted-foreground">
            {showText ? "Tekst verbergen" : "Tekst tonen"}
          </Button>
          {showText && (
            <p className="text-sm leading-relaxed bg-muted rounded-lg p-3 mt-1 animate-fade-up">
              <em>{text}</em>
            </p>
          )}
          {!showText && (
            <p className="text-xs text-muted-foreground mt-1 animate-fade-in">
              Tip: luister eerst zonder tekst – dat is precies wat er op de KLT van je verwacht wordt.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
