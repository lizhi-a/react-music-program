import request from './request';

export function getDjRadioCatelist() {
  return request({
    url: "/dj/catelist"
  })
}

export function getDjRadioRecommend(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

export function getDjRadios(cateId, limit, offset) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}

export function getRjRadioHotList(limit = 10, offset) {
  return request({
    url: '/dj/hot',
    params: {
      limit,
      offset
    }
  })
}


export function getRjRadioRanking(limit, offset) {
  return request({
    url: '/dj/program/toplist',
    params: {
      limit,
      offset
    }
  })
}


export function getDjRadioRrecommend(type) {
  return request({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}