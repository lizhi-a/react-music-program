import React, { memo } from 'react'

import WMRadioCategory from './c-cpns/radio-category/index'

import { DjRadioWrapper} from './style'

export default memo(function WMDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2" >
      <WMRadioCategory/>
    </DjRadioWrapper>
  )
})
