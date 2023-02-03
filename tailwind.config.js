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
		},
	},
	plugins: [],
};
