import axios from 'axios'
import { showLoadingToast } from 'vant'
import { showNotify } from 'vant'
import qs from 'qs'

export const ajax = axios.create({
  // 携带cookie
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  // 修改在发送请求之前请求体的数据
  transformRequest: function (data, headers) {
    return qs.stringify(data)
  }
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
    if (error.response.status == 401) {
      showNotify({ message: '您还未登录，跳转到登录页面', type: 'danger' })
    }
    if (error.response.status == 500) {
      showNotify({ message: '服务器正忙，请稍后重试' })
    }
    console.log('error:', error)
    return Promise.reject(error)
  }
)
