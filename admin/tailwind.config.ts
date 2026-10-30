import type { Config } from "tailwindcss";

// Colors mirror shared/constants COLORS (kept literal so Tailwind can scan them).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080A0F",
        surface: "#121722",
        card: "#191F2B",
        primary: "#8B5CF6",
        secondary: "#06B6D4",
        muted: "#A1A1AA",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      keyframes: { fadeUp: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "none" } } },
      animation: { fadeUp: "fadeUp .6s ease-out both" },
    },
  },
  plugins: [],
};
export default config;
