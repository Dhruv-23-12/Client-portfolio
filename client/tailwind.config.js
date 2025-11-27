/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050505',
        accent: '#8459FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      dropShadow: {
        lightning: '0 0 20px rgba(255,0,255,0.6)',
      },
    },
  },
  plugins: [],
}

