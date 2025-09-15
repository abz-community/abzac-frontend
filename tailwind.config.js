/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				main: {
					gray: "#212529",
					brand: "#F03A52",
					graySecond: "#495057",
				},
			},
		},
	},
	plugins: [],
};
