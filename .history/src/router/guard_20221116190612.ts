import { Router } from "express"

class Guard {
    constructor(private router: Router) { }
    public run() {
         this.router.beforeEach((to, from, next) => {
             // to and from are both route objects. must call `next`.
         })
    }
}

export default (router: Router) => {
    new Guard(router).run()
}