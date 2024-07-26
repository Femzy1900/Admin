/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridAutoRows: {
        'min-120': "minmax(120px, auto)",
        'min-180': 'minmax(180px, auto)'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.after': {
          'position': 'relative',
        },
        '.after::after': {
          'content': '""',
          'position': 'absolute',
          'left': '50%',
          'bottom': '0',
          'width': '10px',
          'height': '10px',
          'border-radius': '50%',
          'background-color': '#f45b69',
          'transform': 'translateX(-50%)'
        }
      })
    }
  ],
}