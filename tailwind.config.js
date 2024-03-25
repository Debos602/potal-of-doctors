/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	daisyui: {
		themes: [
			{
				doctorTheme: {
					primary: "#0FCFEC",
					secondary: "#19D3AE",
					accent: "#3A4256",
					neutral: "#ff00ff",
					"base-100": "#ffffff",
				},
			},
		],
	},
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
