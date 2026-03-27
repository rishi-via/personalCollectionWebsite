/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d7f1ff',
          500: '#1d8fc2',
          600: '#1478a6',
          700: '#0f5c7f',
          800: '#0a445f',
        },
        accent: {
          500: '#ca8b2f',
          600: '#a96f1f',
          700: '#845519',
        },
        sand: {
          50: '#fefcf8',
          100: '#f7f1e7',
          200: '#f0e4d2',
        },
      },
    },
  },
  plugins: [],
}
