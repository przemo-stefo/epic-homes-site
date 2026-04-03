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
        gold: {
          DEFAULT: "#9A8A78",
          light: "#B3A89A",
          dark: "#7D7060",
        },
        dark: {
          DEFAULT: "#262626",
          card: "#1E1E1E",
          surface: "#333333",
          border: "#444444",
        },
      },
      fontFamily: {
        display: ["var(--font-raleway)", "sans-serif"],
        body: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
