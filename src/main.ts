import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import naive from 'naive-ui'
import '@/plugins/day'

import './assets/styles/index.css'
import 'normalize.css'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)
app.config.globalProperties.window = window
app.use(router).use(naive).mount('#app')
