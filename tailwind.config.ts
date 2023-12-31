import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        100: '#F7F8F8',
        110: '#fff',
        200: '#050F27',
        210: '#050f27a8',
        300: '#1252AE',
      },
      text: {
        100: '#2A323C',
        110: '#737D8C',
      },
      bg: {
        100: '#EBEEF2'
      },
      border: {
        100: '#DDE0E5'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
