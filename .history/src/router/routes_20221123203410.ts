import { RouteRecordRaw } from "vue-router"
 const routes = [
    {
        path:'/home',
        name:'home',
        component:() => import("@/views/home.vue"),
        meta:{auth:true}
    },
    {
        path:'/login',
        name:'login',
        component:() => import("@/views/auth/login.vue"),
        meta:{guest:true}
    },
    {
        path:'*',

        name:'NotFound',
        component:() => import("@/views/errors/404.vue")
    }
]  as  RouteRecordRaw[]

export default routes