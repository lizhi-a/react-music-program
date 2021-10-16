
import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  categories: [],
  hotList: [],
  topList: [],

  radioRecommend: [],
  radioEmotion: [],
  radioLife: [],
  radioTalkShow: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RADIO_CATEGORY:
      return state.set('categories', action.categories)
    case actionTypes.CHANGE_RADIO_HOT_LIST:
      return state.set('hotList', action.hotList)
    case actionTypes.CHANGE_RADIO_RANKING:
      return state.set('topList', action.topList)

    case actionTypes.CHANGE_RADIO_RECOMMEND:
      return state.set('radioRecommend', action.radioRecommend)
    case actionTypes.CHANGE_RADIO_EMOTION:
      return state.set('radioEmotion', action.radioEmotion)
    case actionTypes.CHANGE_RADIO_LIFE:
      return state.set('radioLife', action.radioLife)
    case actionTypes.CHANGE_RADIO_TALKSHOW:
      return state.set('radioTalkShow', action.radioTalkShow)
    default:
      return state
  }
}

export default reducer