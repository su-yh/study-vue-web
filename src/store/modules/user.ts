// 创建用户相关的小仓库
import {defineStore} from 'pinia';
import {reqLogin} from '@/api/user';
import {loginForm} from "@/api/user/type";

// 创建用户小仓库
let useUserStore = defineStore('User', {
  state: () => {
    return {
      // 从本地持久化仓库取token 数据
      token: localStorage.getItem("TOKEN"), // 用户token
    }
  },
  // 异步|逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: loginForm) {
      let result:any = await reqLogin(data);
      console.log("login 返回值", result)
      if (result.code == 0) {
        // pinia 仓库存储一下token
        // 由于pinia|vuex存储数据其实利用js 对象
        this.token = result.data;
        // 本地存储持久化数据一份
        localStorage.setItem("TOKEN", result.data);

        // 保证当前async 函数返回一个成功的promise
        return 'ok';
      } else {
        return Promise.reject(new Error(result.message))
      }
    }
  },
  getters: {}
})

// 对外暴露获取小仓库方法
export default useUserStore;
