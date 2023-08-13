<template>
  <p
    :style="{
      borderColor: `var(--${palette}-text)`,
      backgroundColor: `var(--yellow-2)`,
    }"
    :class="{
      'bg-[color:var(--yellow-2)] border':
        tag.name == generalData.activeFilterTag,
    }"
    class="text-[10px] md:text-base text-black rounded-xl p-[8px] md:p-[10px] cursor-pointer hover:scale-[1.02] duration-500 hover:shadow-sm"
  >
    {{ tag.name }}
  </p>
</template>

<script setup>
import { useGeneralData } from "~/store/index";
const generalData = useGeneralData();
const props = defineProps({
  tag: Object,
  palette: String,
});
</script>

<style scoped></style>
