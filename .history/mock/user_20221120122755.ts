import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        type:'success',
        message:'请求成功',
        data: {
          age:'18',
          name: '蔡大大',
          avatar:'/images/.png'
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        type:'success',
        message:'请求成功',
        data: {
          token:Random.string(10)
        },
      }
    },
  }
] as MockMethod[]