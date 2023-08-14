<template>
  <div
    :style="{
      backgroundColor: `var(--${generalData.paletteName}-light)`,
    }"
    class="hidden md:flex text-sm my-10 py-10 pl-20"
  >
    <ul class="flex">
      <li
        @click="handleClick(index)"
        v-for="(tag, index) in tags"
        :key="index"
        class="flex items-center cursor-pointer"
      >
        <span
          :style="{ color: `var(--${generalData.paletteName}-gray-text)` }"
          class="text-base font-normal font-['Nexa'] hover:font-black"
          >{{ tag }}</span
        >
        <span v-if="index < tags.length - 1" class="mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useGeneralData } from "~/store/index";
const generalData = useGeneralData();
const props = defineProps({
  tags: Array,
  required: true,
});

const handleClick = async (index) => {
  if (index === 0) {
    await navigateTo("/");
  } else if (index === 1) {
    generalData.setActiveFilterTag(props.tags[1]);
    await navigateTo("/");
  }
};
</script>
