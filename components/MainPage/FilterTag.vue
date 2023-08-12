<template>
  <p
    :style="{
      borderColor: `var(--${palette}-cta)`,
      backgroundColor: `var(--yellow-2)`,
    }"
    :class="{
      'bg-[color:var(--yellow-2)] border-4': tag.active,
    }"
    class="text-[10px] md:text-base text-black rounded-xl p-[8px] md:p-[10px] cursor-pointer"
  >
    {{ tag.name }}
  </p>
</template>

<script setup>
const props = defineProps({
  tag: Object,
  palette: String,
  selected: Boolean,
});
</script>

<style scoped></style>
