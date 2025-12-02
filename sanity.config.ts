import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema/index';

// PRÜFE DIESE ZEILE GENAU:
const projectId = '5wk79lvj'; // Nur a-z und 0-9. Kein "_" und kein "A-Z"
const dataset = 'production';

export default defineConfig({
  name: 'stadtburschen',
  title: 'Stadtburschen Admin',
  projectId,
  dataset,
  basePath: '/admin', // Das muss auch noch drin sein
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});