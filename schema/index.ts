// schema/index.ts

// 1. Der Galerie-Block
const gallery = {
  name: 'gallery',
  title: 'Bildergalerie',
  type: 'object',
  fields: [
    { name: 'headline', type: 'string', title: 'Überschrift (Optional)' },
    { 
      name: 'images', 
      type: 'array', 
      title: 'Bilder', 
      of: [{ type: 'image', options: { hotspot: true } }] 
    }
  ]
};

// 2. Der Download-Block (PDFs etc.)
const downloads = {
  name: 'downloads',
  title: 'Datei Downloads',
  type: 'object',
  fields: [
    { name: 'title', type: 'string', title: 'Titel der Sektion' },
    {
      name: 'files',
      type: 'array',
      title: 'Dateien',
      of: [
        {
          type: 'file',
          name: 'file',
          title: 'Datei hochladen',
          fields: [{ name: 'description', type: 'string', title: 'Beschreibung' }]
        }
      ]
    }
  ]
};

// 3. Normaler Text-Block (mit Editor)
const textBlock = {
  name: 'textSection',
  title: 'Textbereich',
  type: 'object',
  fields: [
    { name: 'heading', type: 'string', title: 'Überschrift' },
    { name: 'content', type: 'array', title: 'Inhalt', of: [{ type: 'block' }] } // Rich Text
  ]
};

// NEU: Der Tabellen-Block
const tableSection = {
  name: 'tableSection',
  title: 'Tabelle',
  type: 'object',
  fields: [
    { name: 'title', type: 'string', title: 'Überschrift (Optional)' },
    { 
      name: 'dataTable', 
      type: 'table', 
      title: 'Tabelle',
    }
  ]
};

// 4. Die Seite selbst (Der Container)
const page = {
  name: 'page',
  title: 'Seiten',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Seitentitel' },
    { name: 'slug', type: 'slug', title: 'URL-Pfad', options: { source: 'title' } },
    {
      name: 'pageBuilder',
      title: 'Inhalt (Baukasten)',
      type: 'array',
      of: [
        { type: 'textSection' },
        { type: 'gallery' },
        { type: 'downloads' },
        { type: 'tableSection' }, // <--- HIER NEU DAZU
      ]
    }
  ]
};

// Exportieren für die Config
export const schemaTypes = [page, textBlock, gallery, downloads];