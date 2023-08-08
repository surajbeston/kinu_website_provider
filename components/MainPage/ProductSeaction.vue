<template>
  <div class="my-8">
    <div class="flex justify-between items-center">
      <h3
        class="text-[12px] md:text-[24px] text-[#1E1E1E] font-normal font-['Nexa']"
      >
        Products for you
      </h3>
      <div
        class="flex items-center gap-1 md:gap-3 border px-2 md:px-3 py-1 cursor-pointer text-[8px] md:text-lg font-['Poppins'] rounded-[5px] md:rounded-[10px] border-black/60"
      >
        <p class="font-normal">sort by:</p>
        <select
          class="outline-none md:min-w-[100px] bg-transparent cursor-pointer font-semibold"
          name=""
          id=""
        >
          <option value="Relevance">Relevance</option>
          <option value="High">Low To High</option>
          <option value="To Low">Hight To Low</option>
        </select>
        <!-- <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.173 0.595325L5.80883 4.95002L1.44462 0.595325L0.103983 1.93596L5.80883 7.64081L11.5137 1.93596L10.173 0.595325Z"
            fill="#4A4B57"
          />
        </svg> -->
      </div>
    </div>
    <div class="grid gap-6 w-full my-8 grip_section">
      <MainPageIntroCard />
      <MainPageProductCard @click="handleNavigation(each)" v-for="each in 10" />
    </div>
  </div>
</template>

<script setup>
const handleNavigation = async (each) => {
  await navigateTo(`/product/${each}`);
};
</script>

<style scoped>
.grip_section {
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
}
@media screen and (min-width: 768px) {
  .grip_section {
    grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  }
}
</style>
