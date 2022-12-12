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
    return router.getRoutes().filter(route => route.children.length && route.meta.show).map(route => {
     return  route.children =  route.children.filter(c=>c.meta?.show)
    })
    console.log(r)
}