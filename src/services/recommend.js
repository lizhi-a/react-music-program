
import request from "./request";

// 封装网络请求的函数
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbums(limit) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}


export function getArtistList(area, type, initial) {
  let url = "/artist/list";
  let params = { limit: 100 }
  if (area === -1 && type === 1) {
    url = "/top/artists"
  } else {
    if (area === -1) {
      params = { limit: 10, cat: 5001 }
    } else {
      params = {
        type,
        area,
        initial,
        limit: 10
      }
    }
  }
  return request({
    url,
    params
  })
}

