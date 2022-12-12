export default function autoLoadRoutesByModule() {
    const moduleRoute = import.meta.glob('../module/admin.ts',{eager:true})
    Object.keys(moduleRoute).forEach(key =>{
        console.log(key)
        console.log(moduleRoute[key].default)
    })
}