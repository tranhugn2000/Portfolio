/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Orbitron',
        secondary: 'Rajdhani',
        tertiary: 'Aldrich',
      },
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      backgroundImage: {
        about: "url('./assets/about.png')",
        service: "url('./assets/about-2.jpg')",
        site: "url('./assets/site-bg.jpg')",
      },
    },
  },
  plugins: [],
}