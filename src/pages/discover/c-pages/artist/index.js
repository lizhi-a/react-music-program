import React, { memo } from 'react'

import WMArtistCategory from './c-cpns/artist-category'
import WMArtistList from './c-cpns/artist-list'

import { WMArtistWrapper } from './style'

export default memo(function WMArtist() {
  return (
    <WMArtistWrapper className="wrap-v2">
      <div className="content">
        <WMArtistCategory />
        <WMArtistList />
      </div>
    </WMArtistWrapper>
  )
})
