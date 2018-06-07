import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve)
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/components/about'], resolve)
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: resolve => require(['@/components/doctor'], resolve)
    }
  ]
})
