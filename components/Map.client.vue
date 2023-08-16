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
  lon: Number,
});
// console.log(props.location);
let lat = ref(27.700769);
let lon = ref(85.30014);

onMounted(() => {
  lat.value = props.lat;
  lon.value = props.lon;
});

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

<style>
.leaflet-control-attribution.leaflet-control {
  display: none;
}
</style>
