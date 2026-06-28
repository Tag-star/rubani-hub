import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
                        colors: {
              brand: {
                blue: "#C9A84C",
                green: "#C9A84C",
                white: "#FFFFFF",
                navy: "#111111",
                grey: "#F9F9F9",
                "blue-light": "#E0B95E",
                "navy-mid": "#222222",
              },
            },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0D1B4B 0%, #1A3C8F 50%, #0D1B4B 100%)",
        "card-gradient":
          "linear-gradient(145deg, #1A3C8F 0%, #0D1B4B 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
