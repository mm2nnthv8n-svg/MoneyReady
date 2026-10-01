import ProgressDashboard from "@/components/ProgressDashboard";

export const metadata = { title: "My progress", description: "Your saved progress, stored only in this browser." };

export default function ProgressPage() {
  return (
    <section className="py-12">
      <h1 className="mb-6 font-display text-4xl font-extrabold">My progress</h1>
      <ProgressDashboard />
    </section>
  );
}
