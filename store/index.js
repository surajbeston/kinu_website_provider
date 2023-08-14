import { defineStore } from "pinia";

export const useGeneralData = defineStore("generalData", () => {
  const paletteName = ref("default");
  const activeFilterTag = ref("");
  const filterTagText = ref("for you");
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
  };
});
