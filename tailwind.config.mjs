/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        protestStrike: ["Protest Strike", "sans-serif"],
        spaceMono: ["Space Mono", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      animation: { show: "show 1s  forwards", hidden: "hidden 1s forwards" },
      keyframes: {
        show: {
          "0%": { height: "0px" },
          "100%": { height: "100px" },
        },
        hidden: {
          "0%": { height: "100px" },
          "100%": { height: "0px" },
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
