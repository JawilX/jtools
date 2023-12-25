declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string | boolean | undefined>> {
  readonly VITE_APP_TITLE: string
  readonly VITE_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
