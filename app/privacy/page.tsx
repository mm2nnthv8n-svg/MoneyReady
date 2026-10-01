import LegalPlaceholder from "@/components/LegalPlaceholder";
export const metadata = { title: "Privacy (draft)" };

export default function Page() {
  return (
    <LegalPlaceholder title="Privacy (draft)">
      <p>This describes how the current version of the site works. It is not a finished privacy policy.</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>There are no accounts, and the site does not ask for names, addresses, birth dates, school IDs, or financial account information.</li>
        <li>Your progress and quiz scores are saved in your own browser (local storage). They are not sent to us. Clearing your browser data erases them.</li>
        <li>The site does not currently use analytics or advertising tools.</li>
        <li>The website host may keep standard technical logs, such as IP addresses. This needs to be confirmed and described before launch.</li>
        <li>Please do not enter personal or financial information into any tool. Numbers you type into calculators stay on your device.</li>
      </ul>
      <p>Open items for legal review: rules for users under 13 and under 18, hosting logs, future analytics, and consent for any assessment data.</p>
    </LegalPlaceholder>
  );
}
