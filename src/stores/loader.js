// stores/studentStore.js
import { defineStore } from "pinia";

export const useLoader = defineStore("loader", {
  state: () => ({
    loader: false,
  }),

  actions: {
    async showLoader() {
      this.loader = true;
    },
    async hideLoader() {
      this.loader = false;
    },
  },
});
