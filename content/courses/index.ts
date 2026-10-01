// COURSE LIST. Edit text here; no other code needs to change.
// "available: false" shows a "Coming soon" badge instead of a Start button.
export type Course = {
  slug: string;
  name: string;
  description: string;
  difficulty: "Beginner" | "Intermediate";
  minutes: number;
  lessonCount: number;
  color: string; // small color dot on the card
  available: boolean;
};

export const courses: Course[] = [
  { slug: "budgeting", name: "Budgeting", description: "Plan where your money goes before it disappears.", difficulty: "Beginner", minutes: 40, lessonCount: 6, color: "#3442E8", available: true },
  { slug: "banking-saving", name: "Banking & Saving", description: "Accounts, interest, APY, and fees.", difficulty: "Beginner", minutes: 40, lessonCount: 5, color: "#0E9F78", available: false },
  { slug: "credit-debt", name: "Credit & Debt", description: "How credit, APR, and credit scores work.", difficulty: "Intermediate", minutes: 45, lessonCount: 6, color: "#C2410C", available: false },
  { slug: "investing", name: "Investing", description: "Risk, return, and long-term growth.", difficulty: "Intermediate", minutes: 45, lessonCount: 6, color: "#7C3AED", available: false },
  { slug: "paychecks-taxes", name: "Paychecks & Taxes", description: "Gross pay vs. net pay and what comes out.", difficulty: "Beginner", minutes: 40, lessonCount: 5, color: "#0891B2", available: false },
  { slug: "insurance-risk", name: "Insurance & Risk", description: "Premiums, deductibles, and coverage.", difficulty: "Beginner", minutes: 35, lessonCount: 4, color: "#DB2777", available: false },
];
