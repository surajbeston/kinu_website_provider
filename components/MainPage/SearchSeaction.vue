<template>
  <div>
    <div class="my-5 w-full gap-4 flex">
      <input
        class="w-full indent-6 md:indent-8 md:py-3 outline-none border rounded-[16px] text-[12px] md:text-[16px] font-['Nexa'] font-normal border-black/60 bg-[color:var(--purple-color-1)]"
        type="text"
        placeholder="Search here"
      />
      <svg
        class="cursor-pointer"
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.206 38.2968L31.5929 30.6837M31.5929 30.6837C32.8951 29.3814 33.9281 27.8354 34.6329 26.1339C35.3377 24.4325 35.7004 22.6088 35.7004 20.7672C35.7004 18.9255 35.3377 17.1019 34.6329 15.4004C33.9281 13.6989 32.8951 12.1529 31.5929 10.8507C30.2906 9.54843 28.7446 8.51542 27.0432 7.81065C25.3417 7.10588 23.5181 6.74313 21.6764 6.74313C19.8347 6.74313 18.0111 7.10588 16.3096 7.81065C14.6081 8.51542 13.0621 9.54843 11.7599 10.8507C9.12987 13.4807 7.65234 17.0478 7.65234 20.7672C7.65234 24.4866 9.12987 28.0537 11.7599 30.6837C14.3899 33.3137 17.957 34.7912 21.6764 34.7912C25.3958 34.7912 28.9629 33.3137 31.5929 30.6837Z"
          stroke="#0B121F"
          stroke-width="1.75296"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="flex gap-3 md:gap-6 justify-start md:justify-center flex-wrap">
      <MainPageFilterTag
        @click="handleFilterTag(tag)"
        v-for="tag in filterTags"
        :tag="tag"
        :key="tag"
      />
    </div>
  </div>
</template>

<script setup>
const filterTags = [
  "Trending",
  "New launch",
  "Men's wears",
  "Women's wears",
  "Summer wears",
  "Branded",
  "Kids",
];
function handleFilterTag(params) {
  console.log(params);
}
</script>

<style scoped></style>
