<template>
  <div class="">
    <DetailsPageBreadCumb :tags="breadcrumbTags" />
    <div
      class="flex flex-col mt-10 md:mt-auto md:flex-row gap-10 justify-between border-b pb-10"
    >
      <DetailsPageImageSlider :medias="medias" />
      <DetailsPageProductInfo
        :product="product"
        @openModal="showModal = true"
      />
    </div>
    <!-- <div
      class="hidden justify-center items-center gap-14 my-6 text-[color:var(--gray-color-1)] font-['Nexa'] font-[400] text-[24px]"
    >
      <button
        @click="changeTab('Descriptions')"
        :class="{ 'text-[color:var(--black)]': activeTab === 'Descriptions' }"
        class="cursor-pointer"
      >
        Descriptions
      </button>
      <button
        @click="changeTab('Additional Informations')"
        :class="{
          'text-[color:var(--black)]': activeTab === 'Additional Informations',
        }"
        class="cursor-pointer"
      >
        Additional Informations
      </button>
      <button
        @click="changeTab('Reviews')"
        :class="{ 'text-[color:var(--black)]': activeTab === 'Reviews' }"
        class="cursor-pointer"
      >
        Reviews[5]
      </button>
    </div> -->
    <div
      v-if="showModal"
      class="bg-black/40 flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-50"
    >
      <DetailsPageModalForm @closeModal="showModal = false" />
    </div>
    <!-- <section class="my-10 hidden">
      <h4 class="text-[24px] font-['Nexa'] font-bold">Video Reviews</h4>
      <div class="flex gap-4 overflow-x-scroll scrollbar-hidden">
        <DetailsPageReviewCard v-for="(each, index) in 10" :key="index" />
      </div>
    </section>
    <section class="hidden">
      <div class="flex justify-between items-center">
        <h4 class="text-[24px] font-['Nexa'] font-bold">Text Reviews</h4>
        <p
          class="text-base font-['Poppins'] font-semibold underline underline-offset-4 cursor-pointer"
        >
          View all
        </p>
      </div>
      <div class="my-6">
        <DetailsPageTextReviewCard />
      </div>
    </section> -->
    <MainPageProductSeaction
      title="You might also like"
      :seller_products="products"
    />
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";
import removeMarkdown from "~/utils/markDownRemove";
import nuxtStorage from "nuxt-storage";
import generateRandomString from "~/utils/randomKeyGenerator";
// initilization
const url = useRequestURL();
const userStore = useUserData();
const route = useRoute();

// refs
// const activeTab = ref("Reviews");
const showModal = ref(false);
const products = ref([]);
const breadcrumbTags = ref(["Home"]);

products.value = userStore.seller_products;

const medias = computed({
  get() {
    return [...product.value.video_set, ...product.value.image_set];
  },
});

// const changeTab = (tab) => {
//   activeTab.value = tab;
// };

const { data: product } = await useFetch(
  `${apiAuthority}/api/product/${route.params.productId}/`
);

// setting breadcrumb values
breadcrumbTags.value.push(product.value.category.name);
breadcrumbTags.value.push(product.value.name);

// analytics
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

const postLandingPageView = async (session_key) => {
  const response = await $fetch(`${apiAuthority}/website/product-view/`, {
    method: "POST",
    body: {
      domain: userStore.domainName,
      session_key: session_key,
      website_info: userStore.websiteId,
      product: product.value.id,
    },
  });
};

// meta tags
const plainText = removeMarkdown(product.value.description);

useHead({
  title: product.value.name,

  meta: [
    {
      name: "description",
      content: plainText,
    },
    {
      name: "keywords",
      content: `${product.value.category.name},${product.value.name},${product.value.seller.name}`,
    },
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: product.value.name,
    },
    {
      property: "og:description",
      content: plainText,
    },
    {
      property: "og:image",
      content: apiAuthority + product.value.image_set[0].image,
    },
    {
      property: "og:url",
      content: url.href,
    },
    {
      name: "twitter:card",
      content: plainText,
    },
    {
      name: "twitter:title",
      content: product.value.name,
    },
    {
      name: "twitter:description",
      content: plainText,
    },
    {
      name: "twitter:image",
      content: apiAuthority + product.value.image_set[0].image,
    },
    { rel: "canonical", href: url.href },
    { name: "language", content: "en" },
  ],
});
</script>

<style scoped></style>
