import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/article',
    method: 'get',
    response: () => {
      return {
        code: 0,
        status: 'success',
        message: '请求成功',
        result: new Array(20).fill(undefined).map((item, index) => {
          return {
            id: index,
            title: Random.ctitle(),
            content: Random.cparagraph()
          }
        })
      }
    },
  },
] as MockMethod[]