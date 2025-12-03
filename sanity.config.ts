import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema/index';
import { table } from '@sanity/table';

const projectId = '5wk79lvj'; 
const dataset = 'production';

export default defineConfig({
  name: 'stadtburschen',
  title: 'Stadtburschen Admin',
  
  projectId,
  dataset,
  basePath: '/admin',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Inhalt')
          .items([
            S.listItem()
              .title('Seiten')
              // FIX: type casting 'as any' für .find()
              .icon((S.documentTypeListItems() as any).find(item => item.spec.id === 'page')?.spec.icon)
              .child(S.documentTypeList('page').title('Statische Seiten')),
            S.listItem()
              .title('News & Berichte') 
              // FIX: type casting 'as any' für .find()
              .icon((S.documentTypeListItems() as any).find(item => item.spec.id === 'post')?.spec.icon)
              .child(S.documentTypeList('post').title('News-Artikel')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['page', 'post'].includes(listItem.getId()!)
            ),
          ]),
    }), 
    table()
  ],

  schema: {
    types: schemaTypes,
  },
});