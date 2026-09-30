// Shared layout for Privacy and Terms. The banner is intentional. Do not remove it
// until a qualified person has reviewed the real text.
export default function LegalPlaceholder({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-12">
      <h1 className="font-display text-4xl font-extrabold">{title}</h1>
      <div role="note" className="mt-4 rounded-2xl border-l-4 border-orange-600 p-4 tint-brand">
        <strong>Placeholder.</strong> This page is a draft and has not been reviewed by a lawyer. It must be reviewed before a public launch.
      </div>
      <div className="mt-6 max-w-prose space-y-4">{children}</div>
    </section>
  );
}
