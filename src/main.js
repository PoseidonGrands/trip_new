import { createApp } from 'vue'
import App from '@/App.vue'

import '@/assets/style/common.less'

import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

// 注册vant为vue插件
app.use(Vant)

import { priceFormat, countSatis } from '@/utils/filters.js'
app.config.globalProperties.$priceFormat = priceFormat
app.config.globalProperties.$countSatis = countSatis

app.mount('#app')
