import { RouteRecordRaw } from "vue-router";
 

const layout = import.meta.glob('../layouts/*.vue')
Object.entries(layout).forEach(([file,module])=>{
    console.log(file)
    console.log(module)
 })const layoutRoutes  = [] as RouteRecordRaw[]

function getRouteByModule(){
    
}

getRouteByModule()

export default layoutRoutes