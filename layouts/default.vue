<template>
  <div
    v-if="!showNotFound"
    :style="{ backgroundColor: `var(--${generalData.paletteName}-bg)` }"
  >
    <Header />
    <div
      class="max-w-[1400px] mx-auto w-[90%] md:w-[95%] main_section min-h-screen"
    >
      <slot />
    </div>
    <Footer />
  </div>
  <NotFound v-else />
</template>

<script setup>
import { useGeneralData } from "~~/store/index";
import { useUserData } from "~~/store/userData";
const generalData = useGeneralData();
const userStore = useUserData();
const url = useRequestURL();
const showNotFound = ref(false);

const response = await useFetch(
  `${apiAuthority}/website/info/get_info_by_domain/`,
  {
    method: "POST",
    body: {
      domain: url.hostname,
    },
  }
);

// console.log(response);
if (response.status.value === "success") {
  userStore.setSellerInfo(response.data.value.website_info);
  // userStore.setSellerProduct(response.data.value.seller_products);
  // userStore.setSellerVideo(response.data.value.seller_videos);
  generalData.setPaletteName(response.data.value.website_info.theme);

  const { data: location } = await useFetch(
    `${apiAuthority}/api/address/${userStore.sellerInfo.seller.address}/`
  );

  // console.log(response.data);
  // setting location to the store
  generalData.setLocation(location.value);
} else {
  showNotFound.value = true;
}

// console.log("layout called and api also");
</script>

<style scoped></style>
