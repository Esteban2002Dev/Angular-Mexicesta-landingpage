/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkStone: '#1D1D1D',
        bone: '#F6F6F6',
        grass: '#65DE80',
        egg: '#D6DEA7',
        blood: '#D46E6E',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        moveBlobRed: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20vw, -20vh)' },
          '50%': { transform: 'translate(40vw, 20vh)' },
          '75%': { transform: 'translate(60vw, -30vh)' },
        },
        moveBlobYellow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-30vw, 10vh)' },
          '50%': { transform: 'translate(-50vw, -20vh)' },
          '75%': { transform: 'translate(-20vw, 30vh)' },
        },
        moveBlobGreen: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-10vw, 20vh)' },
          '50%': { transform: 'translate(10vw, -40vh)' },
          '75%': { transform: 'translate(40vw, 30vh)' },
        },
      },
      animation: {
        moveBlobRed: 'moveBlobRed 10s ease-in-out infinite',
        moveBlobYellow: 'moveBlobYellow 12s ease-in-out infinite',
        moveBlobGreen: 'moveBlobGreen 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
