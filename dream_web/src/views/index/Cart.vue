<template>
  <div id="cart">
    <el-row :gutter="10">
      <el-col :xs="4" :sm="2" :md="3" :lg="3" :xl="3">
        <div class="grid-content bg-purple hidden-md-only"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
        <div class="grid-content bg-purple hidden-sm-and-down">
          <el-card class="box-card">
            <div v-for="item in images" :key="item.id" class="text item">
              <router-link to="#"><img class="board-images" :src="item.img_url" alt="加载失败..."></router-link>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item cart-baseline">
              <router-link class="cart-title" to="#">标题</router-link>
              <p class="abstract">{{'列表内容 ' + o }}</p>
              <div class="meta">
                <span>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconicon-test15"></use>
                  </svg>
                  浏览量
                </span>
                <router-link to="#">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icongeren"></use>
                  </svg>
                  用户名
                </router-link>
                <router-link to="#">
                  <svg class="icon icon-image" aria-hidden="true" :plain="true">
                    <use xlink:href="#iconbianpinghuatubiaosheji-14"></use>
                  </svg>
                  评论
                </router-link>
                <span>
                  <i>
                    <svg class="icon icon-image" aria-hidden="true" :plain="true">
                      <use xlink:href="#iconbianpinghuatubiaosheji-"></use>
                    </svg>
                    赞
                  </i>
                </span>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="5" :xl="5">
        <div class="grid-content bg-purple hidden-sm-and-down">
          <el-card class="box-card">
            <h2>
              <svg class="icon icon-image icon-user" aria-hidden="true" :plain="true">
                <use xlink:href="#iconbianpinghuatubiaosheji-9"></use>
              </svg>
              推荐作者
            </h2>
            <div v-for="item in recommend" :key="item.id" class="text item aside-list">
              <el-row :gutter="0" type="flex" align="bottom">
                <el-col :xs="24" :sm="24" :md="24" :lg="19" :xl="18">
                  <div class="grid-content bg-purple">
                    <router-link to="#">
                      <img class="head-portrait" :src="item.images" alt="头像加载失败">
                      <div class="aside-lally">
                        <h3>{{'列表内容 ' + item.title }}</h3>
                        <p>1k+喜欢</p>
                      </div>
                    </router-link>
                  </div>
                </el-col>
                <el-col :offset="3" :xs="4" :sm="4" :md="4" :lg="5" :xl="6">
                  <div class="grid-content bg-purple-light hidden-md-and-down">
                    <router-link class="aside-follow" to="#">&nbsp;关注+</router-link>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="4" :sm="2" :md="3" :lg="2" :xl="2">
        <div class="grid-content bg-purple hidden-md-only"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
  name: 'cart',
  components: {
  },
  data () {
    return {
      images: [],
      recommend: [
        { id: 1, title: '作者shnnnn', images: require('../../assets/head-portrait.png') },
        { id: 2, title: '作者2', images: require('../../assets/head-portrait1.png') }
      ]
    }
  },
  methods: {
    handleImage () {
      // this.$axios.get(
      //   '/api/imageList'
      // ).then(res => {
      //   console.log('广告栏已被过滤器拦截')
      //   this.images = res.data
      // })
      this.images = [
        { id: 1, img_url: require('@/assets/advertising/grid-content1.jpg') },
        { id: 2, img_url: require('@/assets/advertising/grid-content2.jpg') },
        { id: 3, img_url: require('@/assets/advertising/grid-content3.jpg') },
        { id: 4, img_url: require('@/assets/advertising/grid-content4.jpg') }
      ]
    }
  },
  created () {
    this.handleImage()
  }
}
</script>

<style>
  .icon-user {
    width: 2em;
    height: 2em;
    margin-right: 1em;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
  }
  .box-card h2 {
    display: flex;
    align-items: center;
    margin: 0 auto;
    height:100%;
  }
  .cart-baseline {
    border-bottom: 1px solid #f0f0f0;
  }
  .board-images {
    width: 100%;
  }
  .cart-title {
    color: black;
    font-size: 18px;
    text-decoration: none;
    margin: -7px 0 4px;
    display: inherit;
    font-weight: 700;
    line-height: 1.5;
  }
  .abstract {
    color: #999;
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 1em;
  }
  .meta a {
    color: black;
    text-decoration: none;
    margin-right: 10px;
  }
  .meta span {
    margin-right: 10px;
  }
  .aside-list {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .aside-list a {
    color: black;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-content: center;
    flex-wrap: nowrap;
  }
  .aside-list .aside-follow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .aside-list a .head-portrait {
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .aside-list a .aside-lally {
    width: 100%;
    height: 100%;
    margin: auto 10px;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  .aside-list a .aside-lally p {
    color: #969696;
    font-size: 12px;
    margin-top: 10px;
  }
</style>
