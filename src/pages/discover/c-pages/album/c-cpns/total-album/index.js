import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import WMThemeHeaderAlbum from '@/components/theme-header-album'
import { getTotalAlbumsAction } from '../../store/actionCreators'
import { TOTAL_ALBUM_PAGE_NUM } from '@/common/constants'
import WMAlbumCover from '@/components/album-cover'

import { Pagination } from 'antd';
import { TopAlbumWrapper } from './style'


export default memo(function WMTotalAlbum() {

  // other-hooks
  const dispatch = useDispatch()
  const { totalAlbums } = useSelector((state) => ({
    totalAlbums: state.getIn(['album', 'totalAlbums'])
  }), shallowEqual)

  // redux-hooks
  useEffect(() => {
    dispatch(getTotalAlbumsAction())
  }, [dispatch])

  // function
  // let newAlbumArray = ([...totalAlbums]).slice(0, TOTAL_ALBUM_PAGE_NUM)
  
  function changeCurrentPage(e) {
    // console.log(e)
    // newAlbumArray = totalAlbums.slice((e - 1) * TOTAL_ALBUM_PAGE_NUM, e * TOTAL_ALBUM_PAGE_NUM)
    // console.log(newAlbumArray)
  }

  return (
    <TopAlbumWrapper>
      <WMThemeHeaderAlbum title="全部新碟" isMore={false}
        keywords={['全部', '华语', '欧美', '韩国', '日本']} />
      <div className="album-list">
        {
          totalAlbums.map((item, index) => {
            const info = { ...item, picUrl: item.blurPicUrl }
            return (
              <WMAlbumCover key={item.id} info={info}></WMAlbumCover>
            )
          })
        }
      </div>
      <Pagination
        className="paging"
        defaultCurrent={1}
        defaultPageSize={TOTAL_ALBUM_PAGE_NUM}
        total={totalAlbums.length}
        onChange={e => changeCurrentPage(e)}
      />

    </TopAlbumWrapper>
  )
})
