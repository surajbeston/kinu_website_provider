<template>
  <div v-if="!generalData.showErrorPage" :style="{ backgroundColor: `var(--${generalData.paletteName}-bg)` }">
    <Header />
    <div class="max-w-[1400px] mx-auto w-[90%] md:w-[95%] main_section min-h-screen">
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
// const showNotFound = ref(false);


async function fetchData() {
  if (url.hostname != 'menu.kinu.app') {
    return await useFetch(
      `${apiAuthority}/website/info/get_info_by_domain/`,
      {
        method: "POST",
        body: {
          domain: url.hostname,
        },
      }
    );
  }
  else{
    var id = url.pathname.split("/")[1]
    return await useFetch(
      `${apiAuthority}/website/qr/${id}/get_info_by_qrcode/`,
      {
        method: "GET"
      }
    );
  }
}


const response = await fetchData()


console.log(response.data)


if (response.status.value === "success") {
  userStore.setSellerInfo(response.data.value.website_info);
  // userStore.setSellerProduct(response.data.value.seller_products);
  // userStore.setSellerVideo(response.data.value.seller_videos);
  generalData.setPaletteName(response.data.value.website_info.theme);

  const { data: location } = await useFetch(
    `${apiAuthority}/api/address/${userStore.sellerInfo.seller.address}/`
  );

  // setting location to the store
  generalData.setLocation(location.value);
} else {
  generalData.setShowErrorPage();
  // showNotFound.value = true;
}

// console.log("layout called and api also");
useHead({
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: `${apiAuthority}${userStore.sellerInfo.icon}`,
    },
  ],
});
</script>

<style scoped></style>
