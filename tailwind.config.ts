import type { Config } from "tailwindcss";

export default {
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
        'Cream': '#DAD7CD',
        'Green': '#A3B18A',
        'Primary': '#588157',
        'Secondary': '#3A5A40',
        'Tertiary': '#344E41',
      },
    },
  },
  plugins: [require('daisyui'),],
} satisfies Config;
