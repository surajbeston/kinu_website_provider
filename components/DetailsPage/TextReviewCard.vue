<template>
  <div>
    <div class="flex justify-between items-start">
      <div class="flex gap-3 items-center">
        <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            class="max-w-full"
            src="/images/image_1.jpg"
            alt="user profile"
          />
        </div>
        <div>
          <h2 class="text-[20px] font-['Nexa'] font-bold">Talan Bator</h2>
          <div class="flex">
            <Star v-for="(each, index) in 5" :is-filled="index != 4" />
          </div>
        </div>
      </div>
      <p class="font-['Nexa'] font-normal text-base text-[#A4A4A4]">
        2 days ago
      </p>
    </div>
    <p class="font-['Nexa'] font-normal py-4 text-[color:var(--gray-color-2)]">
      “I got a pair of boots from store X and I’m very satisfied. They are
      high-quality and worth the money. The store also offered free shipping at
      that price so that’s a plus!”
    </p>
    <div class="flex gap-4">
      <img
        v-for="(image, index) in images"
        @click="imageSrcSetter(index)"
        :class="{ 'border-2 border-green-400': index === imgIndex }"
        class="h-[92px] w-[109px] object-cover cursor-pointer"
        :src="image"
        alt="review product image"
      />
    </div>
    <div
      v-show="showFullImage"
      class="w-60 flex justify-center items-center bg-green-400 p-1 mt-6"
    >
      <img class="max-w-full object-contain" :src="images[imgIndex]" alt="" />
    </div>
  </div>
</template>

<script setup>
const showFullImage = ref(false);
const imgIndex = ref(null);
const imageSrcSetter = (index) => {
  imgIndex.value = index;
  showFullImage.value = true;
};
const images = [
  "/images/image_2.jpeg",
  "/images/image_3.png",
  "/images/image_4.jpg",
];
</script>

<style scoped></style>
