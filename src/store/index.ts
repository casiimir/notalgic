import { defineStore } from "pinia";

export const useGeneralStore = defineStore({
  id: "generalStore",
  state: () => ({
    fontFamily: "VT323",
    defaultColor: "#00ff00",
    noteTitle: "",
  }),
  getters: {
    getFontFamily: (state) => state.fontFamily,
    getDefaultColor: (state) => state.defaultColor,
  },
  actions: {
    setFontFamily(payload: string) {
      this.fontFamily = payload;
    },
    setDefaultColor(payload: string) {
      this.defaultColor = payload;
    },
    setNoteTitle(payload: string) {
      this.noteTitle = payload;
    },
  },
});
