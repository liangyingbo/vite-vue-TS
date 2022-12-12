import { defineStore } from 'pinia'
import { IMenu } from 'types/menu'
import { useRouter } from 'vue-router'


export default defineStore('menu', {
    state: () => {
        return {
            menus: [] as IMenu[]
        }
    },
    actions:() =>{
            function getMenusByRoute(){
                
            }
    }
})

function getRoutes() {
    const router = useRouter()
    const  routes = router.getRoutes().filter(route => route.children.length >0 && route.meta.show).map(route => {
       route.children =  route.children.filter(c=>c.meta?.show)

       return route
    })
    return routes.filter(route => route.children.length)
}