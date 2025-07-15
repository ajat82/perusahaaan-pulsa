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
        primary: '#007BFF',
        secondary: '#6C757D',
        accent: '#28A745',
        background: '#F8F9FA',
        text: '#343A40'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
