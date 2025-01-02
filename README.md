## 硅谷甄选 项目学习代码

### node 的版本使用18 吧

```shell
# 全局安装pnpm
npm i -g pnpm
# 项目初始化
pnpm create vite

  cd product                                            
  pnpm install                                          
  pnpm run dev
  pnpm run suyh
```



> 需要安装插件：@types/node
>
> 项目中集成svg 图标： `pnpm install vite-plugin-svg-icons -D`
>
> 这个svg 安装之后，还需要在vite.config.ts 中配置插件
>
> 还需要在入口文件中配置代码：import 'virtual:svg-icons-register'


```shell
pnpm install element-plus
pnpm install @element-plus/icons-vue
pnpm install axios
pnpm install fast-glob
pnpm install @types/node -D
pnpm install vue-router
pnpm install pinia
```





## 代码报红提示

`Cannot find module vite or its corresponding type declarations.`

参考博客：https://blog.csdn.net/peng2hui1314/article/details/135481952

![image-20241231110002676](README.assets/image-20241231110002676.png)

