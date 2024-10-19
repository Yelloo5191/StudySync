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
        background: "var(--background)",
        foreground: "var(--foreground)",
        seasalt: {
          DEFAULT: "#f7f6f4",
          100: "#393429",
          200: "#726752",
          300: "#a49982",
          400: "#cdc7ba",
          500: "#f7f6f4",
          600: "#f8f7f6",
          700: "#faf9f8",
          800: "#fcfbfa",
          900: "#fdfdfd",
        },
        taupe_gray: {
          DEFAULT: "#9b9593",
          100: "#1f1d1d",
          200: "#3f3b3a",
          300: "#5e5857",
          400: "#7d7674",
          500: "#9b9593",
          600: "#afaaa8",
          700: "#c3bfbe",
          800: "#d7d4d4",
          900: "#ebeae9",
        },
        redwood: {
          DEFAULT: "#a7555a",
          100: "#211112",
          200: "#422124",
          300: "#643236",
          400: "#854347",
          500: "#a7555a",
          600: "#b97579",
          700: "#cb979b",
          800: "#dcbabc",
          900: "#eedcde",
        },
        beaver: {
          DEFAULT: "#a47667",
          100: "#211714",
          200: "#422e28",
          300: "#63463c",
          400: "#855d50",
          500: "#a47667",
          600: "#b69185",
          700: "#c8aca3",
          800: "#dac8c2",
          900: "#ede3e0",
        },
        raisin_black: {
          DEFAULT: "#32242c",
          100: "#0a0709",
          200: "#140f12",
          300: "#1e161b",
          400: "#281d23",
          500: "#32242c",
          600: "#634858",
          700: "#946c83",
          800: "#b89dac",
          900: "#dbced6",
        },
        dark: "#111111",
        dark_light: "#191919",
        light_gray: "#2D2D2C",
      },
    },
  },
  plugins: [],
};
export default config;
