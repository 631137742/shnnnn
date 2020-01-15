<template>
  <div id="footer" class="footer">
    <el-row class="footer-row" :gutter="10">
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
        <div class="grid-content bg-purple footer-section">
          <h4 class="footer-top">客服中心</h4>
          <ul class="footer-list">
            <li>
              <router-link to="#" class="footer-font">请联系在线QQ客服</router-link>
            </li>
            <li>
              <p class="footer-font">上午 9:00 - 晚上 22:00</p>
            </li>
            <li>
              <p class="footer-font">国家法定节假日休息</p>
            </li>
            <li>
              <img class="w-25" src=""/>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
        <div class="grid-content bg-purple-light footer-section">
          <h4 class="footer-top">SHNNNN 中国官网</h4>
          <img class="footer-logo" src="../assets/footer-logo.png"/>
        </div>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
        <div class="grid-content bg-purple footer-section">
          <h4 class="footer-top">shnnnn.cn 中国官网</h4>
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
  name: 'Footer'
}
</script>

<style>
  .footer {
    background-color: black;
  }
  .footer-top {
    color: white;
    font-size: 16px;
    line-height: 1.5;
  }
  .footer-font {
    color: white;
    font-size: 14px;
    line-height: 1.5;
    text-decoration: none;
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
  .footer-logo {
    width: 10%;
    height: 10%;
  }
</style>
