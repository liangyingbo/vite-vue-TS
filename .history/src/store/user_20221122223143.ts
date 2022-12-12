
import {defineStore} from 'pinia'
 import {login, User} from '../apis/userApi'

export default defineStore('user', {
    state: () => {
        return {
            info: {} as User | null
        }
    },
    actions:{
        async getUserInfo(){
        const res = await login info()
        this.info = res.data
        }
    }
})