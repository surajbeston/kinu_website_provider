<!-- components/DynamicCarousel.vue -->
<template>
  <div class="dynamic-carousel">
    <!-- Main carousel -->
    <div class="main-carousel swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in carouselItems"
          :key="index"
          class="swiper-slide"
          :class="{ 'video-slide': item.type === 'video' }"
        >
          <div v-if="item.type === 'image'" class="carousel-item">
            <img :src="item.source" alt="Image" />
          </div>
          <div v-else-if="item.type === 'video'" class="carousel-item">
            <!-- Embedded video player, use your preferred video player here -->
            <video controls>
              <source :src="item.source" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>

    <!-- Thumbs carousel -->
    <div class="thumbs-carousel swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in carouselItems"
          :key="index"
          class="swiper-slide"
          @click="slideTo(index)"
        >
          <div class="thumb">
            <img :src="item.thumb" alt="Thumb" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {
    return {
      carouselItems: [
        {
          type: "image",
          source:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
        },
        {
          type: "video",
          source:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          thumb:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
        },
        {
          type: "video",
          source:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          thumb:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
        },
        // Add more items as needed
      ],
      mainSwiper: null,
      thumbsSwiper: null,
    };
  },
  mounted() {
    // Initialize main carousel
    this.mainSwiper = new Swiper(".main-carousel", {
      direction: "horizontal",
      loop: true,
      effect: "fade", // You can change this effect if you want a different transition
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: {
          el: ".thumbs-carousel",
          direction: "vertical",
          slidesPerView: "auto",
          spaceBetween: 10,
        },
      },
    });
  },
  methods: {
    slideTo(index) {
      // When a thumb is clicked, slide to the corresponding index in the main carousel
      this.mainSwiper.slideTo(index);
    },
  },
};
</script>

<style>
/* Add your custom styles for the carousel here */

/* Main carousel */
.main-carousel {
  width: 100%;
  height: 400px; /* Customize the height as needed */
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.carousel-item img,
.carousel-item video {
  max-width: 100%;
  max-height: 100%;
}

/* Thumb carousel */
.thumbs-carousel {
  width: 100%;
  margin-top: 10px;
}

.thumb {
  cursor: pointer;
  width: 100px; /* Customize the thumb width */
  height: 60px; /* Customize the thumb height */
  overflow: hidden;
  border: 1px solid #ccc; /* Customize the thumb border color */
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Video slide specific styles */
.video-slide {
  background-color: #000; /* Customize the background color for video slides */
}
</style>
