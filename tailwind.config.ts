import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#012E40',   // Azul escuro
        'secondary': '#03738C', // Azul médio
        'accent': '#00BC99',    // Verde-água
        'light': '#FFFFFF',
        'dark': '#000000',
      },
    },
  },
  plugins: [],
};
export default config;