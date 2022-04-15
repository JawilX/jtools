/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
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

declare interface Window {
  $message: import('naive-ui/lib/message/src/MessageProvider').MessageApiInjection
}
