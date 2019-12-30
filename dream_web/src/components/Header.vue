<template>
  <div class="header">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-logo"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="iconfont iconsearch grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconOrange"></use>
          </svg>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      head: '您好'
    }
  }
}
</script>

<style scoped>
  .bg-logo {
    background: white url("../assets/logoin.png") no-repeat scroll center;
    background-size: contain;
  }
  /*.bg-purple-light {*/
  /*  background: #e5e9f2;*/
  /*}*/
  .grid-content {
    min-height: 36px;
  }
</style>
