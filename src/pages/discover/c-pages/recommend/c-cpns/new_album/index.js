import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// import React, { memo, useEffect, useState } from 'react'
// import { getNewAlbums } from '@/services/recommend'

import { getNewAlbumAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import WMAlbumCover from '@/components/album-cover'
import WMThemeHeaderRCM from '@/components/theme-header-rcm'
import { AlbumWrapper } from './style'

import { NEW_ALBUM_PER_PAGE } from '@/common/constants'
// NEW_ALBUM_PAGE_NUM,

export default memo(function WMNewAlbum() {
  // 不用redux的方法
  // const [albums,setAlbums] = useState([])

  // useEffect(() => {
  //   getNewAlbums(10).then(res=>{
  //     console.log(res)
  //     setAlbums(res.albums)
  //   })
  // }, [])

  // redux hooks
  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  const pageRef = useRef()
  useEffect(() => {
    // 执行dispatch里的函数
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <WMThemeHeaderRCM title="新碟上架" />
      {/* <div>
        {
          albums.map((item,index)=>{
            return <div>{item.name}</div>
          }) 
        }
      </div> */}
      <div className="content">
        <button className="arrow arrow-left sprite_02"
          onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map((item, index) => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * NEW_ALBUM_PER_PAGE,
                        (item + 1) * NEW_ALBUM_PER_PAGE).map(iten => {
                          return <WMAlbumCover key={iten.id}
                            info={iten} size={100} width={118} bgp='-570px'
                          />
                        })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
          onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
