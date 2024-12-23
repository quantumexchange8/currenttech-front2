const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(92deg, #F00 0%, #FF7A00 13.5%, #DBFF00 29.5%, #00FF0A 39%, #00DED0 52%, #0019FF 64%, #C0F 75%, #FF429D 89%, #000 97%)',
      },
      textShadow: {
        custom: '2px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        custom: '2px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
    screens: {
      'xs': '390px',
      // => @media (min-width: 393px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'cus-lg': '1053px',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-v-shape': {
          'clip-path': 'polygon(0 100%, 400% 0, 0 0)',
        },
      }

      addUtilities(newUtilities, ['responsive'])
    },
     require('tailwindcss-textshadow'),
  ],
}

