// The "shapes" of lesson content. You rarely need to edit this file.
// A lesson is built from STEPS (shown one at a time) followed by QUESTIONS.

export type Step =
  | { type: "text"; heading: string; body: string }
  | { type: "definition"; term: string; meaning: string }
  | { type: "example"; body: string }
  | { type: "why"; body: string } // the "Why this matters" callout
  | { type: "allocator" }; // the interactive $1,000 budget activity

export type Question = {
  kind: "multiple-choice" | "true-false" | "scenario";
  prompt: string;
  options: string[];
  answer: number; // position of the correct option, starting at 0
  explanation: string;
  whyItMatters: string;
};

export type Lesson = {
  slug: string; // used in the web address, e.g. "what-is-a-budget"
  title: string;
  objective: string;
  steps: Step[];
  takeaways: string[];
  questions: Question[];
  lastReviewed: string; // shown to readers; update after you verify the content
  assessment?: boolean; // true for the end-of-course assessment
};
