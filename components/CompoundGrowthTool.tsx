"use client";
import { useState } from "react";
import NumberField from "./NumberField";
import GrowthChart from "./GrowthChart";
import { compoundGrowth, money, toNum } from "@/lib/calc";

export default function CompoundGrowthTool() {
  // Values are kept as text so the box can be empty while typing.
  const [start, setStart] = useState("500");
  const [monthly, setMonthly] = useState("50");
  const [years, setYears] = useState("10");
  const [rate, setRate] = useState("6");

  const result = compoundGrowth(toNum(start, 0, 1_000_000), toNum(monthly, 0, 100_000), Math.round(toNum(years, 1, 60)), toNum(rate, 0, 30));

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="grid content-start gap-4 rounded-3xl border border-line bg-card p-6">
        <NumberField label="Starting amount" prefix="$" value={start} onChange={setStart} />
        <NumberField label="Monthly contribution" prefix="$" value={monthly} onChange={setMonthly} />
        <NumberField label="Years (1 to 60)" value={years} onChange={setYears} step="1" />
        <NumberField label="Estimated annual return (0 to 30)" suffix="%" value={rate} onChange={setRate} />
      </div>
      <div className="rounded-3xl border border-line bg-card p-6">
        <div aria-live="polite" className="grid gap-3 sm:grid-cols-3">
          <div><p className="text-sm text-mute">Total contributions</p><p className="font-display text-2xl font-extrabold">{money(result.totalContributions)}</p></div>
          <div><p className="text-sm text-mute">Estimated ending value</p><p className="font-display text-2xl font-extrabold">{money(result.endingValue)}</p></div>
          <div><p className="text-sm text-mute">Estimated growth</p><p className="font-display text-2xl font-extrabold">{money(result.growth)}</p></div>
        </div>
        <div className="mt-6"><GrowthChart points={result.points} /></div>
      </div>
    </div>
  );
}
