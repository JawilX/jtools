import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import naive from 'naive-ui'

import './assets/styles/index.css'
import 'normalize.css'

const app = createApp(App)
app.config.globalProperties.window = window
app.use(router).use(naive).mount('#app')
