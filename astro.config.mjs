import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // WICHTIG: Hier deine exakte URL eintragen (ohne Slash am Ende)
  site: 'https://new.stadtburschen.de',
  
  integrations: [tailwind()],
});