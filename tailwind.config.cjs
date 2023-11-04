/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      black: '#13161c',
      white: '#f4f7f5'
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#f65826',
          secondary: '#fb2d61',
          accent: '#9b614e',
          neutral: '#13161c',
          'neutral-content': '#f4f7f5',
          'base-100': '#f4f7f5',
          'base-content': '#13161c',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
        dark: {
          primary: '#f65826',
          secondary: '#fb2d61',
          accent: '#f6b39d',
          neutral: '#f4f7f5',
          'neutral-content': '#13161c',
          'base-100': '#13161c',
          'base-content': '#f4f7f5',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
