/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        no: '0rem',
      },
      colors: {
        'mbti-yellow': '#F9F9CF',
        'mbti-blue': '#1898fd',
        'mbti-purple': '#C17DD1',
        'mbti-deep-purple': '#5d62fa',
        'mbti-mint': '#8CFFEE',
        'mbti-pink': '#FF9CAA',
        'mbti-light-pink': '##FFE5E6',

        'mbti-light-mint': '#6EFFEE',
        'mbti-deeplight-mint': '#C3FCF1',
        'mbti-brown': '#625F4E',
        'mbti-light-brown': '#AFAB99',
        'mbti-light-orange': '#FFCA8D',
        'mbti-coral': '#F98E71',
        'mbti-light-coral': '#FECCBE',
        'mbti-deep-blue': '#645CBB',
        'mbti-gray': '#4A4737',
        'mbti-red': '#ED3B38',
      },
      fontFamily: {
        minhye: ['Minhye', 'sans-serif'],
        humanbumsuk: ['Humanbumsuk', 'sans-serif'],
        kyobohandwriting2021sjy: ['KyoboHandwriting2021sjy', 'sans-serif'],
        cafe24shiningstar: ['Cafe24Shiningstar', 'sans-serif'],
        middleschool_student: ['Middleschool_student', 'sans-serif'],
        beeunhye: ['Beeunhye', 'sans-serif'],
        bisang: ['Bisang', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
