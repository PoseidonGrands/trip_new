<template>
  <div class="page-home">
    <Banner />
    <Hot />
    <Star />
    <TripFooter />
  </div>
</template>


<script>
import Banner from '@/components/home/Bannner.vue'
import Hot from '@/components/home/Hot.vue'
import Star from '@/components/home/Star.vue'
import TripFooter from '@/components/common/Footer.vue'

export default {
  components: {
    Banner,
    Hot,
    Star,
    TripFooter
  }
}
</script>

<style lang="less" scoped>
.page-home {
  h1 {
    margin: 10px 0;

    text-align: center;
  }
}
</style>