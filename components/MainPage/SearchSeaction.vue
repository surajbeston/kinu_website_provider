<template>
  <div>
    <div class="my-5 w-[90%]">
      <input class="w-full" type="text" placeholder="Search here" />

    </div>
    <div class="flex gap-6 justify-center flex-wrap">
        <MainPageFilterTag @click="handleFilterTag(tag)" v-for="tag in filterTags" :tag="tag" :key="tag"/>
    </div>
  </div>
</template>

<script setup>
const filterTags = ["Trending","New launch","Men's wears","Women's wears","Summer wears","Branded","Kids"];
function handleFilterTag(params) {
  console.log(params);
  
}
</script>

<style scoped></style>
