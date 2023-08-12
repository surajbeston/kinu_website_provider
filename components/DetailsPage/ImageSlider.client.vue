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
        <div class="relative" v-else-if="media.format_set.length > 0">
          <video
            class="!w-[80px] !h-[80px] object-cover overflow-hidden rounded-xl cursor-pointer border border-green-400"
            :videoSrc="`https://api.kinu.app${media.format_set[0].thumbnail}`"
          ></video>
          <svg
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2477 5.73841L2.94888 0.533227C2.72305 0.390994 2.46261 0.311092 2.19473 0.301865C1.92686 0.292638 1.66138 0.354424 1.42602 0.480771C1.19066 0.607118 0.994048 0.793393 0.856711 1.02015C0.719375 1.2469 0.646351 1.50582 0.645264 1.76986V12.1802C0.645875 12.4429 0.718063 12.7007 0.854291 12.9265C0.990519 13.1523 1.18579 13.338 1.41972 13.4641C1.65566 13.5918 1.9221 13.6546 2.19113 13.6459C2.46016 13.6373 2.72189 13.5575 2.94888 13.415L11.2477 8.20983C11.4592 8.07763 11.6333 7.89496 11.7539 7.67878C11.8746 7.46259 11.9378 7.21989 11.9378 6.97319C11.9378 6.72649 11.8746 6.48379 11.7539 6.2676C11.6333 6.05142 11.4592 5.86875 11.2477 5.73655V5.73841Z"
              fill="#0D0D0D"
            />
          </svg>
        </div>
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
console.log(props.medias);

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
  height: 588px !important;
  max-height: 604px !important;
  background-image: linear-gradient(
    to right,
    #6f838e,
    #373d60 400px,
    #6f838e 800px
  );
  background-size: 800px 100%;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
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
  /* position: absolute;
  top: 0;
  left: 0; */
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
