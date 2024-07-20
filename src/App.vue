<template>
  <Home />
  <TripFooter />
</template>

<script>
import Home from '@/views/Home.vue'
import TripFooter from '@/components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    Home,
    TripFooter
  }
}
</script>

