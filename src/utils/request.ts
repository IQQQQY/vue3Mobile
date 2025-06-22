import axios from 'axios'

// request请求封装
const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
})
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做某事
    return config
  },
  (error) => {
    // 请求错误时做些事
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 请求错误时做些事
    return Promise.reject(error)
  },
)

export default request
