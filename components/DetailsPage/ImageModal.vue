<template>
  <div class="w-[500px] h-[500px]">
    <img :src="imgSrc" alt="review full image" />
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
});
</script>

<style scoped></style>
