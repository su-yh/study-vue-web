// 创建一个路由器，并暴露出去
import {createRouter, createWebHistory} from "vue-router";

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from "@/pages/Detail.vue";

const router = createRouter({
  // 路由器的工作模式
  history: createWebHistory(),
  routes: [
    {
      name: 'zhuye',
      path: '/home',
      component: Home
    }, {
      name: 'guanyu',
      path: '/about',
      component: About
    }, {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          name: 'xiang',
          // 这里不能以 '/' 开头
          path: 'detail/:id/:title/:content',
          component: Detail,
          // props: true
          props(route) {
            console.log('params', route)
            return route.params
          }
        }
      ]
    }, {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router


