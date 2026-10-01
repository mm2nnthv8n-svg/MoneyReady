import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/content/courses";
import { lessonsByCourse } from "@/content/lessons";
import CourseLessons from "@/components/CourseLessons";

export function generateStaticParams() {
  return courses.filter((c) => c.available).map((c) => ({ course: c.slug }));
}

export function generateMetadata({ params }: { params: { course: string } }) {
  const course = courses.find((c) => c.slug === params.course);
  return { title: course?.name ?? "Course", description: course?.description };
}

export default function CoursePage({ params }: { params: { course: string } }) {
  const course = courses.find((c) => c.slug === params.course && c.available);
  const lessons = lessonsByCourse[params.course];
  if (!course || !lessons) notFound();
  return (
    <section className="py-12">
      <Link href="/learn" className="text-sm text-mute hover:text-ink">Back to Learn</Link>
      <h1 className="mt-2 font-display text-4xl font-extrabold">{course.name}</h1>
      <p className="mt-2 text-mute">{course.description}</p>
      <CourseLessons courseSlug={course.slug} lessons={lessons} />
    </section>
  );
}
