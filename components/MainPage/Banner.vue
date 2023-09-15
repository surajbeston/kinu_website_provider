<template>
  <swiper
    :autoplay="{
      delay: 5500,
      disableOnInteraction: false,
    }"
    :modules="[Autoplay]"
    class="mySwiper"
  >
    <SwiperSlide v-for="each in banners" :key="each">
      <nuxt-img
        class="w-full hidden md:block max-h-[450px]"
        :src="apiAuthority + each.src"
        alt=""
        width="100%"
      />
      <nuxt-img
        class="w-full md:hidden"
        :src="apiAuthority + each.mblSrc"
        alt=""
        width="100%"
      />
    </SwiperSlide>
  </swiper>
</template>
<script setup>
import { useUserData } from "~~/store/userData";

const userStore = useUserData();
// Import Swiper styles
import "swiper/css";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import required modules
import { Autoplay } from "swiper/modules";

const banners = ref([]);

banners.value = [
  {
    src: userStore.sellerInfo.image,
    mblSrc: userStore.sellerInfo.mobile_image,
  },
];
</script>
