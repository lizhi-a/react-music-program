
import * as actionTypes from './contants'
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getArtistList
} from '@/services/recommend'

const changeTopBanners = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

const changeArtistListAction = (artistList) => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList
})

export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBanners(res))
    })
  }
}

export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendsAction(res))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      // const albums = res.albums
      // console.log(albums)
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 3:
          dispatch(changeUpRankingAction(res));
          break;
        case 0:
          dispatch(changeNewRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    })
  }
}

export const getArtistListAction = (area, type, alpha) => {
  return dispatch => {
    getArtistList(area, type, alpha).then(res => {
      console.log('getArtistListAction', res)
      dispatch(changeArtistListAction(res.artists))
    })
  }
}