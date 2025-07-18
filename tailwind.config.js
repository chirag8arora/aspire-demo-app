/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        aspire: {
          green: '#01D167',
          blue: '#536DFF',
          blueDark: '#325BAF',
          gray: '#DDDDDD',
          white: '#FFFFFF',
          transparent: '#00000000',
          shadow: '#00000014',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        avenir: [
          'Avenir Next',
          'Avenir',
          'Open Sans',
          'SF Pro Text',
          'system-ui',
          'sans-serif',
        ],
        opensans: [
          'Open Sans',
          'Avenir Next',
          'Avenir',
          'SF Pro Text',
          'system-ui',
          'sans-serif',
        ],
        sfpro: [
          'SF Pro Text',
          'Avenir Next',
          'Avenir',
          'Open Sans',
          'system-ui',
          'sans-serif',
        ],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        aspire: '0px 8px 24px 0px #00000014',
      },
      borderRadius: {
        xl: '20px',
        card: '12px',
      },
    },
  },
  plugins: [],
} 