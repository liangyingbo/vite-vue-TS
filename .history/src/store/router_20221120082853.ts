import { defineStore } from 'pinia'
import { RouteLocationNormalized, useRouter } from 'vue-router'


export const router = defineStore('router', {
     state: () => {
      return {
         routes:[] as RouteLocationNormalized[]
      }
    },
  })

  function getRoutes(){
    const router = useRouter()
    console.log(router.getRoutes())
  }