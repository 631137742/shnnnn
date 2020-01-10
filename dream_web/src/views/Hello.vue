<template>
  <div id="hello">
    <Header />
    <Breadcrumb />
    <h1>123</h1>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Breadcrumb from '@/views/index/Breadcrumb.vue'
export default {
  name: 'hello',
  components: {
    Header,
    Breadcrumb
  }
}
</script>

<style scoped>

</style>
