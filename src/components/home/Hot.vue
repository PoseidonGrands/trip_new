<!-- 热门景点 -->
<template>
  <div class="home-hot">
    <van-cell
      title="热门推荐"
      value="全部榜单"
      is-link
      icon="/static/images/home/hot/fire.png"
      title-style="text-align:left;"
    />
    <div class="hot-container">
      <a class="hot-item" href="" v-for="item in sightList" :key="item.id">
        <div class="img-area">
          <img :src="item.img" alt="" />
          <span class="item-level"></span>
        </div>

        <h5 class="van-ellipsis">{{ item.name }}</h5>
        <p class="price">
          <span>￥{{ $priceFormat(item.price) }}</span>
          <span>起</span>
        </p>
      </a>
    </div>
  </div>
</template>


<script>
import { ajax } from '@/utils/ajax'
import { SightApis } from '@/utils/apis'
export default {
  data() {
    return {
      sightList: []
    }
  },
  methods: {
    getDataList() {
      console.log('hotApi:', SightApis.sightListUrl)
      ajax
        .get(SightApis.sightListUrl, {
          params: {
            is_hot: 1
          }
        })
        .then((res) => {
          console.log('hotRes:', res)
          this.sightList = res.data.objects
        })
    }
  },
  created() {
    this.getDataList()
  }
}
</script>

<style lang="less" scoped>
:deep(.van-icon__image) {
  height: 100%;
}

.hot-container {
  display: flex;
  flex-direction: row;

  padding: 0 10px;

  overflow-x: scroll;

  .hot-item {
    width: 100px;
    margin: 0 6px;
    .img-area {
      position: relative;

      img {
        width: 100%;
      }

      .item-level {
        position: absolute;
        left: 0;
        top: 0;

        width: 42px;
        height: 20px;

        z-index: 10;
      }
    }

    h5,
    .price {
      // 标题必须固定宽度，否则会因为标题文字长度不同影响容器大小
      width: 100px;
      margin: 4px 0;

      color: #212121;
      font-size: 12px;
    }

    .price {
      span {
        font-size: 14px;
        color: #f50;
      }
    }

    &:nth-child(1) .img-area span {
      background: url('/static/images/home/hot/top1.png') no-repeat;
      background-size: 100% auto;
    }

    &:nth-child(2) .img-area span {
      background: url('/static/images/home/hot/top2.png') no-repeat;
      background-size: 100% auto;
    }

    &:nth-child(3) .img-area span {
      background: url('/static/images/home/hot/top3.png') no-repeat;
      background-size: 100% auto;
    }
  }
}
</style>