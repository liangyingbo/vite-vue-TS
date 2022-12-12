
import {defineStore} from 'pinia'
export const router = defineStore('user', {
    state: () => {
        return {
            info: {}
        }
    },
})