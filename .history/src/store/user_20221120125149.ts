
import {defineStore} from 'pinia'
 import {info, User} from '../apis/userApi'

export default defineStore('user', {
    state: () => {
        return {
            info: {} as User | null
        }
    },
    actions:{
        async getUserInfo(){
        const res = await info()
        console.log(res.data)

        }
    }
})