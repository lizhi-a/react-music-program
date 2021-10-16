import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  getTopsAction,
  getRankingDetailAction,
  changeCurrentIndex
} from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

import {
  TopRankingWrapper
} from "./style";

export default memo(function WMTopRanking() {

  // redux hooks
  const dispatch = useDispatch()
  const { topList = [], currentIndex = 19723756 } = useSelector((state) => ({
    topList: state.getIn(['ranking', 'topList']),
    currentIndex: state.getIn(['ranking', 'currentIndex']),
  }), shallowEqual)
  // console.log(topList, currentIndex)

  useEffect(() => {
    dispatch(getTopsAction())
    dispatch(getRankingDetailAction(currentIndex))
  }, [dispatch, currentIndex])

  // handle function
  function handleItemClick(id, index) {
    dispatch(changeCurrentIndex(id))
    dispatch(getRankingDetailAction(id))
  }

  return (
    <TopRankingWrapper>
      {
        topList.map((item, index) => {
          let header;
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={index === currentIndex ? 'item active' : 'item'}
                onClick={e => handleItemClick(item.id, index)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopRankingWrapper>
  )
})
