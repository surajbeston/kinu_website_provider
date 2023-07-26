<template>
  <div class="w-[50%]">
    <swiper
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="[Thumbs]"
      class="mySwiper2"
    >
      <swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
      ><swiper-slide
        ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
      /></swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="8"
      :watchSlidesProgress="true"
      :modules="[Thumbs]"
      class="mySwiper"
    >
      <swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
      ><swiper-slide
        ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Thumbs } from "swiper/modules";

let thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper = swiper;
};
</script>

<style scoped>
.mySwiper2 {
  width: 100%;
}
.mySwiper {
  margin-top: 1rem;
  width: 100% !important;
}
</style>
