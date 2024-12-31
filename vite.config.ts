// https://vitejs.dev/config/
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//引入svg需要用到插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({  mode }) => {
  // suyh - process.cwd() 得到项目的根目录
  //获取各种环境下的对应的变量
  let env = loadEnv(mode, process.cwd());
  return {
    publicPath: 'https://gitee.com/jch1011/guiguzhenxuan',
    plugins: [vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
      }
    },
    //代理跨域
    server: {
      port: 3000,
      proxy: {
        // suyh - 所有的请求都需要是这个前缀，这个应该就是对应后端的上下文根路径
        [env.VITE_APP_BASE_API]: {
          //获取数据的服务器地址设置
          target: env.VITE_SERVE,
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  }
})
