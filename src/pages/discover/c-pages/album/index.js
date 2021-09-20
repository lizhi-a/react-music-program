import React, { memo } from 'react'

import WMHotAblum from './c-cpns/hot-album'
import WMTotalAlbum from './c-cpns/total-album'

import { AblumWrapper } from './style'

export default memo(function WMAlbum() {

  return (
    <AblumWrapper className="wrap-v2">
      <WMHotAblum />
      <WMTotalAlbum />
    </AblumWrapper>
  )
})
