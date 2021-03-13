module.exports = {
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    jost,
  ],
}

function jost({ addComponents, theme }) {
  addComponents({
    '.jost': {
      'font-family': '"Jost", sans-serif'
    },
  })
}