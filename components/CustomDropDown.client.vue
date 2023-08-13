<template>
  <div class="relative w-[65px] md:w-[110px]">
    <div
      :style="{ color: `var(--${generalData.paletteName}-text)` }"
      class="font-['Poppins'] text-[10px] md:text-lg font-semibold"
    >
      {{ selectedOption }}
    </div>
    <Transition name="fade">
      <div
        v-if="showOptions"
        class="absolute top-[1.3rem] md:top-[2.05rem] bg-[color:var(--white)] w-[140px] md:w-[239px] -left-[3.1rem] md:-left-[5.65rem] border rounded-[5px] z-30"
      >
        <div
          v-for="option in filterOptions"
          :key="option"
          class="py-2 px-5 text-[10px] text-[color:var(--black)] md:text-base hover:bg-gray-200"
          :class="{
            'bg-gray-200  font-semibold ': selectedOption == option,
          }"
          @click.stop="changeOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";

import { useGeneralData } from "~/store/index";
const generalData = useGeneralData();
const userStore = useUserData();
const emit = defineEmits(["update"]);

defineProps({
  showOptions: Boolean,
  selectedOption: String,
  filterOptions: Array,
});

const changeOption = (option) => {
  emit("update", option);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
