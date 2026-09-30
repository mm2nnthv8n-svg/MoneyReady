import type { Config } from "tailwindcss";

// Colors come from CSS variables in app/globals.css.
// To change the look of the whole site, edit the colors THERE.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "var(--page)", card: "var(--card)", ink: "var(--ink)", mute: "var(--mute)",
        line: "var(--line)", brand: "var(--brand)", good: "var(--good)",
      },
      fontFamily: { display: ["var(--font-display)"], sans: ["var(--font-body)", "system-ui"] },
    },
  },
  plugins: [],
};
export default config;
