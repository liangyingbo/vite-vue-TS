import { RouteLocationNormalized, Router } from "vue-router"


class Guard {
    constructor(private router: Router) { }

    public run() {
        this.router.beforeEach((to, from) => {
             if (!this.isLogin(to)) return { name: 'auth.login' }
         })
    }

    private isLogin(route: RouteLocationNormalized) {
        // console.log(rou
         return true
    }
}

export default (router: Router) => {
    new Guard(router).run()
}