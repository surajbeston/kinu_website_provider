<template>
  <div class="w-full md:w-[40%]">
    <swiper
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="[Thumbs]"
      class="mySwiper2"
    >
      <swiper-slide v-for="(media, index) in medias" :key="index">
        <div class="aspect-ratio-container">
          <div class="aspect-ratio-content">
            <img
              class="max-w-full max-h-full"
              v-if="media.image"
              :src="`https://api.kinu.app${media.image}`"
              alt="product image"
            />

            <details-page-video-container
              v-else-if="media.format_set.length > 0"
              :videoSrc="`https://api.kinu.app${media.format_set[0].file}`"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="6"
      :watchSlidesProgress="true"
      :modules="[Thumbs]"
      class="mySwiper"
    >
      <swiper-slide v-for="(media, index) in medias" :key="index">
        <img
          class="!w-[80px] !h-[80px] object-cover rounded-xl cursor-pointer"
          v-if="media.image"
          :src="`https://api.kinu.app${media.image}`"
          alt="product image"
        />
        <video
          class="!w-[80px] !h-[80px] object-cover overflow-hidden rounded-xl cursor-pointer border border-green-400"
          v-else-if="media.format_set.length > 0"
          :videoSrc="`https://api.kinu.app${media.format_set[0].thumbnail}`"
        ></video>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs } from "swiper/modules";

import "swiper/css";
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const props = defineProps({
  medias: Array,
});

// const medias = [
//   {
//     src: "/images/image_1.jpg",
//     type: "img",
//   },
//   {
//     src: "/videos/video_2.mp4",
//     type: "video",
//   },
//   {
//     src: "/images/image_2.jpeg",
//     type: "img",
//   },
//   {
//     src: "/images/image_4.jpg",
//     type: "img",
//   },
//   {
//     src: "/videos/video_1.mp4",
//     type: "video",
//   },
// ];
</script>

<style scoped>
.mySwiper2 {
  width: 100% !important;
  height: 568px !important;
  max-height: 604px !important;
  background: rgb(209 213 219 /1);
}
@media screen and (min-width: 768px) {
  .mySwiper2 {
    height: 100% !important;
  }
}
.mySwiper {
  margin-top: 1rem;
  width: 100% !important;
  height: 100px;
}

.aspect-ratio-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.aspect-ratio-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain; /* Maintain aspect ratio without cropping */
}
img,
video {
  max-width: 100%;
  max-height: 100%;
}
</style>
