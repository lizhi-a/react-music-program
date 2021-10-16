
import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topList: [],
  currentIndex: 19723756,
  playList: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set("topList", action.topList);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    default:
      return state;
  }
}

export default reducer