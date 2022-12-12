import { createApp } from 'vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from '@/plugins'
import '@/styles/global.scss'
import App from './App.vue'

async function bootstrap() {
    const app = createApp(App)
    setupRouter(app)
    setupPlugins(app)
    await router.isReady()
    app.mount('#app')
}
bootstrap()

