// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt3-leaflet",
  ],
  runtimeConfig: {
    public: {
      MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    },
  },
  build: {
    transpile: ["vue-toastification"],
  },
});
