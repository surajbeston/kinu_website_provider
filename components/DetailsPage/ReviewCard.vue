<template>
  <div class="relative w-max my-5">
    <div
      @click="toggleVideo"
      class="w-[234px] h-[357px] bg-green-400 rounded-[15px] overflow-hidden"
    >
      <video
        ref="videoElement"
        class="w-full max-h-full object-cover"
        src="/videos/video_2.mp4"
      ></video>
      <svg
        v-if="!isPlaying"
        class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20"
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7939 41.1367C9.43507 41.1367 0.225586 31.9272 0.225586 20.5684C0.225586 9.20948 9.43507 0 20.7939 0C32.1528 0 41.3623 9.20948 41.3623 20.5684C41.3623 31.9272 32.1528 41.1367 20.7939 41.1367ZM15.6519 12.7194V28.4173L28.6583 20.5684L15.6519 12.7194Z"
          fill="white"
        />
      </svg>
    </div>
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
