import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        titleText: "#212121",
        darkBlue: "#002ac0",
        lightBlue: "#1aa2ee",
        varText: "#010d39",
      },
      fontFamily: {
        gilroyMedium: ["var(--font-gilroy-medium)"],
        gilroyBold: ["var(--font-gilroy-bold)"],
      },
      animation: {
        "slide-right": "slideRight 3s ease-in-out forwards",
        grow: "grow 2s ease-in-out forwards",
        "bounce-slow": "bounce 3s linear infinite",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        grow: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
