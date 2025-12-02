import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema/index';
// 1. Das Plugin importieren
import { table } from '@sanity/table';

// Deine ID (bitte prüfen, dass hier deine echte ID steht, z.B. zp7mbokg)
const projectId = '5wk79lvj'; 
const dataset = 'production';

export default defineConfig({
  name: 'stadtburschen',
  title: 'Stadtburschen Admin',
  
  projectId,
  dataset,
  basePath: '/admin',

  // 2. Das Plugin hier aktivieren
  plugins: [
    structureTool(), 
    table()
  ],

  schema: {
    types: schemaTypes,
  },
});