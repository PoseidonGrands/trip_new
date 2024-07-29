<template>
  <!-- 搜索框 -->
  <div class="page-search">
    <!-- 顶部栏(主页跳转进入显示)  -->
    <van-nav-bar
      v-if="title"
      class="search-nav-back"
      fixed
      title=""
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <!-- 顶部栏（直接进入搜索页面显示） -->
    <van-nav-bar v-else title="搜索景点" class="search-nav-title" />

    <van-search
      v-model="searchName"
      :show-action="showAction"
      label="景点"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
      @focus="onFocus"
    />
    <!-- 首页跳转进搜索页面才进行显示 -->
    <h2 v-if="title">{{ title }}</h2>
    <!-- 搜索出的景点列表 -->
    <div class="search-container">
      <SightList v-for="item in sightList" :key="item.id" :item="item" />
      <van-pagination
        v-model="currentPage"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        @change="changePage"
      />
    </div>
  </div>
  <!-- 底部导航栏(主页跳转进入不显示) -->
  <TripFooter v-if="!title" />
</template>

<script>
import { ajax } from '@/utils/ajax'
import { SightApis } from '@/utils/apis'
import SightList from '@/components/common/SightList.vue'
import TripFooter from '@/components/common/Footer.vue'
import { showToast } from 'vant'
export default {
  components: {
    SightList,
    TripFooter
  },
  data() {
    return {
      // 景点名称
      sightName: '',
      // 搜索框输入的景点名称
      searchName: '',
      //   景点列表
      sightList: [],
      //   是否显示取消选项
      showAction: true,
      //   总共的景点数
      totalItems: 24,
      //   每页的多少条数据
      itemsPerPage: 4,
      //   当前页码
      currentPage: 1,
      // 显示标题
      title: '',
      // 页面类型（hot、star
      pageType: ''
    }
  },
  methods: {
    getDataList() {
      console.log('type', this.pageType)
      ajax
        .get(SightApis.sightListUrl, {
          params: {
            name: this.sightName,
            currentPage: this.currentPage,
            limit: this.itemsPerPage,
            isHot: this.pageType === 'hot' ? 'hot' : '',
            isStar: this.pageType === 'star' ? 'star' : ''
          }
        })
        .then(({ data: { meta, objects } }) => {
          this.sightList = objects
          this.totalItems = meta.total_count
          this.itemsPerPage = meta.per_page_count
        })
    },
    // 访问景点接口获取景点信息
    onSearch() {
      console.log('search')
      // 检查是否输入了搜索内容
      if (!this.searchName) {
        showToast('请输入景点信息')
        return
      }
      // 提交搜索时才将搜索内容保存（避免分页问题
      this.sightName = this.searchName
      this.currentPage = 1
      this.getDataList()
    },
    onFocus() {
      console.log('focus')
    },
    onCancel() {
      this.showAction = false
      // 景点名称设为空
      this.sightName = ''
      // 页码重置
      this.currentPage = 1
      // 重新获取完整数据
      this.getDataList()
    },
    // 切换页面
    changePage() {
      console.log('page:', this.currentPage)
      this.getDataList()
    },
    // 返回上一页
    goBack() {
      this.$router.go(-1)
    }
  },
  created() {
    // 获取页面类型
    let _type = this.$route.query.type
    this.pageType = _type
    if (_type == 'hot') {
      this.title = '热门景点'
    }
    if (_type == 'star') {
      this.title = '精选景点'
    }

    // 先获取请求参数再请求数据
    this.getDataList()
  }
}
</script>

<style lang="less" scoped>
.page-search {
  .search-nav-back {
    margin-bottom: 46px;
  }
  h2 {
    padding: 5px 10px;
    margin: 0;

    font-size: 14px;
    text-align: left;
  }
}
</style>