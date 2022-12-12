import { Router } from "express"

class Guard{
    constructor(router:Router){}
    public run(){
        console.log()
    }
}

export default (router:Router) =>{
    new Guard(router).run()
}