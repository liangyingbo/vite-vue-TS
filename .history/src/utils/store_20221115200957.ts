interface IData  {
    expire:number,
    [key: string]: any
}

function set(key: string,data:IData) {
    if(data.expire){
        const now = new Date().getTime() 
        data.expire = now + data.expire * 1000
        localStorage.setItem(key,JSON.stringify(data))
    }
}