import { deflate } from "zlib"

interface IData  {

    data:any,
    expire?:number,
     
}

export{
  
}
function set(key: string,data:any,expire?:number):void {
  const cache:IData = {data}
    if(expire){
        const now = new Date().getTime() 
        cache.expire = now + data.expire * 1000
        localStorage.setItem(key,JSON.stringify(cache))
    }
}

function get(key:string):any{
  const cacheStore = localStorage.getItem(key)
  if(cacheStore){
    const  cache = JSON.parse(cacheStore)
    if(cache?.expire){
            if(cache.expire < new Date().getTime()){
                localStorage.removeItem(key)
                return null
            }
            return cache.data
    }
    return null
  }
  return null
}

function remove(key:string){
  localStorage.removeItem(key)
}

export  default {set ,get,remove}