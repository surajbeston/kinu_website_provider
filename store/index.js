import { defineStore } from "pinia";

export const useGeneralData = defineStore("generalData", () => {
  const paletteName = ref("default");
  const activeFilterTag = ref("");
  const filterTagText = ref("for you");

  function setPaletteName(value) {
    paletteName.value = value;
  }
  function setActiveFilterTag(value) {
    activeFilterTag.value = value;
  }
  function setfilterTagText(value) {
    filterTagText.value = value;
  }

  return {
    paletteName,
    setPaletteName,
    setActiveFilterTag,
    activeFilterTag,
    filterTagText,
    setfilterTagText,
  };
});
