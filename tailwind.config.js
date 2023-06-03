/** @type {import('tailwindcss').Config} */
const { colors } = require('tailwindcss/defaultTheme');
const { join } = require('path');
module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './app/**/*.{js,ts,jsx,tsx}')
  ],
  theme: {
    fontFamily: {
      montserrat: [
        "Montserrat",
        "sans-serif"
      ],
      chivo: [
        "Chivo",
        "sans-serif"
      ]
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },  
      colors: {
        blue: {
          ...colors.blue,
          600: '#314D68'
        },
        slate: {
          ...colors.slate,
          50: '#F9F5F2'
        }
      }
    }
  }
}
