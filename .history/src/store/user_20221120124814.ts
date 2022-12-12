
import {defineStore} from 'pinia'
 import {info, User} from '../apis/userApi'

export default defineStore('user', {
    state: () => {
        return {
            info: {name:'',age:'',avatar:''} as User
        }
    },
    actions:{
        async getUserInfo(){
        const res = await info()
        this.info = res

        }
    }
})