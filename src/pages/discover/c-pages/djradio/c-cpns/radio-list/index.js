import React, { memo, useEffect } from 'react'

import WMThemeHeaderAlbum from '@/components/theme-header-album'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getRadioHotListAction, getRadioRankingAction } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

import { ListWrapper, RadioList, ListContent } from './style'

export default memo(function WMRadioList() {

  // reduc hooks
  const dispatch = useDispatch()
  const { hotList = [], topList = [] } = useSelector(state => ({
    hotList: state.getIn(['djRadio', 'hotList']),
    topList: state.getIn(['djRadio', 'topList'])
  }), shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getRadioHotListAction())
    dispatch(getRadioRankingAction())
  }, [dispatch])

  return (
      <ListWrapper>
        <ListContent>
          <RadioList>
            <WMThemeHeaderAlbum title="推荐节目" isMore={true} />
            <ul className="playUl fl">
              {
                hotList.map((item) => {
                  return (
                    <li key={item.id}>
                      <a className="headImgCover" href="/todo">
                        <img className="headImg" src={getSizeImage(item.picUrl)} alt=""></img>
                      </a>
                      <div className="info">
                        <h3>
                          <a className="info_title text-nowrap" href="/todo">{item.rcmdtext}</a>
                          <p className="info_name">{item.name}</p>
                        </h3>
                      </div>
                      <a href="/todo" className="tag">{item.category}</a>
                    </li>
                  )

                })
              }

            </ul>
          </RadioList>
          <RadioList>
            <WMThemeHeaderAlbum title="节目排行榜" isMore={true} />
            <ul className="playUl fl">
              {
                topList.map((item, index) => {
                  return (
                    <li key={item.program.id}>
                      <h3 className={index < 3 ? 'rank top' : 'rank'}>{index + 1}</h3>
                      <a className="headImgCover" href="/todo">
                        <img className="headImg" src={getSizeImage(item.program.blurCoverUrl)} alt=""></img>
                      </a>
                      <div className="info">
                        <h3>
                          <a className="info_title text-nowrap top_title" href="/todo">{item.program.name}</a>
                          <p className="info_name">{item.program.radio.name}</p>
                        </h3>
                      </div>
                    </li>
                  )

                })
              }
            </ul>
          </RadioList>
        </ListContent>
      </ListWrapper>
  )
})
