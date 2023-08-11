import { defineStore } from "pinia";

export const useOrderData = defineStore("orderData", () => {
  const orderData = ref({});
  function setOrderData(order) {
    orderData.value = order;
  }
  return {
    orderData,
    setOrderData,
  };
});
