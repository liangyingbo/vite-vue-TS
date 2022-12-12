import { App } from "vue";
import { setupTailWindCssPlugin } from "./tailwindcss";

export async function setupPlugins(app: App) {
    await autoRegisterComponent(app)

    setupTailWindCssPlugin()
}

function autoRegisterComponent(app: App) {

    return new Promise((resolve, reject) => {
        const components = import.meta.glob('../components/form/*.vue')
        const componentsPromise = [] as any
        Object.keys(components).forEach(async key => {
            const name = key.split('/').pop()?.split('.')[0] as string
            const component = components[key]()
            //    app.component(name, data.default)

            componentsPromise.push({ name, component })
        })
        debugger;
        const all = Promise.all(componentsPromise)

        all.then(res => {
            res.forEach(async item => {
                // console.log(item.component.then(re =>console.log(re.default)))

                // app.component(item.name,item.)
                const re = await item.component
                app.component(item.name, re.default)
            })

            resolve('')
        })
    })



}

