import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',
  groups: [
    { name: 'general', title: 'Genel', default: true },
    { name: 'hero', title: 'Ana Sayfa Hero' },
    { name: 'contact', title: 'İletişim' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      group: 'general',
    }),
    defineField({
      name: 'sloganLines',
      title: 'Slogan Satırları',
      description: 'Hero görselinin üzerinde görünecek slogan. Her satır ayrı bir kutu.',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'hero',
    }),
    defineField({
      name: 'heroImages',
      title: 'Hero Slayt Görselleri',
      description: 'Ana sayfanın en üstünde sırayla geçecek görseller.',
      type: 'array',
      group: 'hero',
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
    defineField({
      name: 'contact',
      title: 'İletişim Bilgileri',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'email', title: 'E-posta', type: 'string' }),
        defineField({ name: 'phone', title: 'Telefon', type: 'string' }),
        defineField({ name: 'address', title: 'Adres', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'social',
      title: 'Sosyal Medya',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Alt Bilgi Metni',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'seo',
      title: 'Varsayılan SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'title', title: 'Başlık', type: 'string' }),
        defineField({
          name: 'description',
          title: 'Açıklama',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site Ayarları' }) },
});
