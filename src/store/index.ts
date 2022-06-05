import { defineStore } from "pinia";

export const useGeneralStore = defineStore({
  id: "generalStore",
  state: () => ({ fontFamily: "VT323" }),
  getters: {
    getFontFamily: (state) => state.fontFamily,
  },
  actions: {
    setFontFamily(payload: string) {
      this.fontFamily = payload;
    },
  },
});
