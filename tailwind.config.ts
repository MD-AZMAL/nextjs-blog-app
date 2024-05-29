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
          text: "#21243D",
          accent: "#FF6464",
          highlight: {
            "50": "#EDF7FA",
            "500": "#00A8CC",
          },
          translucent: {
            brand: "#ff6464cc",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
