module.exports = ctx => ({
  plugins: {
    'tailwindcss': {},
    '@fullhuman/postcss-purgecss': ctx.env === 'production' && {
      // Specify the paths to all of the template files in your project
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.svelte',
      ],
      // Include any special characters you're using in this regular expression
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    },
    'cssnano': {
      preset: 'default',
    },
  }
})