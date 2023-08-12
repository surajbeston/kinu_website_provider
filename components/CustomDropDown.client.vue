<template>
  <div class="relative w-[55px] md:w-[100px]">
    <div class="font-['Poppins'] text-[10px] md:text-lg font-semibold">
      {{ selectedOption }}
    </div>
    <Transition name="fade">
      <div
        v-if="showOptions"
        class="absolute top-[1.3rem] md:top-[2.05rem] bg-[color:var(--white)] w-[128px] md:w-[225px] -left-[2.9rem] md:-left-[5.4rem] border rounded-[5px] z-30"
      >
        <div
          v-for="option in filterOptions"
          :key="option"
          class="py-2 px-5 text-[10px] md:text-base hover:bg-gray-200"
          :class="{
            'bg-gray-200  text-[color:var(--black)] font-bold ':
              selectedOption == option,
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
