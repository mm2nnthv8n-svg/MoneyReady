"use client";
import { useState } from "react";
import type { Question } from "@/content/types";

// Shows ONE question at a time. The answer and explanation appear only AFTER the student picks.
type Props = {
  questions: Question[];
  onProgress: (answered: number) => void; // tells the progress bar how far along we are
  onComplete: (score: number) => void; // called after the last question
};

// Correct answers were mostly listed first in the content file, so we rotate the options.
// The rotation is based on the question text, so it is the same on the server and in the browser.
function displayOrder(q: Question): number[] {
  const idx = q.options.map((_, i) => i);
  if (q.kind === "true-false") return idx; // keep True before False
  const shift = Array.from(q.prompt).reduce((a, ch) => a + ch.charCodeAt(0), 0) % idx.length;
  return [...idx.slice(shift), ...idx.slice(0, shift)];
}

export default function Quiz({ questions, onProgress, onComplete }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const q = questions[index];
  const answered = selected !== null;
  const correct = selected === q.answer;

  function choose(i: number) {
    if (answered) return; // only the first pick counts
    setSelected(i);
    if (i === q.answer) setScore(score + 1);
    onProgress(index + 1);
  }
  function next() {
    if (index < questions.length - 1) { setIndex(index + 1); setSelected(null); }
    else onComplete(score);
  }

  return (
    <div>
      <p className="text-sm text-mute">Question {index + 1} of {questions.length}</p>
      <h2 className="mt-1 font-display text-2xl font-semibold">{q.prompt}</h2>
      <div className="mt-5 grid gap-2">
        {displayOrder(q).map((i) => {
          const opt = q.options[i];
          let style = "border-line bg-card hover:border-brand";
          if (answered && i === q.answer) style = "border-good tint-good";
          else if (answered && i === selected) style = "border-orange-600 bg-orange-600/10";
          return (
            <button key={opt} type="button" disabled={answered} onClick={() => choose(i)} className={`rounded-2xl border-2 px-4 py-3 text-left font-medium ${style}`}>
              {opt}
            </button>
          );
        })}
      </div>
      {/* aria-live makes screen readers announce the feedback */}
      <div aria-live="polite">
        {answered && (
          <div className="mt-5 rounded-2xl border-l-4 border-brand tint-brand p-4">
            <p className="font-semibold">{correct ? "Correct." : "Not quite."}</p>
            <p>{q.explanation}</p>
            <p className="mt-2 text-sm text-mute"><strong>Why it matters:</strong> {q.whyItMatters}</p>
          </div>
        )}
      </div>
      {answered && (
        <button type="button" onClick={next} className="mt-5 rounded-full bg-brand px-6 py-3 font-semibold text-white">
          {index < questions.length - 1 ? "Next question" : "See score"}
        </button>
      )}
    </div>
  );
}
