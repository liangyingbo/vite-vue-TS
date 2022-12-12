import { defineStore } from 'pinia'
import { RouteLocationNormalized, useRouter } from 'vue-router'


export const router = defineStore('router', {
    state: () => {
        return {
            routes: getRoutes()
        }
    },
})

function getRoutes() {
    const router = useRouter()
    const  routes = router.getRoutes().filter(route => route.children.length >0 && route.meta.show).map(route => {
       route.children =  route.children.filter(c=>c.meta?.show)

       return route.children.length ? route : null
    })
    return routes
}