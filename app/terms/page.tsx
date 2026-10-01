import LegalPlaceholder from "@/components/LegalPlaceholder";
import { siteConfig } from "@/site.config";
export const metadata = { title: "Terms (draft)" };

export default function Page() {
  return (
    <LegalPlaceholder title="Terms (draft)">
      <p>{siteConfig.disclaimer}</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Lessons and tools use simplified examples. Real situations, rules, and taxes vary by person and place.</li>
        <li>Calculator results are hypothetical illustrations. They are not predictions or promises.</li>
        <li>Nothing here recommends a specific product, security, or policy.</li>
      </ul>
      <p>Open items for legal review: liability, content ownership, acceptable use, and how these terms can change.</p>
    </LegalPlaceholder>
  );
}
