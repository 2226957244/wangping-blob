import request from '@/utils/request'
import axios from 'axios'
// 获取路由
export function getRouters () {
  // return request({
  //   url: '/system/menu/getRouters',
  //   method: 'get'
  // })
  return request.get('/src/api/StaticData/routers.json')
}