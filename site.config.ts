// ONE PLACE to change the basics of the site.
// Change a value, save, and the whole site updates.
export const siteConfig = {
  name: "MoneyReady",
  tagline: "Money skills for real life.",
  description: "Free, interactive financial education built for teenagers.",
  siteUrl: "https://moneyready.example", // CHANGE THIS to your real web address after you deploy
  contactEmail: "", // Add your email later. Leave empty until you have one.
  social: [] as { label: string; url: string }[], // e.g. { label: "Instagram", url: "https://..." }
  nav: [
    { label: "Learn", href: "/learn" },
    { label: "Tools", href: "/tools" },
    { label: "Challenges", href: "/challenges" },
    { label: "Impact", href: "/impact" },
    { label: "About", href: "/about" },
  ],
  footerLinks: [
    { label: "My progress", href: "/progress" },
    { label: "Sources", href: "/sources" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  disclaimer:
    "MoneyReady provides financial education for informational and educational purposes only and does not provide individualized financial, investment, tax, or legal advice.",
};
