import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "calc-width": "calc(100% - 40% - 16px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // primary: "#214383",
        primary: "#036939",
        // secondary: "#0a7d21",
        secondary: "#98c23c",
        greish: "#626262",
        primary2: "#0038a1",
        secondary2: "#0b8023",
        bgmain: "#6e5441",
      },
    },
  },
  plugins: [],
};
export default config;
