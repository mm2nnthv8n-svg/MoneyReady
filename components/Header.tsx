"use client"; // needed because the menu opens and closes (interactive)
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/site.config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const link = "rounded px-1 font-medium text-mute hover:text-ink";
  return (
    <header className="sticky top-0 z-10 border-b border-line header-bg backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="font-display text-xl font-extrabold">{siteConfig.name}</Link>
        {/* Desktop menu */}
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((n) => <Link key={n.href} href={n.href} className={link}>{n.label}</Link>)}
          <Link href="/learn" className="rounded-full bg-brand px-5 py-2 font-semibold text-white">Start Learning</Link>
        </nav>
        {/* Mobile hamburger */}
        <button className="h-11 w-11 rounded-xl border border-line md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? "\u2715" : "\u2630"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden">
          {siteConfig.nav.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 font-medium">{n.label}</Link>)}
          <Link href="/learn" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-brand px-5 py-3 text-center font-semibold text-white">Start Learning</Link>
        </nav>
      )}
    </header>
  );
}
