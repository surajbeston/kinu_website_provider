<template>
  <div class="my-8">
    <MainPageBanner />
    <MainPageSearchSeaction />
    <MainPageProductSeaction
      title="Products for you"
      :seller_products="userStore.seller_products"
    />
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";

const userStore = useUserData();
</script>

<style scoped></style>
