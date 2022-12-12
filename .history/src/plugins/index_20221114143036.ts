import { App } from "vue";
import { setupTailWindCssPlugin } from "./tailwindcss";

export  function setupPlugins(app: App) {
    autoRegisterComponent(app)

    setupTailWindCssPlugin()
}

// function autoRegisterComponent(app: App) {

//     return new Promise((resolve, reject) => {
//         const components = import.meta.glob('../components/form/*.vue')
//         const componentsPromise = [] as any
//         Object.keys(components).forEach(async key => {
//             const name = key.split('/').pop()?.split('.')[0] as string
//             const component = components[key]()
//             //    app.component(name, data.default)

//             componentsPromise.push({ name, component })
//         })
//         debugger;
//         const all = Promise.all(componentsPromise)

//         all.then(res => {
//             res.forEach(async item => {
//                 // console.log(item.component.then(re =>console.log(re.default)))

//                 // app.component(item.name,item.)
//                 const re = await item.component
//                 app.component(item.name, re.default)
//             })

//             resolve('')
//         })
//     })
// }

  function autoRegisterComponent(app:App){
    
    const components = import.meta.glob('../components/form/*.vue',{ eager: true })
    console.log(components)
    
    Object.keys(components).forEach(key =>{
        const name = key.split('/').pop()?.split('.')[0] as string

       app.component(name,components[key].default) 
   
    })

}