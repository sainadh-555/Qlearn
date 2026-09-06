import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: '#121215',
        border: '#27272a',
        hover: '#18181b',
        primary: '#2563eb',
        'gate-single': '#3f3f46',
        'gate-hadamard': '#0f172a',
        'gate-multi': '#3730a3',
        'gate-measure': '#27272a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
