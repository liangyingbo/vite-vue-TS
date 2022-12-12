import { App } from "vue";
import { setupTailWindCssPlugin } from "./tailwindcss";

export function setupPlugins(app: App) {
    autoRegisterComponent(app)

    setupTailWindCssPlugin()
}

function autoRegisterComponent(app: App) {

    const components = import.meta.glob('../components/form/*.vue')
    //    console.log(components)
    Object.keys(components).forEach(async key => {
        const name = key.split('/').pop()?.split('.')[0] as string
        const data = await components[key]()
        app.component(name, data.default)
    })

}

