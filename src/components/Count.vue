<template>
  <div>
    <h2>当前的求和是：{{ countStore.sum }}</h2>
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
import {useCountStore} from "@/store/count.ts";

let countStore = useCountStore();

let n = ref(0)

const add = () => {
  countStore.increment(n.value)
}
const minus = () => {
  countStore.increment(-n.value)
}
</script>


<style scoped>

</style>