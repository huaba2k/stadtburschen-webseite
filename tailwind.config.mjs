/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // <--- WICHTIG: DIESE ZEILE HINZUFÜGEN
	theme: {
		extend: {
			colors: {
				burschen: {
					DEFAULT: '#050505', // Fast Schwarz (angenehmer als #000)
					blau: '#0053a0', // Logofarbe: #1717fe
					gold: '#c5a059', // Logofarbe: #eee001
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