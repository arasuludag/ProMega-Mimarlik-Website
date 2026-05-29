import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Ekip Üyesi',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'İsim',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Adresi',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'jobTitle', title: 'Ünvan', type: 'string' }),
    defineField({
      name: 'photo',
      title: 'Fotoğraf',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Biyografi',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'order', title: 'Sıra', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'jobTitle', media: 'photo' } },
});
