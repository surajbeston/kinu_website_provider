<template>
  <p
    :class="{ 'bg-[color:var(--light-yellow)]': size.isSelected }"
    class="text-[9px] md:text-[14px] text-[color:Var(--black)] font-['Poppins'] font-normal border px-4 rounded-[6px] py-2 text-center shadow-sm"
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
