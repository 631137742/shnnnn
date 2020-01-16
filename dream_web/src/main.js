import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入echarts
import echarts from 'echarts'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Button,
  Select,
  Row,
  Col,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Tabs,
  TabPane,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Carousel,
  CarouselItem,
  Header,
  Container,
  Aside,
  Main,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Message
} from 'element-ui'
// 引入iconfont
import './assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont'

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.use(Input)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(RadioButton.name, RadioButton)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Header.name, Header)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Card.name, Card)
Vue.component(Message.name, Message)

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
