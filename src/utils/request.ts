// 进行axios 的二次封装，使用请求与响应拦截器

import axios from 'axios';
import { ElMessage } from 'element-plus'

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
});

request.interceptors.request.use((config) => {
  console.log("suyh - request config ", config)
  return config;
})

request.interceptors.response.use((response) => {
  // console.log("response", response)
  // console.log("response.data", response.data)
  // console.log("response.data.data", response.data.data)
  // suyh - 这里的response.data 是服务器返回的完整对象
  // suyh - 似乎应该在这里处理code 的值。如果不为0 则提示失败。
  return response.data;
}, (error) => {
  let message = ''
  //http状态码
  const status = error.response.status
  switch (status) {
    case 401:
      message = 'TOKEN过期'
      break
    case 403:
      message = '无权访问'
      break
    case 404:
      message = '请求地址错误'
      break
    case 500:
      message = '服务器出现问题'
      break
    default:
      message = '网络出现问题'
      break
  }
  //提示错误信息
  ElMessage({
    type: 'error',
    message,
  })
  return Promise.reject(error);
})

export default request;


