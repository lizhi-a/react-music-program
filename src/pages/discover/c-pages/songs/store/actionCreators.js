
import * as actionTypes from './constants'

import {
  getSongList,
  getSongCategory
} from '@/services/songs'

const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_SONG_LIST,
  songList: res.playlists
})

const changeSongCategoryAction = (res) => ({
  type: actionTypes.CHANGE_SONG_CATEGORY,
  songCategory: res
})

const changeCurrentCategoryAction = (cat) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: cat
})

export const getSongListAction = function (cat, offset, limit) {
  return dispatch => {
    getSongList(cat, offset, limit).then(res => {
      // console.log(cat)
      dispatch(changeCurrentCategoryAction(cat))
      dispatch(changeSongListAction(res))
    })
  }
}

export const getSongCategoryAction = function () {
  return dispatch => {
    getSongCategory().then(res => {
      dispatch(changeSongCategoryAction(res))
    })
  }
}
