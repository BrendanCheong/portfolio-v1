module.exports = {
	purge: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./modules/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			mono: ['Roboto Mono', 'monospace'],
		},
		extend: {
			colors: {
				white: {
					dark: '#8892B0',
					base: '#CCD6F6',
					default: '#f1f1f1',
				},
				primary: {
					dark: '#0A192F',
					base: '#112240',
					light: '#64FFDA',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
