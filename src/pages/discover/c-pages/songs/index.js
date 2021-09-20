import React, { memo } from 'react'

import WMSongHeader from './c-cpns/song-header'
import WMSongList from './c-cpns/song-list'

import { SongsWrapper } from './style'

export default memo(function WMSongs() {
  return (
    <SongsWrapper className="wrap-v2">
      <WMSongHeader />
      <WMSongList/>
    </SongsWrapper>
  )
})
