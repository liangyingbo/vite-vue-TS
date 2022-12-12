import { Router } from "express"

class Guard {
    constructor(private router: Router) { }
    public run() {
          
    }
}

export default (router: Router) => {
    new Guard(router).run()
}