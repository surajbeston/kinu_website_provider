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
import { useUserData } from "~~/store/userData";
const generalData = useGeneralData();
const userStore = useUserData();
const url = useRequestURL();

const showNotFound = ref(false);

const parts = url.hostname.split(".");
const domain = parts.length > 1 ? parts.slice(-2).join(".") : parts[0];
const subDomainpParts = url.hostname.split(".kinu.app");
const subdomain = subDomainpParts[0];
let response;
if (domain === "kinu.app") {
  console.log("slug");
  response = await useFetch(
    `${apiAuthority}/website/info/get_info_by_domain/`,
    {
      method: "POST",
      body: {
        subdomain_slug: subdomain,
      },
    }
  );
} else {
  console.log("unslug");
  console.log(url.hostname);
  response = await useFetch(
    `${apiAuthority}/website/info/get_info_by_domain/`,
    {
      method: "POST",
      body: {
        domain: url.hostname,
      },
    }
  );
}
console.log(response);

if (response.status.value === "success") {
  userStore.setSellerInfo(response.data.value.website_info);
  userStore.setSellerProduct(response.data.value.seller_products);
  generalData.setPaletteName(response.data.value.website_info.theme);

  const { data: location } = await useFetch(
    `${apiAuthority}/api/address/${userStore.sellerInfo.seller.address}/`
  );

  // setting location to the store
  generalData.setLocation(location.value);
} else {
  showNotFound.value = true;
}

// console.log("layout called and api also");
</script>

<style scoped></style>
