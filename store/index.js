import { defineStore } from "pinia";

export const useGeneralData = defineStore("generalData", () => {
  const paletteName = ref("kinu-light");
  const activeFilterTag = ref("");
  const filterTagText = ref("for you");
  const location = ref(null);
  // const emitActiveFilterTag = ref(false);

  function setPaletteName(value) {
    paletteName.value = value;
  }
  function setActiveFilterTag(value) {
    activeFilterTag.value = value;
  }
  function setfilterTagText(value) {
    filterTagText.value = value;
  }
  function setLocation(value) {
    location.value = value;
  }
  // watch(activeFilterTag, () => {
  //     emitActiveFilterTag.value = !emitActiveFilterTag.value
  // });
  return {
    paletteName,
    setPaletteName,
    setActiveFilterTag,
    activeFilterTag,
    filterTagText,
    setfilterTagText,
    setLocation,
    location,
  };
});
