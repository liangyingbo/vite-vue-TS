import { App } from "vue";
import setupElementPlus from "./elementPlusUI";
import setupPinia from "./pinia";
import { setupTailWindCssPlugin } from "./tailwindcss";

export function setupPlugins(app: App) {
    // autoRegisterComponent(app)
    setupTailWindCssPlugin()
    setupElementPlus(app)
    setupPinia(app)
}



// function autoRegisterComponent(app: App) {
//     const components:any = import.meta.glob('../components/form/*.vue', { eager: true })
//     Object.keys(components).forEach(key => {
//         const name = key.split('/').pop()?.split('.')[0] as string
//         const module = components[key]?.default
//         app.component(name,module)
//     })
// }