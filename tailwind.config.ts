import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'food-pattern': "url('/pattern.svg')"
      },
      backgroundSize: {
        '100%': "100% 100%"
      },
    },
    colors: {
      'cotton-candy': '#FF97B8',
      'mint': '#AAF0D1',
      'vanilla': '#E2E8F0',
      'coffee': '#000000'
    },
  },
  plugins: [],
};
export default config;
