import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import WMThemeHeaderRCM from '@/components/theme-header-rcm'
import { getTopListAction } from '../../store/actionCreators'
import WMTopRanking from '@/components/top-ranking'

import { RankingWrapper } from './style'

export default memo(function WMRecommendRanking() {

  // redux hooks
  const { upRanking, newRanking, originRanking } =
    useSelector(state => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <WMThemeHeaderRCM title="榜单" />
      <div className="tops">
        <WMTopRanking info={upRanking} />
        <WMTopRanking info={newRanking} />
        <WMTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
