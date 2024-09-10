/** @type {import('tailwindcss').Config} */

const goldenRatio = [1, 1.618, 2.618, 4.236, 6.854, 11.09, 17.944, 29.033, 46.976, 76.007]; // Golden Ratio values

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6A00",
          50: "#FFD5B8",
          100: "#FFC9A3",
          200: "#FFB27A",
          300: "#FF9A52",
          400: "#FF8229",
          500: "#FF6A00",
          600: "#C75300",
          700: "#8F3B00",
          800: "#572400",
          900: "#1F0D00",
          950: "#030100",
        },
        secondary: {
          DEFAULT: "#664E36",
          50: "#C4AA90",
          100: "#BDA082",
          200: "#AF8B68",
          300: "#9B7752",
          400: "#816244",
          500: "#664E36",
          600: "#413223",
          700: "#1D160F",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        black: {
          DEFAULT: "#13161C",
          50: "#5D6C89",
          100: "#55627D",
          200: "#444F65",
          300: "#343C4D",
          400: "#232934",
          500: "#13161C",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        white: {
          DEFAULT: "#F5F3EF",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F5F3EF",
          600: "#DFD9CC",
          700: "#CABFAA",
          800: "#B4A587",
          900: "#9F8B65",
          950: "#8E7D59",
        },
      },
      spacing: {
        "gr1/2": ".5rem",
        gr1: `${goldenRatio[0]}rem`,
        gr2: `${goldenRatio[1]}rem`,
        gr3: `${goldenRatio[2]}rem`,
        gr4: `${goldenRatio[3]}rem`,
        gr5: `${goldenRatio[4]}rem`,
        gr6: `${goldenRatio[5]}rem`,
        gr7: `${goldenRatio[6]}rem`,
        gr8: `${goldenRatio[7]}rem`,
        gr9: `${goldenRatio[8]}rem`,
        gr10: `${goldenRatio[9]}rem`,
      },
      fontSize: {
        "gr1/2": ".5rem",
        gr1: [`${goldenRatio[0]}rem`, { lineHeight: "1.2" }],
        gr2: [`${goldenRatio[1]}rem`, { lineHeight: "1.3" }],
        gr3: [`${goldenRatio[2]}rem`, { lineHeight: "1.4" }],
        gr4: [`${goldenRatio[3]}rem`, { lineHeight: "1.5" }],
        gr5: [`${goldenRatio[4]}rem`, { lineHeight: "1.6" }],
        gr6: [`${goldenRatio[5]}rem`, { lineHeight: "1.7" }],
        gr7: [`${goldenRatio[6]}rem`, { lineHeight: "1.8" }],
        gr8: [`${goldenRatio[7]}rem`, { lineHeight: "1.9" }],
        gr9: [`${goldenRatio[8]}rem`, { lineHeight: "2" }],
        gr10: [`${goldenRatio[9]}rem`, { lineHeight: "2.1" }]
      },
      animation: {
        'infinite-scroll-left': 'infinite-scroll-left 360s linear infinite',
        'infinite-scroll-right': 'infinite-scroll-right 360s linear infinite',
      },
      keyframes: {
        'infinite-scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(50)' },
        }
      }      
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
