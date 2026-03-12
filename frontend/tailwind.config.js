/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#001f3f',
        teal: '#008080',
        amber: '#d97706',
      },
    },
  },
  plugins: [],
};