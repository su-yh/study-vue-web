import {defineStore} from "pinia";
import {nanoid} from "nanoid";

export const useTalkStore = defineStore('talk', {
  state() {
    let id = nanoid()
    let title = nanoid()
    return {
      talkList: [{id, title}]
    }
  },
})