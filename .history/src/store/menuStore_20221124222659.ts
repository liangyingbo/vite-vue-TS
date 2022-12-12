import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'


export const router = defineStore('menu', {
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

       return route
    })
    return routes.filter(route => route.children.length)
}