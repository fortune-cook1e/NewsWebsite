import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/home')
  },
  {
    path: '/news/:id',
    name: 'news',
    component: () => import(/* webpackChunkName:'article' */ '@/views/news')
  }
]

const router = new VueRouter({
  routes
})

export default router
