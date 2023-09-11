// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt3-leaflet",
    "@vee-validate/nuxt",
    "@nuxtjs/robots",
  ],
  robots: {
    configPath: "robots.txt.js",
  },
  runtimeConfig: {
    public: {
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    },
  },
  build: {
    transpile: ["vue-toastification"],
  },
  css: ["~~/layouts/global.css"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "favicon.png",
        },
      ],
    },
  },
});
