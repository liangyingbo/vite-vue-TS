import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 0,
        type: 'success',
        message: '上传成功',
        data: {
          url: 'images/avatar.jpg',
        },
      }
    },
  }
] as MockMethod[]