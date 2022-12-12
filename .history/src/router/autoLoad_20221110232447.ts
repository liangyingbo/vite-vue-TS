import { RouteRecordRaw } from "vue-router";
 

const layout = import.meta.glob('../layouts/*.vue')

function getRoutes(){
    const layoutRoutes  = [] as RouteRecordRaw[]
    Object.entries(layout).forEach(([file,module])=>{
        const route =  getRouteByModule(file,module)
        layoutRoutes.push(route)
      })
     return layoutRoutes
}


function getRouteByModule(file:string,module:()=>Promise<unknown>){
    const name = file.split('/').pop()?.split('.')[0]
    const route = {
        name,
        path:`/${name}`,
        component:module
    } as RouteRecordRaw

    return route
  }

 console.log(getRoutes())
export default getRoutes()