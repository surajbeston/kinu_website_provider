<template>
  <div class="my-8">
    <div class="flex justify-between items-center">
      <h3
        :style="{ color: `var(--${userStore.paletteName}-text)` }"
        class="text-[12px] md:text-[24px] text-[color:var(--black-4)] font-normal font-['Nexa']"
      >
        {{ title }}
      </h3>
      <div
        :style="{
          borderColor: `var(--${userStore.paletteName}-text)`,
          color: `var(--${userStore.paletteName}-text)`,
        }"
        ref="filterWrapper"
        @click="toggleOptions"
        class="flex items-center gap-1 md:gap-3 border px-2 md:px-3 py-1 cursor-pointer text-[10px] md:text-lg font-['Poppins'] rounded-[5px] border-black/60"
      >
        <p class="font-normal">sort by:</p>
        <CustomDropDown
          :showOptions="showOptions"
          :selectedOption="selectedOption"
          :filterOptions="filterOptions"
          @update="handleChangeOptions"
        />
        <svg
          :style="{ fill: `var(--${userStore.paletteName}-text)` }"
          class="fill-[#4A4B57]"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.173 0.595325L5.80883 4.95002L1.44462 0.595325L0.103983 1.93596L5.80883 7.64081L11.5137 1.93596L10.173 0.595325Z"
          />
        </svg>
      </div>
    </div>
    <div class="grid gap-6 w-full my-8 grip_section">
      <MainPageIntroCard />
      <MainPageProductCard
        @click="handleNavigation(each.id)"
        v-for="each in userStore.seller_products"
        :product="each"
        :palette="userStore.paletteName"
      />
    </div>
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";

const userStore = useUserData();
import { ref, onMounted, onBeforeUnmount } from "vue";
const props = defineProps({
  title: String,
  seller_products: Array,
});
const showOptions = ref(false);
const filterWrapper = ref(null);

const filterOptions = ref(["Relevance", "High to Low", "Low to High"]);
const selectedOption = ref(filterOptions.value[0]);

const handleNavigation = async (each) => {
  await navigateTo(`/product/${each}`);
  // to reset the filter when page changes
  getProductsByOrdering("Relevance");
};
const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};

const handleChangeOptions = (option) => {
  showOptions.value = false;
  selectedOption.value = option;
  getProductsByOrdering(option);
};

const getProductsByOrdering = async (filterTag) => {
  const sellerId = userStore.sellerId();
  let response;
  if (filterTag === "Relevance") {
    response = await useFetch(`${apiAuthority}/api/product`, {
      query: {
        seller: sellerId,
        limit: 1000,
      },
    });
  } else if (filterTag === "High to Low") {
    response = await useFetch(`${apiAuthority}/api/product`, {
      query: {
        seller: sellerId,
        ordering: "-price",
        limit: 1000,
      },
    });
  } else {
    response = await useFetch(`${apiAuthority}/api/product`, {
      query: {
        seller: sellerId,
        ordering: "price",
        limit: 1000,
      },
    });
  }

  // setting products to the store
  if (response.data.value.results.length > 0) {
    userStore.setSellerProduct(response.data.value.results);
  }
};

// outside click close dropdown
const closeDropdownOnOutsideClick = (event) => {
  if (filterWrapper.value && !filterWrapper.value.contains(event.target)) {
    showOptions.value = false;
  }
};
onMounted(() => {
  document.addEventListener("click", closeDropdownOnOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeDropdownOnOutsideClick);
});
</script>

<style scoped>
.grip_section {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}
@media screen and (min-width: 768px) {
  .grip_section {
    grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  }
}
</style>
