<template>
  <p
    class="border border-black/60 text-[10px] md:text-base rounded-xl p-[8px] md:p-[10px] cursor-pointer"
  >
    {{ tag }}
  </p>
</template>

<script setup>
const props = defineProps({
  tag: String,
});
</script>

<style scoped></style>
