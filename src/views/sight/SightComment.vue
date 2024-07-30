<template>
  <!-- 导航栏（提供返回 -->
  <van-nav-bar
    class="comment-list-nav"
    title="景点评论"
    left-text="返回"
    left-arrow
    @click-left="goBack"
  />
  <!-- 1、List控件实现数据下拉加载 -->
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      class="comment-list-container"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      v-model:error="error"
      error-text="请求失败，点击重新加载"
      offset="40"
      @load="loadDataByVanList"
    >
      <!-- 评论列表 -->
      <CommentItem v-for="item in sightComments" :key="item" :item="item" />
    </van-list>
  </van-pull-refresh>

  <!-- 2、分页控件实现数据分页 -->
  <!-- 评论列表 -->
  <!-- <div class="comment-list-container">
    <CommentItem v-for="item in sightComments" :key="item" :item="item" />
  </div> -->
  <!-- <van-pagination
    v-model="currentIndex"
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
    @change="changePage"
  /> -->
</template>

<script>
import CommentItem from '@/components/sight/CommentItem.vue'
import { SightApis } from '@/utils/apis'
import { ajax } from '@/utils/ajax'
export default {
  data() {
    return {
      // 是否加载中
      loading: false,
      // 是否加载完成
      finished: false,
      // 是否显示错误提示
      error: false,
      // 是否在刷新中
      refreshing: false,
      sightComments: [],
      // 当前第几页
      currentIndex: 1,
      // 每页数据数
      itemsPerPage: 5,
      // 总共数据量（用于计算有多少页
      totalItems: ''
    }
  },
  created() {
    // 通过路由获取景点id
    this.id = this.$route.params.id
    // this.loadDataByVanList()
  },
  components: {
    CommentItem
  },
  methods: {
    // 列表加载数据
    loadDataByVanList() {
      let url = SightApis.sightCommentUrl + '/' + this.id
      ajax
        .get(url, { params: { currentIndex: this.currentIndex, itemsPerPage: this.itemsPerPage } })
        .then(({ data: { meta, objects } }) => {
          console.log('开始加载')
          // 数据拼接
          this.sightComments = this.sightComments.concat(objects)
          // 加载完成
          this.loading = false
          // 下一页的页码（用接口数据返回的当前页码更稳妥
          this.currentIndex = meta.page_index + 1
          // 判断数据是否加载完成
          if (this.currentIndex > meta.total_pages) {
            this.finished = true
          }
          this.refreshing = false
          console.log('加载完成')
        })
        .catch((error) => {
          console.log('res:', error)
          // 停止加载
          this.loading = false
          this.error = true
          this.refreshing = false
        })
    },
    // 分页控件加载数据
    loadDataByVanPagination() {
      let url = SightApis.sightCommentUrl + '/' + this.id
      ajax
        .get(url, { params: { currentIndex: this.currentIndex, itemsPerPage: this.itemsPerPage } })
        .then(({ data: { meta, objects } }) => {
          this.sightComments = objects
          this.totalItems = meta.total_count
          this.itemsPerPage = meta.per_page_count
        })
    },
    // 页面刷新
    onRefresh() {
      // 重置全部状态变量
      this.sightComments = []
      this.currentIndex = 1
      this.error = false
      this.loading = false
      this.finished = false

      // 重新获取数据
      this.loadDataByVanList()
    },
    // 页面切换
    changePage() {
      this.loadDataByVanPagination()
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
</style>