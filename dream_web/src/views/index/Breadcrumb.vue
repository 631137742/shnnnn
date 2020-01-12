<template>
  <div class="breadcrumb">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="grid-content bg-purple hidden-xs-only">
          <el-container id="breadcrumb">
            <el-header>
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
              </el-breadcrumb>
            </el-header>
          </el-container>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
  name: 'breadcrumb',
  data () {
    return {
      levelList: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== 'App'.toLocaleLowerCase()) {
        matched = [{ path: '', meta: { title: 'App' } }].concat(matched)
      }
      this.levelList = matched
      console.log(matched)
    }
  }
}
</script>

<style scoped>
  .el-header {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    align-items: center;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-breadcrumb__item>>>.el-breadcrumb__separator{
    color: #5e72e4;
  }
</style>
