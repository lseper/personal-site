module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      // where you add extensions of your tailwind css 
      extend: {
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