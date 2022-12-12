
interface IViteEnv {
    VITE_SOME_KEY: number
    VITE_AUTOLOAD: boolean
    VITE_BASE_URL: string
}


interface ImportMetaEnv extends IViteEnv{
    readonly VITE_APP_TITLE: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }