import { now } from "lodash"

interface IData  {
    expire:number,
    [key: string]: any
}

function set(key: string,data:IData):void {
    if(data.expire){
        const now = new Date().getTime() 
        data.expire = now + data.expire * 1000
        localStorage.setItem(key,JSON.stringify(data))
    }
}

function get(key:string){
  const item = localStorage.getItem(key)
  if(item){
    const  data = JSON.parse(item)
    if(data?.expire){
            if(data.expire < new Date().getTime()){
                localStorage.removeItem(key)
            }
            return null
    }
  }
  return null
}