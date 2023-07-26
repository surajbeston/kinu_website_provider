<template>
    <swiper  :autoplay="{
        delay: 5500,
        disableOnInteraction: false,
    }"  :modules="[Autoplay]" class="mySwiper">
        <SwiperSlide v-for="each in banners" :key="each">
            <img class="w-full h-[448px] " :src="each" alt="">
        </SwiperSlide>
    </swiper>
</template>
<script setup>
// Import Swiper styles
import 'swiper/css';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { Autoplay} from 'swiper/modules';

const banners = [
    "images/banner_!.jpg",
    "images/banner_2.jpg",
    "images/banner.png",
]

</script>
