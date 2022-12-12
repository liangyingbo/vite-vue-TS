import { CacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
export default {
   async login(value){
    const {
    },
    logout() {
        utils.store.remove(CacheEnum.TOKEN_NAME)
    }
}  