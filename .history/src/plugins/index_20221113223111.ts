import { App } from "vue";
import { setupTailWindCssPlugin } from "./tailwindcss"; 

export function setupPlugins(app:App){
    setupTailWindCssPlugin()
    autoRegisterComponent(app)
}

function autoRegisterComponent(app:App){

   const components =  import.meta.glob('../components/form/*.vue')
//    console.log(components)
   Object.keys(components).forEach(key =>{
    // console.log(key)
   const name = key.split('/').pop()?.split('.')[0] as string
    
    app.component(name,components.name)
    console.log(app.component)
    
   })

}

 