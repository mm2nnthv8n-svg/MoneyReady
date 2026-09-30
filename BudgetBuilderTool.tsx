"use client";
import { useState } from "react";
import NumberField from "./NumberField";
import { budgetSummary, money, toNum } from "@/lib/calc";

// Categories are listed here. Add or rename one and the tool updates itself.
const categories = [
  { key: "savings", label: "Savings", start: "100", color: "#3442E8" },
  { key: "housing", label: "Housing", start: "0", color: "#7C3AED" },
  { key: "food", label: "Food", start: "150", color: "#0E9F78" },
  { key: "transportation", label: "Transportation", start: "80", color: "#0891B2" },
  { key: "phone", label: "Phone", start: "40", color: "#DB2777" },
  { key: "entertainment", label: "Entertainment", start: "100", color: "#F59E0B" },
  { key: "other", label: "Other", start: "50", color: "#64748B" },
];

export default function BudgetBuilderTool() {
  const [income, setIncome] = useState("1000");
  const [values, setValues] = useState<Record<string, string>>(Object.fromEntries(categories.map((c) => [c.key, c.start])));

  const inc = toNum(income, 0, 1_000_000);
  const amount = (key: string) => toNum(values[key], 0, 1_000_000);
  const savings = amount("savings");
  const s = budgetSummary(inc, savings, categories.filter((c) => c.key !== "savings").map((c) => amount(c.key)));
  const planned = s.expenses + savings;
  const denom = Math.max(inc, planned, 1); // bar width basis

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="grid content-start gap-4 rounded-3xl border border-line bg-card p-6">
        <NumberField label="Monthly income" prefix="$" value={income} onChange={setIncome} />
        {categories.map((c) => (
          <NumberField key={c.key} label={c.label} prefix="$" value={values[c.key]} onChange={(v) => setValues({ ...values, [c.key]: v })} />
        ))}
      </div>
      <div className="rounded-3xl border border-line bg-card p-6">
        <div aria-live="polite" className="grid gap-3 sm:grid-cols-3">
          <div><p className="text-sm text-mute">Total expenses</p><p className="font-display text-2xl font-extrabold">{money(s.expenses)}</p></div>
          <div><p className="text-sm text-mute">Money remaining</p><p className="font-display text-2xl font-extrabold">{money(s.remaining)}</p></div>
          <div><p className="text-sm text-mute">Savings</p><p className="font-display text-2xl font-extrabold">{Math.round(s.savingsPercent)}% of income</p></div>
        </div>
        <p className="mt-2 text-sm text-mute">Total expenses means spending only. Savings is counted separately.</p>

        <div className="mt-6 flex h-6 overflow-hidden rounded-full bg-line" role="img"
          aria-label={`Budget breakdown: ${categories.map((c) => `${c.label} ${money(amount(c.key))}`).join(", ")}, remaining ${money(Math.max(0, s.remaining))}`}>
          {categories.map((c) => <div key={c.key} style={{ width: `${(amount(c.key) / denom) * 100}%`, background: c.color }} />)}
        </div>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-mute">
          {categories.map((c) => <li key={c.key}><span style={{ color: c.color }} aria-hidden>&#9679;</span> {c.label}</li>)}
          <li><span aria-hidden>&#9675;</span> Remaining</li>
        </ul>

        {s.remaining < 0 ? (
          <div role="status" className="mt-5 rounded-2xl border-l-4 border-orange-600 p-4 tint-brand">
            This plan is {money(-s.remaining)} more than the income. People handle that in different ways, such as trimming a category or increasing income. Budgets can change.
          </div>
        ) : (
          <p className="mt-5 text-mute">Every budget is a set of choices. This is an example to explore, not a recommendation.</p>
        )}
      </div>
    </div>
  );
}
