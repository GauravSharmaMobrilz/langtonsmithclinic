/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        // Concept A — Warm editorial clinic
        'a-ivory':   '#F6F3ED',
        'a-green':   '#2F5147',
        'a-sage':    '#A9BBA9',
        'a-clay':    '#C58F75',
        'a-charcoal':'#303832',
        // Concept B — Contemporary clinical platform
        'b-ink':     '#1F303A',
        'b-teal':    '#14545A',
        'b-glass':   '#A8CDC4',
        'b-mist':    '#EEF3F2',
        'b-warm':    '#FAFAF7',
        'b-graphite':'#303B40',
        'b-brass':   '#B99A62',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
