import type { GrowthPoint } from "@/lib/calc";

// A simple line chart drawn with SVG (no chart library needed).
const W = 640, H = 300, L = 56, R = 16, T = 16, B = 36;
const compact = (n: number) => `$${new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(n)}`;

export default function GrowthChart({ points }: { points: GrowthPoint[] }) {
  const maxY = Math.max(...points.map((p) => p.balance), 1) * 1.05;
  const maxX = Math.max(points[points.length - 1].year, 1);
  const x = (year: number) => L + (year / maxX) * (W - L - R);
  const y = (v: number) => H - B - (v / maxY) * (H - T - B);
  const line = (key: "balance" | "contributions") => points.map((p, i) => `${i ? "L" : "M"}${x(p.year).toFixed(1)} ${y(p[key]).toFixed(1)}`).join(" ");
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => f * maxY);
  const last = points[points.length - 1];
  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img"
        aria-label={`Line chart over ${maxX} years. Hypothetical balance reaches about ${compact(last.balance)}; contributions total ${compact(last.contributions)}.`}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="var(--line)" />
            <text x={L - 8} y={y(t) + 4} textAnchor="end" fontSize="12" fill="var(--mute)">{compact(t)}</text>
          </g>
        ))}
        <text x={L} y={H - 10} fontSize="12" fill="var(--mute)">Year 0</text>
        <text x={W - R} y={H - 10} textAnchor="end" fontSize="12" fill="var(--mute)">Year {maxX}</text>
        <path d={line("contributions")} fill="none" stroke="var(--mute)" strokeWidth="2" strokeDasharray="6 5" />
        <path d={line("balance")} fill="none" stroke="var(--brand)" strokeWidth="3" />
      </svg>
      <figcaption className="mt-2 flex gap-5 text-sm text-mute">
        <span><span className="font-bold" style={{ color: "var(--brand)" }}>&mdash;</span> Hypothetical balance</span>
        <span><span className="font-bold">- -</span> Money you put in</span>
      </figcaption>
    </figure>
  );
}
