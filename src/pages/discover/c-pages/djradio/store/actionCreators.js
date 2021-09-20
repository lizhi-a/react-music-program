
import * as actionTypes from './constants'

import {
  getDjRadioCatelist
} from '@/services/djradio'

const changeTopBanners = (res) => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories: res.categories
})

export const getRadioCategoryAction = function () {
  return dispatch => {
    getDjRadioCatelist().then(res => {
      dispatch(changeTopBanners(res))
    })
  }
}