<!-- 精选景点 -->
<template>
  <div class="home-star">
    <van-cell
      title="精选景点"
      value="全部榜单"
      is-link
      :to="{ name: 'searchPage', query: { type: 'star' } }"
      icon="location-o"
      title-style="text-align:left;"
    />
    <div class="star-main">
      <SightList v-for="item in starList" :key="item.id" :item="item" />
    </div>
  </div>
</template>


<script>
import SightList from '@/components/common/SightList.vue'
import { ajax } from '@/utils/ajax'
import { SightApis } from '@/utils/apis'
export default {
  data() {
    return {
      starList: []
    }
  },
  components: {
    SightList
  },
  methods: {
    getDataList() {
      ajax
        .get(SightApis.sightListUrl, {
          params: {
            isStar: 1
          }
        })
        .then((res) => {
          // console.log('starRes:', res)
          this.starList = res.data.objects
        })
    }
  },
  created() {
    // 获取精选景点数据
    this.getDataList()
  }
}
</script>

<style lang="less" scoped>
.home-star {
  margin-top: 2px;
}
</style>