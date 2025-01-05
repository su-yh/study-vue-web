<template>
  <div>
    <button @click="getTalk">点击获取一条土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import {reactive} from "vue";
import {nanoid} from "nanoid";

let talkList = reactive([{id: nanoid(), title: nanoid()}])

const getTalk = () => {
  talkList.unshift({id: nanoid(), title: nanoid()})
}
</script>


<style scoped>

</style>