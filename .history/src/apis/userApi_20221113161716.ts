import http from '@/plugins/axios/index'
    function info(){
        http.request({
            url:"info"
        })
    }


export {info}