<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到前端大课堂</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" :loading="loading" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {User, Lock} from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
import {useRouter} from 'vue-router';
import {ElNotification} from "element-plus";
// 引入用户相关的小仓库
import useUserStore from "@/store/modules/user.ts";

let useStore = useUserStore();

// 获取路由器
let $router = useRouter();

let loading = ref(false);

// 收集账号与密码的数据
let loginForm = reactive({username: "admin", password: "admin", code: 1})

const login = async () => {
  loading.value = true; // 开启加载效果
  // 点击登录按钮以后干什么？
  // 通知仓库发登录请求
  // 请求成功 --> 首页展示数据的地方
  // 请求失败 --> 弹出登录失败信息
  try {
    await useStore.userLogin(loginForm);
    // 编程式导航跳转到展示数据首页
    $router.push("/")
    // 登录成功提示信息
    ElNotification({
        type: 'success',
        message: "登录成功"
    })
  } catch (error) {
    // 登录失败提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })
  } finally {
    loading.value = false; // 停止加载效果
  }
}
</script>


<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%
    }
  }
}
</style>