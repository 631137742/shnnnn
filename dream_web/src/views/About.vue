<template>
  <div class="about">
    <Header />
    <Breadcrumb />
    <div id="myChart" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Breadcrumb from '@/views/index/Breadcrumb.vue'

export default {
  name: 'about',
  components: {
    Header,
    Breadcrumb
  },
  mounted () {
    this.drawColumn()
  },
  methods: {
    drawColumn () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style>
.about {
  display: flex;
  flex-flow: column nowrap;
}
#myChart {
  align-self: center;
}
</style>
