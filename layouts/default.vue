<template>
  <div :style="{ backgroundColor: `var(--${userStore.paletteName}-bg)` }">
    <Header />
    <div class="max-w-[1400px] mx-auto w-[90%] md:w-[95%] main_section">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";

const userStore = useUserData();
console.log(userStore.paletteName);
const { data: userData } = await useFetch(
  `${apiAuthority}/website/info/get_info_by_domain/`,
  {
    method: "POST",
    body: {
      domain: "kinu-women.kinu.app",
    },
  }
);
console.log("layout called and api also");

userStore.setSellerInfo(userData.value.website_info);
userStore.setSellerProduct(userData.value.seller_products);
</script>

<style scoped></style>
