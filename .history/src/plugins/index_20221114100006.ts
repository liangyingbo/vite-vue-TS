import { App } from "vue";
import { setupTailWindCssPlugin } from "./tailwindcss"; 

export function setupPlugins(app:App){
    autoRegisterComponent(app)

    setupTailWindCssPlugin()
}

 function autoRegisterComponent(app:App){

   const components = import.meta.glob('../components/form/*.vue')
//    console.log(components)
   Object.keys(components).forEach(async key =>{
   const name = key.split('/').pop()?.split('.')[0] as string
//    console.log(name,'---'+components[key].default)
    //    components[key]().then(res =>{
    //     console.log(res)
    //     app.component(name,res.Module.default)
    //    })
    const data = await components[key]()
    console.log(data.default)
    // console.log(components[key].default)
    app.component(name,data.default)
   })

}

 