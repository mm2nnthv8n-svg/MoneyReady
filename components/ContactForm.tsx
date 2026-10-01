"use client";
import { useState } from "react";
import { siteConfig } from "@/site.config";

const categories = ["Student feedback", "Teacher/educator", "Partnership", "Technical issue", "General inquiry"];

// This form does not send anything to a server. It opens the visitor's own email app
// with the message filled in. It only works once siteConfig.contactEmail is set.
export default function ContactForm() {
  const [category, setCategory] = useState(categories[0]);
  const [message, setMessage] = useState("");
  const ready = siteConfig.contactEmail !== "";
  const href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(`${siteConfig.name}: ${category}`)}&body=${encodeURIComponent(message)}`;
  const field = "mt-1 w-full rounded-xl border border-line bg-card px-3 py-2";
  return (
    <div className="max-w-xl">
      {!ready && <p role="status" className="mb-4 rounded-2xl border border-line p-4 text-mute">A contact email has not been set up yet, so this form is turned off for now.</p>}
      <div className="grid gap-4">
        <div><label htmlFor="cat" className="font-medium">Topic</label>
          <select id="cat" value={category} onChange={(e) => setCategory(e.target.value)} className={field}>{categories.map((c) => <option key={c}>{c}</option>)}</select></div>
        <div><label htmlFor="msg" className="font-medium">Message</label>
          <textarea id="msg" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={field} /></div>
        <p className="text-sm text-mute">This opens your email app. Please do not include personal or financial information.</p>
        {ready
          ? <a href={href} className="w-fit rounded-full bg-brand px-6 py-3 font-semibold text-white">Open email</a>
          : <button type="button" disabled className="w-fit rounded-full border border-line px-6 py-3 font-semibold text-mute">Email not set up yet</button>}
      </div>
    </div>
  );
}
