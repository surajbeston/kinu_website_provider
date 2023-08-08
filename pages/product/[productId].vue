<template>
  <div>
    <DetailsPageBreadCumb :tags="breadcrumbTags" />
    <div class="flex gap-10">
      <DetailsPageImageSlider />
      <DetailsPageProductInfo @openModal="showModal = true" />
    </div>
    <div
      class="flex justify-center items-center gap-14 my-6 text-[color:var(--gray-color-1)] font-['Nexa'] font-[400] text-[24px]"
    >
      <button
        @click="changeTab('Descriptions')"
        :class="{ 'text-black': activeTab === 'Descriptions' }"
        class="cursor-pointer"
      >
        Descriptions
      </button>
      <button
        @click="changeTab('Additional Informations')"
        :class="{ 'text-black': activeTab === 'Additional Informations' }"
        class="cursor-pointer"
      >
        Additional Informations
      </button>
      <button
        @click="changeTab('Reviews')"
        :class="{ 'text-black': activeTab === 'Reviews' }"
        class="cursor-pointer"
      >
        Reviews[5]
      </button>
    </div>
    <div
      v-if="showModal"
      class="bg-black/40 flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-50"
    >
      <DetailsPageModalForm @closeModal="showModal = false" />
    </div>
    <DetailsPageReviewCard />
  </div>
</template>

<script setup>
const route = useRoute();
const activeTab = ref("Reviews");
const showModal = ref(false);

const changeTab = (tab) => {
  activeTab.value = tab;
};
const breadcrumbTags = ref(["Home", "Category", "Subcategory", "Current Page"]);
console.log(route.params.productId);
</script>

<style scoped></style>
