const env = process.env.NODE_ENV

module.exports = {
  purge: {
    enabled: env !== 'development',
    content: [
      './app/**/*.html.erb',
      './app/helpers/**/*.rb',
      './app/components/**/*.html.erb',
      './app/components/**/*.rb',
      './app/javascript/**/*.js',
    ],

    // These options are passed through directly to PurgeCSS
    options: {
      // This is what I needed to get forms / inputs styled correctly. It adds the types selectors on production.
      safelist: [
        "type", // [type='checkbox']
      ],
    },
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],

}
