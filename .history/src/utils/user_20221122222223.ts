 import { CacheEnum } from '@/enum/cacheEnum'
 import utils from '@/utils'
 export default{
    logout(){
        utils.store.remove(CacheEnum.TOKEN_NAME)
      }
}  