<template>
  <div id="footer" class="footer">
    <el-row class="footer-row" :gutter="10">
      <el-col :xs="24" :sm="7" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple footer-section">
          <h4 class="footer-top">
            客服中心
          </h4>
          <ul class="footer-list">
            <li>
              <router-link to="#" class="footer-font">请联系在线QQ客服</router-link>
            </li>
            <li>
              <p class="footer-font">上午 9:00 - 晚上 22:00</p>
            </li>
            <li>
              <p class="footer-font">国家法定节假日休息</p>
              <svg class="icon icon-image icon-contacts" aria-hidden="true" :plain="true" @click="open5">
                <use xlink:href="#iconicon-test12"></use>
              </svg>
              <svg class="icon icon-image icon-contacts" aria-hidden="true" :plain="true" @click="open6">
                <use xlink:href="#iconicon-test11"></use>
              </svg>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="12" :lg="12" :xl="12">
        <div class="grid-content bg-purple-light footer-section footer-border">
          <h4 class="footer-top">SHNNNN 中国官网</h4>
          <img class="footer-logo" src="../assets/footer-logo.png"/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="7" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple footer-section">
          <h4 class="footer-top">shnnnn.cn</h4>
          <p class="footer-font">地 址 57, HANNAM-DAERO, YONGSAN-GU, SEOUL</p>
          <p class="footer-font">REPUBLIC OF KOREA 5F</p>
          <p class="footer-font">电 话 0082-2-70-7416-6731~2</p>
          <p class="footer-font">邮 箱 wxt1214633619@163.com</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  methods: {
    open5 () {
      this.$message({
        showClose: true,
        message: '客服微信：wxt1214633619'
      })
    },
    open6 () {
      this.$message({
        showClose: true,
        message: 'Git：https://github.com/631137742/shnnnn.git'
      })
    }
  }
}
</script>

<style>
  .footer {
    background-color: black;
  }
  .footer-top {
    color: #999;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
  }
  .footer-font {
    color: #999;
    font-size: 1rem;
    line-height: 1.5;
    text-decoration: none;
  }
  .footer-border {
    border-right: 1px solid #dee2e6;
    border-left: 1px solid #dee2e6;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer-list {
    list-style: none;
  }
  .icon-contacts {
    width: 2em;
    height: 2em;
    margin-left: 1em;
  }
  .footer-logo {
    width: 10%;
    height: 10%;
  }
</style>
