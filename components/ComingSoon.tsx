// Temporary page body for sections built in a later step.
export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="py-16">
      <h1 className="font-display text-4xl font-extrabold">{title}</h1>
      <p className="mt-3 text-mute">This page is coming soon.</p>
    </section>
  );
}
