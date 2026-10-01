import Link from "next/link";
import CompoundGrowthTool from "@/components/CompoundGrowthTool";

export const metadata = { title: "Compound growth calculator", description: "See how regular contributions could grow over time. Hypothetical illustration." };

export default function Page() {
  return (
    <section className="py-12">
      <Link href="/tools" className="text-sm text-mute hover:text-ink">Back to Tools</Link>
      <h1 className="mt-2 font-display text-4xl font-extrabold">Compound growth calculator</h1>
      <p className="mt-2 max-w-prose text-mute">See how money could grow when you add to it regularly. Change the numbers and watch the chart.</p>
      <div className="mt-8"><CompoundGrowthTool /></div>
      <div className="mt-6 max-w-prose text-sm text-mute">
        <p><strong>Hypothetical educational illustration.</strong> Investment returns are not guaranteed, and real returns change from year to year and can be negative. This is not a prediction.</p>
        <p className="mt-2">Assumptions: the yearly rate is split into 12 equal monthly rates, contributions are added at the end of each month, and there are no fees, taxes, or inflation.</p>
      </div>
    </section>
  );
}
