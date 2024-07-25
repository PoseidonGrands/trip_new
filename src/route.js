import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home.vue'
import SearchPage from '@/views/Search.vue'
import SightDetailPage from '@/views/sight/SightDetail.vue'
import SightInfoPage from '@/views/sight/SightInfo.vue'
import SightListPage from '@/views/sight/SightList.vue'
import SightCommentPage from '@/views/sight/SightComment.vue'
import SightImagePage from '@/views/sight/SightImage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home' // 重定向到 homePage
  },
  {
    path: '/home',
    component: HomePage,
    name: 'homePage'
  },
  {
    path: '/search',
    component: SearchPage,
    name: 'searchPage'
  },
  {
    path: '/sight/list',
    component: SightListPage,
    name: 'sightListPage'
  },
  {
    path: '/sight/detail/:id',
    component: SightDetailPage,
    name: 'sightDetailPage'
  },
  {
    path: '/sight/image/:id',
    component: SightImagePage,
    name: 'sightImagePage'
  },
  {
    path: '/sight/info/:id',
    component: SightInfoPage,
    name: 'sightInfoPage'
  },
  {
    path: '/sight/comment/:id',
    component: SightCommentPage,
    name: 'sightCommentPage'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }
