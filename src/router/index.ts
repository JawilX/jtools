import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'

export const homeChildren: Array<RouteRecordRaw> = [
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
  {
    path: '/hexConvert',
    name: 'hexConvert',
    meta: {
      title: '进制转换',
      icon: '',
    },
    component: () => import('@/views/HexConvert.vue'),
  },
  {
    path: '/deduplication',
    name: 'deduplication',
    meta: {
      title: '统计重复行数',
      icon: '',
    },
    component: () => import('@/views/Deduplication.vue'),
  },
  {
    path: '/characterCount',
    name: 'characterCount',
    meta: {
      title: '字符数统计',
      icon: '',
    },
    component: () => import('@/views/CharacterCount.vue'),
  },
  {
    path: '/tinyimg',
    name: 'tinyimg',
    meta: {
      title: '图片压缩',
      icon: '',
    },
    component: () => import('@/views/TinyImg.vue'),
  },
]

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'JTools',
      icon: '',
      hide: true,
    },
    component: () => import('@/views/Home.vue'),
    children: homeChildren,
  },
]

const otherRoutes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'test',
    meta: {
      title: '测试',
      icon: '',
    },
    component: () => import('@/views/Test.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...otherRoutes],
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
