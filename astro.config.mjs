// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wiseb2b.eu',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
