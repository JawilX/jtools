import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'JTools',
      icon: '',
    },
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/base64',
    name: 'base64',
    meta: {
      title: 'Base64编码',
      icon: '',
    },
    component: () => import('@/views/Base64.vue'),
  },
  {
    path: '/fibonacci',
    name: 'fibonacci',
    meta: {
      title: '斐波那契数',
      icon: '',
    },
    component: () => import('@/views/Fibonacci.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  console.log(`全局路由前置守卫：to: ${to.fullPath}, from: ${from.fullPath}`)
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
})

router.afterEach((to, from) => {
  console.log(`全局路由后置守卫：to: ${to.fullPath}, from: ${from.fullPath}`)
  NProgress.done()
})

export default router