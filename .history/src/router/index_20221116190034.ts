import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes';
import layoutRoutes from './autoLoad';
import guard from './guard';
const router = createRouter({
    history: createWebHashHistory(),
    routes : [...routes,...layoutRoutes]
})

export function setupRouter(app:App){

    guard()
    app.use(router)
}

export default router;