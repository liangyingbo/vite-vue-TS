import http from '@/plugins/axios/index'


function info() {
   return http.request({
        url: "info"
    })
}


export { info }