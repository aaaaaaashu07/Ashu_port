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
        cream: "#FAF7F2",
        ink: "#2C1A0E",
        espresso: "#7A5C4A",
        terracotta: "#E8855A",
        sand: "#C9A882",
        sage: "#B8CFA8",
        muted: "#8B6F5E",
        card: "#FFF8F0",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.9s both",
        "fade-up-delay": "fadeUp 0.9s 0.4s both",
        "fade-up-slow": "fadeUp 0.8s 0.8s both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
