import http from '@/plugins/axios/index'

export interface User {
    name?: string,
    age?: number,
    avatar?: string,
}

function info() {
    return http.request<User>({
        url: "user/info"
    })
}

interface ILogin {
    token: string;
}


interface Ilogin{
    account:string,
    passwrod:string
}
function login() {
    return http.request<ILogin>({
        url: 'login',
        method:'post'
    })
}
export { info, login }