import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Index from '../views/index/Index'
import Login from '../views/login/Login'
import About from '../views/about/About'
import Attention from '../views/attention/Attention'

Vue.use(VueRouter)

export default new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'Index',
      redirect: 'index',
      component: Home,
      meta: { title: '首页', icon: '/', noCache: true },
      children: [
        {
          path: '/',
          component: Index
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
          meta: { title: 'login页', icon: 'login', noCache: true }
        },
        {
          path: '/about',
          name: 'About',
          component: About,
          meta: { title: 'about页', icon: 'about', noCache: true }
        },
        {
          path: '/attention',
          name: 'Attention',
          component: Attention,
          meta: { title: 'attention页', icon: 'attention' }
        }
      ]
    }
  ]
})
