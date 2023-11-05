import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://desdejupiter.me/',
  integrations: [tailwind(), react(), mdx(), sitemap(), robotsTxt()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
});