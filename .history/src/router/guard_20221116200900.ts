import { RouteLocationNormalized, Router } from "vue-router"

 
class Guard {
    constructor(private router: Router) { }

    public run() {
          this.router.beforeEach((to,from) =>{
            console.log(from)
            console.log(this.rotuer)
            if(!this.isLogin(to)) return {name:'login'}

              
          })
    }

    private isLogin(route:RouteLocationNormalized){
        return false
    }
}

export default (router: Router) => {
    new Guard(router).run()
}