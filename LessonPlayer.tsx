"use client";
import Link from "next/link";
import { useState } from "react";
import type { Lesson, Step } from "@/content/types";
import Quiz from "./Quiz";
import Allocator from "./Allocator";
import { recordLesson } from "@/lib/progress";

// Shows a lesson in 3 phases: learn (one step at a time) -> quiz -> results.
function StepView({ step }: { step: Step }) {
  const card = "rounded-3xl border border-line bg-card p-6";
  switch (step.type) {
    case "text": return <div className={card}><h2 className="font-display text-2xl font-semibold">{step.heading}</h2><p className="mt-2">{step.body}</p></div>;
    case "definition": return <div className={card}><p className="text-sm text-mute">Definition</p><h2 className="font-display text-2xl font-semibold">{step.term}</h2><p className="mt-2">{step.meaning}</p></div>;
    case "example": return <div className={card}><p className="text-sm text-mute">Example</p><p className="mt-1">{step.body}</p></div>;
    case "why": return <div className="rounded-2xl border-l-4 border-brand tint-brand p-4"><strong>Why this matters:</strong> {step.body}</div>;
    case "allocator": return <Allocator />;
  }
}

type Props = { courseSlug: string; lesson: Lesson; nextHref: string; nextLabel: string };

export default function LessonPlayer({ courseSlug, lesson, nextHref, nextLabel }: Props) {
  const [phase, setPhase] = useState<"learn" | "quiz" | "done">(lesson.steps.length ? "learn" : "quiz");
  const [step, setStep] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [score, setScore] = useState(0);
  const [quizKey, setQuizKey] = useState(0); // changing this restarts the quiz

  const total = lesson.steps.length + lesson.questions.length;
  const position = phase === "done" ? total : phase === "learn" ? step + 1 : lesson.steps.length + answered;
  const pct = Math.round((position / total) * 100);

  function finish(finalScore: number) {
    setScore(finalScore);
    recordLesson(`${courseSlug}/${lesson.slug}`, finalScore, lesson.questions.length, !!lesson.assessment);
    setPhase("done");
  }
  function retry() { setAnswered(0); setQuizKey(quizKey + 1); setPhase("quiz"); }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 h-2 overflow-hidden rounded-full bg-line" role="progressbar" aria-label="Lesson progress" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full bg-brand transition-all" style={{ width: `${pct}%` }} />
      </div>

      {phase === "learn" && (
        <div className="grid gap-4">
          <p className="text-mute">Objective: {lesson.objective}</p>
          {lesson.steps.slice(0, step + 1).map((s, i) => <StepView key={i} step={s} />)}
          <div>
            <button type="button" className="rounded-full bg-brand px-6 py-3 font-semibold text-white"
              onClick={() => (step < lesson.steps.length - 1 ? setStep(step + 1) : setPhase("quiz"))}>
              {step < lesson.steps.length - 1 ? "Continue" : "Take the quiz"}
            </button>
          </div>
        </div>
      )}

      {phase === "quiz" && <Quiz key={quizKey} questions={lesson.questions} onProgress={setAnswered} onComplete={finish} />}

      {phase === "done" && (
        <div className="rounded-3xl border border-line bg-card p-6">
          <p className="text-mute">Your score</p>
          <p className="font-display text-5xl font-extrabold">{score} / {lesson.questions.length}</p>
          <h2 className="mt-5 font-display text-xl font-semibold">Key takeaways</h2>
          <ul className="mt-2 list-disc pl-5">{lesson.takeaways.map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={retry} className="rounded-full border border-line px-6 py-3 font-semibold">Retry quiz</button>
            <Link href={nextHref} className="rounded-full bg-brand px-6 py-3 font-semibold text-white">{nextLabel}</Link>
          </div>
        </div>
      )}
    </div>
  );
}
