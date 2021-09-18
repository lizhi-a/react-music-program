import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'
import { getHotRecommendsAction } from '../../store/actionCreators'
import WMThemeHeaderRCM from '@/components/theme-header-rcm'
import WMSongsCover from '@/components/songs-cover'

import {
  HotRecommendWrapper
} from './style'

export default memo(function WMHotRecommend() {

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <WMThemeHeaderRCM title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']} />
      <div className="recommend-list">
        {
          hotRecommends.map((item,index) => {
            return <WMSongsCover key={item.id} info={item}></WMSongsCover>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
