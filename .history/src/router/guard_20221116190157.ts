import { Router } from "express"

class Guard{
    public run(router:Router){
        console.log('run...')
    }
}

export default (router:Router) =>{
    new Guard(router).run()
}