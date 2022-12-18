import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import { setupMockPlugin } from './mock'
import  autoImport  from './autoImport'

export default function setupPlugins(isBuild: boolean, env: Record<string, any>) {
    const plugins: Plugin[] = [vue()]

    
    autoImport(plugins)
    plugins.push(setupMockPlugin(isBuild))

    return plugins
}


