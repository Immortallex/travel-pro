 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'travel-primary': '#1d4ed8',   // nice deep blue for nav
        'travel-secondary': '#3b82f6',
        'travel-bg': '#f9fafb',
      },
    },
  },
  plugins: [],
};