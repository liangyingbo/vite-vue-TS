import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import { setupMockPlugin } from './mock'
import { setupElementPlugin } from './element'

export default function setupPlugins(isBuild: boolean, env: Record<string, any>) {
    const plugins: Plugin[] = [vue()]

    
    setupElementPlugin(plugins)
    plugins.push(setupMockPlugin(isBuild))

    return plugins
}


