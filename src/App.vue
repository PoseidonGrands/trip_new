<template>
  <!-- 路由的展示区域 -->
  <router-view></router-view>
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

