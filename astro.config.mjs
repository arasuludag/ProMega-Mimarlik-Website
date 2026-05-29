// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://promegamimarlik.com',
  // Static export — the whole site is prerendered to dist/ and uploaded to cPanel.
  output: 'static',
  integrations: [sitemap()],
  image: {
    // Allow Astro's build-time <Image> optimizer to fetch & process Sanity assets,
    // so optimized files land in dist/_astro and are served from cPanel (no runtime
    // Sanity bandwidth).
    domains: ['cdn.sanity.io'],
  },
  build: {
    // Friendlier static URLs on cPanel (foo/index.html instead of foo.html).
    format: 'directory',
  },
});
