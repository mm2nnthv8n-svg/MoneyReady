import CourseCard from "@/components/CourseCard";
import { courses } from "@/content/courses";

export const metadata = { title: "Learn", description: "Six free courses on practical money skills." };

export default function LearnPage() {
  return (
    <section className="py-12">
      <h1 className="font-display text-4xl font-extrabold">Learn</h1>
      <p className="mt-2 text-mute">Progress is saved only in this browser.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => <CourseCard key={c.slug} course={c} />)}
      </div>
    </section>
  );
}
