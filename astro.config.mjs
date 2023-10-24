import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://desde-jupiter.vercel.app/',
  integrations: [tailwind(), react()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
