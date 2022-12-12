import { RouteLocationNormalized, Router } from "vue-router"
import utils from '@/utils'
import user from '../store/user'
import { CacheEnum } from "@/enum/cacheEnum"

class Guard {
    constructor(private router: Router) { }

    private forEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
        if (this.isLogin(to) === false) return { name: 'login' }
        if (this.isGuest(to) === false) return from
        this.getUserInof()
    }

    private getUserInof(){
       return  user().getUserInfo()
    }

    public run() { this.router.beforeEach(this.forEach.bind(this)) }

    private isLogin(route: RouteLocationNormalized) {
         return Boolean(!route.meta.auth || (route.meta.auth && this.token()))
    }
    private isGuest(route: RouteLocationNormalized) {
        return Boolean(!route.meta.guest || (route.meta.guest && !this.token()))
    }

    private token(): string | null {
        const token = utils.store.get(CacheEnum.TOKEN_NAME)?.token
        return token
    }
}

export default (router: Router) => {
    new Guard(router).run()
}