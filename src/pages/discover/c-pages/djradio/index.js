import React, { memo } from 'react'

import WMRadioCategory from './c-cpns/radio-category/index'
import WMRadioList from './c-cpns/radio-list/index'
import WMRadioRecommend from './c-cpns/radio-recommend/index'

import { DjRadioWrapper } from './style'

export default memo(function WMDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2" >
      <WMRadioCategory />
      <WMRadioList />
      <WMRadioRecommend />
    </DjRadioWrapper>
  )
})
