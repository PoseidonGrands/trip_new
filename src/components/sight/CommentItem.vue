<template>
  <div class="comment">
    <van-rate
      class="star"
      v-model="item.score"
      :size="15"
      color="#ee0a24"
      readonly
      void-icon="star"
      void-color="#eee"
    />
    <div class="right">
      <span class="author">{{ $nameFormat(item.name) }}</span>
      <span class="create-date">{{ item.create_at }}</span>
    </div>
    <div class="content">
      {{ item.content }}
    </div>
    <div class="img-list">
      <img
        alt=""
        v-for="(image, index) in item.images"
        :src="image.img"
        :key="image"
        :id="index"
        @click="checkPic(index)"
      />
    </div>
    <van-image-preview
      v-model:show="show"
      :images="imageUrls"
      @change="onChange"
      :start-position="index"
    >
      <template v-slot:index>第{{ index + 1 }}页</template>
    </van-image-preview>
  </div>
</template>
  
  <script>
export default {
  props: ['item'],
  data() {
    return {
      star: 4,
      show: false,
      index: 1,
      images: []
    }
  },
  computed: {
    // 将评论数据中图片对象中的图片地址存储到数组中用于图片预览组件
    imageUrls() {
      return this.item.images.map((i) => i.img)
    }
  },
  methods: {
    // 图片浏览的索引发生变化（用于切换图片
    onChange(index) {
      this.index = index
    },

    // 图片预览组件参数控制
    checkPic(index) {
      // 图片预览显示
      this.show = true
      // 图片索引（翻页
      this.index = index
    }
  },
  created() {}
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