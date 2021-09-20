import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import WMThemeHeaderAlbum from '@/components/theme-header-album'
import WMAlbumCover from '@/components/album-cover'
import { HOT_ALBUM_NUM } from '@/common/constants'

import { HotAlbumWrapper } from './style'
import { getHotAlbumsAction } from '../../store/actionCreators'

export default memo(function WMHotAblum() {

  // redux hooks
  const dispatch = useDispatch()
  const { hotAlbums } = useSelector((state) => ({
    hotAlbums: state.getIn(['album', 'hotAlbums'])
  }), shallowEqual)
  // console.log('hotAlbums',hotAlbums)

  // other hooks
  useEffect(() => {
    dispatch(getHotAlbumsAction(HOT_ALBUM_NUM))
  }, [dispatch])

  return (
    <HotAlbumWrapper>
      <WMThemeHeaderAlbum title="热门新碟" isMore={false} />
      <div className="album-list">
        {
          // console.log('html中',hotAlbums)
          hotAlbums.map((item, index) => {
            if (index < 10) {
              const info = { ...item, picUrl: item.blurPicUrl }
              // console.log(info);
              return (
                <WMAlbumCover key={item.id} info={info}></WMAlbumCover>
              )
            }
            return ''
          })
        }
      </div>
    </HotAlbumWrapper>
  )
})
