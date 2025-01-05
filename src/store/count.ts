import {defineStore} from "pinia";

export const useCountStore = defineStore('count', {
  // actions 里面旋转的是一个一个的方法，用于响应组件中的动作。
  actions: {
    increment(n) {
      if (n < 10) {
        this.sum += n;
      }
    },
    decrement(n) {
      this.sum -= n;
    }
  },
  state() {
    return {
      sum: 6
    }
  },
})

