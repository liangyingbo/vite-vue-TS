import { RouteLocationNormalized, Router } from "vue-router"

 
class Guard {
    constructor(private router: Router) { }

    public run() {
          this.router.beforeEach((to,from,next) =>{
            
          })
    }

    private isLogin(route:RouteLocationNormalized){

    }
}

export default (router: Router) => {
    new Guard(router).run()
}