// ALL THE MATH lives here, separate from the screens, so it is easy to check.
// Assumptions are shown to the student on each tool page.

export type GrowthPoint = { year: number; balance: number; contributions: number };

/** Keep a typed number inside a safe range. Empty or invalid text becomes the minimum. */
export function toNum(text: string, min: number, max: number): number {
  const n = parseFloat(text);
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

/**
 * Compound growth, simplified:
 * - the yearly rate is split evenly into 12 monthly rates
 * - each month: balance = balance * (1 + monthlyRate) + monthlyContribution
 * - no fees, taxes, or inflation
 */
export function compoundGrowth(start: number, monthly: number, years: number, annualPercent: number) {
  const r = annualPercent / 100 / 12;
  let balance = start;
  const points: GrowthPoint[] = [{ year: 0, balance: start, contributions: start }];
  for (let m = 1; m <= years * 12; m++) {
    balance = balance * (1 + r) + monthly;
    if (m % 12 === 0) points.push({ year: m / 12, balance, contributions: start + monthly * m });
  }
  const totalContributions = start + monthly * years * 12;
  return { points, totalContributions, endingValue: balance, growth: balance - totalContributions };
}

/** Budget summary. "spending" is every category except savings. */
export function budgetSummary(income: number, savings: number, spending: number[]) {
  const expenses = spending.reduce((a, b) => a + b, 0);
  return {
    expenses, // total spending, not counting savings
    remaining: income - expenses - savings, // can be negative
    savingsPercent: income > 0 ? (savings / income) * 100 : 0,
  };
}

export const money = (n: number) => `${n < 0 ? "-" : ""}$${Math.round(Math.abs(n)).toLocaleString("en-US")}`;
