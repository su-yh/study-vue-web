import { createApp } from 'vue'
import App from '@/App.vue'
// 引入 element-plus 插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus 国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 获取应用实例对象
const app = createApp(App)
// 安装element-plus 插件
app.use(ElementPlus, {
    locale: zhCn // element-plus 国际化配置
});


// 将应用挂载到挂载点上
app.mount('#app')

