import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: ( ) => {
      return {
        code: 0,
        type:'success',
        message:'请求成功'
        data: {
          age:'18',
          name: '蔡大大',
          avatar:'../avatar.png'
        },
      }
    },
  }
] as MockMethod[]