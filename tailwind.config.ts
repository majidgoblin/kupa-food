import type { Config } from "tailwindcss";
// import colors from 'tailwindcss/colors';
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: {
          600:'#4A5568',
          500:'#718096',
          400:'#CBD5E0',
          300:'#EDF2F7',
          200:'#EDF2F7',
          100:'#F7FAFC',
        },
        blue:{
          800:'#09156F',
          700:'#132291',
          600:'#2132B3',
          500:'#3144D5',
          400:'#7081FF',
          300:'#9AA6FF',
          200:'#C3CAFF',
        },
        green:{
          700:'#193e2d',
          600:'#23513e',
          500:'#2e644f',
          400:'#529075',
          300:'#75a590',
          200:'#93b7a8',
          100:'#abc3bc',
        },
        indigo: colors.indigo,
        red: '#FF0000',
        yellow: colors.amber,
      },
      
    },
  },
  plugins: [],
};
export default config;
