import http from '@/plugins/axios/index'

export interface IUploadImg {
    url?: string,
}

export default function uploadImg(data:FormData) {
    return http.request<IUploadImg>({
        url: "upload/image",
        method: 'post',
        data:data
    })
}
