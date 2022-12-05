/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}', './public/**/*.{html,js,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    // optional configuration for resulting class name and/or tailwind theme key
    require('tailwindcss-spinner')({ className: 'spinner', themeKey: 'spinner' }),
  ],
};
