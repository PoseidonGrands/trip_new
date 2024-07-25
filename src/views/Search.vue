<template>
  <!-- 顶部栏 -->
  <van-nav-bar title="搜索景点" />
  <!-- 搜索框 -->
  <div class="page-search">
    <van-search
      v-model="sightName"
      :show-action="showAction"
      label="景点"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
      @focus="onFocus"
    />
    <!-- 搜索出的景点列表 -->
    <SightList v-for="item in sightList" :key="item.id" :item="item" />
    <van-pagination
      v-model="currentPage"
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
    />
  </div>
  <!-- 底部导航栏 -->
  <TripFooter />
</template>
  
  <script>
import SightList from '@/components/common/SightList.vue'
import TripFooter from '@/components/common/Footer.vue'
export default {
  components: {
    SightList,
    TripFooter
  },
  data() {
    return {
      // 景点名称
      sightName: '',
      //   景点列表
      sightList: [],
      //   是否显示取消选项
      showAction: true,
      //   当前页码
      currentPage: 1,
      //   总共的景点数
      totalItems: 24,
      //   每页的多少条数据
      itemsPerPage: 5
    }
  },
  methods: {
    onSearch() {
      console.log('search')
    },
    onFocus() {
      console.log('focus')
    },
    onCancel() {
      this.showAction = false
    }
  },
  created() {
    this.sightList = []
  }
}
</script>