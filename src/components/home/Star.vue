<!-- 精选景点 -->
<template>
  <div class="home-star">
    <van-cell
      title="热门推荐"
      value="全部榜单"
      is-link
      icon="location-o"
      title-style="text-align:left;"
    />
    <div class="star-main">
      <SightList v-for="item in dataList" :key="item.id" :item="item" />
    </div>
  </div>
</template>


<script>
import SightList from '@/components/common/SightList.vue'
export default {
  data() {
    return {
      dataList: []
    }
  },
  components: {
    SightList
  },
  created() {
    this.dataList = [
      {
        id: 1,
        img: 'static/images/home/hot/h1.jpg',
        title: '测试景点123131231',
        score: 3.5,
        price: 110,
        province: '广东',
        loc: '广州',
        commentCount: 6
      },
      {
        id: 2,
        img: 'static/images/home/hot/h2.jpg',
        title: '测试景点123131231',
        score: 3.5,
        price: 120,
        province: '广东',
        loc: '广州',
        commentCount: 6
      },
      {
        id: 3,
        img: 'static/images/home/hot/h3.jpg',
        title: '测试景点123131231',
        score: 3.5,
        price: 130,
        province: '广东',
        loc: '广州',
        commentCount: 6
      },
      {
        id: 4,
        img: 'static/images/home/hot/h4.jpg',
        title: '测试景点12122221231',
        score: 3.5,
        price: 140.222222,
        province: '广东',
        loc: '广州',
        commentCount: 6
      }
    ]
  }
}
</script>

<style lang="less" scoped>
.home-star {
  margin-top: 10px;
}
.star-main {
  padding: 0 16px;
}
</style>