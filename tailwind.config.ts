import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      'header-color': '#d9dfa0', //Pale yellow meant for all the header texts
      'nav-backround': '#4470BA', //Background for navbar
      'about-button' : '#669fe4', //Color for the button
      'custom-background': '#102A71', //Background for the whole page
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": 
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        'space-1st': '16px', // Custom margin for 1st prize card
      },
    },
  },
  plugins: [],
};
export default config;
