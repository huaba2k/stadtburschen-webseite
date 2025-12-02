/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				burschen: {
					DEFAULT: '#000000', // Echtes Schwarz
					blau: '#0053a0',    // Ein kräftiges Royalblau (angepasst für Web)
					gold: '#c5a059',    // Ein edles Matt-Gold (nicht zu gelb)
					grau: '#1a1a1a',    // Dunkles Grau für Hintergründe
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'], // Für traditionelle Überschriften
			}
		},
	},
	plugins: [],
}