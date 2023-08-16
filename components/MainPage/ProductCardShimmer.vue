<template>
  <div class="my-8 animate-pulse">
    <div
      :style="{
        background: `var(--${paletteName}-light)`,
      }"
      class="w-[120px] my-4 h-[25px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-[8px]"
    ></div>
    <div class="flex gap-8">
      <div
        :style="{
          background: `var(--${paletteName}-light)`,
        }"
        class="h-[345px] max-w-[150px] md:max-w-[268px] w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-[8px]"
      ></div>
      <div
        :style="{
          background: `var(--${paletteName}-light)`,
        }"
        class="h-[345px] max-w-[150px] md:max-w-[268px] w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-[8px]"
      ></div>
      <div
        :style="{
          background: `var(--${paletteName}-light)`,
        }"
        class="h-[345px] max-w-[150px] md:max-w-[268px] w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-[8px]"
      ></div>
      <div
        :style="{
          background: `var(--${paletteName}-light)`,
        }"
        class="h-[345px] max-w-[150px] md:max-w-[268px] w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-[8px]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { useGeneralData } from "~/store/index";
const { paletteName } = useGeneralData();
</script>

<style scoped></style>
