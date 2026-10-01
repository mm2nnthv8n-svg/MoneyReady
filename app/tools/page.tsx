import Link from "next/link";

export const metadata = { title: "Tools", description: "Interactive calculators for practical money skills." };

// Add a tool here. "href" makes it clickable; leave it out to show "Coming soon".
const tools = [
  { name: "Compound growth calculator", text: "See how regular contributions could grow over time.", href: "/tools/compound-growth" },
  { name: "Budget builder", text: "Plan a month of income and see the breakdown.", href: "/tools/budget-builder" },
  { name: "Paycheck explorer", text: "Gross pay vs. take-home pay." },
  { name: "Credit card interest demo", text: "How interest and repayment time interact." },
  { name: "Emergency fund challenge", text: "Decide how to handle surprise expenses." },
];

export default function ToolsPage() {
  return (
    <section className="py-12">
      <h1 className="font-display text-4xl font-extrabold">Tools</h1>
      <p className="mt-2 text-mute">Calculators and simulations. Results are simplified examples, not advice.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <article key={t.name} className="rounded-3xl border border-line bg-card p-6">
            <h2 className="font-display text-xl font-semibold">{t.name}</h2>
            <p className="mt-1 text-mute">{t.text}</p>
            {t.href
              ? <Link href={t.href} className="mt-4 inline-block rounded-full bg-brand px-5 py-2 font-semibold text-white">Open</Link>
              : <span className="mt-4 inline-block rounded-full border border-line px-4 py-1.5 text-sm text-mute">Coming soon</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
