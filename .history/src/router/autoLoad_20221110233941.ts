import { RouteRecordRaw } from "vue-router";
 

const layout = import.meta.glob('../layouts/*.vue')
const children = import.meta.glob('../views/**/*.vue')
function getRoutes(){
    const layoutRoutes  = [] as RouteRecordRaw[]
    Object.entries(layout).forEach(([file,module])=>{
        const route =  getRouteByModule(file,module)
        route.children = getChildrenRoutes(route)
        layoutRoutes.push(route)
      })
     return layoutRoutes
}

function getChildrenRoutes(layoutRoute:RouteRecordRaw){
        Object.entries(children).forEach(([file,module])=>{
                if(file.includes(`../views/${layoutRoute.name as string}`)){
                    const route = getRouteByModule(file,module)
                    console.log(file)
                    console.log(route)
                }
        })
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

//  console.log(getRoutes())
export default getRoutes()