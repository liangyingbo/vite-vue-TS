import { App } from "vue";
import { setupTailWindCssPlugin } from "./tailwindcss"; 

export function setupPlugins(app:App){
    setupTailWindCssPlugin()
}

 