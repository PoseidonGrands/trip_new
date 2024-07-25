<template>
  <div class="comment">
    <van-rate
      class="star"
      v-model="star"
      :size="15"
      color="#ee0a24"
      readonly
      void-icon="star"
      void-color="#eee"
    />
    <div class="right">
      <span class="author">{{ $nameFormat('xiaoming') }}</span>
      <span class="create-date">2020-06-10</span>
    </div>
    <div class="content">
      在长沙的橘子洲头，我被这里的自然美景深深吸引。阳光洒在江面上，波光粼粼，仿佛无数颗钻石在闪烁。漫步在洲头的林荫小道上，我仿佛置身于一幅生动的画卷之中。橘子洲不仅自然风光迷人，而且历史底蕴深厚，毛泽东青年时期的雕像矗立于此，让人不禁想起那个激情燃烧的岁月。
      这里的空气清新，鸟语花香，是放松心情、享受宁静的绝佳去处。无论是清晨的晨跑，还是傍晚的散步，都能让人感受到生活的美好。橘子洲的夜景更是别有一番风味，灯光与江水交相辉映，美不胜收。我在这里度过了一个难忘的下午，橘子洲的美景让我流连忘返，这绝对是一次心灵的洗礼和享受。
    </div>
    <div class="img-list">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in images"
        :key="item"
        :id="index"
        @click="checkPic(index)"
      />
    </div>
    <van-image-preview
      v-model:show="show"
      :images="images"
      @change="onChange"
      :start-position="index"
    >
      <template v-slot:index>第{{ index + 1 }}页</template>
    </van-image-preview>
  </div>
</template>
  
  <script>
export default {
  props: ['id'],
  data() {
    return {
      star: 4,
      show: false,
      index: 1,
      images: []
    }
  },
  methods: {
    onChange(index) {
      this.index = index
    },
    getImgList(commentId) {
      // TODO: 根据评论id获取该景点下的评论图片
      this.images = [
        '/static/images/sight/comment1.jpg',
        '/static/images/sight/comment2.jpg',
        '/static/images/sight/comment3.jpg',
        '/static/images/sight/comment4.jpg',
        '/static/images/sight/comment5.jpg'
      ]
    },
    checkPic(index) {
      this.show = true
      this.index = index
    }
  },
  created() {
    // 获取当前评论的图片列表（需传入评论id
    this.getImgList()
  }
}
</script>
  
  
  <style lang="less" scoped>
.comment {
  position: relative;
  padding: 10px;

  .right {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .content {
    margin-top: 8px;

    font-size: 12px;
    line-height: 20px;
  }
  .img-list {
    display: inline-block;
    margin: 0 auto;

    img {
      padding: 4px;
      width: 90px;
    }
  }
}
</style>