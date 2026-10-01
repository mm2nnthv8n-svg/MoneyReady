import Link from "next/link";
import { siteConfig } from "@/site.config";
import { courses } from "@/content/courses";

const steps = ["Pick a topic", "Learn the basics", "Make real-world decisions", "Test yourself", "Track your progress"];

export default function Home() {
  return (
    <>
      <section className="pb-10 pt-16">
        <h1 className="font-display text-5xl font-extrabold leading-none tracking-tight sm:text-7xl">{siteConfig.tagline}</h1>
        <p className="mt-5 max-w-xl text-xl text-mute">{siteConfig.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/learn" className="rounded-full bg-brand px-6 py-3 font-semibold text-white">Start Learning</Link>
          <Link href="/tools" className="rounded-full border border-line px-6 py-3 font-semibold">Explore Tools</Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-display text-3xl font-extrabold">Learn the stuff you&rsquo;ll actually use.</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <Link key={c.slug} href="/learn" className="rounded-3xl border border-line bg-card p-6">
              <span className="mb-3 block h-3.5 w-3.5 rounded-full" style={{ background: c.color }} aria-hidden />
              <h3 className="font-display text-xl font-semibold">{c.name}</h3>
              <p className="mt-1 text-mute">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-display text-3xl font-extrabold">Don&rsquo;t just read about money. Use it.</h2>
        <p className="mt-3 max-w-prose text-mute">Learn through realistic scenarios, calculators, quizzes, simulations, and challenges. Nothing here uses real money.</p>
      </section>

      <section className="py-12">
        <h2 className="font-display text-3xl font-extrabold">How it works</h2>
        <ol className="mt-6 grid gap-3">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand font-semibold text-white">{i + 1}</span>{s}
            </li>
          ))}
        </ol>
      </section>

      <section className="py-12">
        <h2 className="font-display text-3xl font-extrabold">Impact</h2>
        <p className="mt-3 text-mute">Impact data coming soon.</p>
      </section>
    </>
  );
}
