import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(env => {
  // env 环境变量
  const viteEnv = loadEnv(env.mode, `.env.${env.mode}`)

  return {
    base: viteEnv.VITE_BASE,
    plugins: [vue()],
    // 别名设置
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      host: true,
      port: 3000,
      open: true,
      proxy: {},
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
