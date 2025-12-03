/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // <--- WICHTIG: DIESE ZEILE HINZUFÜGEN
	theme: {
		extend: {
			colors: {
				burschen: {
					DEFAULT: '#050505', // Fast Schwarz (angenehmer als #000)
					blau: '#1717FE',
					gold: '#eee001',
					grau: '#1a1a1a',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			}
		},
	},
	plugins: [],
}