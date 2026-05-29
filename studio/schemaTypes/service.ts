import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Hizmet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hizmet Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'icon',
      title: 'Görsel / İkon',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'order', title: 'Sıra', type: 'number' }),
  ],
  preview: { select: { title: 'title', media: 'icon' } },
});
