module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black_900_7f: "#0000007f",
        white_A700_b2: "#ffffffb2",
        gray_400: "#c4c4c4",
        gray_500: "#aaaaaa",
        white_A700_90: "#ffffff90",
        orange_400: "#ff9f24",
        gray_200: "#ebebeb",
        gray_100: "#f5f6f8",
        orange_50: "#ffefdb",
        black_900_99: "#00000099",
        black_900: "#000000",
        black_900_51: "#00000051",
        black_901: "#000316",
        black_900_14: "#00000014",
        white_A700: "#ffffff",
        cyan_400: "#21bdca",
      },
      fontFamily: { opensans: "Open Sans", nunito: "Nunito" },
      boxShadow: { bs: "10px 24px  54px 0px #00000014" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
