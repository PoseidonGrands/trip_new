import axios from 'axios'
import { showLoadingToast } from 'vant'
import { showNotify } from 'vant'

export const ajax = axios.create({
  withCredentials: true
})

// 请求钩子
ajax.interceptors.request.use(
  function (config) {
    // console.log('request hook...')

    showLoadingToast({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner'
    })
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应钩子
ajax.interceptors.response.use(
  function (config) {
    // console.log('response hook...')
    return config
  },
  function (error) {
    if (error.response.status == 500) {
      showNotify({ message: '服务器正忙，请稍后重试' })
    }
    console.log('error:', error)
    return Promise.reject(error)
  }
)
