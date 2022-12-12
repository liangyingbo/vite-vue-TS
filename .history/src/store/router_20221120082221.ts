import { defineStore } from 'pinia'


export const router = defineStore('router', {
     state: () => {
      return {
        name: '张三',
      }
    },
  })