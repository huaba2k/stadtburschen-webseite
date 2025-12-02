import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { table } from '@sanity/table'; // Falls du das Table Plugin hast
import { schemaTypes } from './schema/index';

// PRÜFE DIESE ZEILE GENAU:
const projectId = '5wk79lvj'; // Nur a-z und 0-9. Kein "_" und kein "A-Z"
const dataset = 'production';

export default defineConfig({
  name: 'stadtburschen',
  title: 'Stadtburschen Admin',
  projectId,
  dataset,
  
  // WICHTIG: Diese Zeile muss da sein!
  basePath: '/admin',

  plugins: [structureTool(), table()],

  schema: {
    types: schemaTypes,
  },
});