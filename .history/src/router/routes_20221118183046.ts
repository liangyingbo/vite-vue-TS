import { RouteRecordRaw } from "vue-router"
 const routes = [
    {
        path:'/home',
        name:'hoem'
        component:() => import("@/views/home.vue"),
    }
]  as  RouteRecordRaw[]

export default routes