<!-- 轮播图 -->
<template>
  <div class="home-banner">
    <van-swipe :autoplay="3000" :height="120">
      <van-swipe-item v-for="banner in bannerList" :key="banner.id">
        <img :src="banner.img" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>


<script>
import { ajax } from '@/utils/ajax'
import { SystemApis } from '@/utils/apis'

export default {
  data() {
    return {
      bannerList: []
    }
  },
  methods: {
    getDataList() {
      ajax.get(SystemApis.bannerListUrl).then((res) => {
        console.log('res', res)
        this.bannerList = res.data.objects
      })
    }
  },
  created() {
    // 接口获取轮播图数据
    this.getDataList()
  }
}
</script>

<style lang="less" scoped>
.home-banner {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
