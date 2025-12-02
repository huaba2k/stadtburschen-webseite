import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema/index';

// Deine IDs (die hast du ja jetzt)
const projectId = 'DEINE_PROJECT_ID'; 
const dataset = 'production';

export default defineConfig({
  name: 'stadtburschen',
  title: 'Stadtburschen Admin',
  
  projectId,
  dataset,
  
  // WICHTIG: Das hier hat gefehlt!
  basePath: '/admin',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});