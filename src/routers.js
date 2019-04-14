// 配置路由文件
import Vue from 'vue'
import Vuerouter from 'vue-router'

Vue.use(Vuerouter)

const routes = [
  { path: '/',
    component: () => import('./views/Home.vue'),
    children: [
      { path: '/film',
        component: () => import('./views/Films.vue'),
        children: [{ path: 'comingSoon', component: () => import('./components/Comingsoon.vue') },
          { path: 'nowPlaying', component: () => import('./components/Nowlaying.vue') },
          { path: '', redirect: '/film/nowPlaying' }
        ] },
      { path: 'cinemas', component: () => import('./views/Cinemas.vue') },
      { path: 'center', component: () => import('./views/Centers.vue') },
      { path: '', redirect: '/film/nowPlaying' }
    ]
  },
  { path: '/city', component: () => import('./views/Citys.vue') },
  { path: '/flim/:id', name: 'detail', component: () => import('./views/Detail.vue') },
  { path: '/cart', component: () => import('./views/Cart.vue') },
  { path: '/login', component: () => import('./views/Login.vue'),
    beforeEnter:(to,from,next)=>{

    }
  },
  { path: '*', redirect: '/film/nowPlaying' }
]

let router = new Vuerouter({
  routes
})
router.beforeEach((to, from, next) => {
 next()
})
export default router
