<template>
  <div
    v-if="!showNotFound"
    :style="{ backgroundColor: `var(--${generalData.paletteName}-bg)` }"
  >
    <Header />
    <div class="max-w-[1400px] mx-auto w-[90%] md:w-[95%] main_section">
      <slot />
    </div>
    <Footer />
  </div>
  <NotFound v-else />
</template>

<script setup>
import { useGeneralData } from "~~/store/index";
const generalData = useGeneralData();

const showNotFound = ref(false);

const url = useRequestURL();
console.log(url.hostname);

import { useUserData } from "~~/store/userData";
const userStore = useUserData();

const response = await useFetch(
  `${apiAuthority}/website/info/get_info_by_domain/`,
  {
    method: "POST",
    body: {
      domain: url.hostname,
    },
  }
);
console.log(response);
if (response.status.value === "success") {
  userStore.setSellerInfo(response.data.value.website_info);
  userStore.setSellerProduct(response.data.value.seller_products);
} else {
  showNotFound.value = true;
}

// console.log("layout called and api also");
</script>

<style scoped></style>
