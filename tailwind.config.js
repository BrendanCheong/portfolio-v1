module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./modules/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			mono: ['Roboto Mono', 'monospace'],
		},
		extend: {
			colors: {
				white: {
					dark: '#f4f4f5',
					base: '#f9f5d7',
					default: '#f8fafc',
				},
				primary: {
					dark: '#1d2021',
					base: '#282828',
					light: '#f59e0b',
				}
			},

			screens: {
				'xs': {'min': '480px'},
				'max_xs': {'max': '480px'},
				'max_sm': {'max': '640px'},
				'max_md': {'max': '768px'},
				'max_lg': {'max': '1024px'},
				'max_xl': {'max': '1280px'},
			}
		},
	},
	plugins: [],
};
