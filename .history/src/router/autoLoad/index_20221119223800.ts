import { RouteRecordRaw } from "vue-router";
import autoLoadRoutesByModule from "./module";
import getRoutes from './view'

let routes = [] as RouteRecordRaw[];

if (import.meta.env.VITE_AUTOLOAD === true || import.meta.env.VITE_AUTOLOAD === 'true') {
    routes = getRoutes()
} else {
    routes = autoLoadRoutesByModule()
}
console.log(routes)
export default routes