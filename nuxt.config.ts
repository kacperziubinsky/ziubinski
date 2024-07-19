// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  // Globalne ustawienia CSS
  css: ['~/assets/css/main.css'],

  // Tryb generacji aplikacji statycznej
  target: 'static',

  // Tryb SPA
  ssr: false,

  // Konfiguracja serwera deweloperskiego
  server: {
    port: 3030, // Port serwera
    host: 'localhost' // Host serwera
  },

  // Konfiguracja certyfikatu SSL (jeśli wymagane)
  serverMiddleware: [
    'redirect-ssl'
  ],
});
