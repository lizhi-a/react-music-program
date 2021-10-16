import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  getArtistListAction,
  changeCurrentAreaAction,
  changeCurrentSingerTypeAction
} from '../../store/actionCreators'

import { CategoryWrapper, CategoryItem } from './style'

export default memo(function WMArtistCategory() {

  // redux hooks
  const dispatch = useDispatch()

  const singerType = ['男歌手', '女歌手', '组合/乐队']
  const area = ['推荐', '华语', '日本', '韩国', '欧美', '其他']

  const singerMap = new Map([
    ['全部', -1],
    ['男歌手', 1],
    ['女歌手', 2],
    ['组合/乐队', 3],
  ])
  const areaMap = new Map([
    ['推荐', -1],
    ['华语', 7],
    ['日本', 8],
    ['韩国', 16],
    ['欧美', 96],
    ['其他', 0],
  ])

  // other hooks
  useEffect(() => {
    dispatch(changeCurrentAreaAction('推荐'))
    dispatch(changeCurrentSingerTypeAction('歌手'))
    dispatch(getArtistListAction(-1, -1))
  }, [dispatch])

  // function
  function showDetail(area, singer) {

    let areaNum = areaMap.get(area)
    let singerNum = singerMap.get(singer)

    dispatch(changeCurrentAreaAction(area))
    dispatch(changeCurrentSingerTypeAction(singer))
    dispatch(getArtistListAction(areaNum, singerNum))
  }

  function showItem(item, index) {
    if (index === 0) {
      return (
        <CategoryItem >
          <span onClick={e => showDetail('推荐', '歌手')} >推荐歌手</span>
        </CategoryItem>
      )
    }
    else {
      return (
        <CategoryItem >
          {
            singerType.map((ele, i) => {
              return <span key={i} onClick={e => showDetail(item, ele)}> {item + ele}</span>
            })
          }
        </CategoryItem>
      )
    }
  }

  return (
    <CategoryWrapper>
      {
        area.map((item, index) => {
          return (
            <div className="section" key={item}>
              <h2 className="title">{item}</h2>
              {showItem(item, index)}
            </div>
          )
        })
      }
    </CategoryWrapper>
  )
})
