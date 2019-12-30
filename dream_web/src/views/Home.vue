<template>
  <div class="home">
    <HelloWorld msg="这是home组件传给公共组件的值"/>
    <img alt="Vue logo" src="../assets/QQ.jpg">
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
