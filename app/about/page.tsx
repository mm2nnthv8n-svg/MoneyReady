import { siteConfig } from "@/site.config";

export const metadata = { title: "About", description: "Why MoneyReady exists." };

export default function Page() {
  return (
    <section className="py-12">
      <h1 className="font-display text-4xl font-extrabold">About {siteConfig.name}</h1>
      <div className="mt-4 max-w-prose space-y-4">
        <p>{siteConfig.name} was created to make practical financial education more accessible and understandable for teenagers. It is free, and it does not sell financial products or recommend specific investments.</p>
        <p>Lessons use scenarios, calculators, and quizzes, and they are designed to show tradeoffs rather than tell you what to do.</p>
      </div>
      <h2 className="mt-10 font-display text-2xl font-semibold">Founder</h2>
      <div className="mt-3 max-w-prose rounded-2xl border border-line bg-card p-5">
        <p className="text-sm text-mute">Placeholder. Replace this with your own short bio in <code>app/about/page.tsx</code>.</p>
        <p className="mt-2">Founder biography coming soon.</p>
      </div>
    </section>
  );
}
