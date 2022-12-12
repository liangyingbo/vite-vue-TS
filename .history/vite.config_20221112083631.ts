import { defineConfig,ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,                            
//   }
// })

export default ({command,mode}:ConfigEnv) =>{
  console.log(command)
  return {
    //   plugins: [vue()],
    //   resolve: {
    //     alias,                            
    //   }
    // }
}
