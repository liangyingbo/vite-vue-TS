
import {defineStore} from 'pinia'
import {info, User} from '../apis/userApi'

export const user = defineStore('user', {
    state: () => {
        return {
            info: {} as User | null
        }
    },
    actions:{
        async getUserInfo(){
          this.state.info = await info()
        }
    }
})