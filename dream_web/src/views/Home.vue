<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg">
    <HelloWorld msg="这是home组件传给公共组件的值"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
