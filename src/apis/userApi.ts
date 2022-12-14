import http from '@/plugins/axios/index'

export interface User {
    name?: string,
    age?: number,
    avatar?: string,
    permissions?:string[]
}


function info() {
    return http.request<User>({
        url: "user/info"
    })
}

interface ILogin {
    token: string;
}


export interface IloginData{
    account:string,
    passwrod:string
}
function login(value:IloginData) {
    return http.request<ILogin>({
        url: 'login',
        method:'post'
    })
}
export { info, login }