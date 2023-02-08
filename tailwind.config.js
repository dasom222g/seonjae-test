/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        no: '0rem',
      },
      colors: {
        'mbti-yellow': '#FAEF96',
        'mbti-mint': '#1DCAB6',
        'mbti-light-mint': '#6EFFEE',
        'mbti-deeplight-mint': '#C3FCF1',
        'mbti-brown': '#625F4E',
        'mbti-light-brown': '#AFAB99',
        'mbti-light-orange': '#FFCA8D',
        'mbti-coral': '#F98E71',
        'mbti-light-coral': '#FECCBE',
        'mbti-deep-blue': '#645CBB',
        'mbti-purple': '#FF90DF',
        'mbti-gray': '#4A4737',
        'mbti-red': '#ED3B38',
      },
    },
  },
  plugins: [],
}
