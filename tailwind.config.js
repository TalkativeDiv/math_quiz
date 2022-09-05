/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**.html', 'src/scripts/**.js'],
  theme: {
    fontFamily: {
      sans: [
        'Inter var',
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
