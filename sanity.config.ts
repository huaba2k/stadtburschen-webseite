// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema/index';

// HIER DEINE ID EINTRAGEN (Findest du im Sanity Dashboard)
const projectId = '5wk79lvj'; 
const dataset = 'production';

export default defineConfig({
  name: 'stadtburschen',
  title: 'Stadtburschen Admin',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
  types: schemaTypes,
},
});