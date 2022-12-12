export default function autoLoadRoutesByModule() {
    const route = import.meta.glob('../module/admin.ts',{eager:true})
    console.log(route)
}