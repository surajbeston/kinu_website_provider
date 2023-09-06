<template>
  <div class="py-5">
    <div class="my-5 w-full gap-4 flex relative">
      <input
        v-model="inputText"
        @keyup.enter="getSearchProducts"
        class="w-full indent-6 md:indent-8 md:py-3 outline-none border rounded-[16px] text-[12px] md:text-[16px] font-['Poppins'] font-normal border-black/60 bg-[color:var(--white)]"
        type="text"
        placeholder="Search products here"
      />
      <svg
        :style="{ stroke: `var(--${generalData.paletteName}-text)` }"
        @click="getSearchProducts"
        class="cursor-pointer stroke-[#0B121F]"
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.206 38.2968L31.5929 30.6837M31.5929 30.6837C32.8951 29.3814 33.9281 27.8354 34.6329 26.1339C35.3377 24.4325 35.7004 22.6088 35.7004 20.7672C35.7004 18.9255 35.3377 17.1019 34.6329 15.4004C33.9281 13.6989 32.8951 12.1529 31.5929 10.8507C30.2906 9.54843 28.7446 8.51542 27.0432 7.81065C25.3417 7.10588 23.5181 6.74313 21.6764 6.74313C19.8347 6.74313 18.0111 7.10588 16.3096 7.81065C14.6081 8.51542 13.0621 9.54843 11.7599 10.8507C9.12987 13.4807 7.65234 17.0478 7.65234 20.7672C7.65234 24.4866 9.12987 28.0537 11.7599 30.6837C14.3899 33.3137 17.957 34.7912 21.6764 34.7912C25.3958 34.7912 28.9629 33.3137 31.5929 30.6837Z"
          stroke-width="1.75296"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-if="inputText"
        @click="clearFilter"
        class="absolute right-[70px] md:right-[75px] w-[15px] h-[16px] md:w-[20px] md:h-[21px] top-3 md:top-[13.5px] stroke-[color:var(--red)] cursor-pointer"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.996704 10.4041L5.40084 6L9.80497 10.4041M9.80497 1.59589L5.4 6L0.996704 1.59589"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div
      class="flex items-center gap-3 md:gap-6 justify-start md:justify-center flex-wrap py-2"
    >
      <MainPageFilterTag
        @click="scrollToCategory(tag.name)"
        v-for="(tag, index) in categories"
        :tag="tag"
        :key="index"
      />
      <!-- <button
        v-if="generalData.activeFilterTag"
        class="bg-[color:var(--red)] hover:scale-[1.02] text-[10px] font-semibold md:text-base duration-500 hover:shadow-sm text-[var(--white)] p-[8px] rounded-md"
        @click="clearFilter"
      >
        Clear filters
      </button> -->
    </div>
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";
import { useGeneralData } from "~/store/index";
import { productsGrouper } from "~/utils/constant";

const userStore = useUserData();
const generalData = useGeneralData();
const inputText = ref("");
const categories = ref(null);

categories.value = userStore.sellerInfo.seller.categories.filter(
  (each) => each.products_number > 0
);

const getSearchProducts = async () => {
  if (inputText.value) {
    const response = await useFetch(`${apiAuthority}/api/product`, {
      query: {
        seller: userStore.sellerId,
        name__icontains: inputText.value,
        limit: 1000,
      },
    });

    const groupedProducts = productsGrouper(response.data.value.results);
    userStore.setSellerProduct(groupedProducts);
  }
};
function scrollToCategory(categoryName) {
  const targetElement = document.getElementById(categoryName);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

// function handleFilterTag(clickedTag) {
//   // // setting store
//   // generalData.setActiveFilterTag(clickedTag.name);
//   // generalData.setfilterTagText(`of ${clickedTag.name}`);
//   // getProductsByCategory(clickedTag.id);
// }

// const getProductsByCategory = async (categoryId) => {
//   if (categoryId) {
//     const response = await useFetch(`${apiAuthority}/api/product`, {
//       query: {
//         seller: userStore.sellerId,
//         category: categoryId,
//         limit: 1000,
//       },
//     });
//     // console.log(response);
//     userStore.setSellerProduct(response.data.value.results);
//   }
// };
const clearFilter = async () => {
  const response = await useFetch(`${apiAuthority}/api/product`, {
    query: {
      seller: userStore.sellerId,
      limit: 1000,
    },
  });
  // console.log(response);
  const groupedProducts = productsGrouper(response.data.value.results);
  userStore.setSellerProduct(groupedProducts);
  inputText.value = "";
};

// onMounted(() => {
//   if (generalData.activeFilterTag) {
//     const filterTag = userStore.sellerInfo.seller.categories.find(
//       (each) => each.name === generalData.activeFilterTag
//     );

//   }
// });
</script>

<style scoped></style>
