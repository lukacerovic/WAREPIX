/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "san-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "rober-medium": ["rober-medium", "sans-serif"],
        "rober-regular": ["rober-regular", "sans-serif"]
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#DFDFF2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",

        },
        violet: {
          300: "#5724FF",
        },
        yellow: {
          100: "#8E983F",
          300: "#EDFF66",
        }
      },
      keyframes: {
        'pulse-left': {
          '0%, 100%': { opacity: 0.2, transform: 'translateX(0)' },
          '50%': { opacity: 1, transform: 'translateX(-4px)' },
        },
        'pulse-right': {
          '0%, 100%': { opacity: 0.2, transform: 'translateX(0)' },
          '50%': { opacity: 1, transform: 'translateX(4px)' },
        },
      },
      animation: {
        'pulse-left': 'pulse-left 1.5s infinite',
        'pulse-right': 'pulse-right 1.5s infinite',
      },
    },
  },
  plugins: [],
}