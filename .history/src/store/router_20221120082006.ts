import { defineStore } from 'pinia'


export const routerStore = defineStore('router', {
     state: () => {
      return {
        name: '张三',
       
      }
    },
  })