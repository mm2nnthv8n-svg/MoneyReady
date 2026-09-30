"use client";
import Link from "next/link";
import { courses } from "@/content/courses";
import { lessonsByCourse } from "@/content/lessons";
import { clearProgress, useProgress } from "@/lib/progress";

export default function ProgressDashboard() {
  const progress = useProgress();
  const rows = courses.filter((c) => lessonsByCourse[c.slug]).map((c) => {
    const lessons = lessonsByCourse[c.slug];
    const normal = lessons.filter((l) => !l.assessment);
    const done = normal.filter((l) => progress.lessons[`${c.slug}/${l.slug}`]).length;
    return { c, lessons, normal, done };
  });
  const lessonsDone = rows.reduce((a, r) => a + r.done, 0);
  const coursesDone = rows.filter((r) => r.done === r.normal.length).length;
  const box = "rounded-3xl border border-line bg-card p-6";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className={box}><p className="text-sm text-mute">Lessons completed</p><p className="font-display text-4xl font-extrabold">{lessonsDone}</p></div>
        <div className={box}><p className="text-sm text-mute">Courses completed</p><p className="font-display text-4xl font-extrabold">{coursesDone}</p></div>
        <div className={box}><p className="text-sm text-mute">Points</p><p className="font-display text-4xl font-extrabold">{progress.points}</p></div>
      </div>
      {rows.map(({ c, lessons }) => (
        <div key={c.slug} className={`${box} mt-4`}>
          <h2 className="font-display text-xl font-semibold">{c.name}</h2>
          <ul className="mt-3 divide-y divide-line">
            {lessons.map((l) => {
              const s = progress.lessons[`${c.slug}/${l.slug}`];
              return (
                <li key={l.slug} className="flex justify-between gap-4 py-2">
                  <Link href={`/learn/${c.slug}/${l.slug}`} className="hover:text-brand">{l.title}</Link>
                  <span className="text-mute">{s ? `${s.score}/${s.total}` : "Not started"}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <p className="mt-6 text-sm text-mute">Progress is saved only in this browser. Clearing your browser data will erase it.</p>
      <button type="button" className="mt-3 rounded-full border border-line px-5 py-2 text-sm font-semibold"
        onClick={() => { if (window.confirm("Erase all saved progress in this browser?")) { clearProgress(); window.location.reload(); } }}>
        Reset my progress
      </button>
    </div>
  );
}
