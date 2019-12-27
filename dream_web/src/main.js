import Vue from 'vue'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select } from 'element-ui'

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
