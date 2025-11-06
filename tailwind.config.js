/**** @type {import('tailwindcss').Config} ****/
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0e14',
        surface: '#0f1321',
        accent: {
          blue: '#00E5FF',
          green: '#00FF9C',
          purple: '#9D4EDD'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(0,229,255,0.25)'
      },
      backgroundImage: {
        grid: 'linear-gradient(transparent 24px, rgba(255,255,255,0.06) 25px), linear-gradient(90deg, transparent 24px, rgba(255,255,255,0.06) 25px)'
      }
    }
  },
  plugins: []
}
