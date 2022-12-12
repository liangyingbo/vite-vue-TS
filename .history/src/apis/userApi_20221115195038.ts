import http from '@/plugins/axios/index'
interface User{
    name:string,
    age:number,
    avatar:string,
}

 function info() {
    return  http.request<User>({
        url: "info"
    })
}

interface Login{
    token:string;
}
function login(){
    return http.request<T>({
        url:'login'
    })
}
export { info }