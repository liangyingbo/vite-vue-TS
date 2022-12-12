import http from '@/plugins/axios/index'
interface User{
    name:string,
    age:number,
    avatar:string,
}

function info() {
   return http.request<ResponseResult>({
        url: "info"
    })
}


export { info }