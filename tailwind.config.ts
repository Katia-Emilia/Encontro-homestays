import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#C9A96E",
        cobalt: "#1B3A6B",
        cream: "#F5F0E8",
        background: "#FDFAF5",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
      },
      letterSpacing: {
        luxe: "0.2em",
      },
    },
  },
  plugins: [],
} satisfies Config;