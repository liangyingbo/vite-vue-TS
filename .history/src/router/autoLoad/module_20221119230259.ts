import { RouteRecordRaw } from "vue-router"

export default function autoLoadRoutesByModule() {
    const moduleRoute = import.meta.glob('../module/admin.ts',{eager:true})
    const route = [] as RouteRecordRaw[]
    Object.keys(moduleRoute).forEach(key =>{
    
        route.push(moduleRoute[key]?.default)
    })
    return route
}