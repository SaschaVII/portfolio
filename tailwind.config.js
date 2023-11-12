/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			'serif': ['"Times New Roman"', 'Times', 'serif']	
		},
		extend: {
			colors: {
				primary: colors.zinc,
				secondary: colors.zinc,
			},
			fontFamily: {
				mono: ["var(--font-robotoMono)", ...fontFamily.mono],
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
