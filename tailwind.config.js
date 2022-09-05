const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./stories/**/*.{vue,js,ts,jsx,tsx,mdx}",
        "./resources/js/**/*.{vue,js,ts,jsx,tsx}",
    ],
  theme: {
      extend: {
          fontFamily: {
              sans: [
                  'Inter',
                  ...defaultTheme.fontFamily.sans,
              ]
          }
      }
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/typography'),
  ],
}
