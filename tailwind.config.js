/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    extend: {
      colors: {
        main : '#204C42',
        primary: '#2E2E2E',
        second: '#323941',
      },
      spacing: {
        '4.5' : '1.125rem',
        '8.5' : '2.1875rem',
        '11.5' : '2.625rem',
        '11' : '2.75rem',
        '15' : '3.75rem',
        '18' : '4.5rem',
        '26' : '6.5rem',
        '30' : '7.5rem',
        '38' : '9.375rem',
        '49' : '12.25rem',
        '72' : '18rem'
      },
      backgroundColor: {
        'main' : '#F5F5F5',
        'second': '#7FCDBC',
        'dark-green' : '#204C42',
        'light-green' : '#00BB90',
      },
      fontFamily: {
        robot: 'Robot',
        inter: 'Inter'
      },
      borderColor: {
        main: '#204C42',
        second: '#F2F2F2',
      }
    },
  },
  plugins: [],
};
