import { RouteRecordRaw } from "vue-router";
 

const layout = import.meta.glob('../layouts/*.vue')
Object.entries(layout).forEach(([file,module])=>{
   const routers =  getRouteByModule(file,module)
 })
 
 const layoutRoutes  = [] as RouteRecordRaw[]

function getRouteByModule(file:string,module:()=>Promise<unknown>){
    // console.log(file.split('/').pop()?.split('.')[0])
 }

 
export default layoutRoutes