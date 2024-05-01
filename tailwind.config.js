const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      // where you add extensions of your tailwind css 
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: colors.white,
          gray: colors.gray,
          emerald: colors.emerald,
          indigo: colors.indigo,
          yellow: colors.yellow,
          sky: colors.sky,
          blue: colors.blue,
          orange: colors.orange,
          pink: colors.pink,
          teal: colors.teal,
          lime: colors.lime,
          github: {
            primary: "#6e5494",
            secondary: "#fafafa",
          }
        },
        fontFamily: {
          // font-body corresponds to this font
          body: ['Source Sans Pro']
        },
        width: {
          '11/10': '110%'
        }
      } 
    },
    variants: {
    },
    plugins: [],
  }
