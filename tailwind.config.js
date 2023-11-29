/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        extend: {
      backgroundColor:{
        'mon_bg': "var(--mon__bg)",
      },
      textColor:{
        'txt_white': "var(--white)",
      },

      backgroundImage: {
        'star-pattern': "url('/stars-hires.png')",
        'galaxian-texture': "url('/space-hi-res.png')",
        'vortex-texture': "url('/page-space-background.707d4cca4aee555f43c23f52f1e8e759.png')"
    },
  },
  plugins: [],
},
}