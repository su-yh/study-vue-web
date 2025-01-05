<template>
  <div>
    <h2>当前的求和是：{{ sum }}</h2>
    <select v-model.number="n">
      <option value="1">11</option>
      <option value="2">22</option>
      <option value="3">33</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>


<script setup lang="ts">
import {ref} from "vue";

let sum = ref(1)
let n = ref(0)

const add = () => {
  sum.value += n.value
}
const minus = () => {
  sum.value -= n.value
}
</script>


<style scoped>

</style>