import Vue from 'vue'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入echarts
import echarts from 'echarts'
import { Button, Select, Row, Col } from 'element-ui'
// 引入iconfont
import './assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont'

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
