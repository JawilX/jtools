import type { RouteRecordRaw, Router } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'

export const toolList: RouteRecordRaw[] = [
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
  {
    path: '/timestamp',
    name: 'timestamp',
    meta: {
      title: '时间戳转换',
      icon: '',
    },
    component: () => import('@/views/Timestamp.vue'),
  },
  {
    path: '/numberUpper',
    name: 'numberUpper',
    meta: {
      title: '数字转中文大写',
      icon: '',
    },
    component: () => import('@/views/NumberUpper.vue'),
  },
  {
    path: '/lunar',
    name: 'lunar',
    meta: {
      title: '老黄历',
      icon: '',
    },
    component: () => import('@/views/Lunar.vue'),
  },
]

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'JTools',
      icon: '',
      hide: true,
    },
    component: () => import('@/views/Home.vue'),
  },
  ...toolList,
]

const otherRoutes: RouteRecordRaw[] = [
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

const setupRouterGuard = (router: Router) => {
  router.beforeEach((to) => {
    document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE
    getDiscreteApi().loadingBar.start()
  })

  router.afterEach((to, from) => {
    getDiscreteApi().loadingBar.finish()
    const toDepth = to.path === '/' ? 1 : to.path.split('/').length
    const fromDepth = from.path === '/' ? 1 : from.path.split('/').length
    to.meta.transition = from.meta.transition = toDepth > fromDepth ? 'slide-left' : 'slide-right'
  })
}

export const setupRouter = async (app: App) => {
  const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_BASE),
    routes: [...routes, ...otherRoutes],
  })
  app.use(router)
  setupRouterGuard(router)
  await router.isReady()
}
