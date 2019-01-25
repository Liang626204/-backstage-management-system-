import Vue from 'vue'
import Router from 'vue-router'
/* 主页 */
import Home from './views/Home.vue'
/* 登录页 */
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    /* 主页 */
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'default',
      redirect: { name : 'home'}
    },
    /* 登录页 */
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
