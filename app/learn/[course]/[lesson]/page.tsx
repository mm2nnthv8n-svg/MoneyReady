import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/content/courses";
import { lessonsByCourse } from "@/content/lessons";
import LessonPlayer from "@/components/LessonPlayer";

export function generateStaticParams() {
  return Object.entries(lessonsByCourse).flatMap(([course, lessons]) => lessons.map((l) => ({ course, lesson: l.slug })));
}

export function generateMetadata({ params }: { params: { course: string; lesson: string } }) {
  const lesson = lessonsByCourse[params.course]?.find((l) => l.slug === params.lesson);
  return { title: lesson?.title ?? "Lesson", description: lesson?.objective };
}

export default function LessonPage({ params }: { params: { course: string; lesson: string } }) {
  const course = courses.find((c) => c.slug === params.course);
  const lessons = lessonsByCourse[params.course];
  const index = lessons?.findIndex((l) => l.slug === params.lesson) ?? -1;
  if (!course || !lessons || index < 0) notFound();
  const lesson = lessons[index];
  const next = lessons[index + 1];
  const nextHref = next ? `/learn/${course.slug}/${next.slug}` : `/learn/${course.slug}`;
  const nextLabel = next ? (next.assessment ? "Course assessment" : "Next lesson") : "Back to course";
  return (
    <section className="py-10">
      <Link href={`/learn/${course.slug}`} className="text-sm text-mute hover:text-ink">{course.name}</Link>
      <h1 className="mb-6 mt-1 font-display text-3xl font-extrabold">{lesson.title}</h1>
      <LessonPlayer courseSlug={course.slug} lesson={lesson} nextHref={nextHref} nextLabel={nextLabel} />
      <p className="mx-auto mt-8 max-w-2xl text-sm text-mute">Last reviewed: {lesson.lastReviewed}. Educational examples are simplified and are not financial advice.</p>
    </section>
  );
}
