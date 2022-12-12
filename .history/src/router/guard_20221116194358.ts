import { RouteLocationNormalized, Router } from "vue-router"

 
class Guard {
    constructor(private router: Router) { }

    public run() {
          this.router.beforeEach((to,from) =>{
            console.log(from)

            if(!this.isLogin(to)) return({name:'login'}  &&  console.log(from))

              
          })
    }

    private isLogin(route:RouteLocationNormalized){
        return false
    }
}

export default (router: Router) => {
    new Guard(router).run()
}