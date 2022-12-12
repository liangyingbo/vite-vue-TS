import { CacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
import { defineStore } from 'pinia'
import { IMenu } from 'types/menu'
import { RouteLocationNormalizedLoaded, useRouter } from 'vue-router'


export default defineStore('menu', {
    state: () => {
        return {
            menus: [] as IMenu[],
            historyMenus: [] as IMenu[]
        }
    },
    actions: {
        init() {
            this.getMenusByRoute()
            this.historyMenus = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
        },
        addHistoryMenu(route: RouteLocationNormalizedLoaded) {
            // console.log(route)
            if (!route.meta.menu) return;
            const menu: IMenu = { ...route.meta.menu, route: route.name as string }
            const isHas = this.historyMenus.some(menu => menu.route === route.name)
            if (!isHas) this.historyMenus.unshift(menu)
            if (this.historyMenus.length > 10) this.historyMenus.pop()
            utils.store.set(CacheEnum.HISTORY_MENU,this.historyMenus)

        },
        getMenusByRoute() {
            const router = useRouter()
            this.menus = router.getRoutes().filter(route => route.children.length && route.meta.menu).map(route => {
                let menu = { ...route.meta.menu } as IMenu
                menu.children = route.children.filter(route => route.meta?.menu).map(route => {
                    // console.log(route)
                    return { ...route.meta?.menu, route: route.name }
                }) as IMenu[]
                return menu
            }).filter(menu => menu.children?.length) as IMenu[]
        }
    }
})

