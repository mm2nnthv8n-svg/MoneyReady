import ContactForm from "@/components/ContactForm";
export const metadata = { title: "Contact", description: "Send feedback or questions." };

export default function Page() {
  return (
    <section className="py-12">
      <h1 className="mb-6 font-display text-4xl font-extrabold">Contact</h1>
      <ContactForm />
    </section>
  );
}
