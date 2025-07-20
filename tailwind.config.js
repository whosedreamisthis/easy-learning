// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	// This 'content' array tells Tailwind CSS where to look for your utility classes.
	// Ensure these paths cover all your component and page files.
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}', // Include if you use a 'src' directory
	],
	theme: {
		extend: {
			// You can extend Tailwind's default theme here (e.g., add custom colors, fonts)
		},
	},
	plugins: [
		// Add any Tailwind CSS plugins here (e.g., @tailwindcss/typography)
	],
};
