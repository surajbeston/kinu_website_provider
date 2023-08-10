import { defineStore } from "pinia";

// export const useUserData = defineStore("counter", () => {
//   const sellerInfo = ref(null);
//   const items = ref([]);
//   const name = ref("Eduardo");
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }
//   function badu(itemsArray) {
//     items.value = itemsArray;
//   }
//   return { count, name, doubleCount, increment, badu, items };
// });

export const useUserData = defineStore("userData", () => {
  const sellerInfo = ref({});
  const seller_products = ref([]);
  function setSellerInfo(info) {
    sellerInfo.value = info;
  }
  function setSellerProduct(products) {
    seller_products.value = products;
  }
  return { sellerInfo, setSellerInfo, seller_products, setSellerProduct };
});
