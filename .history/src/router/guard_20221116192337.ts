import { Router } from "vue-router"

 
class Guard {
    constructor(private router: Router) { }

    public run() {
          this.router.beforeEach((to,from,next) =>{
            console.log(to)
          })
    }
}

export default (router: Router) => {
    new Guard(router).run()
}