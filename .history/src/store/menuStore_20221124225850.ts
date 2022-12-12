import { defineStore } from 'pinia'
import { IMenu } from 'types/menu'
import { useRouter } from 'vue-router'


export default defineStore('menu', {
    state: () => {
        return {
            menus: [] as IMenu[]
        }
    },
    actions: {
        getMenusByRoute() {
            const router = useRouter()
            const routes = router.getRoutes().filter(route => route.children.length  && route.meta).map(route => {
                route.children = route.children.filter(route => route.meta?.menu).map(route =>{
                    return route.meta
                })
                
                return route
            })
            return routes.filter(route => route.children.length)
        }
    }
})

 