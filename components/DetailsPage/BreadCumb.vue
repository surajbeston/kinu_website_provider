<template>
  <div class="flex text-sm bg-white my-10 py-10 pl-20">
    <ul class="flex">
      <li v-for="(tag, index) in tags" :key="index" class="flex items-center">
        <span
          class="text-gray-500 text-base text-[color:var(--gray-color-1)]"
          >{{ tag }}</span
        >
        <span v-if="index < tags.length - 1" class="mx-4 text- text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  tags: Array,
  required: true,
});
</script>
