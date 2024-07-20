<!-- 轮播图 -->
<template>
  <div class="home-banner">
    <van-swipe :autoplay="3000" :height="150">
      <van-swipe-item v-for="banner in bannerList" :key="banner.id">
        <img :src="banner.img" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>


<script>
export default {
  data() {
    return {
      bannerList: []
    }
  },
  method() {},
  created() {
    this.bannerList = [
      {
        id: 1,
        img: '/static/images/home/banner/banner1.jpg'
      },
      {
        id: 2,
        img: '/static/images/home/banner/banner2.jpg'
      },
      {
        id: 3,
        img: '/static/images/home/banner/banner3.jpg'
      }
    ]
  }
}
</script>

<style lang="less" scoped>
.home-banner {
  img {
    width: 100%;
  }
}
</style>
