<template>
  <div class="my-8">
    <MainPageBanner />
    <MainPageSearchSeaction />

    <MainPageProductSeaction />
    <MainPageIntroSection />
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";
import { useGeneralData } from "~/store/index";
import nuxtStorage from "nuxt-storage";
import generateRandomString from "~/utils/randomKeyGenerator";
const userData = useUserData();
const generalData = useGeneralData();
const url = useRequestURL();

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
// console.log(userData.sellerInfo);

const keywords = userData.sellerInfo.seller.categories.map((each) => each.name);
const commaSeparatedString = keywords.join(", ");

useHead({
  title: `${userData.sellerInfo.seller.name} - Home Page`,

  meta: [
    {
      name: "description",
      content: userData.sellerInfo.seller.description,
    },
    {
      name: "keywords",
      content: `${commaSeparatedString},${userData.sellerInfo.seller.name}, ${userData.sellerInfo.location}`,
    },
    { rel: "canonical", href: url.href },
    { name: "language", content: "en" },
    {
      property: "og:image",
      content: apiAuthority + userData.sellerInfo.mobile_image,
    },
  ],
});
</script>

<style scoped></style>
