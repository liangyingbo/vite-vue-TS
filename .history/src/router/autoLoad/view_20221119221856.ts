import { RouteRecordRaw } from "vue-router";


const layout = import.meta.glob('../layouts/*.vue')
const children = import.meta.glob('../views/**/*.vue')
function getRoutes() {
    const layoutRoutes = [] as RouteRecordRaw[]
    Object.entries(layout).forEach(([file, module]) => {
        const route = getRouteByModule(file, module)
        route.children = getChildrenRoutes(route)
        layoutRoutes.push(route)
    })
    return layoutRoutes
}


// 根据布局路由匹配子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
    const routes = [] as RouteRecordRaw[]
    Object.entries(children).forEach(([file, module]) => {
        if (file.includes(`../views/${layoutRoute.name as string}`)) {
            const route = getRouteByModule(file, module)
            routes.push(route)
        }
    })
    return routes
}

function getRouteByModule(file: string, module: () => Promise<unknown>) {
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
    const route = {
        name: name.replace('/', '.'),
        path: `/${name}`,
        component: module
    } as RouteRecordRaw
    console.log(route)
    return route
}
console.log(getRoutes())
export default getRoutes