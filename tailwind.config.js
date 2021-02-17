module.exports = {
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        bioRhyme: ['BioRhyme', 'serif'],
        cabin: ['Cabin', 'sans-serif'],
      },
      colors: {
        oxfordBlue: '#101e42',
        silverSand: '#A9CAD8',
        mintCream: '#F5FBF5',
        hookersGreen: '#4e6e58',
        terraCotta: '#e07a5f',
        white: '#ffffff',
        gray200: '#E5E7EB',
      },
    },
    screens: {
      phone: '320px',

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
