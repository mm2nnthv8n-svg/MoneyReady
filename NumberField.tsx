"use client";
import { useId } from "react";

// A labeled number box. Every input has a real <label> so screen readers can announce it.
type Props = { label: string; value: string; onChange: (v: string) => void; prefix?: string; suffix?: string; step?: string };

export default function NumberField({ label, value, onChange, prefix, suffix, step = "any" }: Props) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block font-medium">{label}</label>
      <div className="mt-1 flex items-center gap-1 rounded-xl border border-line bg-card px-3 focus-within:border-brand">
        {prefix && <span className="text-mute">{prefix}</span>}
        <input id={id} type="number" inputMode="decimal" min="0" step={step} value={value}
          onChange={(e) => onChange(e.target.value)} className="w-full bg-transparent py-2 outline-none" />
        {suffix && <span className="text-mute">{suffix}</span>}
      </div>
    </div>
  );
}
