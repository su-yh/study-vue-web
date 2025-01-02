
// 创建一个路由器，并暴露出去
import {createRouter,createWebHistory} from "vue-router";

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import News from '@/components/News.vue'

const router = createRouter({
  // 路由器的工作模式
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: Home
    },{
      path: '/about',
      component: About
    },{
      path: '/news',
      component: News
    },
  ]
})

export default router


