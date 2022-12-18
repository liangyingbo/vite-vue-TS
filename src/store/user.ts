
import { CacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
import { defineStore } from 'pinia'
import { info, User } from '../apis/userApi'

export default defineStore('user', {
    state: () => {
        return {
            info: {} as User | null
        }
    },
    actions: {
        async getUserInfo() {
            if (utils.store.get(CacheEnum.TOKEN_NAME)) {
                const res = await info()
                this.info = res.data
            }
        }
    }
})