module.exports = {
  purge: {
    content: [
      './app/**/*.html.erb',
      './app/helpers/**/*.rb',
      './app/components/**/*.html.erb',
      './app/components/**/*.rb',
      './app/javascript/**/*.js',
    ],

    // These options are passed through directly to PurgeCSS
    options: {
      safelist: ['bg-red-500', 'px-4'],
      // This is what I needed to get forms / inputs styled correctly. It adds the types selectors on production.
      safelist: [
        [type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='search'], [type='time'], [type='checkbox'], [type='radio']
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
