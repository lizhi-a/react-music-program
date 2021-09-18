import React, { memo } from 'react'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'

export default memo(function WMPlayer() {
  return (
    <PlayerWrapper >
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>playerInfo</h2>
          <h2>playerContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>simiplayList</h2>
          <h2>simiSongs</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
