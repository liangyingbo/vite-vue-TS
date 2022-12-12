import { RouteLocationNormalized, Router } from "vue-router"


class Guard {
    constructor(private router: Router) { }

    public run() {
        this.router.beforeEach((to, from) => {
            // console.log(to)
            if (!this.isLogin(to)) return { name: 'auth.login' }
             console.log(typeof import.meta.env.VITE_AUTOLOAD)
        })
    }

    private isLogin(route: RouteLocationNormalized) {
        // console.log(route.meta)
         return true
    }
}

export default (router: Router) => {
    new Guard(router).run()
}