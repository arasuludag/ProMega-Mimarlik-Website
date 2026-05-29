import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!;
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

// Document types that should appear as a single, fixed editor entry (singletons).
const SINGLETONS = [
  { id: 'siteSettings', title: 'Site Ayarları', icon: undefined },
  { id: 'aboutPage', title: 'Hakkımızda Sayfası', icon: undefined },
];
const SINGLETON_IDS = SINGLETONS.map((s) => s.id);

export default defineConfig({
  name: 'default',
  title: 'Promega Mimarlık',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('İçerik')
          .items([
            ...SINGLETONS.map((s) =>
              S.listItem()
                .title(s.title)
                .id(s.id)
                .child(S.document().schemaType(s.id).documentId(s.id)),
            ),
            S.divider(),
            S.documentTypeListItem('project').title('Projeler'),
            S.documentTypeListItem('service').title('Hizmetler'),
            S.documentTypeListItem('teamMember').title('Ekip'),
            S.documentTypeListItem('referenceLogo').title('Referans Logoları'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // Hide the "create new" action for singletons.
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETON_IDS.includes(schemaType)),
  },
  document: {
    // Remove delete/duplicate/create actions for singletons.
    actions: (input, context) =>
      SINGLETON_IDS.includes(context.schemaType)
        ? input.filter(
            ({ action }) =>
              action && ['publish', 'discardChanges', 'restore'].includes(action),
          )
        : input,
  },
});
