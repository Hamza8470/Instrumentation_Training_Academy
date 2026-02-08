/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Fraunces"', 'serif'],
      },
      colors: {
        ink: '#0f172a',
        slate: '#334155',
        mist: '#f8fafc',
        sand: '#fff7ed',
        teal: '#0ea5a0',
        amber: '#f97316',
        ocean: '#0f766e',
        cloud: '#e2e8f0',
      },
      boxShadow: {
        soft: '0 24px 60px -40px rgba(15, 23, 42, 0.4)',
        card: '0 18px 40px -28px rgba(15, 23, 42, 0.45)',
      },
    },
  },
  plugins: [],
}

