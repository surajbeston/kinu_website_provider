<template>
  <div :id="products[0].category.name" class="my-8">
    <div class="flex justify-between items-center">
      <h3
        :style="{ color: `var(--${generalData.paletteName}-text)` }"
        class="text-[12px] md:text-[24px] text-[color:var(--black-4)] font-normal font-['Nexa']"
      >
        {{ products[0].category.name }}
      </h3>
    </div>

    <div
      id="product_container"
      class="grid gap-6 my-4 md:min-h-[200px] grid_section"
    >
      <MainPageProductCard
        v-for="each in products"
        :product="each"
        :palette="generalData.paletteName"
      />
    </div>
  </div>
</template>

<script setup>
import { useGeneralData } from "~/store/index";
const generalData = useGeneralData();

const props = defineProps({
  products: Array,
});
// const handleNavigation = async (each) => {
//   await navigateTo(`/product/${each}`);
//   // to reset the filter when page changes
//   // getProductsByOrdering("All Products");
// };
onMounted(() => {
  if (generalData.activeFilterTag) {
    scrollToCategory(generalData.activeFilterTag);
  }
});
function scrollToCategory(categoryName) {
  const targetElement = document.getElementById(categoryName);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped>
.grid_section {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  align-items: stretch;
}
@media screen and (min-width: 768px) {
  .grid_section {
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  }
}
</style>
