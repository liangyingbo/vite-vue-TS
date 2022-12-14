import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes';
import autoload from './autoLoad';
import guard from './guard';
import user from '@/store/user';
const router = createRouter({
    history: createWebHashHistory(),
    routes : [...routes]
})
export async function setupRouter(app:App){
    const u = user()
    await u.getUserInfo()
    autoload(router)
    guard(router)  
    app.use(router)
}

export default router;
