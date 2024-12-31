// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue';
import Pagination from './Pagination/index.vue';

const allGlobalComponent: any = {SvgIcon, Pagination};

// 对外暴露插件对象
export default {
    // 务必叫install 方法
    install(app: any) {
        Object.keys(allGlobalComponent).forEach(key => {
            app.component(key, allGlobalComponent[key]);
            console.log("key: ", key, ", value: " + allGlobalComponent[key])
        });
        // 上面的循环，不就是这样两行吗？为什么搞那么费劲啊！！！
        // app.component('SvgIcon', SvgIcon);
        // app.component('Pagination', Pagination);
    }
}



