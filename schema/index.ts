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

// 2. Der Download-Block
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

// 3. Normaler Text-Block
const textBlock = {
  name: 'textSection',
  title: 'Textbereich',
  type: 'object',
  fields: [
    { name: 'heading', type: 'string', title: 'Überschrift' },
    { name: 'content', type: 'array', title: 'Inhalt', of: [{ type: 'block' }] }
  ]
};

// 4. Der Tabellen-Block
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

// 5. NEU: Der Team-Block (Vorstandschaft)
const teamSection = {
  name: 'teamSection',
  title: 'Vorstandschaft / Team',
  type: 'object',
  fields: [
    { name: 'headline', type: 'string', title: 'Überschrift' },
    {
      name: 'members',
      type: 'array',
      title: 'Mitglieder',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'role', type: 'string', title: 'Amt / Funktion' },
            { name: 'image', type: 'image', title: 'Foto', options: { hotspot: true } }
          ]
        }
      ]
    }
  ]
};

// 6. NEU: Das Kontaktformular (Platzhalter)
const formSection = {
  name: 'formSection',
  title: 'Kontaktformular einfügen',
  type: 'object',
  fields: [
    { name: 'introText', type: 'string', title: 'Kurzer Text über dem Formular (Optional)' }
  ]
};

// 7. Die Seite selbst
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
        { type: 'tableSection' },
        { type: 'teamSection' }, // NEU
        { type: 'formSection' }, // NEU
      ]
    }
  ]
};

// NEU: Der News-Artikel (Post) Dokumententyp
const post = {
  name: 'post',
  title: 'News Artikel',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Titel des Artikels' },
    { name: 'slug', type: 'slug', title: 'URL-Pfad', options: { source: 'title' } },
    { 
      name: 'publishedAt', 
      type: 'datetime', 
      title: 'Veröffentlichungsdatum',
      options: { dateFormat: 'DD.MM.YYYY' }
    },
    { 
      name: 'mainImage', 
      type: 'image', 
      title: 'Titelbild (wird auch im Teaser genutzt)',
      options: { hotspot: true }
    },
    { 
      name: 'excerpt', 
      type: 'text', 
      title: 'Vorschau-Text (max. 2 Zeilen)',
      rows: 2 
    },
    { 
      name: 'pageBuilder', // Wir nutzen den PageBuilder auch für den Inhalt der News
      title: 'Inhalt (Baukasten)',
      type: 'array',
      of: [
        { type: 'textSection' },
        { type: 'gallery' },
        { type: 'downloads' },
        { type: 'tableSection' }
      ]
    }
  ]
};


export const schemaTypes = [page, post, textBlock, gallery, downloads, tableSection, teamSection, formSection];
