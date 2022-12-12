import { RouteLocationNormalized, Router } from "vue-router"
import {get} from '../utils/store'

class Guard {
    constructor(private router: Router) { }

    public run() {
        this.router.beforeEach((to, from) => {
             if (!this.isLogin(to)) return { name: 'auth.login' }
         })
    }

    private isLogin(route: RouteLocationNormalized) {
          return true
    }
    private isGuest(route:RouteLocationNormalized){
        
    }

    private token(){
       const token = get('token')?.token
    }
}

export default (router: Router) => {
    new Guard(router).run()
}