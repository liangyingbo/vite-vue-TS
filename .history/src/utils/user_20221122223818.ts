import { CacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
export default {
    async login(value) {
        const {
            data: { token },
          } = await login();
          utils.store.set(CacheEnum.TOKEN_NAME,{token},10000)
           router.push({path:'/home'})
    },
    logout() {
        utils.store.remove(CacheEnum.TOKEN_NAME)
    }
}  