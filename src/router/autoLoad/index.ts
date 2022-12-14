import user from "@/store/user";
import { Router, RouteRecordRaw } from "vue-router";
import autoLoadRoutesByModule from "./module";
import getRoutes from './view'


let routes: RouteRecordRaw[] = (import.meta.env.VITE_AUTOLOAD === true || import.meta.env.VITE_AUTOLOAD === 'true') ? getRoutes() : autoLoadRoutesByModule()
async function autoload(router: Router) {
    const useStore = user()
    const permissions = useStore.info?.permissions
     routes = routes.map(r => {
        r.children = r.children?.filter(route => {
            return route.meta?.permissions ? permissions?.includes(route.meta?.permissions!) : true;
          
        })
     return r
    })
   routes.forEach(route =>{
    router.addRoute(route)
   })
}
export default autoload