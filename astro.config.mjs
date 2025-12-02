import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://new.stadtburschen.de',
  integrations: [tailwind()],
  build: {
    // Ändert den Ordner von "_astro" zu "assets"
    assets: 'assets'
  }
});