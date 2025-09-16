/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        typing: {
          "0%": { width: "0ch" },
          "100%": { width: "16ch" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        typing: "typing 2s steps(16) forwards, blink 0.9s infinite",
      },
    },
  },
  plugins: [],
};
