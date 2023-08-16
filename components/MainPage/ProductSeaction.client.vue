<template>
  <div v-if="!isLoading" class="my-8">
    <MainPageProductCardWithText
      v-for="eachCategory in userStore.seller_products"
      :products="eachCategory"
    />
  </div>
  <div v-else>
    <MainPageProductCardShimmer v-for="each in 3" />
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";
import { useGeneralData } from "~/store/index";
import { productsGrouper } from "~/utils/constant";
const generalData = useGeneralData();
const isLoading = ref(true);
const userStore = useUserData();

// const showOptions = ref(false);
// const filterWrapper = ref(null);

// const filterOptions = ref(["All Products", "High to Low", "Low to High"]);
// const selectedOption = ref(filterOptions.value[0]);

// const toggleOptions = () => {
//   showOptions.value = !showOptions.value;
// };

// const handleChangeOptions = (option) => {
//   showOptions.value = false;
//   selectedOption.value = option;
//   getProductsByOrdering(option);
// };

// const getProductsByOrdering = async (filterTag) => {
//   const sellerId = userStore.sellerId;
//   let response;
//   if (filterTag === "All Products") {
//     response = await useFetch(`${apiAuthority}/api/product`, {
//       query: {
//         seller: sellerId,
//         limit: 1000,
//       },
//     });
//   } else if (filterTag === "High to Low") {
//     response = await useFetch(`${apiAuthority}/api/product`, {
//       query: {
//         seller: sellerId,
//         ordering: "-price",
//         limit: 1000,
//       },
//     });
//   } else {
//     response = await useFetch(`${apiAuthority}/api/product`, {
//       query: {
//         seller: sellerId,
//         ordering: "price",
//         limit: 1000,
//       },
//     });
//   }

//   // setting products to the store
//   if (response.data.value.results.length > 0) {
//     userStore.setSellerProduct(response.data.value.results);
//   }
// };

// // outside click close dropdown
// const closeDropdownOnOutsideClick = (event) => {
//   if (filterWrapper.value && !filterWrapper.value.contains(event.target)) {
//     showOptions.value = false;
//   }
// };
const getProducts = async () => {
  console.log("called");
  const response = await $fetch(
    `${apiAuthority}/api/product/?seller=${userStore.sellerId}&limit=1000`
  );

  return response;
};

onMounted(async () => {
  // if (Object.keys(userStore.seller_products).length > 0) return;
  const response = await getProducts();

  const groupedProducts = productsGrouper(response.results);
  //   const sortedGroupedProducts = Object.entries(groupedProducts.value).sort(
  //   (a, b) => b[1].length - a[1].length
  // );
  userStore.setSellerProduct(groupedProducts);
  isLoading.value = false;
  // document.addEventListener("click", closeDropdownOnOutsideClick);
});

// onBeforeUnmount(() => {
//   document.removeEventListener("click", closeDropdownOnOutsideClick);
// });
</script>

<style scoped></style>
