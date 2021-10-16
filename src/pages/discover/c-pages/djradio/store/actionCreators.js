
import * as actionTypes from './constants'

import {
  getDjRadioCatelist,
  getRjRadioHotList,
  getRjRadioRanking,
  getDjRadioRrecommend,
} from '@/services/djradio'

const changeTopBanners = (res) => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories: res.categories
})

const changeRadioHotList = (res) => ({
  type: actionTypes.CHANGE_RADIO_HOT_LIST,
  hotList: res.djRadios
})

const changeRadioRanking = (res) => ({
  type: actionTypes.CHANGE_RADIO_RANKING,
  topList: res.toplist
})

// 音乐推荐 ：2 
const changeDjRadioRecommend = (res) => ({
  type: actionTypes.CHANGE_RADIO_RECOMMEND,
  radioRecommend: res.djRadios
})
// 情感：3
const changeDjRadioEmotion = (res) => ({
  type: actionTypes.CHANGE_RADIO_EMOTION,
  radioEmotion: res.djRadios
})
// 生活：6
const changeDjRadioLife = (res) => ({
  type: actionTypes.CHANGE_RADIO_LIFE,
  radioLife: res.djRadios
})
// 脱口秀:8
const changeDjRadioTalkShow = (res) => ({
  type: actionTypes.CHANGE_RADIO_TALKSHOW,
  radioTalkShow: res.djRadios
})

export const getRadioCategoryAction = function () {
  return dispatch => {
    getDjRadioCatelist().then(res => {
      dispatch(changeTopBanners(res))
    })
  }
}

export const getRadioHotListAction = function () {
  return dispatch => {
    getRjRadioHotList(10, 0).then(res => {
      dispatch(changeRadioHotList(res))
    })
  }
}

export const getRadioRankingAction = function () {
  return dispatch => {
    getRjRadioRanking(10, 0).then(res => {
      dispatch(changeRadioRanking(res))
    })
  }
}

export const getRadioRecommendAction =  (idx)=> {
  return dispatch => {
    getDjRadioRrecommend(idx).then(res => {
      switch (idx) {
        case 2: {
          dispatch(changeDjRadioRecommend(res));
          break;
        }
        case 3: {
          dispatch(changeDjRadioEmotion(res));
          break;
        }
        case 6: {
          dispatch( changeDjRadioLife(res));
          break;
        }
        case 8: {
          dispatch(changeDjRadioTalkShow(res));
          break;
        }
        default:
      }
    })
  }
}