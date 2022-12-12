import { createApp } from 'vue'
import './style.css'
import router,{ setupRouter } from '@/router'
import {setupPlugins} from '@/plugins'
import App from './App.vue'
import hdInput from '@/components/form/hd-input.vue'
 async function bootstrap() {
    const app = createApp(App)
    setupRouter(app)
    setupPlugins(app)
    app.component('hdInput',hdInput)
    await router.isReady()
    app.mount('#app')
}
bootstrap()

