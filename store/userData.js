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
  function sellerId() {
    return sellerInfo.value.seller.id;
  }
  function domainName() {
    return sellerInfo.value.domain;
  }
  function websiteId() {
    return sellerInfo.value.id;
  }
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
