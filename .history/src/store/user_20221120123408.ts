
import {defineStore} from 'pinia'
import {info} from '../apis/userApi'

export const router = defineStore('user', {
    state: () => {
        return {
            info: {}
        }
    },
    actions:{
        async getUserInfo(state:any){
           await info()
        }
    }
})