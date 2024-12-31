import { createApp } from 'vue'
import App from '@/App.vue'
// 引入 element-plus 插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入模板 的全局的样式
import '@/styles/index.scss'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components';
// 配置element-plus 国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import router from "./router";
import pinia from "./store";

// 获取应用实例对象
const app = createApp(App)
// 安装element-plus 插件
app.use(ElementPlus, {
    locale: zhCn // element-plus 国际化配置
});

// svg 插件需要配置代码
import 'virtual:svg-icons-register';

// 通过 import.meta.env 可以得到当前环境的对应变量的值。
console.log("当前环境相关配置变量值：", import.meta.env);

// // 将SvgIcon 注册成全局组件，在其他组件中就可以直接使用而不需要额外引入。
// import SvgIcon from '@/components/SvgIcon/index.vue';
// app.component('SvgIcon', SvgIcon);

// 安装自定义插件
app.use(globalComponent);

app.use(pinia);

// 注册路由
app.use(router);

// 将应用挂载到挂载点上
app.mount('#app')

