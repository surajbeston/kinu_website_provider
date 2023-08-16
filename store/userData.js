import { defineStore } from "pinia";

export const useUserData = defineStore("userData", () => {
  const sellerInfo = ref({});
  const seller_products = ref({});
  const sellerVideo = ref([]);

  function setSellerInfo(info) {
    sellerInfo.value = info;
  }
  function setSellerProduct(products) {
    seller_products.value = products;
  }
  function setSellerVideo(value) {
    sellerVideo.value = value;
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

    domainName,
    websiteId,
    setSellerVideo,
    sellerVideo,
  };
});
