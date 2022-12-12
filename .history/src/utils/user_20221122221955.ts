 import { CacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
  export function logout(){
    utils.store.remove(CacheEnum.TOKEN_NAME)
}