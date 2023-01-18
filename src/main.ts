import { createPinia } from 'pinia'
import App from './App.vue'
import { setupRouter } from '@/router'
import '@/plugins/day'

import './assets/styles/index.css'
import './assets/styles/naive.css'
import 'normalize.css'

async function setupApp() {
  const app = createApp(App)
  const pinia = createPinia()
  app.use(pinia)
  await setupRouter(app)
  resolveNaiveAndTailwindConflict()
  app.mount('#app')
}

function resolveNaiveAndTailwindConflict() {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}

setupApp()
