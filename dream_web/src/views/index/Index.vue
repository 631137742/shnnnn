<template>
  <div id="index" class="index-bg">
    <Carousel />
    <Breadcrumb />
    <Cart />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import Carousel from '@/views/index/Carousel.vue'
import Cart from '@/views/index/Cart.vue'

export default {
  name: 'index',
  components: {
    Carousel,
    Breadcrumb,
    Cart
  }
}
</script>
<style>
  .index-bg {
    background-image: linear-gradient(to left, #532745, #14092f);
  }
</style>
