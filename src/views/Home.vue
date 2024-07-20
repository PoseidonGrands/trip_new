<template>
  <div class="page-home">
    <h1>Trip</h1>
    <Banner />
    <Hot />
    <Star />
  </div>
</template>


<script>
import Banner from '@/components/home/Bannner.vue'
import Hot from '@/components/home/Hot.vue'
import Star from '@/components/home/Star.vue'

export default {
  components: {
    Banner,
    Hot,
    Star
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