export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          id: 'cookieyes',
          type: 'text/javascript',
          src: 'https://cdn-cookieyes.com/client_data/f5e0f72d6611e28bf3f27106/script.js',
          defer: true
        },
        {
          hid: 'gtag',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-D9FKY9MKWB',
          async: true
        },
        {
          hid: 'gtag-init',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D9FKY9MKWB');
          `,
          type: 'text/javascript',
          async: true
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.ico' }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      meta: [
        { hid: 'description', name: 'description', content: 'Opis Twojej strony' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Tworzenie Stron WWW i Sklepów Internetowych - Kacper Ziubiński' },
        { property: 'og:description', content: 'Profejsonalne usługi związane z tworzeniem stron internetowych, sklepów oraz dedykowanych aplikacji Internetowych.' },
        { property: 'og:image', content: 'https://ziubinski.pl/socialmedia-image.jpg' },
        { property: 'og:url', content: 'https://ziubinski.pl' }
      ]
      
    }
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
    siteUrl: 'http://ziubinski.pl/', 
  },
});