import { App } from "vue";
import { setupTailWindCssPlugin } from "./tailwindcss"; 

export function setupPlugins(app:App){
    autoRegisterComponent(app)

    setupTailWindCssPlugin()
}

async function autoRegisterComponent(app:App){

   const components = await import.meta.globEager('../components/form/*.vue')
//    console.log(components)
   Object.keys(components).forEach(key =>{
   const name = key.split('/').pop()?.split('.')[0] as string
//    console.log(name,'---'+components[key].default)
      components[key]().then(res =>{
        console.log(res)
      })
   })

}

 