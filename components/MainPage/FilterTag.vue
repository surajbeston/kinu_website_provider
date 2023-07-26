<template>

        <p  class="border border-black/60 rounded-xl p-[10px] cursor-pointer">{{ tag }}</p>
   
</template>

<script setup>
    const props = defineProps({
        tag:String,
    })
</script>

<style  scoped>

</style>