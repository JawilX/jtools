/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_BASE: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
