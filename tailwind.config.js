// module.exports = {
//   mode: "jit",
//   purge: [
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         amazon_blue: {
//           light: "#232F3E",
//           DEFAULT: "#131921",
//         },
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/line-clamp")],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
          colors: {
            amazon_blue: {
              light: "#232F3E",
              DEFAULT: "#131921",
            },
          },
        },
      },
  plugins: [require("@tailwindcss/line-clamp")],
};