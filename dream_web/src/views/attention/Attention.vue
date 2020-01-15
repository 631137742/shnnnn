<template>
  <div id="attention">
    <Breadcrumb />
    <h1>这是关注页</h1>
    <el-row :gutter="10">
      <el-col :xs="0" :sm="7" :md="6" :lg="6" :xl="7">
        <div class="grid-content bg-purple hidden-md-and-down"></div>
      </el-col>
      <el-col :xs="0" :sm="10" :md="12" :lg="12" :xl="10">
        <div class="grid-content bg-purple-light hidden-md-and-down">
          <el-tabs :tab-position="tabPosition" style="height: 100%;">
            <el-tab-pane label="用户管理">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="用户管理" name="first">
                  <el-card class="box-card">
                    <div v-for="o in 4" :key="o" class="text item">
                      {{'列表内容 ' + o }}
                    </div>
                  </el-card>
                </el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :xs="24" :sm="7" :md="6" :lg="6" :xl="7">
        <div class="grid-content bg-purple hidden-lg-and-up">
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
  name: 'attention',
  components: {
    Breadcrumb
  },
  data () {
    return {
      tabPosition: 'left',
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
