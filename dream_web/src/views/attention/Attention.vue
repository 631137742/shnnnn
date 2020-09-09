<template>
  <div id="attention">
    <Breadcrumb />
    <el-row :gutter="10">
      <el-col :xs="0" :sm="7" :md="6" :lg="6" :xl="7">
      </el-col>
      <el-col :xs="0" :sm="10" :md="12" :lg="12" :xl="10">
        <iframe id="previewPdf" :src="'http://www.mingjunguoji.com/BIZ/pdf/web/viewer.html?file=' + url" scrolling="no"></iframe>
      </el-col>
      <el-col :xs="24" :sm="7" :md="6" :lg="6" :xl="7">
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
      url: 'http://pic1.saf158.cn/UF/PDF/saf158.com/1970/LVB/%E6%99%BA%E6%85%A7%E4%BA%91%E5%B1%8F-%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D.pdf'
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
iframe {
    width: 100%;
    height: 800px;
}
</style>
