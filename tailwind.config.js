module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FBBD23",
          "secondary": "#377CFB",
          "accent": "#EA5234",
          "neutral": "#333C4D",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
