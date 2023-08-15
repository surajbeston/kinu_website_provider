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
        class="w-full h-[224px] hidden md:block md:h-[448px]"
        :src="apiAuthority + each.src"
        alt=""
      />
      <nuxt-img
        class="w-full h-[224px] md:h-[448px] md:hidden"
        :src="apiAuthority + each.mblSrc"
        alt=""
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
