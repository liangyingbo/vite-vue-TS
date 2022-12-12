import { RouteLocationNormalized, Router } from "vue-router"
import { get } from '../utils/store'

class Guard {
    constructor(private router: Router) { }

    public run() {
        this.router.beforeEach((to, from) => {
            if (!this.isLogin(to)) return { name: 'auth.login' }
        })
    }

    private isLogin(route: RouteLocationNormalized) {
        return Boolean(!route.meta.auth || (route.meta.auth && !this.token()))
    }
    private isGuest(route: RouteLocationNormalized) {
        return Boolean(!route.meta.guest || (route.meta.guest && !this.token()))
    }

    private token(): string | null {
        const token = get('token')?.token
        return token
    }
}

export default (router: Router) => {
    new Guard(router).run()
}