import {defineStore} from "pinia";
import {nanoid} from "nanoid";
import axios from "axios";

export const useTalkStore = defineStore('talk', {
  actions: {
    async getTalk() {
      const result = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
      let obj = {id: nanoid(), title: result.data.content}
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