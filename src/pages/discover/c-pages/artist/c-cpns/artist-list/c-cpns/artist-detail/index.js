import React, { memo } from 'react'

import HYArtistItem from '@/components/artist-item'

import { ArtistDetailWrapper } from './style'

export default memo(function WMArtistDetail(props) {

  const { info,index } = props

  return (
    <ArtistDetailWrapper>
      <HYArtistItem info={info} index={index} />
    </ArtistDetailWrapper>
  )
})
