module.exports = {
  purge: ['./**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {

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
