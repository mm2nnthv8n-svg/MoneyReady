import { sources } from "@/content/sources";
import { courses } from "@/content/courses";
import { lessonsByCourse } from "@/content/lessons";

export const metadata = { title: "Sources & methodology", description: "Where MoneyReady content comes from and how it is reviewed." };

export default function Page() {
  // Automatically lists every lesson whose "lastReviewed" still says it needs review.
  const pending = courses.flatMap((c) => (lessonsByCourse[c.slug] ?? []).filter((l) => /review/i.test(l.lastReviewed)).map((l) => ({ course: c.name, title: l.title })));
  return (
    <section className="py-12">
      <h1 className="font-display text-4xl font-extrabold">Sources &amp; methodology</h1>
      <div className="mt-4 max-w-prose space-y-3">
        <p>MoneyReady is meant to rely mainly on U.S. government and educational sources. Each lesson shows a &ldquo;Last reviewed&rdquo; label.</p>
        <p><strong>Current status:</strong> the lessons were drafted and have not yet been checked against these sources. Specific citations have not been added, and none are invented. Lessons stay marked for review until each claim is verified and linked.</p>
      </div>
      <h2 className="mt-10 font-display text-2xl font-semibold">Source organizations</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {sources.map((s) => (
          <li key={s.url} className="rounded-2xl border border-line bg-card p-4">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{s.name}</a>
            <p className="text-sm text-mute">{s.covers}</p>
          </li>
        ))}
      </ul>
      <h2 className="mt-10 font-display text-2xl font-semibold">Content awaiting source review</h2>
      <ul className="mt-4 list-disc space-y-1 pl-5">
        {pending.map((p) => <li key={p.course + p.title}>{p.course}: {p.title}</li>)}
      </ul>
    </section>
  );
}
