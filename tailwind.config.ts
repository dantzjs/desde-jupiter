import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#F65826",
          50: "#FDE0D6",
          100: "#FCD1C3",
          200: "#FBB29C",
          300: "#F99474",
          400: "#F8764D",
          500: "#F65826",
          600: "#DB3B09",
          700: "#A52D07",
          800: "#6F1E05",
          900: "#391002",
          950: "#1E0801",
        },
        black: {
          DEFAULT: "#000000",
          side: "#13161c",
          fill: "#10121a",
        },
      },
    },
  },
};
