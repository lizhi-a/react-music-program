import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import WMArtistDetail from './c-cpns/artist-detail'
import { getArtistListAction } from '../../store/actionCreators'
import WMThemeHeaderAlbum from '@/components/theme-header-album'

import { ArtistListWrapper } from './style'

export default memo(function WMArtistList() {

  // redux hooks
  const dispatch = useDispatch()
  const {
    artistList = [],
    currentArea = '',
    currentSingerType = ''
  } = useSelector(state => ({
    artistList: state.getIn(['artist', 'artistList']),
    currentArea: state.getIn(['artist', 'currentArea']),
    currentSingerType: state.getIn(['artist', 'currentSingerType'])
  }), shallowEqual)
  const title = currentArea + currentSingerType

  // other hooks
  useEffect(() => {
    dispatch(getArtistListAction(-1, -1))
  }, [dispatch])

  return (
    <ArtistListWrapper>
      <WMThemeHeaderAlbum title={title} />
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            let info = {
              name: item.name,
              img: item.picUrl,
            }
            if (index <= 9) {
              return (
                <WMArtistDetail key={item.name} info={info} index={index} />
              )
            }
            else return ''
          })
        }
      </div>
      <hr />
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            let info = {
              name: item.name,
              img: item.picUrl,
            }
            if (index > 9) {
              return (
                <WMArtistDetail key={info.name} info={info} index={index} />
              )
            }
            else return ''
          })
        }
      </div>

    </ArtistListWrapper>
  )
})
