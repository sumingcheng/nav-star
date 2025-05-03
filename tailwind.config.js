/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate';
import scrollbar from 'tailwind-scrollbar';

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  },
  plugins: [
    animate,
    scrollbar
  ],
}