import { RouteRecordRaw } from "vue-router"
 const routes = [
    {
        path:'/home',
        name:'home',
        component:() => import("@/views/home.vue"),
        meta:{guest:true}
    },
    {
        path:'/login',
        name:'login',
        component:() => import("@/views/auth/login.vue"),
        meta:{guest:true}
    }
]  as  RouteRecordRaw[]

export default routes