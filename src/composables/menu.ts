import { IMenu } from "types/menu";
import { ref } from "vue";
import router from '@/router'
import utils from "@/utils";
import { CacheEnum } from "@/enum/cacheEnum";
import { RouteLocationNormalizedLoaded, RouteRecordName, RouteRecordRaw } from "vue-router";
 class Menu {  
    public menus = ref<IMenu[]>([])
    public historymenus = ref<IMenu[]>([])
    public close = ref(false)
    public route = ref<null | RouteLocationNormalizedLoaded >(null)
    constructor() {
        this.menus.value = this.getMenusByRoute()
        this.historymenus.value = this.getHistoryMenu()
    }
    private getHistoryMenu(){
        const routes = [] as RouteRecordRaw[]
        router.getRoutes().forEach(route => { routes.push(route) })
        const historyStore = utils.store.get(CacheEnum.HISTORY_MENU) ?? []

        return historyStore.filter((h:any) =>{ return routes.some(r => r.name === h.route) })
    }
    private getMenusByRoute() {
        return router.getRoutes().filter(route => route.children.length && route.meta.menu).map(route => {
            let menu = { ...route.meta.menu } as IMenu
            menu.children = route.children.filter(route => route.meta?.menu).map(route => {
                return { ...route.meta?.menu, route: route.name }
            }) as IMenu[]
            return menu
        }).filter(menu => menu.children?.length) as IMenu[]
    }

    public toggleMenu(menu: IMenu) {
        this.menus.value.forEach(m => {
            // console.log(m)
            m.isClick = false;
        })
        menu.isClick = true;
    }

    public setCurrentMenu(route: RouteLocationNormalizedLoaded) {
        this.menus.value.forEach(p => {
            p.isClick = false;
            p.children?.forEach(c => {
                c.isClick = false
                if (c.route === route.name) {
                    c.isClick = true;
                    p.isClick = true;
                }
            })
        })
    }

    public toggleStateClose() {
        this.close.value = !this.close.value
    }

    addHistoryMenu(route: RouteLocationNormalizedLoaded) {
        console.log(route)
        if (!route.meta.menu) return;
        this.route.value = route
        const menu: IMenu = { ...route.meta.menu, route: route.name as string }
        const isHas = this.historymenus.value.some(menu => menu.route === route.name)
        if (!isHas) this.historymenus.value.unshift(menu)
        if (this.historymenus.value.length > 10) this.historymenus.value.pop()
        utils.store.set(CacheEnum.HISTORY_MENU, this.historymenus.value)

    }  

}
export default new Menu()