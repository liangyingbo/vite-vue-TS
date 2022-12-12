import { Router } from "vue-router"

 
class Guard {
    constructor(private router: Router) { }

    public run() {
          this.router
    }
}

export default (router: Router) => {
    new Guard(router).run()
}