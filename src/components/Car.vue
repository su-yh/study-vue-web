
<template>
  <div class="car">
    <h2>一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <el-button type="primary" @click="changePrice">修改汽车价格</el-button>
    <br>
    <ul>
      <li v-for="g in games" :key="g.id">{{g.name}}</li>
    </ul>
    <el-button type="primary" @click="changeFirstName">修改第一个游戏的名字</el-button>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

let car = reactive({brand: '奔驰', price: 100})
let games = reactive([
  {id: '001', name: '王者荣耀'},
  {id: '002', name: '原神'},
  {id: '003', name: '三国志'}
])

const changePrice = () => {
  car.price += 10
}

const changeFirstName = () => {
  games[0].name = '英雄联盟'
}

</script>

<style scoped lang="scss">

</style>
