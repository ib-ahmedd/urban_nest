/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "850px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "site-yellow": "#ffc03d",
        "site-blue": "#212d45",
        "site-gray": "#666",
        "light-gray": "#ebebeb",
      },
      backgroundImage: {
        "home-hero-bg": "url('/images/home/hero/bg-img.jpg')",
        "home-about-l-bg": "url('/images/home/about/l-bg-img.jpg')",
        "home-about-r-bg": "url('/images/home/about/r-bg-img.jpg')",
        "about-stats-bg": "url('/images/about/stats/bg-img.jpg')",
        "generic-hero": "url('/images/generic/hero/bg-img.jpg')",

        "founders-bg-1": "url('/images/home/founders/bg-1.jpg')",
        "founders-bg-2": "url('/images/home/founders/bg-2.jpg')",
        "founders-bg-3": "url('/images/home/founders/bg-3.jpg')",

        "latest-bg-1": "url('/images/home/latest/img-1.jpg')",
        "latest-bg-2": "url('/images/home/latest/img-2.jpg')",
        "latest-bg-3": "url('/images/home/latest/img-3.jpg')",
        "latest-bg-4": "url('/images/home/latest/img-4.jpg')",

        "latest-work-bg1": "url('/images/projects/latest-work/img-1.jpg')",
        "latest-work-bg2": "url('/images/projects/latest-work/img-2.jpg')",
        "latest-work-bg3": "url('/images/projects/latest-work/img-3.jpg')",
        "latest-work-bg4": "url('/images/projects/latest-work/img-4.jpg')",
        "latest-work-bg5": "url('/images/projects/latest-work/img-5.jpg')",
        "latest-work-bg6": "url('/images/projects/latest-work/img-6.jpg')",
        "latest-work-bg7": "url('/images/projects/latest-work/img-7.jpg')",
        "latest-work-bg8": "url('/images/projects/latest-work/img-8.jpg')",
      },
      fontFamily: {
        monteserat: ['"Montserrat"', "sans-serif"],
        roboto: ['"Roboto", sans-serif'],
      },
    },
  },
  plugins: [],
};
