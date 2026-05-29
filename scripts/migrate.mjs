/**
 * One-time content migration: imports the old site's content + images into Sanity.
 *
 * Usage:
 *   1. Fill .env with PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET and a
 *      SANITY_WRITE_TOKEN (Editor token from sanity.io/manage).
 *   2. node scripts/migrate.mjs            # run against your dataset
 *
 * Safe to re-run: documents use deterministic _ids (createOrReplace) and Sanity
 * deduplicates identical image assets by content hash.
 *
 * Images are pulled from the old GitHub repo's raw files. New per-project `year`
 * and `description` fields are intentionally left empty for the client to fill in.
 */
import { createClient } from '@sanity/client';
import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// --- Load .env (no dependency) ---
const __dirname = dirname(fileURLToPath(import.meta.url));
try {
  const env = readFileSync(join(__dirname, '..', '.env'), 'utf8');
  for (const line of env.split('\n')) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = (m[2] || '').replace(/^["']|["']$/g, '');
    }
  }
} catch {
  /* no .env, rely on real env */
}

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    'Missing env. Need PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN in .env',
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
});

const RAW = 'https://raw.githubusercontent.com/arasuludag/ProMega-Mimarlik-Website/main/';
const PROJ = 'public/PROMEGA  PROJELER/';

const encodePath = (p) => p.split('/').map(encodeURIComponent).join('/');

const slugify = (s) =>
  s
    .toLowerCase()
    .replaceAll('ı', 'i')
    .replaceAll('ğ', 'g')
    .replaceAll('ü', 'u')
    .replaceAll('ş', 's')
    .replaceAll('ö', 'o')
    .replaceAll('ç', 'c')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const decode = (s) =>
  s
    .replaceAll('&rsquo;', '’')
    .replaceAll('&Uuml;', 'Ü')
    .replaceAll('&uuml;', 'ü')
    .replaceAll('&Ouml;', 'Ö')
    .replaceAll('&ouml;', 'ö')
    .replaceAll('&Ccedil;', 'Ç')
    .replaceAll('&ccedil;', 'ç')
    .replaceAll('&amp;', '&');

/** HTML-ish bio string -> portable text blocks (one block per line). */
const toBlocks = (html) =>
  decode(html)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((text) => ({
      _type: 'block',
      _key: randomUUID().slice(0, 8),
      style: 'normal',
      markDefs: [],
      children: [{ _type: 'span', _key: randomUUID().slice(0, 8), text, marks: [] }],
    }));

const assetCache = new Map();
async function uploadImage(path, label) {
  if (assetCache.has(path)) return assetCache.get(path);
  const url = RAW + encodePath(path);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const filename = path.split('/').pop();
  const asset = await client.assets.upload('image', buf, { filename });
  console.log(`  ✔ uploaded ${label || filename}`);
  assetCache.set(path, asset._id);
  return asset._id;
}

const imageField = (assetId, alt) => ({
  _type: 'image',
  _key: randomUUID().slice(0, 8),
  asset: { _type: 'reference', _ref: assetId },
  ...(alt ? { alt } : {}),
});

/* ----------------------------- DATA ----------------------------- */

const projects = [
  { t: 'OMÜ Rehabilitasyon Merkezi', loc: 'Havza', dir: '1. OMÜ-HAVZA REHABİLİTASYON MERKEZİ', f: ['havza 3d.jpg', 'render_3.jpg'] },
  { t: 'Çınarlık Merkez Camii', loc: '', dir: '2. ÇINARLIK MERKEZ CAMİİ', f: ['R1-İ.jpg', 'R2-İ.jpg', 'R3-İ.jpg', 'R4-İ.jpg', 'R5-İ.jpg', 'R6-İ.jpg'] },
  { t: 'OMÜ Mühendislik Fakültesi Ek Bina', loc: '', dir: '3. OMÜ MÜHENDİSLİK FAKÜLTESİ EK BİNA', f: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '7.jpg', '8.jpg'] },
  { t: 'Karayolları 7. Bölge Müdürlüğü Tesisleri Projesi', loc: 'Atakum', dir: '4. KARAYOLLARI 7. BÖLGE MÜDÜRLÜĞÜ TESİSLERİ PROJESİ', f: ['1-İDARİ BİNA-1.jpg', '1-İDARİ BİNA-3.jpg', '1-İDARİ BİNA-4.jpg', '2-GENEL GÖRÜNÜŞ-6.jpg', 'KARAYOLLARI 7. BÖLGE MÜDÜRLÜĞÜ TESİSLERİ PROJESİ.jpg'] },
  { t: 'Ilgaz Doruk Otel', loc: 'Çankırı', dir: '5. ILGAZ DORUK OTEL-ÇANKIRI', f: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'] },
  { t: 'Acar Yüksek Yapı', loc: 'Atakum', dir: '6. ACAR YÜKSEK YAPI-ATAKUM', f: ['Cephe 1.jpg', 'Banyo.jpg', 'yatak odası.jpg', 'Cephe 2.jpg', 'Mutfak.jpg', 'Salon.jpg'] },
  { t: 'Kaya Apartmanı', loc: 'Havza', dir: '7. KAYA APARTMANI - HAVZA', f: ['1.jpg', '2.jpg', '3.jpg'] },
  { t: 'Göbeçoğlu Değirmen - Kafeterya Rekonstrüksiyonu', loc: 'Havza', dir: '8. HAVZA GÖBEÇOĞLU DEĞİRMEN-KAFETERYA REKONSTRÜKSİYON PROJESİ', f: ['1.jpg', '2.jpg', '3.jpg'] },
  { t: 'Evin Otel', loc: 'Çarşamba', dir: '9. EVİN OTEL - ÇARŞAMBA', f: ['1.jpg', '2.jpg', '3.jpg'] },
  { t: 'Kayan Aile Apartmanı', loc: 'Havza', dir: '10. KAYAN AİLE APARTMANI - HAVZA', f: ['1.jpg', '2.jpg'] },
  { t: 'Musa Akgül - Gazi Öcal Villaları', loc: 'Terme', dir: '11. MUSA AKGÜL - GAZİ ÖCAL VİLLARI TERME', f: ['1.jpg', '2.jpg', '3.jpg'] },
  { t: 'O. Cengiz ve Hissedarları Apartmanı', loc: 'Terme', dir: '12. O. CENGİZ VE HİSSEDARLARI APARTMANI - TERME', f: ['render1.jpg', 'havuz-3D2.jpg', 'render2.jpg', 'render3.jpg', 'render7.jpg'] },
  { t: 'A. Kaya Apartmanı', loc: 'Havza', dir: 'A. KAYA APT. - HAVZA', f: ['Aydın Kaya - 1.jpg', 'Aydın Kaya - 2.jpg', 'Plan.jpg'] },
  { t: 'Acar Apartmanı', loc: 'Havza', dir: 'ACAR APT. - HAVZA', f: ['image (1).jpeg', 'image (2).jpeg', 'image (3).jpeg', 'image.jpeg', 'plan_1.jpg'] },
  { t: 'Amazon Apartmanı', loc: 'Terme', dir: 'AMAZON APT. - TERME', f: ['Musa - 1.jpg', 'Musa - 2.jpg', 'Musa - 3.jpg', 'Musa - Plan.jpg'] },
  { t: 'Kahyalar İş Merkezi', loc: 'Tekkeköy', dir: 'KAHYALAR İŞ MERKEZİ - TEKKEKÖY', f: ['KA50.jpg', 'kyeni20.jpg'] },
  { t: 'Kayan Sitesi', loc: 'Havza', dir: 'KAYAN SİTESİ - HAVZA', f: ['1 (2).jpg', '2.jpg', '3.jpg', '4.jpg'] },
  { t: 'M. Şahin - R. Acar Apartmanı', loc: 'Havza', dir: 'M. ŞAHİN - R. ACAR APT. - HAVZA', f: ['1.jpg', '2.jpg', 'Ramazan Acar - Musa Şahin.jpg'] },
  { t: 'R. Acar Apartmanı', loc: 'Havza', dir: 'R. ACAR APT. - HAVZA', f: ['1.jpg', 'Ramazan Acar 155-14 - Plan.jpg'] },
  { t: 'Sina Özel Eğitim Merkezi', loc: 'Terme', dir: 'SİNA ÖZEL EĞT. MERKEZİ - TERME', f: ['1 (2).jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'] },
  { t: 'Y. Balaban Apartmanı', loc: 'Alaçam', dir: 'Y. BALABAN APT. - ALAÇAM', f: ['Yılmaz Balaban Siyah 1.jpg', 'Yılmaz Balaban Siyah 2.jpg', 'Yılmaz Balaban Siyah 3.jpg'] },
  { t: 'Y. Karaoğlan Apartmanı', loc: 'Havza', dir: 'Y. KARAOĞLAN APT. - HAVZA', f: ['1 (2).jpg', '2.jpg', '3.jpg', 'Yiğit Karaoğlan - Plan.jpg'] },
];

const team = [
  {
    name: 'Altan Karabulut',
    job: 'Mimar',
    photo: 'public/Ekip/ak.jpg',
    bio: `1968 Yılında Çarşamba’da doğdu. Çarşamba Nuri Pamir İlkokulu, Çarşamba Ortaokulu ve Çarşamba Lisesinde okudu. 1990 Yılında KTÜ Mimarlık Bölümü’nden mezun oldu. <br> Önce Çarşamba’da (1990-1992), daha sonra ise Samsun’da kendisine ait serbest mimarlık ofisinde (Promega Mimarlık), proje üretimi ve uygulama hizmeti vermektedir.
<br> CHP Çarşamba İlçe Başkan yardımcılığı, Çarşamba Belediyesi Meclis üyeliği görevlerinde bulundu. 2019 Yerel seçimlerde CHP’den Çarşamba Belediye Başkan adayı oldu. Yerel mimarlık, kırsal mimari, kent ve yaşam konularında araştırmalar ve arşiv çalışmaları yapan Karabulut’un 2004 yılında yayınlanmış ‘Memleketim Çarşamba’ isimli bir kitabı bulunmaktadır.
<br> 1993 yılında Leyla Özdemir’le evlenen Karabulut’un, Atakan (İç Mimar) ve Kıvanç (Lise öğrencisi) isminde iki çocukları bulunmaktadır.
<br> <br> Mimari Anlayışı: <br> Özgünlük, özgürlük, vefa, toprak, asalet, zarafet, sadelik, yerellik, estetik, esneklik gibi kavramlar mimari anlayışını oluşturur. Ona göre mimarlık; yerellik ve zekanın estetikle harmanlandığı bir ruhtur. Bir mimari ürün (tasarım) yerel olmalı, estetik ve esnek olmalı ve içinde zeka barındırmalıdır.`,
  },
  {
    name: 'Leyla Karabulut',
    job: 'Teknik Ressam',
    photo: 'public/Ekip/lk.jpg',
    bio: `1971 Yılında Osmancık’ta doğdu. Osmancık İlkokulu, Samsun Cumhuriyet Lisesi Orta bölümü ve Atakum Meslek Lisesi Yapı Ressamlığı bölümünden mezun oldu (1987). Samsun’da Remzi Parmak Mimarlık Ofisinde çalıştı (1987-1992) ve daha sonra kısa bir dönem Samsun’da kendi ofisini açtı. 1993 yılından itibaren eşi Mimar Altan Karabulut’la birlikte serbest mimarlık ofisinde çalışmaya devam etti.
<br> Profesyonel olarak yağlı boya resimler de yapan Karabulut’un Atakan ve Kıvanç isminde iki çocuğu bulunmaktadır.`,
  },
  {
    name: 'Atakan Karabulut',
    job: 'İç Mimar',
    photo: 'public/Ekip/atk.jpg',
    bio: `1995 Yılında Samsun’da doğdu. Samsun Atakum Denizevleri İlköğretim Okulu ve Cumhuriyet Lisesi’nde okudu. Kıbrıs Doğu Akdeniz Üniversitesi İç Mimarlık Bölümü’nden mezun oldu (2018). <br> İlkokul öğretmeni Erhan Bey’in özendirmesiyle başlayan tiyatro ve sinema sevgisi, tüm eğitim hayatı boyunca katlanarak devam etti. Okul tiyatrolarında ve en son olarak Üniversite tiyatrosunda birçok oyunda görev aldı. Üniversite son sınıfta sinema eğitimi aldı. Müjdat Gezen Tiyatro Okulu’nda Kamera önü oyunculuk eğitimi aldı (2018-2019). Senaristlik, oyunculuk ve yönetmenlik konusunda her geçen gün kendisini geliştirme amacında olan Atakan Karabulut’un birçok kısa filmi bulunmaktadır. Tüm üretimlerini kendisine ait ‘Cinek Film’de yayınlamaktadır.`,
  },
];

const aboutBody = `1990 yılında Karabulut İnşaat Mimarlık adıyla hizmet vermeye başlamış ofis 2007 yılından itibaren Promega Mimarlık Mühendislik ofisi olarak hizmet vermeye devam etmektedir. Özgün tasarımlar, yerel mimariye saygı anlayışları çerçevesinde ofis, ürünler vermektedir. Sürekli araştıran, sürekli kendini geliştiren, dünya mimarisini takip eden ekip birçok alanda proje ve uygulama çalışmaları yapmıştır.`;

/* ----------------------------- RUN ----------------------------- */

async function run() {
  console.log(`\nMigrating into ${projectId}/${dataset}\n`);

  // Projects
  console.log('Projects:');
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    console.log(`- ${p.t}`);
    const images = [];
    for (const file of p.f) {
      const id = await uploadImage(`${PROJ}${p.dir}/${file}`, file);
      images.push(imageField(id, p.t));
    }
    await client.createOrReplace({
      _id: `project-${slugify(p.t)}`,
      _type: 'project',
      title: p.t,
      slug: { _type: 'slug', current: slugify(p.t) },
      location: p.loc || undefined,
      order: i + 1,
      featured: i < 6,
      images,
    });
  }

  // Team
  console.log('\nTeam:');
  for (let i = 0; i < team.length; i++) {
    const m = team[i];
    console.log(`- ${m.name}`);
    const photoId = await uploadImage(m.photo, m.name);
    await client.createOrReplace({
      _id: `teamMember-${slugify(m.name)}`,
      _type: 'teamMember',
      name: m.name,
      slug: { _type: 'slug', current: slugify(m.name) },
      jobTitle: m.job,
      order: i + 1,
      photo: imageField(photoId, m.name),
      bio: toBlocks(m.bio),
    });
  }

  // About page (singleton)
  console.log('\nAbout page');
  const aboutImg = await uploadImage('public/AboutPhoto1.jpg', 'Hakkımızda');
  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    heading: 'Hakkımızda',
    body: toBlocks(aboutBody),
    images: [imageField(aboutImg, 'Promega Mimarlık')],
  });

  // Site settings (singleton) — seed hero from a few strong renders.
  console.log('Site settings');
  const heroPaths = [
    `${PROJ}5. ILGAZ DORUK OTEL-ÇANKIRI/1.jpg`,
    `${PROJ}2. ÇINARLIK MERKEZ CAMİİ/R1-İ.jpg`,
    `${PROJ}1. OMÜ-HAVZA REHABİLİTASYON MERKEZİ/havza 3d.jpg`,
  ];
  const heroImages = [];
  for (const hp of heroPaths) heroImages.push(imageField(await uploadImage(hp), 'Promega Mimarlık'));

  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    sloganLines: ['Mimarlık · Mühendislik', '& İç Mimarlık'],
    heroImages,
    contact: {
      email: 'bilgi@promegamimarlik.com',
      phone: '(0362) 435 92 29',
      address: 'Kale Mah. Bankalar Cad. Kuzeyhan No: 39 Kat: 3 İlkadım / Samsun',
    },
    social: {
      facebook: 'https://www.facebook.com/promegamimarlik',
      instagram: 'https://www.instagram.com/promegamimarlik/',
      youtube: 'https://www.youtube.com/channel/UCGsVTO-eYGpxqU4VjACuwaA',
    },
    footerText: 'Mimarlık, mühendislik ve iç mimarlık. Samsun.',
  });

  console.log('\n✅ Migration complete.\n');
}

run().catch((e) => {
  console.error('\n❌ Migration failed:', e);
  process.exit(1);
});
