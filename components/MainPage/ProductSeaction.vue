<template>
  <div class="my-8">
    <div class="flex justify-between items-center">
      <h3 class="text-[24px] text-[#1E1E1E] font-normal font-['Nexa']">
        Products for you
      </h3>
      <div class="flex items-center gap-3">
        <p>sort by:</p>
        <p>Relevance</p>
      </div>
    </div>
    <div
      style="grid-template-columns: repeat(auto-fit, minmax(245px, 1fr))"
      class="grid gap-6 w-full my-8 flex-wrap"
    >
      <MainPageIntroCard />
      <MainPageProductCard @click="handleNavigation(each)" v-for="each in 10" />
    </div>
  </div>
</template>

<script setup>
const handleNavigation = async (each) => {
  await navigateTo(`/product/${each}`);
};
</script>

<style scoped></style>
