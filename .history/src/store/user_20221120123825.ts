
import {defineStore} from 'pinia'
import {info} from '../apis/userApi'

export const user = defineStore('user', {
    state: () => {
        return {
            info: {}
        }
    },
    actions:{
        async getUserInfo(state:any){
          state.info = await info()
        }
    }
})