/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "star-pattern": "url('/stars-hires.png')",
        "galaxian-texture": "url('/space-hi-res.png')",
        "vortex-texture":
          "url('/page-space-background.707d4cca4aee555f43c23f52f1e8e759.png')",
          "galactic":"url('/stars-hires.png'), url('/space-hi-res.png')"
      },
      backgroundColor: {
        "mon-bg": "var(--mon-bg)",
        "truc100": "var(--mon__truc)",
      },
      textColor: {
        "txt_white": "var(--white)",
      },
            fontFamily: {
        CCtimelord:['CCTimelord'],
        BBC:['BBCReithSans_W_Rg'],
      },
    },
  },
  plugins: [],
};
