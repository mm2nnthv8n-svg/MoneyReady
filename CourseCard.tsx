"use client";
import Link from "next/link";
import type { Course } from "@/content/courses";
import { lessonsByCourse } from "@/content/lessons";
import { useProgress } from "@/lib/progress";

export default function CourseCard({ course }: { course: Course }) {
  const progress = useProgress();
  // Count finished lessons (the course assessment is not counted as a lesson).
  const lessons = (lessonsByCourse[course.slug] ?? []).filter((l) => !l.assessment);
  const done = lessons.filter((l) => progress.lessons[`${course.slug}/${l.slug}`]).length;
  const total = lessons.length || course.lessonCount;
  const pct = Math.min(100, Math.round((done / total) * 100));
  return (
    <article className="rounded-3xl border border-line bg-card p-6">
      <span className="mb-3 block h-3.5 w-3.5 rounded-full" style={{ background: course.color }} aria-hidden />
      <h3 className="font-display text-xl font-semibold">{course.name}</h3>
      <p className="mt-1 text-mute">{course.description}</p>
      <p className="mt-2 text-sm text-mute">{course.difficulty}, about {course.minutes} min, {total} lessons</p>
      <div className="my-4 h-2 overflow-hidden rounded-full bg-line" role="progressbar" aria-label={`${course.name} progress`} aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full bg-good transition-all" style={{ width: `${pct}%` }} />
      </div>
      {course.available
        ? <Link href={`/learn/${course.slug}`} className="inline-block rounded-full bg-brand px-5 py-2 font-semibold text-white">{done ? "Continue" : "Start"}</Link>
        : <span className="inline-block rounded-full border border-line px-4 py-1.5 text-sm text-mute">Coming soon</span>}
    </article>
  );
}
