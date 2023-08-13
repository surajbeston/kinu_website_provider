import { defineStore } from "pinia";

export const useGeneralData = defineStore("generalData", () => {
  const paletteName = ref("default");
  const activeFilterTag = ref("");

  function setPaletteName(value) {
    paletteName.value = value;
  }
  function setActiveFilterTag(value) {
    activeFilterTag.value = value;
  }

  return {
    paletteName,
    setPaletteName,
    setActiveFilterTag,
    activeFilterTag,
  };
});
