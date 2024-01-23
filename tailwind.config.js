/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5cd183',
        secondary: '#afd6e9',
        accent: '#2d9f53',
        bgColor: '#fefbfd',
        textColor: '#1c0815'
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

