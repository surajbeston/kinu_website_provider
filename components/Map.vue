<template>
  <div class="w-full h-full">
    <LMap ref="map" :zoom="15" :center="[lat, lon]">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="[lat, lon]"> </LMarker>
    </LMap>
  </div>
</template>

<script setup>
const props = defineProps({
  lat: Number,
  log: Number,
});
// console.log(props.location);
const lat = ref(27.700769);
const lon = ref(85.30014);

console.log(props.lat, props.log);

// geocoding  url
// const response = await fetch(
//   ` https://nominatim.openstreetmap.org/search.php?q=${encodeURIComponent(
//     props.location
//   )}&format=jsonv2`
// );

// const data = await response.json();
// if (data.length > 0) {
//   lat.value = data[0].lat;
//   lon.value = data[0].lon;
// }
</script>

<style></style>
