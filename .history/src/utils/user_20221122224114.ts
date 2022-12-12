import { login } from '@/apis/userApi';
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router';
import utils from '@/utils'

interface Ilogin{
    account:string,
    passwrod:string
}
export default {
    async login(value:Ilogin) {
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