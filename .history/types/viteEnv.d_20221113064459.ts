
interface IViteEnv {
    VITE_SOME_KEY: number
    VITE_AUTOLOAD: boolean
    VITE_BASE_URL: string
}


interface ImportMetaEnv extends{
    readonly VITE_APP_TITLE: string
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }