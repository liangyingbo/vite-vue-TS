import { defineConfig,ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias'
import { parseEnv } from './vite/utils'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,                            
//   }
// })

export default ({command,mode}:ConfigEnv) =>{
   const env = loadEnv(mode,process.cwd())
  //  console.log(env)
  console.log(parseEnv(env))
  return {
      plugins: [vue()],
      resolve: {
        alias,                            
      }
    }
}
