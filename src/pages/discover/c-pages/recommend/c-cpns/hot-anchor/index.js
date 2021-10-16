import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getArtistListAction } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils.js'

import { HotAnchorWrapper } from './style'

export default memo(function WMHotAnchor() {
  // redux hooks
  const dispatch = useDispatch()
  const { artistList = [], } = useSelector(state => ({
    artistList: state.getIn(['recommend', 'artistList']),
  }), shallowEqual)
  console.log(artistList)

  // other hooks
  useEffect(() => {
    dispatch(getArtistListAction(-1, -1))
  }, [dispatch])

  return (
    <HotAnchorWrapper>
      <h2 className="title">入驻歌手</h2>
      <hr />
      {
        artistList.map((item, index) => {
          return (
            <div className="anchor" key={item.id}>
              <img className='image' src={getSizeImage(item.picUrl, 62)} />
              <div className="info">
                <h3 className="name">{item.name}</h3>
                <p className="context text-nowrap">{item.alias[0]}</p>
              </div>
            </div>
          )
        })
      }

    </HotAnchorWrapper>
  )
})
