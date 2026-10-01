import type { Lesson } from "../types";
import { budgetingLessons } from "./budgeting";
import { bankingLessons } from "./banking";

// Maps a course's web name ("slug") to its lessons.
// When you write a new course, import it above and add one line here.
export const lessonsByCourse: Record<string, Lesson[]> = {
  budgeting: budgetingLessons,
  "banking-saving": bankingLessons,
};
