import Link from "next/link";
import { siteConfig } from "@/site.config";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line py-8 text-sm text-mute">
      <div className="mx-auto max-w-5xl px-5">
        <p className="max-w-prose">{siteConfig.disclaimer}</p>
        <div className="mt-3 flex flex-wrap gap-4">
          {siteConfig.footerLinks.map((l) => <Link key={l.href} href={l.href} className="hover:text-ink">{l.label}</Link>)}
        </div>
      </div>
    </footer>
  );
}
