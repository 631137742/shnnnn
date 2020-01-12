<template>
  <div id="index" class="index-bg">
    <Header />
    <Carousel />
    <Breadcrumb />
    <Cart />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Carousel from '@/views/index/Carousel.vue'
import Breadcrumb from '@/views/index/Breadcrumb.vue'
import Cart from '@/views/index/Cart.vue'

export default {
  name: 'index',
  components: {
    Header,
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
