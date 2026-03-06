import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── TTK Brand Palette ─────────────────────────────────────────
        // To change the site palette, edit these values only.
        navy:        "#070F23",   // primary dark background
        "navy-deep": "#04091A",   // deepest shade (hero, footer)
        "navy-mid":  "#0C1A38",   // medium dark (cards, bars)
        "navy-light":"#122347",   // border / hover shade
        gold:        "#C4923A",   // primary accent / CTA
        "gold-light":"#E0AD52",   // hover / lighter gold
        ash:         "#8BA0BB",   // muted text on dark backgrounds
        cream:       "#F5F2EC",   // off-white light sections
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans:    ["var(--font-body)",    "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up":   "fadeUp 0.7s ease-out both",
        "fade-in":   "fadeIn 0.6s ease-out both",
        "line-grow": "lineGrow 0.8s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%":   { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
