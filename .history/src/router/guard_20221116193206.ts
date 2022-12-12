import { RouteLocationNormalized, Router } from "vue-router"

 
class Guard {
    constructor(private router: Router) { }

    public run() {
          this.router.beforeEach((to,from,next) =>{
            if(this.isLogin(to)){

            }else{
                return {name:'login'}
            }
          })
    }

    private isLogin(route:RouteLocationNormalized){
        return false
    }
}

export default (router: Router) => {
    new Guard(router).run()
}