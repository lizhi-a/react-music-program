import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';

import { formatMonthDay } from "@/utils/format-utils";
import WMSongOperationBar from '@/components/song-operation-bar';

import { RankingHeaderWrapper } from './style'

export default memo(function WMRankingHeader() {
  const {playList} = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
  }), shallowEqual)
  const topInfo = playList
  console.log(playList)

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={topInfo.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{topInfo.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
        </div>
        <WMSongOperationBar favorTitle={`(${topInfo.subscribedCount})`}
          shareTitle={`(${topInfo.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${topInfo.commentCount})`} />
      </div>
    </RankingHeaderWrapper>

  )
})
