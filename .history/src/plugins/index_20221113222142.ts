import { App } from "vue";
import { setupTailWindCssPlugin } from "./tailwindcss"; 

export function setupPlugins(app:App){
    setupTailWindCssPlugin()
    autoRegisterComponent(app)
}

function autoRegisterComponent(app:App){

   const components =  import.meta.glob('../components/form/*.vue')
   console.log(components)

}

 