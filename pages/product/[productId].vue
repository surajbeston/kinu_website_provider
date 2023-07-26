<template>
  <div>
    <div class="flex gap-8">
      <DetailsPageImageSlider />
      <DetailsPageProductInfo />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route.params.productId);
</script>

<style scoped></style>
