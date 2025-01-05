import {defineStore} from "pinia";

export const useCountStore = defineStore('count', {
  actions: {
    increment(n:number) {
      this.sum += n;
    }
  },
  state() {
      return {
        sum: 0
      }
  },
})