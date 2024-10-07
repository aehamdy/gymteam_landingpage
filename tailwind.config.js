/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'accent': 'rgb(214, 253, 82)',
        'heading': 'rgb(245, 245, 245)',
        'highlight': 'rgb(221, 140, 121)',
        'primary-paragraph': '#242424',
        'secondary-paragraph': 'rgb(207, 207, 207)',
        // 'secondary-paragraph': 'rgb(57, 57, 57)',
        'primary-bg': 'rgb(0, 0, 0)',
        'secondary-bg': 'rgb(36, 36, 36)',
        'toggle-bg': 'rgb(242, 201, 77)',
      },
      transitionDuration: {
        'short': '200ms',
      }
    },
  },
  plugins: [],
}