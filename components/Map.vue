<template>
  <div class="w-full h-full" id="map"></div>
</template>

<script setup>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const props = defineProps({
  location: String,
});

const map = ref("");
const center = ref([85.30014, 27.700769]);
const config = useRuntimeConfig();

// geocoding  url
const response = await fetch(
  ` https://nominatim.openstreetmap.org/search.php?q=${encodeURIComponent(
    props.location
  )}&format=jsonv2`
);
const data = await response.json();
center.value = [data[0].lon, data[0].lat];
console.log(data[0]);
// center.value = data.features[0].center;

// map creation
const createMap = async () => {
  try {
    mapboxgl.accessToken = config.public.MAPBOX_API_KEY;
    map.value = new mapboxgl.Map({
      attributionControl: false,
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v12?optimize=true",
      center: center.value,
      zoom: 10,
    });
    const marker = new mapboxgl.Marker({
      color: "#ff6c19",
    })
      .setLngLat(center.value)
      .addTo(map.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => createMap());
</script>

<style>
.mapboxgl-ctrl-attrib-inner {
  display: none !important;
}

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
