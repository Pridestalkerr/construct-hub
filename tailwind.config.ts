import { type Config } from "tailwindcss";

const colors = {
  darker: "#393646",
  dark: "#4F4557",
  light: "#6D5D6E",
  lighter: "#F4EEE0",
} as const;

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: colors,
      textColor: colors,
      borderColor: colors,
      hover: {
        backgroundColor: colors,
        textColor: colors,
        borderColor: colors,
      },
    },
  },
  plugins: [],
} satisfies Config;
