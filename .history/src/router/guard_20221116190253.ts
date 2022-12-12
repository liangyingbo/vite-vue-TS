import { Router } from "express"

class Guard{
    constructor(private router:Router){}
    public run(){
        console.log(this.router)
    }
}

export default (router:Router) =>{
    new Guard(router).run()
}