import Vue from 'vue'
import Router from 'vue-router'
import Page from './page.vue'
console.log(process.env)
console.log(__dirname)
Vue.use(Router);
export default new Router({
  // mode:'hash',
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ './index.vue')
    },
    {
      path: '/page',
      name: 'page',
      component: () => import(/* webpackChunkName: "about" */ './page.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import(/* webpackChunkName: "about" */ '../HelloWorld.vue')
    }
  ]
})
