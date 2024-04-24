// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-csurf',
    'nuxt-security',
    '@nuxt/devtools',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Heebo: true,
        },
      },
    ],
    "@nuxt/eslint"
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },
  components: [{ path: '~/components/blocks', prefix: 'B' }, '~/components'],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'es',
        iso: 'es-ES',
      },
    ],
    defaultLocale: 'es',
    baseUrl: 'https://desdejupiter.me',
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 5000,
    },
    optimizeDeps: {
      entries: ['./**/*.vue'],
    },
    plugins: [],
  },
});