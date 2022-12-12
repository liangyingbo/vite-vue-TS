import { RouteRecordRaw } from "vue-router";
 

const layout = import.meta.glob('../layouts/*.vue')
console.log(layout)
const layoutRoutes  = [] as RouteRecordRaw[]

function getRouteByModule(){
    Object.entries(layout).forEach(([file,module])=>{
       console.log(file)
       console.log(module)
    })
}

export default layoutRoutes