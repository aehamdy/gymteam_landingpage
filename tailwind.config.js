/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      colors: {
        'accent': 'rgb(214, 253, 82)',
        'heading': 'rgb(245, 245, 245)',
        'highlight': 'rgb(221, 140, 121)',
        'primary-paragraph': '#242424',
        'secondary-paragraph': 'rgb(165, 165, 165)',
        // 'secondary-paragraph': 'rgb(207, 207, 207)',
        // 'secondary-paragraph': 'rgb(57, 57, 57)',
        'primary-bg': 'rgb(0, 0, 0)',
        'secondary-bg': 'rgb(36, 36, 36)',
        'toggle-bg': 'rgb(242, 201, 77)',
      },
      boxShadow: {
        'button-shadow': '0 0 20px 2px rgba(214, 253, 0.3)',
      },
      transitionDuration: {
        'short': '200ms',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '15%': { opacity: '0' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollRightToLeft: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-33.33%)'}
        }
      },
      animation: {
        'fadeInDown': 'fadeInDown 0.25s ease-out forwards',
        'scrollRightToLeft': 'scrollRightToLeft 15s linear infinite',
      }
    },
  },
  plugins: [],
}