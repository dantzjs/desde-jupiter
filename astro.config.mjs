import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://desde-jupiter.vercel.app/',
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
});