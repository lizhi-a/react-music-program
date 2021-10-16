
import * as actionTypes from './constants'

import {
  getArtistList
} from '@/services/artist'

const changeArtistListAction = (artistList) => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList
})

export const changeCurrentAreaAction = (area) => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea: area
})

export const changeCurrentSingerTypeAction = (singer) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentSingerType: singer
})

export const getArtistListAction = (area, type, alpha) => {
  return dispatch => {
    getArtistList(area, type, alpha).then(res => {
      // console.log('getArtistListAction',area, type, alpha, res)
      dispatch(changeArtistListAction(res.artists))
    })
  }
}