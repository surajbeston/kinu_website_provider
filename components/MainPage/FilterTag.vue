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
    class="text-[10px] md:text-base text-black rounded-xl p-[8px] md:p-[10px] cursor-pointer"
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
console.log(props.tag);
console.log(generalData.activeFilterTag);
</script>

<style scoped></style>
