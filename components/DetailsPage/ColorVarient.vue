<template>
  <p
    :style="{ backgroundColor: color.bgColor }"
    :class="{ 'border-2 border-green-300': color.isSelected }"
    class="w-[18px] md:w-[32px] h-[18px] md:h-[32px] rounded-full"
  ></p>
</template>

<script setup>
defineProps({
  color: Object,
});
</script>

<style scoped></style>
