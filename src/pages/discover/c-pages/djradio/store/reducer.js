
import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  categories: []
})


function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RADIO_CATEGORY:
      return state.set('categories', action.categories)
    default:
      return state
  }
}

export default reducer