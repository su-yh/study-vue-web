<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <select v-model.number="n">
      <option value="1">壹</option>
      <option value="2">贰</option>
      <option value="3">叁</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>

</template>


<script setup lang="ts">
import {ref} from 'vue'

let sum = ref(0);
let n = ref(1)
const add = () => {
  sum.value += n.value
}

const minus = () => {
  sum.value -= n.value
}
</script>


<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,button {
  margin: 0 5px;
  height: 25px;
}
</style>