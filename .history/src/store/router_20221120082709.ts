import { defineStore } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'


export const router = defineStore('router', {
     state: () => {
      return {
         routes:[] as RouteLocationNormalized[]
      }
    },
  })