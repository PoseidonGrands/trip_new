import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home.vue'
import SearchPage from '@/views/Search.vue'
import SightDetailPage from '@/views/sight/SightDetail.vue'
import SightInfoPage from '@/views/sight/SightInfo.vue'
import SightListPage from '@/views/sight/SightList.vue'
import SightCommentPage from '@/views/sight/SightComment.vue'
import SightImagePage from '@/views/sight/SightImage.vue'
import MinePage from '@/views/mine.vue'
import RegPage from '@/views/auth/reg.vue'
import LoginPage from '@/views/auth/login.vue'

const routes = [
  // 首页
  {
    path: '/',
    redirect: '/home' // 重定向到 homePage
  },
  {
    path: '/home',
    component: HomePage,
    name: 'homePage'
  },
  // 搜索页
  {
    path: '/search',
    component: SearchPage,
    name: 'searchPage'
  },
  // 景点列表
  {
    path: '/sight/list',
    component: SightListPage,
    name: 'sightListPage'
  },
  // 景点详情
  {
    path: '/sight/detail/:id',
    component: SightDetailPage,
    name: 'sightDetailPage'
  },
  // 景点图片
  {
    path: '/sight/image/:id',
    component: SightImagePage,
    name: 'sightImagePage'
  },
  // 景点信息
  {
    path: '/sight/info/:id',
    component: SightInfoPage,
    name: 'sightInfoPage'
  },
  // 景点评论
  {
    path: '/sight/comment/:id',
    component: SightCommentPage,
    name: 'sightCommentPage'
  },
  // 个人中心
  {
    path: '/mine',
    component: MinePage,
    name: 'minePage'
  },
  // 用户注册
  {
    path: '/account/reg',
    component: RegPage,
    name: 'regPage'
  },
  // 用户登录
  {
    path: '/account/login',
    component: LoginPage,
    name: 'loginPage'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }
