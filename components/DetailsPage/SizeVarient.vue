<template>
  <p
    :class="{ 'bg-[#FBEBB5]': size.isSelected }"
    class="text-[9px] md:text-[14px] text-[#000000] font-['Poppins'] font-normal border px-4 rounded-[6px] py-2 text-center shadow-sm"
  >
    {{ size.size }}
  </p>
</template>

<script setup>
defineProps({
  size: Object,
});
</script>

<style scoped></style>
