<template>
  <div class="page-mine">
    <van-nav-bar title="个人中心" />
    <div class="header">
      <p class="avatar">
        <van-image
          round
          width="5rem"
          height="5rem"
          fit="cover"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </p>
      <p class="title tip">欢迎您，{{ username }}</p>
      <p class="logout tip"><router-link to="#">退出登录</router-link></p>
    </div>
    <!-- 订单的菜单列表 -->
    <van-row class="options">
      <van-col span="6">
        <p><van-icon size="25px" name="records-o" /></p>
        <p>全部订单</p>
      </van-col>
      <van-col span="6">
        <p><van-icon size="25px" name="pending-payment" /></p>
        <p>待支付</p>
      </van-col>
      <van-col span="6">
        <p><van-icon size="25px" name="certificate" /></p>
        <p>已完成</p></van-col
      >
      <van-col span="6">
        <p><van-icon size="25px" name="failure" /></p>
        <p>已取消</p>
      </van-col>
    </van-row>
  </div>
  <TripFooter />
</template>

<script>
import TripFooter from '@/components/common/Footer.vue'
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    TripFooter
  }
}
</script>

<style lang="less" scoped>
.page-mine {
  .van-nav-bar {
    background-color: transparent;
  }
  .header {
    height: 200px;

    padding-top: 15px;

    background: url('/static/images/mine/bg.jpg') no-repeat center;
    background-size: 100% auto;

    p {
      text-align: center;
    }

    .avatar {
      width: 100%;
      // margin-top: 15px;
      text-align: center;
    }

    .tip {
      text-align: center;
      color: #fff;
      font-size: 18px;
    }
  }

  .options {
    padding: 15px;
    .van-icon {
      width: 100%;
      text-align: center;
    }
    p {
      margin: 0;
      text-align: center;
    }
  }
}
</style>