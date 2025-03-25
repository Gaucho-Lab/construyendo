/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  'primary': '#7e2a0c',
		  'secondary': '#ff6900',
		  'accent': '#b6633d',
		  'dark': '#3a1b0d',
		  'light': '#e9dfdb',
		},
		fontFamily: {
		  'sans': ['Inter', 'sans-serif'],
		  'display': ['Montserrat', 'sans-serif'],
		},
		animation: {
		  'fade-in': 'fadeIn 0.75s ease-in forwards',
		  'slide-up': 'slideUp 0.6s ease-out forwards',
		  'slide-in-right': 'slideInRight 0.6s ease-out forwards',
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  slideUp: {
			'0%': { transform: 'translateY(50px)', opacity: '0' },
			'100%': { transform: 'translateY(0)', opacity: '1' },
		  },
		  slideInRight: {
			'0%': { transform: 'translateX(50px)', opacity: '0' },
			'100%': { transform: 'translateX(0)', opacity: '1' },
		  },
		},
	  },
	},
	plugins: [],
  }