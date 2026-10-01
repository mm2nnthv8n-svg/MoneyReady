// IMPACT NUMBERS. Leave value as null until you have REAL, measured data.
// When you do, replace null with text, like value: "250". Never estimate or round up.
export const impactMetrics: { label: string; value: string | null }[] = [
  { label: "Students reached", value: null },
  { label: "Lessons completed", value: null },
  { label: "Courses completed", value: null },
  { label: "Schools and organizations reached", value: null },
  { label: "Assessment results", value: null },
];

export const impactMethodology = [
  "Students reached: the number of unique visitors, counted with a privacy-friendly analytics tool once one is set up. It counts browsers, not people, so it may differ from the true number.",
  "Lessons and courses completed: counted when a student finishes a lesson or every lesson in a course. Right now, progress is stored only in each student's own browser, so MoneyReady cannot see it.",
  "Schools and organizations reached: only counted when an organization confirms its use in writing. Nothing is listed without permission.",
  "Assessment results: average change between optional before and after quizzes, reported only after a proper consent and data-handling process exists.",
];
