<template>
  <!-- 顶部导航（提供返回 -->
  <van-nav-bar class="detail-nav" fixed title="" left-text="返回" left-arrow @click-left="goBack" />
  <h1>{{ title }}</h1>
  <SightListComponent v-for="item in sightList" :key="item.id" :item="item" />
</template>

<script>
import SightListComponent from '@/components/common/SightList.vue'
export default {
  data() {
    return {
      title: '',
      sightList: []
    }
  },
  components: {
    SightListComponent
  },
  created() {
    // 获取页面类型
    let type = this.$route.query.type
    if (type == 'hot') {
      this.title = '热门景点'
    }
    if (type == 'star') {
      this.title = '精选景点'
    }

    //
  }
}
</script>