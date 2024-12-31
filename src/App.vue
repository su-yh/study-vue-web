

<template>
  <div class="app">
    <h2>你好啊</h2>
    <el-button type="primary" @click="login">点击登录按钮</el-button>
    <router-view></router-view>
  </div>

  <Person/>
</template>

<script setup lang="ts">

import Person from '@/components/Person.vue'

const login = async () => {
  console.log("login")
}

</script>

<style scoped lang="scss">
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
