"use client";
import { useState } from "react";

// The "$1,000 summer job" activity. Totals update as the sliders move.
const INCOME = 1000;
const categories = ["Saving", "Food", "Transportation", "Phone", "Entertainment", "Other"];
const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function Allocator() {
  const [values, setValues] = useState<number[]>(categories.map(() => 0));
  const total = values.reduce((a, b) => a + b, 0);
  const left = INCOME - total;

  // Feedback describes tradeoffs. It never says there is one correct budget.
  let feedback = "Move the sliders to start planning.";
  if (total > 0) {
    if (left < 0) feedback = `This plan is ${money(-left)} more than the income. Something would have to come from savings or borrowing. Which category could flex?`;
    else if (values[0] === 0) feedback = "Nothing is going to savings. That is a valid choice, but a surprise cost would need to come from somewhere else. What would you do?";
    else if (values[4] > 400) feedback = "A big share is going to entertainment. That can be fine, but it leaves less for other goals.";
    else feedback = "Every budget is a set of tradeoffs. There is no single right answer, so check whether this one matches your goals.";
  }

  return (
    <div className="rounded-3xl border border-line bg-card p-6">
      <h3 className="font-display text-xl font-semibold">Your {money(INCOME)}</h3>
      <div className="mt-4 grid gap-4">
        {categories.map((name, i) => (
          <label key={name} className="block">
            <span className="flex justify-between font-medium"><span>{name}</span><span>{money(values[i])}</span></span>
            <input type="range" min={0} max={INCOME} step={10} value={values[i]} className="w-full accent-[var(--brand)]"
              onChange={(e) => setValues(values.map((v, j) => (j === i ? Number(e.target.value) : v)))} />
          </label>
        ))}
      </div>
      <div aria-live="polite">
        <p className="mt-5 font-display text-3xl font-extrabold">{left >= 0 ? `${money(left)} left` : `${money(-left)} over`}</p>
        <p className="mt-2 text-mute">Planned total: {money(total)}. {feedback}</p>
      </div>
    </div>
  );
}
