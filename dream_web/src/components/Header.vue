<template>
  <div id="header" class="header">
    <el-row class="header-row" :gutter="10">
      <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="4">
        <router-link to="/">
          <div class="grid-content bg-logo"></div>
        </router-link>
      </el-col>
      <el-col :xs="0" :sm="15" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple-light header-button">
          <router-link to="/about">发现</router-link>
          <router-link to="/hello">关注</router-link>
          <router-link to="/">消息</router-link>
        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple hidden-sm-only">
          <div class="header-search-box">
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button class="header-search-btn" slot="append" icon="iconfont iconsearch"></el-button>
            </el-input>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple-light header-drop-down-list">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              下拉菜单
              <i>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconicon-test7"></use>
                </svg>
              </i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a" divided>黄金糕</el-dropdown-item>
              <el-dropdown-item command="b" divided>狮子头</el-dropdown-item>
              <el-dropdown-item command="c" divided>螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="d" divided disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
  name: 'Header',
  data () {
    return {
      head: '您好'
    }
  },
  methods: {
    handleCommand (command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>

<style scoped>
  .header {
    background-color: #563d7c;
  }
  .header-row {
    width: 100%;
    height: 80px;
    padding-top: 15px;
  }
  .bg-logo {
    background: #563d7c url("../assets/logoin.png") no-repeat scroll center;
    background-size: contain;
  }
  .grid-content {
    min-height: 36px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .header-drop-down-list{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-drop-down-list span{
    color: #fff;
    font-size: 16px;
  }
  .header-drop-down-list span:hover{
    color: #5e72e4;
    /*color: #525f7f;*/
  }
  .header-button{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-button a{
    width: 100%;
    height: 100%;
    margin: 4px;
    background-color: #563d7c;
    border: 1px solid #563d7c;
    color: #fff;
    text-decoration: none;
  }
  .header-button a:hover{
    color: #5e72e4;
  }
  .header-search-box .input-with-select{
    width: 50%;
  }
  .header-search-box .header-search-btn{
    background-color: #f5f7fa;
  }
  .header-search-box .header-search-btn:hover{
    border: #ddd;
    background-color: #563d7c;
  }
</style>
