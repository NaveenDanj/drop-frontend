import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';


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
    component: () => import('../views/Auth/Login.vue'),
    meta: { maintenance: false} 
  },
  {
    path: '/recoverpwd',
    name: 'RecoverPassword',
    component: () => import('../views/Auth/ResetPassword/RecoverPassword.vue'),
    meta: { maintenance: true} 
  },
  {
    path: '/recoverlinksuccess',
    name: 'RecoverPasswordLinkSuccess',
    component: () => import('../views/Auth/ResetPassword/ResetLinkSuccess.vue'),
    meta: { maintenance: true} 
  },
  {
    path: '/recoverpasswordsuccess',
    name: 'RecoverPasswordSuccess',
    component: () => import('../views/Auth/ResetPassword/RecoverPasswordSuccess.vue'),
    meta: { maintenance: true} 
  },
  {
    path: '/resetpwd/:token',
    name: 'ResetPassword',
    component: () => import('../views/Auth/ResetPassword/ResetPassword.vue'),
    meta: { maintenance: true} 
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/Register.vue'),
    meta: { maintenance: false} 
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/Layout.vue'),
    meta: { requiresAuth: true}
    // meta: { maintenance : false}
  },
  {
    path: '/getfile/:fileid',
    name : 'CheckFile',
    component : () => import('../views/CheckFile')
  },
  {
    path: '/passwordprotected/:fileid',
    name : 'PasswordProtected',
    component : () => import('../views/ResultPages/PasswordProtected.vue')
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
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: () => import('../views/Maintenance.vue')
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/ErrorPages/SomethingWentWrong.vue')
  },
  {
    path: '*',
    name: 'ErrorNotFound',
    component: () => import('../views/ErrorPages/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.maintenance)) {

    if (to.path !== '/maintenance') {
      next({
        path: '/maintenance'
      })
    }
    
  } else {
    next();
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.currentUser == null || localStorage.getItem('token') == null ) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
