import { createApp } from 'vue'
import App from '@/App.vue'

import '@/assets/style/common.less'

import Vant from 'vant'
import 'vant/lib/index.css'

import { router } from '@/route'
import store from '@/store'

const app = createApp(App)

// 注册vant为vue插件
app.use(Vant)
app.use(router)
app.use(store)

import { priceFormat, countSatis, nameFormat } from '@/utils/filters.js'
app.config.globalProperties.$priceFormat = priceFormat
app.config.globalProperties.$countSatis = countSatis
app.config.globalProperties.$nameFormat = nameFormat

app.mount('#app')
