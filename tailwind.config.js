/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        miaza: {
          50: '#FAF7FB',
          100: '#F3EDF5',
          200: '#E8DFE9',
          300: '#D4C4D6',
          400: '#B794C0',
          500: '#9B7BB8',
          600: '#8B6AA8',
          700: '#6B5077',
          800: '#5D4646',
          900: '#4A3852',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}
