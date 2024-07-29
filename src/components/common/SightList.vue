<template>
  <div class="sight-item-container">
    <router-link :to="{ name: 'sightDetailPage', params: { id: item.id } }">
      <a class="sight-item" href="#">
        <img :src="item.img" alt="" />
        <div class="info">
          <h2 class="title">{{ item.name }}</h2>
          <van-rate v-model="item.score" allow-half void-icon="star" void-color="#eee" />
          <div class="tips">
            <span>{{ item.comment_count }}人点评</span>|<span
              >{{ $countSatis(item.score) }}%满意</span
            >
          </div>
          <div class="tips light">
            <span>{{ item.province }}省</span>-<span>{{ item.city }}市</span>
          </div>
          <span class="price">￥{{ $priceFormat(item.price) }}起</span>
        </div>
      </a>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="less" scoped>
.sight-item-container {
  padding: 0 16px;
  .sight-item {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 120px;
    padding: 8px 0;

    border-bottom: 1px solid #f6f6f6;

    .info {
      flex-grow: 1;
      position: relative;

      margin-left: 10px;

      img {
        width: 100px;
      }

      h2 {
        margin: 2px 0;

        font-size: 18px;
        color: #212121;
      }

      .tips {
        margin: 4px 0;

        color: #666;
        font-size: 12px;
        &.light {
          color: #999;
        }
      }

      .price {
        position: absolute;

        right: 0;
        top: 40px;

        color: #f50;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>