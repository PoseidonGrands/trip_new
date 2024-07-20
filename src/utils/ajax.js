import axios from 'axios'

export const ajax = axios.create({
    withCredentials: true
})

ajax.interceptors.request.use(function (config) {
    console.log('request hook...')
    return config
}, function (error) {
    return Promise.reject(error)
})


ajax.interceptors.response.use(function (config) {
    console.log('response hook...')
    return config
}, function (error){
    console.log(error )
    return Promise.reject(error)
})