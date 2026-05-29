import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'referenceLogo',
  title: 'Referans Logosu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Kurum / Marka Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Web Sitesi (opsiyonel)',
      type: 'url',
    }),
    defineField({ name: 'order', title: 'Sıra', type: 'number' }),
  ],
  preview: { select: { title: 'name', media: 'logo' } },
});
