import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/Layout.vue')
  },
  {
    path: '/getfile/:fileid',
    name : 'CheckFile',
    component : () => import('../views/CheckFile')
  },
  {
    path: '/success/:fileid',
    name: 'Success',
    component: () => import('../views/ResultPages/SuccessDownload.vue')
  },
  {
    path: '/filenotfound',
    name: 'FileNotFound',
    component: () => import('../views/ResultPages/FileNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
