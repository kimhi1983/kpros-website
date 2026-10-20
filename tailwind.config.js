/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./main.tsx",
    "./i18n.ts",
    "./site.config.ts",
    "./components/**/*.{ts,tsx}",
    "./constants.ts",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F5F0",
        ink: "#15201B",
        forest: { DEFAULT: "#1F5A3C", dark: "#143D29", light: "#E6EFE9", mint: "#8FD3AE" },
        sand: "#E9E4D8",
        line: "#E3DFD6",
        muted: "#4A544D",
        soft: "#5C665F",
      },
      fontFamily: {
        sans: ["'Noto Sans KR'", "'Noto Sans SC'", "Inter", "system-ui", "sans-serif"],
        zh: ["'Noto Sans SC'", "'Noto Sans KR'", "Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "1312px" },
    },
  },
  plugins: [],
};
