import { IloginData, login } from '@/apis/userApi';
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router';
import utils from '@/utils'

export default {
    async login(value:IloginData) {
        const {
            data: { token },
          } = await login(value);
          utils.store.set(CacheEnum.TOKEN_NAME,{token},10000)
          const name = utils.store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? 'home'
          console.log(name)
           router.push({name:name})
    },
    logout() {
        utils.store.remove(CacheEnum.TOKEN_NAME)
    }
}  