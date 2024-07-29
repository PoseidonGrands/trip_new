<template>
  <van-nav-bar
    class="comment-list-nav"
    title="景点评论"
    left-text="返回"
    left-arrow
    @click-left="goBack"
  />
  <div class="comment-list-container">
    <CommentItem v-for="item in sightComments" :key="item" :item="item" />
  </div>
  <van-pagination
    v-model="currentIndex"
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
    @change="changePage"
  />
</template>

<script>
import CommentItem from '@/components/sight/CommentItem.vue'
import { SightApis } from '@/utils/apis'
import { ajax } from '@/utils/ajax'
export default {
  data() {
    return {
      sightComments: {},
      // 当前第几页
      currentIndex: 1,
      // 每页数据数
      itemsPerPage: 7,
      // 总共数据量（用于计算有多少页
      totalItems: ''
    }
  },
  created() {
    this.loadData()
  },
  components: {
    CommentItem
  },
  methods: {
    loadData() {
      this.id = this.$route.params.id
      let url = SightApis.sightCommentUrl + '/' + this.id
      ajax
        .get(url, { params: { currentIndex: this.currentIndex, itemsPerPage: this.itemsPerPage } })
        .then(({ data: { meta, objects } }) => {
          this.sightComments = objects
          this.totalItems = meta.total_count
          this.itemsPerPage = meta.per_page_count
        })
    },
    // 页面切换
    changePage() {
      this.loadData()
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
</style>