<template>
  <div
    v-show="!generalData.activeFilterTag"
    @click="toggleVideo"
    class="relative max-w-[150px] flex justify-center items-center md:max-w-[268px] h-[229px] md:h-[344px] rounded-[8px] overflow-hidden cursor-pointer border border-green-400 bg_gradient"
  >
    <video ref="videoElement" :src="videoSrc"></video>
    <img
      v-show="!isPlaying"
      class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      src="~assets/icons/play_button.svg"
      alt="play"
    />
    <p
      class="absolute bottom-4 left-4 max-w-[90%] font-semibold text-[color:var(--default-text)] rounded-[8px] text-[10px] bg-[color:var(--white-2)] px-4"
    >
      {{ introText }}
    </p>
    <svg
      v-show="isPlaying"
      class="absolute top-3 right-3 fill-white cursor-pointer w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
      @click.stop="toggleFullScreen"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 25V16.0714H3.57143V21.4286H8.92857V25H0ZM0 8.92857V0H8.92857V3.57143H3.57143V8.92857H0ZM16.0714 25V21.4286H21.4286V16.0714H25V25H16.0714ZM21.4286 8.92857V3.57143H16.0714V0H25V8.92857H21.4286Z"
      />
    </svg>
  </div>
</template>

<script setup>
import { useGeneralData } from "~/store/index";
const generalData = useGeneralData();
const videoElement = ref(null);
const isPlaying = ref(false);
const props = defineProps({
  videoSrc: String,
  introText: String,
});

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
// Listen to the 'ended' event of the video element
const handleVideoEnded = () => {
  isPlaying.value = false;
};

// Attach the event listener when the component is mounted
onMounted(() => {
  if (videoElement.value) {
    videoElement.value.addEventListener("ended", handleVideoEnded);
  }
});

// Remove the event listener when the component is unmounted
onUnmounted(() => {
  if (videoElement.value) {
    videoElement.value.removeEventListener("ended", handleVideoEnded);
  }
});
const toggleFullScreen = () => {
  // videoElement.value.requestFullscreen();
  if (videoElement.value) {
    if (videoElement.value.requestFullscreen) {
      videoElement.value.requestFullscreen();
    } else if (videoElement.value.mozRequestFullScreen) {
      videoElement.value.mozRequestFullScreen();
    } else if (videoElement.value.webkitRequestFullscreen) {
      videoElement.value.webkitRequestFullscreen();
    } else if (videoElement.value.msRequestFullscreen) {
      videoElement.value.msRequestFullscreen();
    }
  }
};
</script>

<style scoped>
.bg_gradient {
  background-image: linear-gradient(
    to right,
    #6f838e,
    #373d60 400px,
    #6f838e 800px
  );
  background-size: 800px 100%;
  background-position: 50% 100%;
  background-repeat: no-repeat;
}
</style>
