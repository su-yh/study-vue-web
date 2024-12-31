<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <el-button type="primary" @click="changeName">修改姓名</el-button>
    <el-button type="primary" @click="changeAge">修改年龄</el-button>
    <el-button type="primary" @click="showTel">查看电话</el-button>
  </div>
</template>

<script setup lang="ts">
let name = '张三'
let age = 18
let tel = '1388888888'

const changeName = () => {
  console.log("changeName")
  name = 'zhange-san'
}

const changeAge = () => {
  console.log("changeAge")
  age += 1
}

const showTel = () => {
  console.log("showTel")
  alert(tel)
}

</script>

<style scoped lang="scss">
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
