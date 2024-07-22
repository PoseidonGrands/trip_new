import axios from 'axios'

export const ajax = axios.create({
  withCredentials: true
})

// 请求钩子
ajax.interceptors.request.use(
  function (config) {
    console.log('request hook...')
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应钩子
ajax.interceptors.response.use(
  function (config) {
    console.log('response hook...')
    return config
  },
  function (error) {
    console.log(error)
    return Promise.reject(error)
  }
)
