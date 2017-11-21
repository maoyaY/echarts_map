import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import * as types from '../store/mutation-types'

Vue.use(Router)

const Index = resolve => require(['components/index'], resolve)
const Login = resolve => require(['components/login'], resolve)

const routers = [
  {
    path: '/index',
    name: 'Index',
    meta: {
      requiresAuth: true
    },
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
const router = new Router({
  routes: routers
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router
