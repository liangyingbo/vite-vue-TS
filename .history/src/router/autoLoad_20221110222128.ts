import { RouteRecordRaw } from "vue-router";
 

const layout = import.meta.glob('../layouts/*.vue')
console.log(layout)
const layoutRoutes  = [] as RouteRecordRaw[]

function getRouteByModule(){
    
}

export default layoutRoutes