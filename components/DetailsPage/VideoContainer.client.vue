<template>
  <div @click="toggleVideo" class="relative cursor-pointer">
    <video
      ref="videoElement"
      loop
      class="max-w-full max-h-full"
      :src="videoSrc"
    ></video>
    <svg
      v-show="!isPlaying"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      width="55"
      height="54"
      viewBox="0 0 55 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="pointer-events-auto"
        cx="27.5587"
        cy="27"
        r="27"
        fill="black"
        fill-opacity="0.5"
      />
      <path
        class="pointer-events-auto"
        d="M37.5199 25.1486L25.0266 17.3481C24.6867 17.1349 24.2946 17.0152 23.8913 17.0014C23.488 16.9875 23.0884 17.0801 22.7341 17.2695C22.3798 17.4588 22.0838 17.738 21.877 18.0778C21.6703 18.4176 21.5604 18.8056 21.5587 19.2013V34.8023C21.5596 35.196 21.6683 35.5822 21.8734 35.9207C22.0785 36.2591 22.3724 36.5374 22.7246 36.7264C23.0798 36.9177 23.4809 37.0118 23.8859 36.9988C24.2909 36.9859 24.6849 36.8663 25.0266 36.6528L37.5199 28.8523C37.8382 28.6542 38.1003 28.3804 38.2819 28.0564C38.4635 27.7324 38.5587 27.3687 38.5587 26.999C38.5587 26.6293 38.4635 26.2656 38.2819 25.9416C38.1003 25.6177 37.8382 25.3439 37.5199 25.1458V25.1486Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  videoSrc: String,
});
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
