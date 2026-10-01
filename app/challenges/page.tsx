export const metadata = { title: "Challenges", description: "Short money-decision challenges. Coming soon." };

const challenges = ["Build a Budget", "Survive the Month", "Needs vs Wants", "Credit Card Challenge", "Emergency Expense", "First Paycheck Challenge", "Invest or Save?"];

export default function Page() {
  return (
    <section className="py-12">
      <h1 className="font-display text-4xl font-extrabold">Challenges</h1>
      <p className="mt-2 max-w-prose text-mute">Short scenarios where you make decisions and see the tradeoffs. Points are for completing learning activities only. There are no prizes and no real money. For now, you can earn points in the lessons.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((c) => (
          <article key={c} className="rounded-3xl border border-line bg-card p-6">
            <h2 className="font-display text-xl font-semibold">{c}</h2>
            <span className="mt-3 inline-block rounded-full border border-line px-4 py-1.5 text-sm text-mute">Coming soon</span>
          </article>
        ))}
      </div>
    </section>
  );
}
