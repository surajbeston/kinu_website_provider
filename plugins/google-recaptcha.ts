import { VueReCaptcha } from "vue-recaptcha-v3";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: "6LcN_JInAAAAAOlHJThwqFqwYZF-6ZdlGU92owUM",
    loaderOptions: {
      autoHideBadge: false,
      explicitRenderParameters: {
        badge: "bottomleft",
      },
    },
  });
});
