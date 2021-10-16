import React, { memo } from 'react'

import WMTopRanking from './c-cpns/top-ranking'
import WMRankingHeader from './c-cpns/ranking-header'
import WMRankingList from './c-cpns/ranking-list'

import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from './style'

export default memo(function WMRanking() {
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <WMTopRanking />
      </RankingLeft>
      <RankingRight>
        <WMRankingHeader />
        <WMRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
