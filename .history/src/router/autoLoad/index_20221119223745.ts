import { RouteRecordRaw } from "vue-router";
import autoLoadRoutesByModule from "./module";
import getRoutes from './view'

let routes = [] as RouteRecordRaw[];

if (import.meta.env.VITE_AUTOLOAD === true || import.meta.env.VITE_AUTOLOAD === 'true') {
    console.log(import.meta.env.VITE_AUTOLOAD)
    console.log(45553)
    routes = getRoutes()
} else {
    routes = autoLoadRoutesByModule()
}
console.log(routes)
export default routes