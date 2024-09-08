import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mob: "400px", // Extra small devices (custom)
        "mob-lg": "520px", // Small devices
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "24px",
        screens: {
          DEFAULT: "100%", // For smaller screens, container will take full width
          lg: "1200px", // On large screens and above, container width will be max 1200px
        },
      },
      colors: {
        primary: {
          DEFAULT: "#063461", // Primary color
          dark: "#042A4D", // Darker shade of primary
          light: "#0B6AB0", // Lighter shade of primary
        },
        secondary: {
          DEFAULT: "#E64833", // Primary color
          dark: "#E64833", // Darker shade of primary
          light: "#cdcdcd", // Lighter shade of primary
        },

        background: {
          default: "#7bb6f114",
          light: "#7bb6f114",
        },
        dark: {
          DEFAULT: "#121212",
          light: "#1B1F24",
          text: "#e4e4e4",
          "text-light": "#bec0c3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
