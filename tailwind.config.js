module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'selector',
    theme: {
      extend: {
        screens:{
          "other":{'min': '340px', 'max': '1200px'}
        }
      },

    },
    plugins: [],
  }