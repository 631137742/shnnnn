<template>
  <div id="carousel">
    <el-row :gutter="10">
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
        <div class="grid-content bg-purple-light hidden-sm-and-down">
          <div class="aside-row-left"></div>
        </div>
      </el-col>
      <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
        <div class="grid-content bg-purple hidden-sm-and-down">
          <template>
            <el-carousel :interval="4000" type="card">
              <el-carousel-item v-for="item in slideshow" :key="item">
                <h3 class="carousel-images" :style="{ backgroundImage: 'url('+item+')' }"></h3>
              </el-carousel-item>
            </el-carousel>
          </template>
        </div>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
        <div class="grid-content bg-purple-light hidden-sm-and-down">
          <div class="aside-row-right"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
  name: 'carousel',
  components: {
  },
  data () {
    return {
      slideshow: [
        require('../../assets/324370.jpg'),
        require('../../assets/317840.jpg'),
        require('../../assets/317952.jpg'),
        require('../../assets/1000705.jpg'),
        require('../../assets/1000732.jpg'),
        require('../../assets/317843.jpg')
      ]
    }
  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #532745;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #14092f;
  }
  .carousel-images {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  body {
    overflow-x:hidden;
  }
  .grid-content {
    min-height: 36px;
  }
  .aside-row-left {
    width: 100%;
    height: 320px;
    background: url("../../assets/light.png") no-repeat 50% 0;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    transform-origin: 50% 0;
    animation: mygradual 4s infinite linear;
  }
  .aside-row-right {
    width: 100%;
    height: 320px;
    background: url("../../assets/light.png") no-repeat 50% 0;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    transform-origin: 50% 0;
    animation: mygradual 4s infinite linear;
  }
  @keyframes mygradual {
    0% {transform: rotate(350deg);}
    25% {transform: rotate(360deg);}
    50% {transform: rotate(370deg);}
    75% {transform: rotate(360deg);}
    100% {transform: rotate(350deg);}
  }
</style>
