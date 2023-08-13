<template>
  <div :style="{ backgroundColor: `var(--${generalData.paletteName}-bg)` }">
    <Header />
    <div class="max-w-[1400px] mx-auto w-[90%] md:w-[95%] main_section">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useGeneralData } from "~~/store/index";
const generalData = useGeneralData();
const url = useRequestURL();

import { useUserData } from "~~/store/userData";
const userStore = useUserData();

const response = await useFetch(
  `${apiAuthority}/website/info/get_info_by_domain/`,
  {
    method: "POST",
    body: {
      domain: "kinu-women.kinu.app",
    },
  }
);
if (response.status.value === "success") {
  userStore.setSellerInfo(response.data.value.website_info);
  userStore.setSellerProduct(response.data.value.seller_products);
} else {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
console.log("layout called and api also");
</script>

<style scoped></style>
