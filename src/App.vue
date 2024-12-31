

<template>
  <div>
    <el-button type="primary" @click="login">点击登录按钮</el-button>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request.ts';
import {onMounted} from "vue";
import {reqLogin} from "@/api/user/index.ts";

// 当组件挂载 完毕测试发一个请求
if (false) {
  console.log("使用原始request 请求")
  onMounted(() => {
    request({
        url: '/user/login',
        method: 'post',
        data: {
          username: 'admin',
          password: 'admin',
          code: 1
        }
      }
    ).then(res => {
      console.log(res)
    })
  })
} else {
  console.log("使用封装过的request 请求")
  onMounted(() => {
    reqLogin({username: 'admin', password: 'admin', code: 1})
  })
}

const login = async () => {
  console.log("点击登录按钮")
  let resData = await reqLogin({username: 'admin', password: 'admin', code: 1})
  console.log("resData", resData)
  console.log("resData.data", resData.data)
  console.log("resData.code", resData.code)
  console.log("resData.message", resData.message)
}


</script>

<style scoped lang="scss">
div {
  h1 {
    color: red;
  }
}
</style>
