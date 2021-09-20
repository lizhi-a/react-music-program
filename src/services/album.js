
import request from './request'

export function getHotAlbums(limit){
  return request({
    url:'/album/newest',
    params:{
      limit
    }
  })
}

export function getTotalAlbums(limit,offset){
  return request({
    url:'/top/album',
    params:{
      limit,
      offset
    }
  })
}
