import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes';
import layoutRoutes from './autoLoad';
import guard from './guard';
const router = createRouter({
    history: createWebHashHistory(),
    routes : [...routes,...layoutRoutes]
})
guard(router)
export function setupRouter(app:App){

  
    app.use(router)
}

export default router;