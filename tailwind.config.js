/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  //in the theme object overrides everything in that category
  theme: {
    fontFamily: {
      // use sanything but you can use sans to override the tailwind entire font
      sans: "Roboto Mono, monospace",
    },

    //keeping everything from tailwind extend it
    extend: {
      colors: {
        pizza: "#123456",
      },
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      //dynamic viewport height unit modern for mobile screens
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
