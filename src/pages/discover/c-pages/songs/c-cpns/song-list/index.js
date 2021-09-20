import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  getSongListAction,
} from '../../store/actionCreators'
import WMSongsCover from '@/components/songs-cover'
import { TOTAL_SONG_LIST_PAGE_NUM } from '@/common/constants'

import { Pagination } from 'antd';
import { SongWrapper } from './style'

export default memo(function WMSongList() {

  // other hooks
  const dispatch = useDispatch()
  const { songList } = useSelector(state => ({
    songList: state.getIn(['songs', 'songList'])
  }), shallowEqual)
  // console.log(songList)

  // redux hooks
  useEffect(() => {
    dispatch(getSongListAction())
  }, [dispatch])

  // function
  // let newSongsArray = ([...songList]).slice(0, TOTAL_SONG_LIST_PAGE_NUM)
  function changeCurrentPage(e) {
    // newSongsArray = songList.slice(
    //   (e - 1) * TOTAL_SONG_LIST_PAGE_NUM,
    //   e * TOTAL_SONG_LIST_PAGE_NUM)
    // console.log(e, newSongsArray)
    // dispatch(getSongListAction())
  }

  return (
    <SongWrapper>
      <div className="song-list">
        {
          songList.map((item, index) => {
            let songObj = {
              ...item,
              picUrl: item.coverImgUrl,
              copywriter: item.creator.nickname,
              right: '5px',
              left: '5px'
            }
            return (
              <WMSongsCover
                key={item.id} info={songObj}></WMSongsCover>
            )
          })
        }
      </div>
      <Pagination
        className="paging"
        defaultCurrent={1}
        defaultPageSize={TOTAL_SONG_LIST_PAGE_NUM}
        total={songList.length}
        onChange={changeCurrentPage()}
      />
    </SongWrapper>
  )
})
