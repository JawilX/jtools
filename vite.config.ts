import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_BASE,
    define: {
    // disable Options API support
      __VUE_OPTIONS_API__: false,
    },
    // 别名设置
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
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

      // https://github.com/antfu/unocss
      // see uno.config.ts for config
      UnoCSS(),
    ],
  }
})
