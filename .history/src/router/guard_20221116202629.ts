 import { RouteLocationNormalized, Router } from "vue-router"

 
class Guard {
    constructor(private router: Router) { }

    public run() {
          this.router.beforeEach((to,from) =>{
            console.log(from)
             if(!this.isLogin(to)) return {name:'auth.login'}

              
          })
    }

    private isLogin(route:RouteLocationNormalized){
        console.log(route)
        return true
    }
}

export default (router: Router) => {
    new Guard(router).run()
}