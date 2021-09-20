
import * as actionTypes from './constants'

import {
  getHotAlbums,
  getTotalAlbums
} from '@/services/album.js'

const changeHotAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ALBUM,
  hotAlbums: res.albums
})

const changeTotalAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_TOTAL_ALBUM,
  totalAlbums: res.albums
})

export const getHotAlbumsAction = (limit) => {
  return dispatch => {
    getHotAlbums(limit).then(res => {
      // console.log("getHotAlbumsAction", res)
      dispatch(changeHotAlbumsAction(res))
    })
  }
}

export const getTotalAlbumsAction = (limit, offset) => {
  return dispatch => {
    getTotalAlbums(limit, offset).then(res => {
      // console.log("getTotalAlbumsAction", res)
      dispatch(changeTotalAlbumsAction(res))
    })
  }
}