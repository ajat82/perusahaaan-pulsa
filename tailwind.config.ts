import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF', // Blue
        secondary: '#6C757D', // Grey
        accent: '#28A745', // Green
        background: '#F8F9FA', // Light grey
        text: '#212529', // Dark grey
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem', // For rounded-xl
      },
    },
  },
  plugins: [],
};
export default config;
