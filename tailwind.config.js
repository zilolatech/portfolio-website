/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        background1: "rgba(var(--background1))",
        background2: "rgba(var(--background2))",
        text: "rgba(var(--text))",
        accent: "rgba(var(--accent))",
      }
    },
  },
  plugins: [],
}

