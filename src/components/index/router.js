import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Agent from './Agent.vue'
// console.log(Agent)
Vue.use(Router)

var router = new Router({
  // mode: 'hash',
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  // base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/OAuth2',
      name: 'OAuth2',
      component: () => import('./login.vue'),
      children: [
        {
          path: 'Agent',
          name: 'Agent',
          components: {
            loginView: () => import('./Agent.vue'),
          },
          props:{
            loginView:true
          }
        },

      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },

  ]
})
router.beforeEach(function(to,from,next){
    console.log(to);
    next()
})

export default router;