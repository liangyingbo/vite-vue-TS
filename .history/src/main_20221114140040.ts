import { createApp } from 'vue'
import './style.css'
import router, { setupRouter } from '@/router'
import { setupPlugins } from '@/plugins'
import App from './App.vue'

async function bootstrap() {
    const app = createApp(App)
    setupRouter(app)
    setupPlugins(app)
    await router.isReady()
    setTimeout(() =>{
        app.mount('#app')

    },1000)
}
bootstrap()

