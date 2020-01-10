import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Index from '../views/index/Index.vue'
import About from '../views/About'
import Hello from '../views/Hello'

Vue.use(VueRouter)

export default new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      meta: { title: '首页', icon: '', noCache: true },
      children: [
        {
          path: '',
          component: Index,
          name: 'App'
        },
        {
          path: '/about',
          // redirect: 'about',
          name: 'About',
          component: About,
          meta: { title: 'about页', icon: 'about', noCache: true }
        },
        {
          path: '/hello',
          // redirect: 'about',
          name: 'Hello',
          component: Hello,
          meta: { title: 'hello页', icon: 'hello' }
        }
      ]
    }
  ]
})
