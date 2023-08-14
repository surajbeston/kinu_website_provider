<template>
  <p
    :style="{
      borderColor:
        tag.name === generalData.activeFilterTag
          ? `var(--${generalData.paletteName}-outofstock)`
          : 'var(--light-yellow)',
      backgroundColor: `var(--light-yellow)`,
    }"
    class="text-[10px] border-2 border-[var(--light-yellow)] md:text-base text-black rounded-xl p-[8px] md:p-[10px] cursor-pointer hover:scale-[1.01] duration-500 hover:shadow-sm"
  >
    {{ tag.name }}
  </p>
</template>

<script setup>
import { useGeneralData } from "~/store/index";
const generalData = useGeneralData();
const props = defineProps({
  tag: Object,
});
</script>

<style scoped></style>
