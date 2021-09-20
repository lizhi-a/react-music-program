
import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  songList: [],
  songCategory: [],
  currentCategory: '全部'
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_LIST:
      return state.set('songList', action.songList)
    case actionTypes.CHANGE_SONG_CATEGORY:
      return state.set('songCategory', action.songCategory)
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set('currentCategory', action.currentCategory)
    default:
      return state
  }
}

export default reducer