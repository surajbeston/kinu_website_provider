<template>
  <div class="my-8">
    <MainPageBanner />
    <MainPageSearchSeaction />
    <MainPageProductSeaction title="Products for you" />
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";
import nuxtStorage from "nuxt-storage";
import generateRandomString from "~/utils/randomKeyGenerator";
const userData = useUserData();
onMounted(() => {
  let userKey;
  // getting userkey
  userKey = nuxtStorage.localStorage.getData("userKey");
  if (!userKey) {
    userKey = generateRandomString();
    // store session key
    nuxtStorage.localStorage.setData("userKey", userKey, 365, "d");
  }
  postLandingPageView(userKey);
});

//  analytics post
const postLandingPageView = async (session_key) => {
  await $fetch(`${apiAuthority}/website/landing-page-view/`, {
    method: "POST",
    body: {
      domain: userData.domainName,
      session_key: session_key,
      website_info: userData.websiteId,
    },
  });
};
</script>

<style scoped></style>
