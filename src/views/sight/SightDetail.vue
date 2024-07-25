<template>
  <div class="page-sight-detail">
    <!-- 顶部导航（提供返回 -->
    <van-nav-bar
      class="detail-nav"
      fixed
      title=""
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <!-- 图片展示 -->
    <div class="main-img">
      <van-image width="100%" height="100%" src="/static/images/home/hot/h2_max.jpg" alt="" />
      <div class="tips">
        <router-link class="tips-container" :to="{ name: 'sightImagePage', params: { id: id } }">
          <van-icon name="photo" />
          <span class="nums">5</span>
          <span>图片</span>
        </router-link>
      </div>
      <span class="img-name">广州长隆旅游度假区</span>
    </div>
    <!-- 景点评分和景点介绍 -->
    <div class="detail-info">
      <router-link class="left info-item" :to="{ name: 'sightCommentPage', params: { id: id } }">
        <strong class="score">5分</strong>
        <small>很棒</small>
        <div class="comment-count small-title">
          <span>2</span>
          <span>评论</span>
        </div>
        <van-icon class="arrow" name="arrow" />
      </router-link>
      <router-link class="right info-item" :to="{ name: 'sightInfoPage', params: { id: id } }">
        <div>景点介绍</div>
        <div class="small-title">开放时间、贴士</div>
        <van-icon class="arrow" name="arrow" />
      </router-link>
    </div>
    <!-- 景点地址 -->
    <van-cell class="sight-loc" title="广东省广州市番禺区番禺大道" icon="location-o" is-link />
    <!-- 门票列表 -->
    <div class="ticket">
      <van-cell title="门票" icon="sign" />
      <div class="ticket-item" v-for="i in 6" :key="i">
        <div class="left">
          <div class="title">长隆野生动物世界（平日）门票</div>
          <div class="info">
            <div class="time">
              <van-icon name="clock-o" size="8px" />
              <span>23:52前可定明日</span>
            </div>
            <van-tag class="tip" round>无需换票</van-tag>
          </div>
        </div>
        <div class="right">
          <div class="price-area">
            <span class="unit">￥</span>
            <strong class="price">174</strong>
          </div>

          <router-link to="#">
            <van-button class="subscribe" type="warning">预订</van-button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 评价列表 -->
    <div class="comment-area">
      <van-cell title="热门评论" icon="/static/images/icons/message.png" />
      <!-- 使用评论组件 -->
      <CommentItem :id="id" />
      <router-link class="more-link" :to="{ name: 'sightCommentPage', params: { id: id } }">
        <van-nav-bar title="查看更多>>>" />
      </router-link>
    </div>
  </div>
</template>
  
  <script>
import CommentItem from '@/components/sight/CommentItem.vue'
export default {
  data() {
    return {
      id: '222',
      star: 4
    }
  },
  methods: {
    goBack() {
      console.log('点击返回')
      this.$router.go(-1)
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  components: {
    CommentItem
  }
}
</script>
  
  <style lang="less" scoped>
.page-sight-detail {
  position: relative;
  //   顶部导航栏
  .detail-nav {
    width: 100%;
  }

  //   banner图
  .main-img {
    position: relative;

    padding-top: 46px;

    // banner图上的图片数量提示
    .tips {
      position: absolute;
      left: 60px;
      bottom: 30px;

      font-size: 16px;
      color: #fff;
      z-index: 10;

      .tips-container {
        border-radius: 30px;
        color: #fff;
        font-size: 14px;
        // opacity: 0.4;
        background-color: rgba(0, 0, 0, 0.4);
      }
      .img-nums {
        margin-right: 4px;
      }
    }
    // 图片标题
    .img-name {
      position: absolute;
      left: 10px;
      bottom: 10px;
      color: white;
      z-index: 10;
    }
  }
  //景点信息
  .detail-info {
    display: flex;
    flex-direction: row;

    background-color: #fff;

    .info-item {
      position: relative;

      width: 50%;
      height: 50px;

      padding: 8px;

      .arrow {
        position: absolute;
        right: 0;
        top: 12px;
      }
    }

    .small-title {
      margin-top: 10px;

      color: #999;
      font-size: 12px;
    }

    .left {
      border-right: 1px solid #f6f6f6;
      strong {
        color: #ff8300;
      }
    }
  }

  //   景点地址
  .sight-loc {
    margin-top: 1px;
  }

  //   门票列表
  .ticket {
    margin-top: 4px;
    background-color: #fff;
    .ticket-item {
      position: relative;
      height: 80px;
      .left {
        padding: 10px;
        .title {
          font-size: 16px;
        }
        .info {
          .time {
            font-size: 8px;
          }

          .tip {
            background-color: black;
            border-top-right-radius: 10px; /* 设置右上角的圆角 */
            border-bottom-right-radius: 10px; /* 设置右下角的圆角 */
            color: #fff;
          }
        }
      }

      .right {
        display: block;
        position: absolute;
        top: 4px;
        right: 20px;

        color: #ff8300;
        .price {
          font-size: 20px;
        }

        .subscribe {
          width: 65px;
          height: 35px;
        }
      }
    }
  }
  //   评论列表
  .comment-area {
    margin-top: 4px;

    background-color: #fff;
    :deep(.van-icon__image) {
      height: 100%;
    }
  }
  .more-link {
    color: #666;
    font-weight: lighter;

    :deep(.van-nav-bar__title) {
      font-weight: 100;
    }
  }
}
</style>