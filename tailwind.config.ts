import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        charcoal: "#151515",
        gold: { DEFAULT: "#D4A72C", light: "#F0C75E" },
        cream: "#FFF7E6",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      keyframes: {
        steam: {
          "0%": { transform: "translateY(0) scale(0.8)", opacity: "0" },
          "30%": { opacity: "0.16" },
          "100%": { transform: "translateY(-45vh) scale(1.6)", opacity: "0" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        scrollDot: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(38px)", opacity: "0" },
        },
      },
      animation: {
        steam: "steam 9s ease-out infinite",
        "spin-slow": "spinSlow 90s linear infinite",
        "scroll-dot": "scrollDot 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
