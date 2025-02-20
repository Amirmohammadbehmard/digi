/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1EC0D4",
        "custom-border-color": "#f0f0f1",
      },
      backgroundColor: {
        "custom-input": "#f0f0f2",
      },
    },
    screens: {
      xs: "290px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".swiper-button-disabled": {
          display: "none",
          important: true,
        },
      });
    },
  ],
};
