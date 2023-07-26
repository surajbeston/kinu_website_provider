<template>
  <p
    :style="{ backgroundColor: color.bgColor }"
    :class="{ 'border-2 border-green-300': color.isSelected }"
    class="w-[32px] h-[32px] rounded-full"
  ></p>
</template>

<script setup>
defineProps({
  color: Object,
});
</script>

<style scoped></style>
