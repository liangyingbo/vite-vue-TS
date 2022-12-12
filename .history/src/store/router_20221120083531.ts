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
    // console.log(router.getRoutes())
    const r = router.getRoutes().filter(route => route.children.length && route.meta.show).forEach(route => {
      route.children =  route.children.filter(c=>c.meta?.show)
    })
    console.log(r)
}