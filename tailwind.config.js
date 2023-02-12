/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	// darkMode: "class", // or 'media' or 'class'
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "2rem",
				xl: "2rem",
				"2xl": "2rem",
			},
		},
		extend: {
			colors: {
				//   primary: {
				//       50: "#ecfdf5",
				//       100: "#d1fae5",
				//       200: "#a7f3d0",
				//       300: "#6ee7b7",
				//       400: "#34d399",
				//       500: "#10b981",
				//       600: "#059669",
				//       700: "#047857",
				//       800: "#065f46",
				//       900: "#064e3b",
				//   },
				primary: {
					50: "#eef2ff",
					100: "#e0e7ff",
					200: "#c7d2fe",
					300: "#a5b4fc",
					400: "#818cf8",
					500: "#6366f1",
					600: "#4f46e5",
					700: "#4338ca",
					800: "#3730a3",
					900: "#312e81",
				},
			},
			fontFamily: {
				poppins: "'Poppins', sans-serif",
				roboto: "'Roboto', sans-serif",
				roboto: "'Roboto', sans-serif",
				inter: "'Inter', sans-serif",
				primary:
					"Euclid Circular A,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
			},
		},
	},
	plugins: [],
};
