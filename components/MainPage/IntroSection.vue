<template>
  <div class="flex flex-col md:flex-row gap-8 my-14">
    <div v-if="userStore.sellerVideo.length > 0">
      <h1
        :style="{ color: `var(--${generalData.paletteName}-text)` }"
        class="text-[18px] md:text-[24px] py-2 font-['Nexa'] font-bold"
      >
        Our Intro
      </h1>
      <MainPageIntroCard
        :videoSrc="userStore.sellerVideo[0].sellerformat_set[0].file"
        :introText="userStore.sellerVideo[0].text"
      />
    </div>
    <div class="w-full overflow-hidden rounded-[8px]">
      <div class="flex justify-between items-center">
        <p
          :style="{ color: `var(--${generalData.paletteName}-text)` }"
          class="font-['Nexa'] font-bold text-base"
        >
          {{ formattedLocation }}
        </p>

        <h1
          :style="{ color: `var(--${generalData.paletteName}-text)` }"
          class="text-[18px] md:text-[24px] py-2 font-['Nexa'] font-bold text-end"
        >
          Visit Us
        </h1>
      </div>
      <div class="h-[345px] w-full rounded-[8px] overflow-hidden">
        <Map
          :paletteName="generalData.paletteName"
          :lat="generalData.location.latitude"
          :lon="generalData.location.longitude"
        />
      </div>
    </div>
    <!-- <div
      :style="{
        color: `#250248`,
        backgroundColor: `var(--${generalData.paletteName}-light)`,
      }"
      class="text-center w-full flex flex-col justify-center items-center rounded-[8px] shadow-sm px-5 leading-[1.2]"
    >
      <h1 style="font-family: Abril Fatface" class="text-[45px] font-normal">
        Best footwear in the town Lorem ipsum, dolor sit amet consectetur
      </h1>

      <button
        :style="{
          color: `var(--${generalData.paletteName}-light)`,
          backgroundColor: `var(--${generalData.paletteName}-cta)`,
        }"
        class="px-16 font-bold text-lg shadow-xl py-3 rounded-2xl hover:scale-[1.02] duration-300 ease-in-out mt-10"
      >
        View location
      </button>
    </div> -->
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";
import { useGeneralData } from "~/store/index";
const generalData = useGeneralData();
const userStore = useUserData();
const formattedLocation = ref("");
// console.log(userStore.sellerVideo);

const getSellerVideo = async () => {
  const response = await $fetch(`${apiAuthority}/api/seller-video/`, {
    query: {
      seller: userStore.sellerId,
    },
  });
  // console.log(response);
  userStore.setSellerVideo(response.results);
};
if (generalData.location) {
  formattedLocation.value = locationFormatter(generalData.location);
}

onMounted(() => {
  getSellerVideo();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
</style>
