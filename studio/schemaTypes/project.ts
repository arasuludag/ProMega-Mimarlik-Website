import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Proje',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Proje Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Adresi',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'location', title: 'Konum', type: 'string' }),
    defineField({
      name: 'year',
      title: 'Yıl',
      type: 'string',
      description: 'Örn. 2021',
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'images',
      title: 'Görseller',
      description: 'İlk görsel kapak olarak kullanılır.',
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
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'featured',
      title: 'Ana Sayfada Öne Çıkar',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Sıra',
      type: 'number',
      description: 'Küçük sayı önce gösterilir.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'location', media: 'images.0' },
  },
});
