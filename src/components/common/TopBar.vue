<template>
  <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="goBack" />
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  components: {}
}
</script>