import { App, Component } from "vue";
import { setupTailWindCssPlugin } from "./tailwindcss"; 

export function setupPlugins(app:App){
    autoRegisterComponent(app)

    setupTailWindCssPlugin()
}

function autoRegisterComponent(app:App){

   const components =  import.meta.globEager('../components/form/*.vue')
   console.table(components)
   Object.keys(components).forEach(key =>{
    // console.log(key)
   const name = key.split('/').pop()?.split('.')[0] as string
    console.log(name,components[key].default)
    app.component(name,components[key]?.default)
    // console.log(app.component)
    
   })

}

 