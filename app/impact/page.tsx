import { impactMetrics, impactMethodology } from "@/content/impact";

export const metadata = { title: "Impact", description: "Real impact numbers will appear here once they exist." };

export default function Page() {
  return (
    <section className="py-12">
      <h1 className="font-display text-4xl font-extrabold">Impact</h1>
      <p className="mt-2 text-mute">Impact data coming soon. No numbers are shown until they are real and measured.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {impactMetrics.map((m) => (
          <div key={m.label} className="rounded-3xl border border-line bg-card p-6">
            <p className="text-mute">{m.label}</p>
            <p className="font-display text-3xl font-extrabold">{m.value ?? "Placeholder"}</p>
            {m.value === null && <p className="text-sm text-mute">No data yet</p>}
          </div>
        ))}
      </div>
      <h2 className="mt-10 font-display text-2xl font-semibold">How these will be measured</h2>
      <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5">{impactMethodology.map((t) => <li key={t}>{t}</li>)}</ul>
    </section>
  );
}
