<template>
  <DetailsPageMainDetail v-if="!showSharePage" />
  <SharePageShare v-else />
</template>

<script setup>
const showSharePage = ref(false);
const url = useRequestURL();

if (url.hostname === "kinu.com.np") {
  showSharePage.value = true;
  definePageMeta({
    layout: "share",
  });
} else {
  console.log("calle dher");
  showSharePage.value = false;
  definePageMeta({
    layout: "default",
  });
}
</script>

<style scoped></style>
