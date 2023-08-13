<template>
  <div class="w-full h-full">
    <LMap ref="map" :zoom="zoom" :center="[lat, lon]">
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
  location: String,
});
const lat = ref(27.700769);
const lon = ref(85.30014);

const zoom = ref(15);

// geocoding  url
const response = await fetch(
  ` https://nominatim.openstreetmap.org/search.php?q=${encodeURIComponent(
    props.location
  )}&format=jsonv2`
);
const data = await response.json();
lat.value = data[0].lat;
lon.value = data[0].lon;
</script>

<style></style>
