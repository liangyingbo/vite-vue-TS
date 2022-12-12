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
        init() {
            console.log(this.getMenusByRoute())
            this.getMenusByRoute()
        },
        getMenusByRoute() {
            const router = useRouter()
            
              this.menus = router.getRoutes().filter(route => route.children.length && route.meta.menu).map(route => {
                // console.log(route)
                let menu = { ...route.meta.menu }
                menu.children = route.children.filter(route => route.meta?.menu).map(route => {
                    return route.meta?.menu
                }) as IMenu[]
                return menu
            }).filter(menu => menu.children?.length) as IMenu[]
        }
    }
})

