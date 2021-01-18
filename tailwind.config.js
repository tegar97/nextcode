module.exports = {
  purge: ['./**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          50: '#141920',
          default: '#000'
        },
        blue:{
          500: '#407BFF'
        }
      }
    },
    fontFamily: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      body: ['Roboto'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
