import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-green': 'rgba(25, 200, 25, 0.40)',
        'custom-green-2': '#00F700',
        'turquoise': '#00F0C9',
        'custom-gray': '#222729',
        'custom-gray-2': '#131516',
        'custom-gray-3': 'rgba(34, 39, 41, 0.50)',
      },
      boxShadow: {
        '5xl': '0 0 10px rgba(255, 255, 255, 0.8)',
      }
    },
  },
  plugins: [],
}
export default config
