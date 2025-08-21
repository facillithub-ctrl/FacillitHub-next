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
        'page-bg': 'var(--page-bg)',
        'form-bg': 'var(--form-bg)',
        'panel-bg': 'var(--panel-bg)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'text-light': 'var(--text-light)',
        'text-dark': 'var(--text-dark)',
        'text-muted': 'var(--text-muted)',
        'input-bg': 'var(--input-bg)',
      },
      borderRadius: {
        '4xl': '2.5rem', // Aumenta o arredondamento para um visual mais suave
      },
      boxShadow: {
        'custom': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;