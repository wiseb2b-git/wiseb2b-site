// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://wiseb2b.eu',
  trailingSlash: 'always',
  output: 'server',
  adapter: netlify(),
  integrations: [sitemap({
    filter: (page) =>
      !page.includes('/prezentacja-produktowa/') &&
      !page.includes('/fundusze-europejskie/'),
    serialize(item) {
      item.lastmod = new Date().toISOString();
      return item;
    },
  })],
});
