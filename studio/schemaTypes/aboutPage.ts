import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'Hakkımızda Sayfası',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Başlık',
      type: 'string',
      initialValue: 'Hakkımızda',
    }),
    defineField({
      name: 'body',
      title: 'Metin',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'images',
      title: 'Görseller',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alternatif Metin', type: 'string' }),
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Hakkımızda Sayfası' }) },
});
