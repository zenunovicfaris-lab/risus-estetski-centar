import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#FBF8F3",
        "bg-surface": "#F4ECE2",
        accent: "#CFA64C",
        "accent-hover": "#B07D2E",
        "accent-light": "#E5D18A",
        "text-primary": "#352A22",
        "text-muted": "#857261",
        border: "#E9DDCF",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,7vw,5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem,5vw,4rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem,3vw,2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "6rem",
        "section-lg": "9rem",
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        "warm-sm": "0 1px 0 #E9DDCF",
        "warm-md": "0 4px 24px rgba(53,42,34,0.08)",
        "warm-lg": "0 8px 48px rgba(53,42,34,0.12)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
