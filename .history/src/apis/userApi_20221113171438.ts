import http from '@/plugins/axios/index'
interface User{
    name:string,
    age:number,
    avatar:string,
}

 function info() {
    return  http.request<ResponseResult<User>>({
        url: "info"
    })
}
console.log(info().then(res=>{console.log(res)}))

export { info }