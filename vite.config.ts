import { URL, fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // env 环境变量
  const viteEnv = loadEnv(mode, process.cwd())

  return {
    base: viteEnv.VITE_BASE,
    define: {
      // disable Options API support
      __VUE_OPTIONS_API__: false,
    },
    plugins: [
      Vue(),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        dts: 'src/auto-import.d.ts',
        dirs: ['src/composables', 'src/stores'],
        vueTemplate: false,
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dts: 'src/components.d.ts',
        resolvers: [NaiveUiResolver()],
      }),

      visualizer(),
    ],
    // 别名设置
    resolve: {
      alias: {
        '@': fileURLToPath((new URL('./src', import.meta.url))),
      },
    },
  }
})
