import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://new.stadtburschen.de',
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: '5wk79lvj', // Hier wieder die ID
      dataset: 'production',
      useCdn: true, // Macht es schneller
    }),
  ],
  build: {
    assets: 'assets'
  },
  output: 'static', // Wir bleiben statisch für maximale Geschwindigkeit
});