<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <el-button type="primary" @click="changeName">修改姓名</el-button>
    <el-button type="primary" @click="changeAge">修改年龄</el-button>
    <el-button type="primary" @click="showTel">查看电话</el-button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  data() {
    return {
      name: '张三',
      age: 18,
      tel: '1388888888'
    }
  },
  methods: {
    changeName() {
      this.name = "zhange-san"
    },
    changeAge() {
      this.age += 1;
    },
    showTel() {
      alert(this.tel)
    }
  }
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
