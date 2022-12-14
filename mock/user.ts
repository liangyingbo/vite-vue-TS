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
          name: '蔡kimkim',
          avatar:'images/avatar.jpg',
          permissions:['article_edit','editor_markdown']
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