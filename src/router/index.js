import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/industrial',
    name: 'industrial',
    component: () => import('../views/Industrial/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/index.vue')
  },
  {
    path: '/recruitment',
    name: 'recruitment',
    component: () => import('../views/Recruitment/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/News/index.vue')
  },
  {
    path: '/product',
    name: 'product',
    redirect: '/product/serve',
    component: () => import('../views/product/index.vue'),
    children: [
      {
        path: '/product/serve',
        name: 'serve',
        component: () => import('../views/product/children/serve.vue')
      }, 
      {
        path: '/product/homeland',
        name: 'homeland',
        component: () => import('../views/product/children/homeland.vue')
      },
      {
        path: '/product/market',
        name: 'market',
        component: () => import('../views/product/children/market.vue')
      },
      {
        path: '/product/mall',
        name: 'mall',
        component: () => import('../views/product/children/mall.vue')
      },
      {
        path: '/product/exploit',
        name: 'exploit',
        component: () => import('../views/product/children/exploit.vue')
      },
      {
        path: '/product/renting',
        name: 'renting',
        component: () => import('../views/product/children/renting.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
