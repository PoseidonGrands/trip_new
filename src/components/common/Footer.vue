<!-- 底部导航栏 -->
<template>
  <div class="footer">
    <van-tabbar v-model="active" route>
      <van-tabbar-item name="home" icon="wap-home-o" info="3" :to="{ name: 'homePage' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="search" icon="search" :to="{ name: 'searchPage' }"
        >搜索</van-tabbar-item
      >
      <van-tabbar-item name="mine" icon="user-o" to="#">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      active: 'home'
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  padding-top: 50px;
}
</style>