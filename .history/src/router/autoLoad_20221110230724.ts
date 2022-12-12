import { RouteRecordRaw } from "vue-router";
 

const layout = import.meta.glob('../layouts/*.vue')
Object.entries(layout).forEach(([file,module])=>{
   const routers =  getRouteByModule(file,module)
 })
 
 const layoutRoutes  = [] as RouteRecordRaw[]

function getRouteByModule(file:string,module:Promise<unknown>){
        
}

 
export default layoutRoutes