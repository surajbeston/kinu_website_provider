import { defineStore } from "pinia";

export const useUserData = defineStore("userData", () => {
  const paletteName = ref("default");
  const sellerInfo = ref({});
  const seller_products = ref([]);

  function setSellerInfo(info) {
    sellerInfo.value = info;
  }
  function setSellerProduct(products) {
    seller_products.value = products;
  }
  const sellerId = computed(() => sellerInfo.value.seller.id);

  const domainName = computed(() => sellerInfo.value.domain);

  const websiteId = computed(() => sellerInfo.value.id);

  return {
    sellerInfo,
    setSellerInfo,
    seller_products,
    setSellerProduct,
    sellerId,
    paletteName,
    domainName,
    websiteId,
  };
});
