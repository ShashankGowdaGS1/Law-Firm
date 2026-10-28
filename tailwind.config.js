/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#222573',
          indigo: '#343C89',
          gold: '#F6C677',
          champagne: '#EFDAC7',
          'off-white': '#F9F7F4',
          text: '#1B2235',
          'text-muted': '#56607A',
          border: '#E8E5DF',
        },
        navy: {
          DEFAULT: '#222573',
          deep: '#181A54',
          light: '#343C89',
        },
        gold: {
          DEFAULT: '#F6C677',
          light: '#FCEFD8',
          dark: '#E0AA54',
        },
        champagne: {
          DEFAULT: '#EFDAC7',
          subtle: '#FAF4ED',
        },
        surface: {
          DEFAULT: '#F9F7F4',
          white: '#FFFFFF',
          muted: '#F0ECE4',
        },
      },
      fontFamily: {
        heading: ['"Raleway"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      maxWidth: {
        site: '1440px',
        reading: '760px',
      },
      letterSpacing: {
        eyebrow: '0.12em',
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(27, 34, 53, 0.04)',
        card: '0 4px 20px rgba(27, 34, 53, 0.06)',
        lift: '0 12px 32px rgba(27, 34, 53, 0.08)',
      },
    },
  },
  plugins: [],
}
