/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-inter)", "sans-serif"],
        },
        colors: {
          black: "#24222f",
          red: "#e5372c",
        },
        keyframes: {
          'rotate-360': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
        animation: {
          'spin-360': 'rotate-360 6s linear infinite',
        },
      },
    },
    plugins: [],
  };
  