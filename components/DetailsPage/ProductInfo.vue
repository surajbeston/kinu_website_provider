<template>
  <div>
    <h1>Chino pant</h1>
    <h3>Rs.2000.00</h3>
    <div class="flex gap-6 items-center">
      <div class="flex gap-1">
        <Star v-for="each in 5" :isFilled="true" />
      </div>
      <p class="border-l-2 pl-8">5 customers reviews</p>
    </div>
    <p>
      The best selling Planet Boxy Tee is a one size, season-less, staple piece
      for any wardrobe! The beloved Pima Cotton washes and wears well making
      this a great investment piece that feels as good as it looks.
    </p>
    <div>
      <p>Size</p>
      <div class="flex gap-8">
        <DetailsPageSizeVarient
          @click="handleSizeSelect(index)"
          class="cursor-pointer"
          v-for="(size, index) in sizeVarients"
          :size="size"
        />
      </div>
    </div>
    <div>
      <p>Color</p>
      <div class="flex gap-4">
        <DetailsPageColorVarient
          @click="handleColorSelect(index)"
          class="cursor-pointer"
          v-for="(color, index) in colorVarients"
          :color="color"
        />
      </div>
    </div>
    <div>
      <div class="flex border bg-white w-max px-4">
        <p>-</p>
        <input
          class="border-none outline-none px-4 max-w-[60px]"
          type="number"
          inputmode="numeric"
        />
        <p>+</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const sizeVarients = ref([
  { size: "S", isSelected: false },
  { size: "M", isSelected: true },
  { size: "L", isSelected: false },
  { size: "XL", isSelected: false },
  { size: "XXL", isSelected: false },
]);
const colorVarients = ref([
  {
    bgColor: "#816DFA",
    isSelected: true,
  },
  {
    bgColor: "#000000",
    isSelected: false,
  },
  {
    bgColor: "#CDBA7B",
    isSelected: false,
  },
]);
const handleSizeSelect = (index) => {
  sizeVarients.value.forEach((size, i) => {
    sizeVarients.value[i].isSelected = i === index;
  });
};

const handleColorSelect = (index) => {
  colorVarients.value.forEach((color, i) => {
    colorVarients.value[i].isSelected = i === index;
  });
};
</script>

<style scoped>
/* Remove arrows from the number input */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
