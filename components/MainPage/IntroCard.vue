<template>
  <div
    @click="toggleVideo"
    class="relative max-w-[150px] md:max-w-[268px] h-auto md:h-[344px] rounded-[8px] overflow-hidden cursor-pointer"
  >
    <!-- <img class="h-full w-full" src="images/image_1.jpg" alt="into video" /> -->
    <video loop ref="videoElement" src="/videos/video_4.mp4"></video>
    <img
      v-show="!isPlaying"
      class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      src="~assets/icons/play_button.svg"
      alt="play"
    />
    <p
      class="absolute bottom-4 left-4 font-semibold text-[#0B121F] rounded-[8px] text-[10px] bg-white/70 px-4"
    >
      badu is here
    </p>
  </div>
</template>

<script setup>
const videoElement = ref(null);
const isPlaying = ref(false);
const toggleVideo = () => {
  if (videoElement.value) {
    if (videoElement.value.paused) {
      videoElement.value.play();
      isPlaying.value = true;
    } else {
      videoElement.value.pause();
      isPlaying.value = false;
    }
  }
};
</script>

<style scoped></style>
