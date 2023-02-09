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
        'mbti-deep-purple': '#6D67E4',
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
