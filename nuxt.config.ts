export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  modules: ['nuxt-schema-org', '@nuxtjs/seo', 'nuxt-aos'],


  css: ['~/assets/css/main.css'],

  sitemap: {
    enabled: true,
    site: {
      url: 'https://ziubinski.pl',
    },
  },



  target: 'static',
  ssr: false,

  server: {
    port: 3030,
    host: 'localhost',
  },

  serverMiddleware: [
    'redirect-ssl',
  ],
  ogImage: { enabled: false },
  compatibilityDate: '2024-07-24',
  schemaOrg: {
    siteUrl: 'http://ziubinski.pl/',  // Podaj URL swojej witryny
  },
});