import http from '@/plugins/axios/index'
interface User{
    name:string,
    age:number,
    avatar:string,
}

async function info() {
    return await http.request<ResponseResult<User>>({
        url: "info"
    })
}
console.log(info())

export { info }