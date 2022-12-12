import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: ( ) => {
      return {
        code: 0,
        type:'success',
        data: {
          age:'18',
          name: '蔡大大',
          avater:'../avater.png'
        },
      }
    },
  }
] as MockMethod[]