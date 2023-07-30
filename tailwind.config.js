/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['NotoSansTC', 'Roboto'],
      },
      colors: {
        'primary': '#AA0601',
        'secondary':'#FBF2F2',
        'fontBlack':'#000000',
        'fontPrimary':'#650300',
        'fontSecondary':'#FFFFFF',
      },
    },
    screens: {
      'sm': {'max': '576px'},

      'md': {'max': '768px'},

      'lg': {'max': '996px'},

      'xl': {'max': '1200px'},

      'xxl': {'max': '1920px'},

      'home-md': {'max':'768px','min':'450px'},
      'home-sm': {'max':'449px'},
    },
  },
  plugins: [],
}

