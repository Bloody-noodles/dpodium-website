/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif']
      },
      colors: {
        dpodium: {
          red: '#D71920',
          yellow: '#F5C400',
          green: '#00843D',
          blue: '#0066A1',
          ink: '#111111',
          cream: '#F7F5F0'
        }
      }
    }
  },
  plugins: [require('daisyui')]
}