
import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  hotAlbums: [],
  totalAlbums: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUM:
      // console.log("reducer",action.hotAlbums)
      return state.set('hotAlbums', action.hotAlbums)
    case actionTypes.CHANGE_TOTAL_ALBUM:
      return state.set('totalAlbums', action.totalAlbums)
    default:
      return state
  }
}

export default reducer