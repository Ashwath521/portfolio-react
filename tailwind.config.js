module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-10deg)',
          },
          '50%': {
            transform: 'rotate(15deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 8s ease-in 1',
      },
      colors: {
        primary: {
          50: '#f5f5f6',
          100: '#eaebec',
          200: '#cbcdd0',
          300: '#acafb3',
          400: '#6e747a',
          500: '#303841',
          600: '#2b323b',
          700: '#242a31',
          800: '#1d2227',
          900: '#181b20',
        },
        secondary: {
          50: '#ff9380',
          100: '#ff8976',
          200: '#ff7f6c',
          300: '#ff7562',
          400: '#ff6b58',
          500: '#ff614e',
          600: '#f55744',
          700: '#eb4d3a',
          800: '#e14330',
          900: '#d73926',
        },
        black: {
          DEFAULT: '#000000',
        },
      },
    },
  },
  plugins: [],
}
