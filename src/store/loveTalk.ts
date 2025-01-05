import {defineStore} from "pinia";
import {nanoid} from "nanoid";

export const useTalkStore = defineStore('talk', {
  actions: {
    async getTalk() {
      let obj = {id: nanoid(), title: nanoid()}
      this.talkList.unshift(obj)
    }
  },
  state() {
    let id = nanoid()
    let title = nanoid()
    return {
      talkList: [{id, title}]
    }
  },
})