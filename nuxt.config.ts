// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image", "@nuxtjs/i18n"],
  typescript: {
    typeCheck: false,
    strict: true,
  },
  components: [{ path: "~/components/blocks", prefix: "B" }, "~/components"],
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "es",
        iso: "es-ES",
      },
    ],
    defaultLocale: "es",
    baseUrl: "https://desdejupiter.me",
  },
});
