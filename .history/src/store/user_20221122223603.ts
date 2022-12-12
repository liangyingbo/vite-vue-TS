
import {defineStore} from 'pinia'
 import {info, login, User} from '../apis/userApi'

export default defineStore('user', {
    state: () => {
        return {
            info: {} as User | null
        }
    },
    actions:{
        async getUserInfo(){
        const res = await login()
        this.info = res.data
        }
    }
})