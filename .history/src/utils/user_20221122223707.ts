import { CacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
export default {
   async login(value){

    },
    logout() {
        utils.store.remove(CacheEnum.TOKEN_NAME)
    }
}  