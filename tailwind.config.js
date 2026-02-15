/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        blush: {
          DEFAULT: "#fde6f2",
          light: "#fef2f8",
          dark: "#f8c9e0",
          deep: "#e91e8c",
          ink: "#6b2d5a",
        },
        rose: {
          soft: "#f5d0e3",
          DEFAULT: "#ec7ab0",
          deep: "#c2185b",
        },
        maroon: {
          DEFAULT: "#6b2d5a",
          hover: "#5c2849",
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(233, 30, 140, 0.08)",
        cardHover: "0 8px 32px rgba(233, 30, 140, 0.12)",
        glow: "0 0 32px rgba(201, 37, 107, 0.35)",
      },
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        iconRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.4s ease-out forwards",
        "icon-rotate": "iconRotate 0.35s ease-out",
        marquee: "marquee 50s linear infinite",
      },
    },
  },
  plugins: [],
}
