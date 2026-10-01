import Link from "next/link";
import BudgetBuilderTool from "@/components/BudgetBuilderTool";

export const metadata = { title: "Budget builder", description: "Plan a month of income and see your breakdown." };

export default function Page() {
  return (
    <section className="py-12">
      <Link href="/tools" className="text-sm text-mute hover:text-ink">Back to Tools</Link>
      <h1 className="mt-2 font-display text-4xl font-extrabold">Budget builder</h1>
      <p className="mt-2 max-w-prose text-mute">Enter a month of income and plan where it goes. Nothing you type leaves your device.</p>
      <div className="mt-8"><BudgetBuilderTool /></div>
    </section>
  );
}
