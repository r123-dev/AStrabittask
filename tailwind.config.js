/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'badgeUtkarsh':'rgba(82, 11, 141, 0.1)',
        'badgeBajaj':'rgba(0, 114, 187, 0.1)',
        'badgeMahindra':'rgba(255, 0, 0, 0.1)',
        'badgeSRM':'rgba(1, 1, 1, 0.1)',
      },
      fontFamily: {
        'apercupro': ['ApercuPro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

