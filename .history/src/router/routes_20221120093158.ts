import { RouteRecordRaw } from "vue-router"
 const routes = [
    {
        path:'/home',
        name:'home',
        component:() => import("@/views/home.vue"),
    },
    {
        path:'/login',
        name:'login',
        component:() => import("@/views/auth/login.vue"),
    }
]  as  RouteRecordRaw[]

export default routes