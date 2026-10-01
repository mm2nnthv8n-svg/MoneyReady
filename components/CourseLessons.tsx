"use client";
import Link from "next/link";
import type { Lesson } from "@/content/types";
import { useProgress } from "@/lib/progress";

// The list of lessons on a course page, with a status badge for each.
export default function CourseLessons({ courseSlug, lessons }: { courseSlug: string; lessons: Lesson[] }) {
  const progress = useProgress();
  return (
    <ol className="mt-8 grid gap-3">
      {lessons.map((l) => {
        const saved = progress.lessons[`${courseSlug}/${l.slug}`];
        return (
          <li key={l.slug}>
            <Link href={`/learn/${courseSlug}/${l.slug}`} className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-card p-5 hover:border-brand">
              <span><span className="block font-display text-lg font-semibold">{l.title}</span><span className="text-sm text-mute">{l.objective}</span></span>
              <span className="shrink-0 rounded-full border border-line px-3 py-1 text-sm text-mute">{saved ? `Done ${saved.score}/${saved.total}` : "Not started"}</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
