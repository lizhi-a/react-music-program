import React, { memo, useEffect } from 'react'

import WMThemeHeaderAlbum from '@/components/theme-header-album'
import { getRadioRecommendAction } from '../../store/actionCreators'
import WMRadioRankingCover from '@/components/radio-ranking-cover'

import { RecommendWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default memo(function WMRadioRecommend() {

  // redux hooks
  const dispatch = useDispatch()
  const {
    radioRecommend = [],
    radioEmotion = [],
    radioLife = [],
    radioTalkShow = []
  } = useSelector((state) => ({
    radioRecommend: state.getIn(['djRadio', 'radioRecommend']),
    radioEmotion: state.getIn(['djRadio', 'radioEmotion']),
    radioLife: state.getIn(['djRadio', 'radioLife']),
    radioTalkShow: state.getIn(['djRadio', 'radioTalkShow'])
  }), shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getRadioRecommendAction(2))
    dispatch(getRadioRecommendAction(3))
    dispatch(getRadioRecommendAction(6))
    dispatch(getRadioRecommendAction(8))
  }, [dispatch])


  return (
    <RecommendWrapper>
      <WMThemeHeaderAlbum title="音乐推荐 · 电台" isMore={true} />
      <div className="ranking-list">
        {
          radioRecommend.slice(0,4).map((item, index) => {
            return (<WMRadioRankingCover key={item.id} radio={item} />)
          })
        }
      </div>
      <WMThemeHeaderAlbum title="情感 · 电台" isMore={true} />
      <div className="ranking-list">
        {
          radioEmotion.slice(0, 4).map((item, index) => {
            return (<WMRadioRankingCover key={item.id} radio={item} />)
          })
        }
      </div>
      <WMThemeHeaderAlbum title="生活 · 电台" isMore={true} />
      <div className="ranking-list">
        {
          radioLife.slice(0, 4).map((item, index) => {
            return (<WMRadioRankingCover key={item.id} radio={item} />)
          })
        }
      </div>
      <WMThemeHeaderAlbum title="脱口秀 · 电台" isMore={true} />
      <div className="ranking-list">
        {
          radioTalkShow.slice(0, 4).map((item, index) => {
            return (<WMRadioRankingCover key={item.id} radio={item} />)
          })
        }
      </div>
    </RecommendWrapper>
  )
})
