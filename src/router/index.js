import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/clients')
  },
  {
    path: '/servers',
    name: 'servers',
    component: () => import('@/views/clients')
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import('@/views/clients')
  },
  {
    path: '/relay',
    name: 'relay',
    component: () => import('@/views/clients')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
