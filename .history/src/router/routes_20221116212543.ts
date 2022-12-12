import { RouteRecordRaw } from "vue-router"
 const routes = [
    {
        path:'/home',
        component:() => import("@/views/home.vue"),
    }
]  as  RouteRecordRaw[]

export default routes