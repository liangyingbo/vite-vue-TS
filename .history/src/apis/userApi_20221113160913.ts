import http from '../../plugins/axios/index'

const userApi = {
    function info(){
        http.request({
            url:"info"
        })
    }
}


export {info}